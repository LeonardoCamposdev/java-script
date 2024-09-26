const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  const url = event.target.href;
  pushFetch(url);
  window.history.pushState(null,null,event.target.href);
}

async function pushFetch(url) {
  const pageFetch = await fetch(url);
  const pageText = await pageFetch.text();
  replaceContent(pageText);
}

function replaceContent(newText){
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');
  oldContent.innerHTML  = newContent.innerHTML;
}

window.addEventListener('popstate', () =>{
  pushFetch(window.location.pathname);
})

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
