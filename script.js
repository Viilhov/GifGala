document.addEventListener("DOMContentLoaded", function () {
  const rsvpForm = document.getElementById("rsvpForm");
  const confirmationMessage = document.getElementById("confirmationMessage");
  const body = document.body;

  rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const attendance = document.getElementById("attendance").value;

    if (attendance === "yes") {
      confirmationMessage.innerHTML =
        "<p>🎉 Yay! Looking forward to partying with you, " + email + "!</p>";

      confirmationMessage.style.display = "block";
      body.classList.add("attending-background");
    } else {
      confirmationMessage.innerHTML =
        "<p>😢 We will miss you, " + email + "!</p>";
      confirmationMessage.style.display = "block";
      body.classList.add("not-attending-background");
    }
  });
});
