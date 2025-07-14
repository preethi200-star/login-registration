const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const formTitle = document.getElementById("formTitle");

showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  formTitle.textContent = "Register";
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Login";
});

// Dummy authentication logic (in real apps use server & database)
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registered successfully!");
  showLogin.click();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful!");
});
