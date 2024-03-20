// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p"); //NODELIST

const totalCaracter = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracter);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML = conteudo;
  return elemento;
}

console.log(novoElemento("h2", "brelele", "Esse aqui é o famoso xesqdele"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novoH1 = novoElemento.bind(null, "h1", "titulo");

console.log(novoH1("Esse aqui é o conteudo tlg menozin"));
