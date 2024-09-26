export default function initFetchAnimais() {}

async function animaisFetch(url) {
  const animaResponse = await fetch(url);
  const animaisJSON = await animaResponse.json();
  const numerosGrid = document.querySelector(".numeros-grid");
  animaisJSON.forEach((animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  });
}

function createAnimal(animal) {
  const div = document.createElement("div");
  div.classList.add("numero-animal");
  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}`;
  return div;
}

animaisFetch("./animaisapi.json");
