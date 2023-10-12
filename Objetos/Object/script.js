const pessoa = new Object({
  nome: 'André',
  idade: 19
})


// Object.create, cria obejtos com o mesmo prototipo do objeto relacionado

const carro = {
  rodas: 4,

  init(valor){
  this.marca = valor
  return this
  },
  acelerar() {
    return this.marca + ' Acelerou'
  },
  buzinar(){
    return this.marca + ' Buzinou'
  }


}

const honda = Object.create(carro).init('Honda')
console.log(honda.acelerar())

// Object.Assign

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carros = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carros, funcaoAutomovel);

console.log(moto)
console.log(carros)

// Object.defineProperties
const motos = {

  capacete: true,
}

  Object.defineProperties(motos, {

    rodas: {
          get(){
           return  this._rodas
      },

      set(valor){
          this._rodas = valor * 4
      },
    }
  })
  console.log(motos)

  // Object.getOwnPropertyDescriptors(Array)
//Simplismente mostra todas as funções e propriedades de um objeto
console.log(Object.getOwnPropertyDescriptors(Array))
