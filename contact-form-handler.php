<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

function clean($key) {
    return isset($_POST[$key])
        ? trim(strip_tags($_POST[$key]))
        : '';
}

$firstName = clean('firstName');
$lastName  = clean('lastName');
$email     = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone     = clean('phone');
$service   = clean('service');
$message   = clean('message');

if (!$firstName || !$lastName || !$email || !$message) {
    http_response_code(422);
    echo json_encode(['error' => 'Please fill in all required fields.']);
    exit;
}

$to      = 'info@akasstudio.co.za';
$subject = "New enquiry from website";
$body    = "
  You have received a new message from your website contact form:\n\n
  Name: {$firstName} {$lastName}\n
  Email: {$email}\n
  Phone: {$phone}\n
  Service Interested In: {$service}\n\n
  Message:\n{$message}\n
";

$headers  = "From: Akas Studio Website <info@akasstudio.co.za>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => 'Thank you! Your message has been sent.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Sorry, something went wrong. Please try again later.']);
}
