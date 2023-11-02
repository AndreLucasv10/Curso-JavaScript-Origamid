const sobre = fetch('./sobre.html')

const div = document.createElement('div')

sobre.then(r => r.text()).then(body =>{
console.log(body)
div.innerHTML = body
const titulo = div.querySelector('h1')
document.querySelector('h1').innerText = titulo.innerText
console.log(div)
})