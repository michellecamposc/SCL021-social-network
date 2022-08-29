// Este es el punto de entrada de tu aplicacion

import { login } from './views/login.js';

login();
const loginContainer = document.getElementById('container');

function firstPage(){
    loginContainer.innerHTML(login());
}