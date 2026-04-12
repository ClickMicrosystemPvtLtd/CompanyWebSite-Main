<?php

declare(strict_types=1);

function loadEnv(string $path): void
{
    if (!is_file($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '' || str_starts_with($trimmed, '#') || !str_contains($trimmed, '=')) {
            continue;
        }

        [$key, $value] = explode('=', $trimmed, 2);
        $key = trim($key);
        $value = trim($value);

        if ($key !== '' && getenv($key) === false) {
            putenv("{$key}={$value}");
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }
}

function envValue(string $key, ?string $default = null): ?string
{
    $value = getenv($key);
    return $value === false ? $default : $value;
}

function jsonResponse(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: ' . (envValue('ALLOWED_ORIGIN', '*') ?? '*'));
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function requireFields(array $payload, array $fields): ?string
{
    foreach ($fields as $field) {
        $value = trim((string)($payload[$field] ?? ''));
        if ($value === '') {
            return $field;
        }
    }

    return null;
}

function smtpRead($socket): string
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    return $response;
}

function smtpExpect($socket, array $allowedCodes): string
{
    $response = smtpRead($socket);
    $code = (int)substr($response, 0, 3);

    if (!in_array($code, $allowedCodes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }

    return $response;
}

function smtpCommand($socket, string $command, array $allowedCodes): string
{
    fwrite($socket, $command . "\r\n");
    return smtpExpect($socket, $allowedCodes);
}

function sendSmtpMail(string $subject, string $body, string $replyTo): void
{
    $host = envValue('SMTP_HOST', 'smtp.gmail.com');
    $port = (int)(envValue('SMTP_PORT', '587') ?? '587');
    $username = envValue('SMTP_USERNAME', '');
    $password = envValue('SMTP_PASSWORD', '');
    $from = envValue('MAIL_FROM', $username ?: envValue('MAIL_TO', '')); 
    $to = envValue('MAIL_TO', 'ayush@clickmicrosystem.in');
    $useTls = strtolower((string)envValue('SMTP_USE_TLS', 'true')) === 'true';

    if ($username === '' || $password === '' || $from === '' || $to === '') {
        throw new RuntimeException('SMTP configuration is incomplete.');
    }

    $socket = stream_socket_client("tcp://{$host}:{$port}", $errno, $errstr, 30);
    if ($socket === false) {
        throw new RuntimeException("SMTP connection failed: {$errstr} ({$errno})");
    }

    stream_set_timeout($socket, 30);

    try {
        smtpExpect($socket, [220]);
        smtpCommand($socket, 'EHLO localhost', [250]);

        if ($useTls) {
            smtpCommand($socket, 'STARTTLS', [220]);
            $cryptoEnabled = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            if ($cryptoEnabled !== true) {
                throw new RuntimeException('Unable to enable TLS encryption for SMTP.');
            }
            smtpCommand($socket, 'EHLO localhost', [250]);
        }

        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($username), [334]);
        smtpCommand($socket, base64_encode($password), [235]);
        smtpCommand($socket, 'MAIL FROM:<' . $from . '>', [250]);
        smtpCommand($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        smtpCommand($socket, 'DATA', [354]);

        $headers = [
            'From: ' . $from,
            'To: ' . $to,
            'Reply-To: ' . $replyTo,
            'Subject: ' . $subject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
        ];

        $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n.", "\n..", $body) . "\r\n.";
        fwrite($socket, $message . "\r\n");
        smtpExpect($socket, [250]);
        smtpCommand($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}
