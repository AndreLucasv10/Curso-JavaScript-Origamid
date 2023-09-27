const honda = new Carro("Honda", 2000);
const fiat = new Carro("Fiat", 3000);
const mazda = new Carro("Mazda", 5000);
function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}
