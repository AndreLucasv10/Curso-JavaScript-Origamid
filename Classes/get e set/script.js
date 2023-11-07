const button = {
  get tamanho(){
    return this._numero
  },
  set tamanho(numero){
    this._numero = numero
  }
}

const frutas = {
  lista: [],
  set nova(fruta){
    this.lista.push(fruta)
  }
}

frutas.nova = 'Banana'
frutas.nova = 'Morango'


class Button {
  constructor(text, color){
    this.text = text
    this.color = color
  }
  get element(){
    const type = this._elementType || 'button'
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text
    buttonElement.style.color = this.color
    return buttonElement
  }
  set element(type){
    this._elementType = type
  }
}
const blueButton = new Button('Comprar', 'blue')

class Veiculo {
  constructor(rodas){
    this.rodas = rodas
  }
  acelerar(){
    console.log('Acelerou')
  }
}

class Moto extends Veiculo{
  empinar(){
    console.log('Moto empinou com ' + this.rodas + ' rodas')
  }
}

const honda = new Moto(2)