// function.call() executa a função sendo possivel passarmos uma nova referência ao this da function

const carro = {
  marca: 'Ford',
  ano: 2014
}


function descricaoCarro(velocidade){
  console.log(this.marca + ' ' + this.ano +' KM/h '+ velocidade)
}
descricaoCarro.call(carro, 100)


//================================================================================//

const carros = ['ford','fiat','VW']
carros.forEach.call( carros,(i) =>{
  console.log(i)
})

//===========================================================================//

function Dom(seletor){
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe)
}

const section = new Dom('section')

section.ativo('ativar')

console.log(section.element)


//////====================================================================//////////////////////////

const frutas = ['banana','uva','pera']

Array.prototype.mostrarThis = function(){
  console.log(this)
}

// Function.apply() funciona como o call, a unica diferença [e que os argumentos da função são passados atraves de uma array

const numeros = [3,57,754,234,123,6,4,3,234,6,2345,235,2,5235,1,12]

// Function.bind() Diferente de call e apply, blind não irá executar a função mas sim retornar a mesma com o novo contexto do this

const $ = document.querySelectorAll.bind(document);

const Carros ={
marca: 'Ford',
ano: 2018,
acelerar: function(aceleracao, tempo){
  return `${this.marca} acelerou ${aceleracao} em ${tempo} segundos`
}
}

const honda = {
  marca: 'Honda',
  ano: 2018
}
const acelerarHonda = Carros.acelerar.bind(honda)

console.log(Carros.acelerar(70,10))
console.log(acelerarHonda(300,20))