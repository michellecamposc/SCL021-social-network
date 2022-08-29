
export function login() {
  //   const logo = document.createElement('img');
  //   logo.src = './src/images/';
  //   loginContainer.appendChild('logo');

  const logoTitle = document.createElement('h1');
  logoTitle.textContent = 'Go Wild Nature';
  logoTitle.classList.add('logoTitle');
  loginContainer.appendChild('logoTitle');

  const form = document.createElement('form');
  form.classList.add('form');
  loginContainer.appendChild('form');

  const inputMail = document.createElement('INPUT');
  inputMail.classList.add('inputLogin');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('placeholder', 'Email');
  form.appendChild('inputMail');

  const inputPassword = document.createAttribute('INPUT');
  inputPassword.classList.add('inputLogin');
  inputPassword.setAttribute('type', 'password');
  form.appendChild('inputPassword');

  const loginSubmit = document.createElement('input');
  loginSubmit.classList.add('loginSubmit');
  loginSubmit.setAttribute('type', 'submit');
  loginSubmit.setAttribute('name', 'Login');
  form.appendChild('loginSubmit');

  const signupOption = document.createElement('p');
  signupOption.textContent = 'Or sign up with';
  signupOption.classList.add('signupOption');
  loginContainer.appendChild('signupOption');

  //Contenedor de botones del login
  const loginButtonsContainer = document.createElement('div');
  loginButtonsContainer.classList.add('loginButtonsContainer');
  loginContainer.appendChild('loginButtonsContainer');

  const loginGoogle = document.createElement('button');
  //Imagen del boton
  loginGoogle.classList.add('loginGoogle');
  loginButtonsContainer.appendChild('loginGoogle');

  const loginFacebook = document.createElement('button');
  //Imagen del boton
  loginFacebook.classList.add('loginFacebook');
  loginButtonsContainer.appendChild('loginFacebook');

  const loginApple = document.createElement('button');
  //Imagen del boton
  loginApple.classList.add('loginApple');
  loginButtonsContainer.appendChild('loginApple');

  const forgetPassword = document.createElement('p');
  forgetPassword.textContent = 'Forget Password';
  forgetPassword.classList.add('forgetPassword');
  loginContainer.appendChild('forgetPassword');
}
