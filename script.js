// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Select the RSVP form and confirmation message elements
  const rsvpForm = document.getElementById("rsvpForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // Event listener for form submission
  rsvpForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form inputs
    const email = document.getElementById("email").value;
    const attendance = document.getElementById("attendance").value;

    // Check if the user is attending
    if (attendance === "yes") {
      // Display the confirmation message with a party emoji
      confirmationMessage.innerHTML =
        "<p>🎉 Yay! Looking forward to partying with you, " + email + "!</p>";
      confirmationMessage.style.display = "block"; // Show the confirmation message
    } else {
      // Display a different message if the user is not attending
      confirmationMessage.innerHTML =
        "<p>😢 We will miss you, " + email + "!</p>";
      confirmationMessage.style.display = "block"; // Show the confirmation message
    }
  });
});
