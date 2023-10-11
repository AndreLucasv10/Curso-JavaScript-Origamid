// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelector('section').innerText
console.log(paragrafos)
const resultado = paragrafos.split('').reduce((acumulador) =>{
  return acumulador + 1
}, 0)
console.log(resultado)


const Paragrafos = document.querySelectorAll('p')
const totalCaracteres = Array.prototype.reduce.call(Paragrafos, (acumulador , item) =>{
return acumulador + item.innerText.length
}, 0)
console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag,classe, conteudo){
  const elemento = document.createElement(tag)
    elemento.classList.add('classe')

  return elemento
}
console.log(criarElemento('ul','ativo'))
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null,'h1','titulo')
console.log(h1Titulo('Curso de React'))