// Script for login page

// Script for registration page
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from input fields
    let newUsername = document.getElementById("new-username").value.trim();
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Validate username
    if (newUsername.length < 5) {
      alert("Username must be at least 5 characters long");
      return false;
    }

    // Validate password
    const passwordRequirements =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{16,}$/;

    if (!passwordRequirements.test(newPassword)) {
      alert(
        "Password must be at least 16 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return false;
    }

    // Validate confirm password
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    // Store credentials (for demonstration; do NOT store passwords in plaintext in a real application)
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword); // Remember, do NOT store passwords like this in production!

    // If all validations pass
    alert("Registration successful!");
    return true;
  });
