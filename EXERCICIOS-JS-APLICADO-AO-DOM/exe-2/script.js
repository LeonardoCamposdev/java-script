const btnLigar = document.querySelector('[data-btn="ligar"]');
const btnDesligar = document.querySelector('[data-btn="desligar"]');

const oldBody = document.querySelector('.old-body');
console.log(oldBody)
const newBody = document.querySelector('.new-body')

function acenderLampada(event){
  event.preventDefault()
  async function luzOk (url) {
    const luzPromisse = await fetch(url);
    const luzLigar = await luzPromisse.text();
    oldBody.innerHTML = luzLigar;
  }

  luzOk('./lampada-ligada.html')
}

btnLigar.addEventListener('click',acenderLampada);