let adminPassword = "Kidus2Kidus277an@"; // Initial admin password

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Handle file upload and form submission for payment proof
    const fileInput = document.getElementById("payment-proof");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // Simulate file upload process
    alert("Payment proof uploaded successfully!");

    // Display the registration form after successful payment proof upload
    document.getElementById("registration-section").style.display = "block";
  });

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Handle registration form submission
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const address = document.getElementById("address").value;

    if (!fullName || !email || !phoneNumber || !address) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Simulate registration process
    alert("Registration submitted successfully!");

    // Additional logic to handle the registration can be added here
  });

document
  .getElementById("admin-login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredPassword = document.getElementById("admin-password").value;

    if (enteredPassword === adminPassword) {
      alert("Admin login successful!");
      document.getElementById("course-upload-section").style.display = "block";
      document.getElementById("admin-login-form").style.display = "none";
    } else {
      alert("Incorrect password. Please try again.");
    }
  });

document
  .getElementById("course-upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Handle file upload for course material
    const courseFileInput = document.getElementById("course-file");
    const courseFile = courseFileInput.files[0];

    if (!courseFile) {
      alert("Please select a course file to upload.");
      return;
    }

    // Simulate course upload process
    alert("Course uploaded successfully!");

    // Additional logic to handle the course upload can be added here
  });

document
  .getElementById("change-password-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const newPassword = document.getElementById("new-password").value;

    if (newPassword) {
      adminPassword = newPassword;
      alert("Password changed successfully!");
    } else {
      alert("Please enter a new password.");
    }
  });
