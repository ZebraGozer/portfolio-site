<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (empty($name || $email || $subject || $message)) {

    die();

} else {

    $mailTo = "";
    $headers = "From: " . $email;
    $onderwerp = "Portfolio Contact: " . $subject;

    mail($mailTo, $onderwerp, $message, $headers);

}

?>
