const login = new Promise((resolve) =>{
  setTimeout(() =>{
    resolve('Usuário Logado')
  },1000)
})

const dados = new Promise((resolve) =>{
  setTimeout(() =>{
    resolve('Dados Carregados')
  },1500)
})

const carregouTudo = Promise.all([login,dados])
console.log(carregouTudo)

carregouTudo.then((resolucao) =>{
  console.log(resolucao)
})