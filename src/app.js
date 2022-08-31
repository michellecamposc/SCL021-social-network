import { login } from './views/login';
import { createAccount } from './views/createAccount';

const routes = {
  '/login': login,
  '/createAccount': createAccount,
};

const rootDiv = document.getElementById('container');
rootDiv.innerHTML = routes[window.location.pathname];
