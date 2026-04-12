<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap.php';
loadEnv(__DIR__ . '/.env');

function getJsonPayload(): array
{
    $rawBody = file_get_contents('php://input');
    $payload = json_decode($rawBody ?: '', true);

    if (!is_array($payload)) {
        jsonResponse(400, ['ok' => false, 'message' => 'Invalid JSON payload.']);
    }

    return $payload;
}

function validateEmailField(string $value): string
{
    $email = trim($value);

    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        jsonResponse(400, ['ok' => false, 'message' => 'Please enter a valid email address.']);
    }

    return $email;
}

function validateMobileNumberField(string $value): string
{
    $mobileNumber = trim($value);
    $normalized = preg_replace('/\D+/', '', $mobileNumber) ?? '';

    if (
        $mobileNumber === ''
        || !preg_match('/^\+?[0-9\s\-()]{10,20}$/', $mobileNumber)
        || strlen($normalized) < 10
        || strlen($normalized) > 15
    ) {
        jsonResponse(400, ['ok' => false, 'message' => 'Please enter a valid mobile number.']);
    }

    return $mobileNumber;
}

function buildContactMail(array $payload): array
{
    $missing = requireFields($payload, ['name', 'email', 'mobileNumber', 'organization', 'inquiryType', 'message']);
    if ($missing !== null) {
        jsonResponse(400, ['ok' => false, 'message' => "Missing field: {$missing}"]);
    }

    $email = validateEmailField((string)$payload['email']);
    $mobileNumber = validateMobileNumberField((string)$payload['mobileNumber']);

    $subject = 'Website Contact Inquiry - ' . trim((string)$payload['inquiryType']);
    $body = "New contact inquiry\n\n"
        . 'Name: ' . trim((string)$payload['name']) . "\n"
        . 'Email: ' . $email . "\n"
        . 'Mobile Number: ' . $mobileNumber . "\n"
        . 'Organization: ' . trim((string)$payload['organization']) . "\n"
        . 'Inquiry Type: ' . trim((string)$payload['inquiryType']) . "\n\n"
        . "Message:\n"
        . trim((string)$payload['message']) . "\n";

    return [$subject, $body, $email];
}

function buildTrainingMail(array $payload): array
{
    $missing = requireFields($payload, ['name', 'email', 'mobileNumber', 'organization', 'trainingNeed', 'message']);
    if ($missing !== null) {
        jsonResponse(400, ['ok' => false, 'message' => "Missing field: {$missing}"]);
    }

    $email = validateEmailField((string)$payload['email']);
    $mobileNumber = validateMobileNumberField((string)$payload['mobileNumber']);

    $subject = 'Website Training Inquiry';
    $body = "New training inquiry\n\n"
        . 'Name: ' . trim((string)$payload['name']) . "\n"
        . 'Email: ' . $email . "\n"
        . 'Mobile Number: ' . $mobileNumber . "\n"
        . 'Organization: ' . trim((string)$payload['organization']) . "\n"
        . 'Training Need: ' . trim((string)$payload['trainingNeed']) . "\n\n"
        . "Message:\n"
        . trim((string)$payload['message']) . "\n";

    return [$subject, $body, $email];
}

function sendContactInquiry(): void
{
    $payload = getJsonPayload();
    [$subject, $body, $replyTo] = buildContactMail($payload);

    try {
        sendSmtpMail($subject, $body, $replyTo);
    } catch (Throwable $exception) {
        jsonResponse(500, ['ok' => false, 'message' => 'Unable to send email: ' . $exception->getMessage()]);
    }

    jsonResponse(200, ['ok' => true, 'message' => 'Email sent successfully.']);
}

function sendTrainingInquiry(): void
{
    $payload = getJsonPayload();
    [$subject, $body, $replyTo] = buildTrainingMail($payload);

    try {
        sendSmtpMail($subject, $body, $replyTo);
    } catch (Throwable $exception) {
        jsonResponse(500, ['ok' => false, 'message' => 'Unable to send email: ' . $exception->getMessage()]);
    }

    jsonResponse(200, ['ok' => true, 'message' => 'Email sent successfully.']);
}
