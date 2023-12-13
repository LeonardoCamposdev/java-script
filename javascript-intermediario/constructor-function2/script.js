//const Dom = {
//  seletor: "li",
//  element() { // função
//    return document.querySelector(this.seletor); // para a gente conseguir falar com as propiedades do objeto, precisamos passar o this.
//  },
//  ativar() { // função
//    this.element().classList.add("ativo");
//  },
//};

// CRIANDO O MESMO OBEJTO COM A CONSTRUCTION FUNCTION!!!!

function Dom(selector) {
  this.element = function() {
    return document.querySelector(selector);
  };
  this.ativar = function(classe) { // usando parametros
    this.element().classList.add(classe); // usando o parametro
  };
}

const li = new Dom('li'); // agora o li vai ser passado lá em cima no (seletor); // esses novos objetos herdam todos os métodos e propiedades.
const ul = new Dom('ul'); // agora o ul vai ser passado lá em cima no (seletor); // esses novos objetos herdam todos os métodos e propiedades.
const lastLi = new Dom('li:last-child');
li.ativar('ativar'); // usando o argumento
ul.ativar('ativar'); // usando o argumento
lastLi.ativar('ativar'); // usando o argumento