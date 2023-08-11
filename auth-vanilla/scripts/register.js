import { api } from "./api.js";
import { view, validate } from "./notification.js";

const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const submit = document.querySelector("#submit");

async function register(event) {

  event.preventDefault();

  const body = {
    email: emailInput.value,
    password: passwordInput.value,
    name: nameInput.value
  };

  if(body.email === '' || body.password === ''){
    return validate('Email или пароль не были заполнены!')
  }

  const res = await api.post(body, "auth/registration");
  const data = await res.json()

  view(data, `Пользователь ${body.name} успешно зарегистрирован!`)

  emailInput.value = null;
  passwordInput.value = null;
  nameInput.value = null;

}

submit.onclick = register;
