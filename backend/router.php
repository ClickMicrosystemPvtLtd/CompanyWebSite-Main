<?php

declare(strict_types=1);

require __DIR__ . '/api_common.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

if ($method === 'OPTIONS') {
    jsonResponse(200, ['ok' => true]);
}

if ($method !== 'POST') {
    jsonResponse(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

if ($path === '/api/contact' || $path === '/api/contact.php') {
    sendContactInquiry();
} elseif ($path === '/api/training' || $path === '/api/training.php') {
    sendTrainingInquiry();
} else {
    jsonResponse(404, ['ok' => false, 'message' => 'Endpoint not found.']);
}
