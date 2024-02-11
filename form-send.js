(function(){
  emailjs.init(
    "fHLYB2c2D1p6KYip0"
  );
})();

// Add submit event listener to the form
document.getElementById('valentine-form').addEventListener('submit', function(event) {

  var submitButton = document.getElementById('submit-button');
  submitButton.disabled = true;
  submitButton.value = 'Wysyłanie...'; 
  setTimeout(function() {
    submitButton.disabled = false; 
    submitButton.value = 'Wyślij wniosek'; 
  }, 5000);

  event.preventDefault();

  // Get form data
  var formData = new FormData(this);

  // Convert form data to JSON object
  var formObject = {};
  formData.forEach(function(value, key){
    formObject[key] = value;
  });

  emailjs.send("service_valentine_2024", "template_6l8qifg", formObject)
    .then(function(response) {
      console.log("Email sent successfully!", response);
      // Optionally, display a success message to the user
      window.location.href = './thank-you.html';
    }, function(error) {
      console.error("Email sending failed:", error);
      // Optionally, display an error message to the user
      alert("Wystąpił błąd podczas wysyłania wniosku. Spróbuj ponownie później.");
    });
});
