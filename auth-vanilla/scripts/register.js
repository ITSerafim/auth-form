import { api } from "./api.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submit = document.querySelector("#submit");

async function register() {
  const body = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  await api.post(body, "register");
}

submit.onclick = register;
