const buttons = document.querySelectorAll("a");
const lampada = document.querySelector(".lampada");


function handleClick(event) {
  event.preventDefault();
  const url = event.target;
  pageFetch(url);
}

async function pageFetch(url) {
  const responsePage = await fetch(url);
  const pageText = await responsePage.text();
  replaceContent(pageText);
}

function replaceContent(text) {
  const div = document.createElement("div");
  div.innerHTML = text;
  const oldContent = document.querySelector(".content");
  const newContent = div.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;

  const novaLampada = document.querySelector(".lampada");
  novaLampada.addEventListener("dblclick", handleDblClick);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleDblClick() {
  if (this.src !== "http://127.0.0.1:5500/images/quebrada.jpg") {
    this.src = "http://127.0.0.1:5500/images/quebrada.jpg";
  }
}

lampada.addEventListener("dblclick", handleDblClick);