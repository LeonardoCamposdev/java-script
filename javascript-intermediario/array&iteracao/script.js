const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
});

console.log(carros);

// FOREACHH!!!!!!!!!!!!
const li = document.querySelectorAll("li");

li.forEach((item, index) => {
  item.classList.add("ativo" + index);
});

const retornoForeach = li.forEach(function (item) {
  item.classList.add("ativa");
});

console.log(retornoForeach);
// O RETORNO DO FOREACH VAI SER SEMPRE UNDEFINED, PORQUE A GENTE NÃO ESTÁ iNTERESSADO NO QUE ESSE MÉTODO RETORNA
// MAS SIM ESTAMOS INTERESSADOS NO QUE ELE VAI FAZER!!! NA AÇÃO DELE!!!.

//MAP!!!!!

const carros2 = ["Corola", "Ferrari", "Golf"];

const novaArray = carros2.map((item, index, array) => {
  return item.toUpperCase();
});

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);

console.log(numerosX2);

console.log(novaArray);
console.log(carros2);
// novaArray e Carros são duas arrays diferentes
// O MAP VAI SERVIR PARA QUANDO VOCÊ QUISER RETORNAR UMA ARRAY COM OS VALORES QUE VOCÊ TINHA (MODIFICADOS!!!!!)
// SEMPRE QUE VOCÊ PRECISAR DE UMA NOVA ARRAY A PATIR DAQUELA QUE VOCÊ TINHA ANTERIOR VOCÊ VAI USAR O MAP!!!
// CASO NÃO PRECISE DE UMA NOVA ARRAY, VOCÊ VAI USAR O FOREACH!!!!

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
// aqui está tudo abreviado
const tempoAulas = aulas.map((aula) => aula.min); // quando estiver tudo na mesma linha depois do (=>), automaticamente já vai estar o return invisivel.

// outro exemplo de fazer
function nomeAulas(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas);

// REDUCE!!!!!!!!!
// o reduce precisa retornar alguma coisa também!!
const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);

console.log(reduceAulas); // aqui ele vai retornar o valor FINAL  de todas as iterações, a soma TOTAL de todos os acumuladores.

// se a gente não passar o valor do ACUMULADOR QUE NO CASO É O (0), O REDUCE VAI CONTINUAR FUNCIONANDO
// POREM NÃO VAI FAZER A SOMA NA PRIMEIRA ITERAÇÃO, VAI PULAR A PRIMERA ITERAÇÃO
// QUANDO A GENTE PASSA O VALOR DO ACUMULADOR, VAI FAZER TODAS AS ITERAÇÕES!!

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
}, 0);

console.log(maiorNumero);

// o anterior é igual a reduce!!
// o autal é igual ao item!!
