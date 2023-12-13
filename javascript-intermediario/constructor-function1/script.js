function Carro2(marca, precoInicial){
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  this.marca = marca;
  console.log(this);
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2('Mazda',5000);