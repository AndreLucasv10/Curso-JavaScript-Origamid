const  controles = document.querySelector('.controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
controles.addEventListener('change', handleChange)

function backgroundColor(value){
  btn.style.backgroundColor = value
}
function height(value){
  btn.style.height = value + 'px'
}

const handleStyle = {
  element: btn,
  backgroundColor(value){
    this.element.style.backgroundColor = value
  },
  height(value){
    this.element.style.height = value + 'px'
  },
  width(value){
    this.element.style.width = value + 'px'
  },
  texto(value){
    this.element.innerText = value
  },
  color(value){
    this.element.style.color = value
  },
  border(value){
    this.element.style.border = value
  },
    borderRadius(value){
    this.element.style.borderRadius = value + 'px'
  },
  fontFamily(value){
    this.element.style.fontFamily = value
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem'
  }
}

function handleChange(event){
  const name = event.target.name
  const value = event.target.value
  saveValues(name, value)
  handleStyle[name](value)
  showCss()
}

function saveValues(name, value){
  localStorage[name] = value
}

function setValues(){
  const properties = Object.keys(localStorage)
  properties.forEach(propertie =>{
    controles.element[propertie] = localStorage[propertie]
  })
}
setValues()

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';<span></span>')
}