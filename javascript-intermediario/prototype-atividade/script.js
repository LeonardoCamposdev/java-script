// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nomeAtribuido,sobrenomeAtribuido,idadeAtribuido){
  this.nome = nomeAtribuido;
  this.sobrenome = sobrenomeAtribuido;
  this.idade = idadeAtribuido;
}

Pessoa.prototype.nomeCompleto = function(){
  return this.nome + this.sobrenome;
}

const leo = new Pessoa('Léo', ' Campos', 24);
const ravi = new Pessoa('Ravi Mayk', ' Muniz', 4);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLAllCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Event

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // Boolean
