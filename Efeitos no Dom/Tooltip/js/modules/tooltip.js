export default function initTooltip(){

}

const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
  criarTooltipBox(this)
console.log(event)
}

function criarTooltipBox(){
  const tooltipBox = document.createElement('div')
  const text = Element.getAttribute('aria-label')
  tooltipBox.classList.add('tooltip')
tooltipBox.innerText = text
console.log(tooltipBox)
document.body.appendChild('tooltipBox')
return tooltipBox
}