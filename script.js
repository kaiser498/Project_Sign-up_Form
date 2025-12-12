const userPassword = document.querySelector("#user_password");
const userConfirmPassword = document.querySelector("#user_confirm_password");
const passwordDonotMatch = document.querySelector(".password_donot_match");
const submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", (event) => {
  if (userPassword.value !== userConfirmPassword.value) {
    event.preventDefault();
    passwordDonotMatch.textContent = "Error: Passwords do not match!";
    userConfirmPassword.focus();
  }
});

userConfirmPassword.addEventListener("input", () => {
  if (userPassword.value === userConfirmPassword.value) {
    passwordDonotMatch.textContent = "";
  }
});
