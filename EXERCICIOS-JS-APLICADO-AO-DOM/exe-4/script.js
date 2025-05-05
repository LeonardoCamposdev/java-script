const btnNext = document.querySelector('#nextSlide');
const btnPrevious = document.querySelector('#previousSlide');
const slider = document.querySelector('.slider');
const content = document.querySelector('.content');

const {width: sliderWidth} = window.getComputedStyle(slider);
const {width: contentWidth} = window.getComputedStyle(content);

const sliderProps = {
  width : parseInt(sliderWidth),
  scroll: 0,
}



function controlSlide({target: {id}}){
  switch (id) {
    case "nextSlide":{
      if(sliderProps.scroll + sliderProps.width < parseInt(contentWidth)){
        sliderProps.scroll += sliderProps.width;
        console.log(sliderProps.scroll);
      }

      return slider.scrollLeft = sliderProps.scroll;
    }
      
    
      case "previousSlide":{
        sliderProps.scroll = sliderProps.scroll - sliderProps.width < 0 ? 0 : sliderProps.scroll - sliderProps.width;

        return slider.scrollLeft = sliderProps.scroll;
      }

  }
}

window.onload = () =>{
  const contentLength = content.children.length;
  for(let index = 0; index < contentLength - 1; index++){
    const newDot = slider.parentElement.querySelector('.dot').cloneNode();
    slider.parentElement.querySelector('.length-dots').appendChild(newDot);
  }
  
}

btnNext.addEventListener('click', controlSlide);
btnPrevious.addEventListener('click', controlSlide);