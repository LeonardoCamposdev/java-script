const btnNext = document.querySelector("#nextSlide");
const btnPrevious = document.querySelector("#previousSlide");
const slider = document.querySelector(".slider");
const { width: slideWidth } = window.getComputedStyle(slider);

function controlSlide({ target: { id } }) {
  switch (id) {
    case "nextSlide":
      return (slider.scrollLeft += parseInt(slideWidth));

    case "previousSlide":
      return (slider.scrollLeft -= parseInt(slideWidth));

    default:
      break;
  }
}

btnNext.addEventListener("click", controlSlide);
btnPrevious.addEventListener("click", controlSlide);
