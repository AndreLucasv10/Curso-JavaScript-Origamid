import initAnimaNumeros from './anima-numeros.js'

export default function initFecthAnimais(){
async function fetchAnimais(url){
  const animaisResponse = await fetch(url)
  const animaisJSON = await animaisResponse.json()
  const numerosGrid = document.querySelector('.numeros-grid')
  console.log(animaisJSON)

  animaisJSON.forEach(animal => {
    const divAnimal = createAnimal(animal)
    console.log(divAnimal)
    numerosGrid.appendChild(divAnimal)
  });
  initAnimaNumeros()
}

function createAnimal(animal){
  const div = document.createElement('div')
  div.classList.add('numero-animal')
  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span> `

  return div
}

fetchAnimais('./animaisapi.json')
}
