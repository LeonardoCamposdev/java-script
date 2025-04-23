const buttons = document.querySelectorAll('a');


function handleClick(event){
  event.preventDefault();
  const url = event.target;
  pageFetch(url);
}

async function pageFetch(url) {
  const responsePage = await fetch(url);
  const pageText = await responsePage.text();
  replaceContent(pageText);
}

function replaceContent(text){
  const div = document.createElement('div');
  div.innerHTML = text;
  const oldContent = document.querySelector('.content');
  const newContent = div.querySelector('.content');
  oldContent.innerHTML = newContent.innerHTML;
}

buttons.forEach((btn) =>{
  btn.addEventListener('click', handleClick);
})