const button = document.getElementById('gerar');
const conselho = document.getElementById('conselho');
const traduzir = document.getElementById('traduzir');

function createAdvice(advice) {
    conselho.innerHTML = advice;
  }

function newAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((json) => {
    createAdvice(json.slip.advice);
  });

  button.innerText = 'Pedir outro'
}

button.addEventListener('click', newAdvice);

//Fazendo o evento para mudar os tema de dark para White.

const change = document.getElementById('change-theme');
const img = document.getElementById('img');
const background = document.getElementsByTagName('body')[0];
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];

function changeTheme(salvar) {
  background.classList.toggle('theme-withe');
  header.classList.toggle('withe-header');
  main.classList.toggle('withe');
  button.classList.toggle('withe');
  change.classList.toggle('change-color');

  if(background.classList.contains('theme-withe')) {
    img.src = './imgs/lua.png';
  } else img.src = './imgs/sol.png';
}


change.addEventListener('click', changeTheme);
