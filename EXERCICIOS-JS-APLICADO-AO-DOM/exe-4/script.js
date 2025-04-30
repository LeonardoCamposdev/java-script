const btnNext = document.querySelector("#nextSlide");
const btnPrevious = document.querySelector("#previousSlide");
const slider = document.querySelector(".slider");
const content = document.querySelector(".content");

const { width: slideWidth } = window.getComputedStyle(slider);
const { width: contentWidth } = window.getComputedStyle(content);

let currentSlide = 0;

const slideProps = {
  width: parseInt(slideWidth),
  scroll: 0,
};

function setCurrentDot() {
  //FUNÇÃO PARA DEIXAR A BOLINHA AZUL DE ACORDO COM QUAL IMAGEM ESTÁ NA TELA
  const dots = document.querySelectorAll(".dot");
  for (let dot of dots) {
    dot.classList.remove("current");
  }
  dots[currentSlide].classList.add("current");
}

function controlSlide({ target: { id } }) {
  const contentLength = content.children.length;
  switch (id) {
    case "nextSlide": {
      if (slideProps.scroll + slideProps.width < parseInt(contentWidth)) {
        slideProps.scroll += slideProps.width;
      }
      if (currentSlide < contentLength - 1) { //PARA AS BOLINHAS NÃO DAREM ERRO AO PASSAR DA ULTIMA IMAGEM O CLICK
        currentSlide += 1;
        setCurrentDot();
      }

      return (slider.scrollLeft = slideProps.scroll);
    }

    case "previousSlide": {
      if (currentSlide > 0) { //PARA AS BOLINHAS NÃO DAREM ERRO AO VOLTAR DA PRIMEIRA IMAGEM O CLICK
        currentSlide -= 1;
        setCurrentDot();
      }
      slideProps.scroll =
        slideProps.scroll - slideProps.width < 0
          ? 0
          : slideProps.scroll - slideProps.width;

      return (slider.scrollLeft = slideProps.scroll);
    }

    default:
      break;
  }
}

btnNext.addEventListener("click", controlSlide);
btnPrevious.addEventListener("click", controlSlide);

// FUNÇÃO PARA CLONAR AS BOLINHAS DE ACORDO COM A QUANTIDADE DE IMAGENS QUE TEM NO SLIDE
window.onload = () => {
  const contentLength = content.children.length; //pegando o total de imagens
  for (let index = 0; index < contentLength - 1; index += 1) {
    // o -1 é porque já tem uma bolinha no html!!!
    const newDot = slider.parentElement.querySelector(".dot").cloneNode(); //clonando as bolinhas
    slider.parentElement.querySelector(".length-dots").appendChild(newDot); //colocando as bolinhas uma atrás da outra
  }
  setCurrentDot();
};
