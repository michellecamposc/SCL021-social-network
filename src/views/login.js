// eslint import/no-unresolved: [2, { ignore: ['gstatic'] }]

import { logInGoogle } from "./components/firebase.js";

export function login() {
  //Contenedor principal
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("loginContainer");
 
  //Sección del logo
  const headerLogin = document.createElement("div");
  headerLogin.classList.add("headerLogin");
  loginContainer.appendChild(headerLogin);

  //Logo
  const loginLogo = document.createElement("div");
  // logo.setAttribute("src", "../images/logoblanco.png");
  loginLogo.classList.add("loginLogo");
  headerLogin.appendChild(loginLogo);

  //Título
  const logoTitle = document.createElement("h1");
  logoTitle.textContent = "Go Wild Nature";
  logoTitle.classList.add("logoTitle");
  headerLogin.appendChild(logoTitle);

  //Formulario del login
  const form = document.createElement("form");
  form.classList.add("form");
  loginContainer.appendChild(form);

  //Input mail
  const inputMail = document.createElement("input");
  inputMail.classList.add("inputMail");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("placeholder", "   Email");
  form.appendChild(inputMail);

  //Input contraseña
  const inputPassword = document.createElement("input");
  inputPassword.classList.add("inputPassword");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("placeholder", "   Password");
  form.appendChild(inputPassword);

  //Botón de login
  const loginSubmit = document.createElement("input");
  loginSubmit.classList.add("loginSubmit");
  loginSubmit.setAttribute("type", "submit");
  loginSubmit.setAttribute("value", "Login");
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
  loginGoogleButton.classList.add("loginButtons");
  loginButtonsContainer.appendChild(loginGoogleButton);

  //Imagen botón de Google ****
  const googleBtn = document.createElement("img");
  googleBtn.classList.add("googleImgButton");
  googleBtn.setAttribute("src", "../images/googlelogo.png");
  loginGoogleButton.appendChild(googleBtn);

  // Funcionalidad boton logInGoogle
  loginGoogleButton.addEventListener("click", logInGoogle);

  // Botón de Meta
  const loginMetaButton = document.createElement("button");
  loginMetaButton.classList.add("loginButtons");
  loginButtonsContainer.appendChild(loginMetaButton);

  //Imagen botón de Meta ****
  const MetaBtn = document.createElement("img");
  MetaBtn.classList.add("MetaImgButton");
  MetaBtn.setAttribute("src", "../images/fblogo.png");
  loginMetaButton.appendChild(MetaBtn);

  //Botón de Apple
  const loginAppleButton = document.createElement("button");
  loginAppleButton.classList.add("loginButtons");
  loginButtonsContainer.appendChild(loginAppleButton);

  //Imagen botón de Apple ****
  const appleBtn = document.createElement("img");
  appleBtn.classList.add("appleImgButton");
  appleBtn.setAttribute("src", "../images/applelogo.png");
  loginAppleButton.appendChild(appleBtn);

  // Create account y olvidaste contraseña

  const accountAndPasswordContainer = document.createElement("div");
  accountAndPasswordContainer.classList.add("accountAndPasswordContainer");
  loginContainer.appendChild(accountAndPasswordContainer);

  const createAccount = document.createElement("a");
  createAccount.textContent = "Create account";
  createAccount.href = "#/createAccount"; 
  createAccount.classList.add("accountAndPassword");
  accountAndPasswordContainer.appendChild(createAccount);

  const verticalLine = document.createElement("div");
  verticalLine.classList.add("verticalLine");
  accountAndPasswordContainer.appendChild(verticalLine);

  const forgetPassword = document.createElement("p");
  forgetPassword.textContent = "Forget Password";
  forgetPassword.classList.add("accountAndPassword");
  accountAndPasswordContainer.appendChild(forgetPassword);

  // Aquí se insertará el contenido segun la página en que nos encontremos//*** 
/*const content = document.createElement("content");
content.id = content;
loginContainer.appendChild(content);*/


  return loginContainer;
}
