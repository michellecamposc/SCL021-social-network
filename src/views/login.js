// eslint import/no-unresolved: [2, { ignore: ['gstatic'] }]

import { logInGoogle } from "../firebase.js";

export function login() {
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("loginContainer");

  const headerLogin = document.createElement("div");
  headerLogin.classList.add("headerLogin");
  loginContainer.appendChild(headerLogin);

  const logo = document.createElement("img");
  logo.setAttribute("src", "../images/logoblanco.png");
  logo.classList.add("logoBlanco");
  headerLogin.appendChild(logo);

  const logoTitle = document.createElement("h1");
  logoTitle.textContent = "Go Wild Nature";
  logoTitle.classList.add("logoTitle");
  headerLogin.appendChild(logoTitle);

  const form = document.createElement("form");
  form.classList.add("form");
  loginContainer.appendChild(form);

  const inputMail = document.createElement("input");
  inputMail.classList.add("inputMail");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("placeholder", "Email");
  form.appendChild(inputMail);

  const inputPassword = document.createElement("input");
  inputPassword.classList.add("inputPassword");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("placeholder", "Password");
  form.appendChild(inputPassword);

  const loginSubmit = document.createElement("input");
  loginSubmit.classList.add("loginSubmit");
  loginSubmit.setAttribute("type", "submit");
  loginSubmit.setAttribute("name", "Login");
  form.appendChild(loginSubmit);

  //Sección de Sign up
  const signUpContainer = document.createElement("div");
  signUpContainer.classList.add("signUpContainer");
  loginContainer.appendChild(signUpContainer);

  const leftLine = document.createElement("div");
  leftLine.classList.add("signUpLines");
  signUpContainer.appendChild(leftLine);

  const signupOption = document.createElement("p");
  signupOption.textContent = "Or sign up with";
  signupOption.classList.add("signupOption");
  signUpContainer.appendChild(signupOption);

  const rightLine = document.createElement("div");
  rightLine.classList.add("signUpLines");
  signUpContainer.appendChild(rightLine);

  // Sección de botones del login

  //Contenedor con todos los botones
  const loginButtonsContainer = document.createElement("div");
  loginButtonsContainer.classList.add("loginButtonsContainer");
  loginContainer.appendChild(loginButtonsContainer);

  //Botón de Google
  const loginGoogleButton = document.createElement("button");
  loginGoogleButton.classList.add("loginGoogleButton");
  loginButtonsContainer.appendChild(loginGoogleButton);

  // Funcionalidad boton logInGoogle
  loginGoogleButton.addEventListener("click", logInGoogle);

  // Botón de Facebook
  const loginFacebookButton = document.createElement("button");
  loginFacebookButton.classList.add("loginFacebookButton");
  loginButtonsContainer.appendChild(loginFacebookButton);

  //Botón de Apple
  const loginAppleButton = document.createElement("button");
  loginAppleButton.classList.add("loginAppleButton");
  loginButtonsContainer.appendChild(loginAppleButton);

  // Create account y olvidaste contraseña

  const accountAndPasswordContainer = document.createElement("div");
  accountAndPasswordContainer.classList.add("accountAndPasswordContainer");
  loginContainer.appendChild(accountAndPasswordContainer);

  const createAccount = document.createElement("p");
  createAccount.textContent = "Create account";
  createAccount.classList.add("accountAndPassword");
  accountAndPasswordContainer.appendChild(createAccount);

  const verticalLine = document.createElement("div");
  verticalLine.classList.add("verticalLine");
  accountAndPasswordContainer.appendChild(verticalLine);

  const forgetPassword = document.createElement("p");
  forgetPassword.textContent = "Forget Password";
  forgetPassword.classList.add("accountAndPassword");
  accountAndPasswordContainer.appendChild(forgetPassword);

  return loginContainer;
}
