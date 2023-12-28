const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const messages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Você é beleza, luz e força.",
  "Dias nublados guardam o sol atrás deles.",
  "Um dia bonito começa com um barril de esperança e um café de otimismo.",
  "Permita que o seu corpo descanse.",
  "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.",
  "Tenha coragem para se tornar aquilo que sonha.",
  "É tão bonita a força que você emana.",
  "Resista àqueles dias que querem esconder tudo de bom que já fizemos até hoje.",
  "Essa mensagem tem um único objetivo: te ver sorrindo."
];

document.addEventListener('keydown', function(e) {
  if (e.key == "Enter") {
    newMessage();
  }
})


const Biscoito = document.querySelector("#biscoito").addEventListener('click', function(e) {
  e.preventDefault();
  newMessage();
  
});

const BiscoitoAberto = document.querySelector("button").addEventListener('click', function(e) {
  toggleScreen();
});


function newMessage() {
  toggleScreen();
    document.querySelector(".message").innerHTML = randomMessage(messages.length);
}

function randomMessage(max) {
  const message = Math.floor(Math.random() * max);
  return messages[message];
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}




