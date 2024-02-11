<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $favoriteDish = $_POST['favorite-dish'];
    $giftPreference = $_POST['comment'];
    $why = $_POST['why'];

    // Set recipient email address
    $to = "kondziu989@gmail.com.com";
    // Set email subject
    $subject = "New Valentine's Application";

    // Email content
    $message = "Name: $name\n";
    $message .= "Favorite Dish: $favoriteDish\n";
    $message .= "Gift Preference: $giftPreference\n";
    $message .= "Reason: $why\n";

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the form page with a success message
    header("Location: form.html?success=true");
    exit;
}
?>
