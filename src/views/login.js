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

  const signupOption = document.createElement("p");
  signupOption.textContent = "Or sign up with";
  signupOption.classList.add("signupOption");
  loginContainer.appendChild(signupOption);

  // Contenedor de botones del login

  //Contenedor con todos los botones
  const loginButtonsContainer = document.createElement("div");
  loginButtonsContainer.classList.add("loginButtonsContainer");
  loginContainer.appendChild(loginButtonsContainer);

  //Botón de Google
  const loginGoogle = document.createElement("button");
  loginGoogle.classList.add("loginGoogle");
  loginButtonsContainer.appendChild(loginGoogle);

  // Funcionalidad boton logInGoogle
  loginGoogle.addEventListener("click", logInGoogle);

  // Botón de Facebook
  const loginFacebook = document.createElement("button");
  loginFacebook.classList.add("loginFacebook");
  loginButtonsContainer.appendChild(loginFacebook);

  //Botón de Apple
  const loginApple = document.createElement("button");
  loginApple.classList.add("loginApple");
  loginButtonsContainer.appendChild(loginApple);

  //Olvidaste contraseña
  const forgetPassword = document.createElement("p");
  forgetPassword.textContent = "Forget Password";
  forgetPassword.classList.add("forgetPassword");
  loginContainer.appendChild(forgetPassword);

  return loginContainer;
}
