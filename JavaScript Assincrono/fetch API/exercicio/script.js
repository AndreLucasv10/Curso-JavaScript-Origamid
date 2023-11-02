const btn = document.querySelector('#enviar')

btn.addEventListener('click', buttonCep)

function buttonCep(event){
  event.preventDefault()
  const valor = document.querySelector('input').value
  fetch(`https://viacep.com.br/ws/${valor}/json/`)
  .then(response => response.json())
  .then(cep =>{
    console.log(cep)
    const cidade = document.querySelector('.cidade')
    const bairro = document.querySelector('.bairro')
    const logradouro = document.querySelector('.rua')
    const uf = document.querySelector('.uf')
    const ddd = document.querySelector('.ddd')
    
    cidade.innerHTML = cep.localidade
    bairro.innerHTML = cep.bairro
    logradouro.innerHTML = cep.logradouro
    uf.innerHTML = cep.uf
    ddd.innerHTML = cep.ddd
  })
}

const btcp = document.querySelector('.btc')

function fetchBtc(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson =>{
    btcp.innerHTML = btcJson.BRL.buy
  })
}
setInterval(fetchBtc, 1)
fetchBtc()

const btnproxima = document.querySelector('.proxima')
const divpiada = document.querySelector('.piada')

function puxarPiada(){
fetch('https://api.chucknorris.io/jokes/random')
.then(r => r.json())
.then(piada => {
  divpiada.innerHTML = piada.value
})
}

btnproxima.addEventListener('click', puxarPiada)