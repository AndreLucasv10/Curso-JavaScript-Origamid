// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemUnicas = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagemUnicas)
// Selecione todos os links internos (onde o href começa com #)
const linkInternos = document.querySelectorAll('[href^="#"]')
console.log(linkInternos)
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2.innerHTML)
// Selecione o último p do site

const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])