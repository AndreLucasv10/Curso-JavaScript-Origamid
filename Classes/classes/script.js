
class Button {
  constructor(options){
    this.options = options
  }
 static createButton(text,background){
  const buttonElement = document.createElement('button')
  buttonElement.innerText = text
  buttonElement.style.background = background

  return buttonElement
 }
}

  const blueButton = new Button({
    backgroundColor: 'blue',
    text: 'Comprar',
    color: 'white',
  });

  const blueButtonStatic = Button.createButton('clique', 'red')