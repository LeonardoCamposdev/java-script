const btnNext = document.querySelector('#nextSlide');
const btnPrevious = document.querySelector('#previousSlide');
const slider = document.querySelector('.slider');
const content = document.querySelector('.content')

const {width: slideWidth} = window.getComputedStyle(slider);
const {width: contentWidth} = window.getComputedStyle(content)

const slideProps = {
  width: parseInt(slideWidth),
  scroll: 0,
}

function controlSlide({ target: {id}}){
  switch (id) {
    case 'nextSlide':{
      if(slideProps.scroll + slideProps.width < parseInt(contentWidth)){
        slideProps.scroll += slideProps.width;
      }
      return slider.scrollLeft = slideProps.scroll;
    }

      
    case 'previousSlide':{
      slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
      return slider.scrollLeft = slideProps.scroll;
    }


    default:
      break;
  }
}

btnNext.addEventListener('click',controlSlide);
btnPrevious.addEventListener('click',controlSlide);