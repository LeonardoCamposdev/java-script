function Pessoa(nome,idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function(){
    return 'Abraçou';
  }
  this.andar = function(){
    return 'Andou pelo objeto';
  }
}
// primeiro ele vai verificar dentro do objeto, se não tiver ele vai verificar dentro do prototypo

Pessoa.prototype.andar = function(){
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function(){
  return this.nome + ' Pessoa nadou';
}

const leo = new Pessoa('Léo', 24);

console.log(Pessoa.prototype);
console.log(leo.prototype);

// o PROTOTYPE está aligado apenas a FUNÇÃO.
// objetos não tem prototype.