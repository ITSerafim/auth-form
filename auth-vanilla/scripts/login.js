import { api } from "./api.js";
import { view, validate } from "./notification.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submit = document.querySelector("#submit");

async function login(event) {
  event.preventDefault();

  const body = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  
  if(body.email === '' || body.password === ''){
    return validate('Email или пароль не были заполнены!')
  }

  const res = await api.post(body, "auth/login");
  const data = await res.json()

  view(data, 'Аутентификация успешно пройдена')

  emailInput.value = null;
  passwordInput.value = null;
}

submit.onclick = login;
