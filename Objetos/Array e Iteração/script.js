//const carros = ['Ford', 'Fiat', 'Honda'];
   // carros.forEach((item,index,array) =>{
     //   console.log(item.toUpperCase())
    //})
    //console.log(carros)


const li = document.querySelectorAll('li')
    li.forEach(i =>{
        i.classList.add('ativo')
    })

    const carros = ['Ford', 'Fiat', 'Honda'];

 const novaArray =   carros.map((item,index,array) =>{
       return item.toUpperCase()
    })

    //console.log(novaArray)

    const numeros = [2,4,5,6,78]
    const numerosX2 = numeros.map(n =>{
        return n * 2
    })

   // console.log(numerosX2)
//////////////////////////////////////////////////////////




    const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)

//console.log(tempoAulas)


//////////////////

//const aula = [10,25,30]

//const reduceAulas = aula.reduce((acumulador,item)=>{
   // return acumulador + item
//},0)

//console.log(reduceAulas)

////////////////////////////

const numero = [10,25,30,3,54,33]

const maiorNumero = numero.reduce((anterior,atual)=>{
    if(anterior > atual){
        return anterior
    }else{
        return atual
    }
})
//console.log(maiorNumero)

///////////////////////////////////////////////

const frutas = ['Banana', 'Pêra', 'Uva']

const temUva = frutas.some((item) =>{
  return item === 'Pêra';
})

const every = frutas.every((fruta) =>{
  return fruta
})
console.log(temUva)
console.log(every)

const indexUva = frutas.findIndex(item =>{
  return item === 'Uva'
})

console.log(indexUva)