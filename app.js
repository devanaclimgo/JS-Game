let numeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela() {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

const verificarChute = document.querySelector('.botao-chute')

verificarChute.addEventListener('click', function() {
  console.log(numeroSecreto)
})

function gerarNumeroAleatorio() {
 return parseInt(Math.random() * 10 + 1)
}