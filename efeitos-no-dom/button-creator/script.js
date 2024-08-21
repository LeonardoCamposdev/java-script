const form = document.getElementById("controles");
const btn = document.querySelector(".button");
const cssText = document.querySelector(".css");
form.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name,value);
  showCss();
}

function saveValues(name,value){ //salvando os valores no localStorage
  localStorage[name] = value;
}

function setValues(){ // salvando todos os valores no propio browser
  const properties = Object.keys(localStorage); //pegando as propiedades (keys/nome/value) do localStorage e transformando em uma array
  properties.forEach((propertie) =>{
    handleStyle[propertie](localStorage[propertie]); //mudando os estilos do btn, para os valores setados no localStorage
    form.elements[propertie].value = localStorage[propertie]; //pegando os elementos do form e setando os valores do localStorage
  })
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}


