const loginContainer = document.getElementById('container');
export function createAccount() {
  const logo = document.createElement('img');
  logo.src = './src/images/';
  loginContainer.appendChild('logo');

  const logoTitle = document.createElement('h1');
  logoTitle.textContent = 'Go Wild Nature';
  logoTitle.classList.add('logoTitle');
  loginContainer.appendChild('logoTitle');
}
