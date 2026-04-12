<?php

declare(strict_types=1);

require __DIR__ . '/../backend/api_common.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    jsonResponse(200, ['ok' => true]);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    jsonResponse(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

sendTrainingInquiry();
