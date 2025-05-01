const btnNext = document.querySelector("#nextSlide"); //1 
const btnPrevious = document.querySelector("#previousSlide"); //1 
const slider = document.querySelector(".slider"); //1
const content = document.querySelector(".content"); //2

const { width: slideWidth } = window.getComputedStyle(slider);
const { width: contentWidth } = window.getComputedStyle(content);

let currentSlide = 0; //2

const slideProps = { // 1
  width: parseInt(slideWidth),
  scroll: 0,
};

function setCurrentDot() { //3
  //FUNÇÃO PARA DEIXAR A BOLINHA AZUL DE ACORDO COM QUAL IMAGEM ESTÁ NA TELA
  const dots = document.querySelectorAll(".dot");
  for (let dot of dots) {
    dot.classList.remove("current");
  }
  dots[currentSlide].classList.add("current");
}

function controlSlide({ target: { id } }) { //1
  const contentLength = content.children.length; //2
  switch (id) { //1
    case "nextSlide": {
      if (slideProps.scroll + slideProps.width < parseInt(contentWidth)) { //1
        slideProps.scroll += slideProps.width;
      }
      if (currentSlide < contentLength - 1) { //2
        //PARA AS BOLINHAS NÃO DAREM ERRO AO PASSAR DA ULTIMA IMAGEM O CLICK
        currentSlide += 1;
        setCurrentDot(); //3
      }

      return (slider.scrollLeft = slideProps.scroll); //1 //O SCROLL DO SLIDER O VALOR VAI SER OQUE A GENTE DEFINIU NO (SLIDERPROPS.SCROLL)
    }

    case "previousSlide": { //1
      if (currentSlide > 0) { //2
        //PARA AS BOLINHAS NÃO DAREM ERRO AO VOLTAR DA PRIMEIRA IMAGEM O CLICK
        currentSlide -= 1;
        setCurrentDot(); //3
      }
      slideProps.scroll =
        slideProps.scroll - slideProps.width < 0
          ? 0
          : slideProps.scroll - slideProps.width;

      return (slider.scrollLeft = slideProps.scroll); //O SCROLL DO SLIDER O VALOR VAI SER OQUE A GENTE DEFINIU NO (SLIDERPROPS.SCROLL)
    }

    default:
      break;
  }
}

btnNext.addEventListener("click", controlSlide); //1 
btnPrevious.addEventListener("click", controlSlide); //1
 
// FUNÇÃO PARA CLONAR AS BOLINHAS DE ACORDO COM A QUANTIDADE DE IMAGENS QUE TEM NO SLIDE
window.onload = () => { //2 // FUNÃO QUE VAI ACONTECER ASSIM QUE A PÁGINA ABRIR
  const contentLength = content.children.length; //pegando o total de imagens
  for (let index = 0; index < contentLength - 1; index += 1) {
    // o -1 é porque já tem uma bolinha no html!!!
    const newDot = slider.parentElement.querySelector(".dot").cloneNode(); //clonando as bolinhas
    slider.parentElement.querySelector(".length-dots").appendChild(newDot); //colocando as bolinhas uma atrás da outra
  }
  setCurrentDot(); //3
};
