const userPassword = document.querySelector("#user_password");
const userConfirmPassword = document.querySelector("#user_confirm_password");

function validatePassword() {
  if (userPassword.value !== userConfirmPassword.value) {
    userConfirmPassword.setCustomValidity("Passwords do not match");
    return false;
  }
}
