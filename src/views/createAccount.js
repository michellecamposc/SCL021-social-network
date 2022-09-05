export function createAccount() {
  const registerContainer = document.createElement("div");
  registerContainer.classList.add("registerContainer");

  const headerRegister = document.createElement("div");
  headerRegister.classList.add("headerRegister");
  registerContainer.appendChild(headerRegister);

  const backArrow = document.createElement("img");
  backArrow.classList.add("backArrow");
  backArrow.setAttribute("src", "../images/backArrow.png");
  headerRegister.appendChild(backArrow);

  const registerTitle = document.createElement("h1");
  registerTitle.textContent = "Create account";
  registerTitle.classList.add("registerTitle");
  headerRegister.appendChild(registerTitle);

  const registerForm = document.createElement("registerForm");
  registerForm.classList.add("registerForm");
  registerContainer.appendChild(registerForm);

  const inputNameRegister = document.createElement("input");
  inputNameRegister.classList.add("inputNameRegister");
  inputNameRegister.setAttribute("type", "text");
  inputNameRegister.setAttribute("placeholder", "Full name");
  registerForm.appendChild(inputNameRegister);

  const inputMailRegister = document.createElement("input");
  inputMailRegister.classList.add("inputMail");
  inputMailRegister.setAttribute("type", "email");
  inputMailRegister.setAttribute("placeholder", "   Email");
  registerForm.appendChild(inputMailRegister);

  const inputPasswordRegister = document.createElement("input");
  inputPasswordRegister.classList.add("inputPassword");
  inputPasswordRegister.setAttribute("type", "password");
  inputPasswordRegister.setAttribute("placeholder", "   Password");
  registerForm.appendChild(inputPasswordRegister);

  const checkBoxContainer = document.createElement("div");
  checkBoxContainer.classList.add("checkBoxContainer");
  registerForm.appendChild(checkBoxContainer);

  const checkBox = document.createElement("input");
  checkBox.classList.add("checkBox");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("value", "conditionCheckbox");
  checkBoxContainer.appendChild(checkBox);

  const condition = document.createElement("p");
  condition.classList.add("condition");
  condition.textContent = "Agreed to terms and conditions";
  checkBoxContainer.appendChild(condition);

  const singUp = document.createElement("input");
  singUp.classList.add("loginSubmit");
  singUp.setAttribute("type", "submit");
  singUp.setAttribute("value", "Sing up");
  registerForm.appendChild(singUp);

  return createAccount;
}
