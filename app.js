let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número de 1 a 10'

const verificarChute = document.querySelector('.botao-chute')

verificarChute.addEventListener('click', function() {
  console.log('O botão foi clicado!')
})