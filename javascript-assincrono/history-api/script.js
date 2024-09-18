const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href); //(ativando a função) pegando a url do (a) que a gente cliar (home ou sobre)
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {  //(criando função) pegando o conteudo fetch de ambas as páginas através do url
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text(); //conteudo do body do fetch

  replaceContet(pageText); //(ativando a função) para colocar colocar o texto do fetch na página web
}

function replaceContet(newText) { //(criando funcção) colocando o conteudo do fetch dentro da página web 
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText; //(conteudo do pageText)

  const oldContent = document.querySelector(".content");
  const newContet = newHtml.querySelector(".content");

  oldContent.innerHTML = newContet.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
