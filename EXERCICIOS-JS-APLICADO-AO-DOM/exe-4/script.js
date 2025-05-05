const btnNext = document.querySelector('#nextSlide');
const btnPrevious = document.querySelector('#previousSlide');
const slider = document.querySelector('.slider');
const content = document.querySelector('.content');

const {width: sliderWidth} = window.getComputedStyle(slider);
const {width: contentWidth} = window.getComputedStyle(content);

let currentSlide = 0;

const sliderProps = {
  width: parseInt(sliderWidth),
  scroll: 0,
}


function setCurrentDot(){
  const dots = document.querySelectorAll('.dot');
  for(let dot of dots){
    dot.classList.remove('current');
  }
  dots[currentSlide].classList.add('current');
}

function controlSlide({target: {id}}){
  const contentLength = content.children.length;
  switch (id) {
    case 'nextSlide' :{
      if(sliderProps.scroll + sliderProps.width < parseInt(contentWidth)){

        sliderProps.scroll += sliderProps.width;
      }

      if(currentSlide < contentLength - 1 ){
        currentSlide += 1;
        setCurrentDot();
      }

      return slider.scrollLeft = sliderProps.scroll;
     }

      
    case 'previousSlide':{
      if(currentSlide > 0){
        currentSlide -= 1;
        setCurrentDot();
      }

      sliderProps.scroll = sliderProps.scroll - sliderProps.width < 0 ? 0 : sliderProps.scroll - sliderProps.width;
      return slider.scrollLeft = sliderProps.scroll;
    } 
  
    default:
      break;
  }

}

btnNext.addEventListener('click', controlSlide);
btnPrevious.addEventListener('click',controlSlide);

window.onload = () =>{
  const contentLength = content.children.length;
  for(index = 0; index < contentLength -1; index++){
    const newDot = slider.parentElement.querySelector('.dot').cloneNode();
    slider.parentElement.querySelector('.length-dots').appendChild(newDot);
  }
  setCurrentDot();
}