const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", togglePasswordVisibility);

submitButton.addEventListener("click", (e) => {
 e.preventDefault();
 const username = usernameInput.value.trim();
 const email = emailInput.value.trim();
 const password = passwordInput.value.trim();
 
 if (username === "") {
  document.getElementById("username-error").innerHTML = "Username is required";
 } else if (email === "") {
  document.getElementById("email-error").innerHTML = "Email is required";
 } else if (password === "") {
  document.getElementById("password-error").innerHTML = "Password is required";
 } else {
  // Submit the form
 }
});

function togglePasswordVisibility() {
 const passwordType = passwordInput.getAttribute("type");
 if (passwordType === "password") {
  passwordInput.setAttribute("type", "text");
  eyeIcon.classList.add("fa-eye-slash");
 } else {
  passwordInput.setAttribute("type", "password");
  eyeIcon.classList.remove("fa-eye-slash");
 }
}
