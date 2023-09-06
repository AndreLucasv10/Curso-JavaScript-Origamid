//Exemplo 1

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}
mostrarCarro(); // fusca no console
console.log(carro); // Erro, carro is not defined

// Exemplo 2

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro
