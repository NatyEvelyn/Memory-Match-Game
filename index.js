const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");
//function validateInput(){}
//console.log(event.target.value);
/*através do evento, conseguimos recuperar o target, que seria o input.
Depois de pegar o input com target, usamos value para pegar o valor,
que seria o que está sendo digitado.*/
/*Acessamos event e target, mas dá para fazer direto
através da object destructure = desestruturação de objetos */

const validateInput = ({ target }) => {
  if (target.value.length > 1) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("player", input.value);
  window.location = "./game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
