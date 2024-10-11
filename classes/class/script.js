class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }

  objetos ={
    teste1: '1',
    teste2: '2',
  }

  element() {
    const btnElement = document.createElement("button");
    btnElement.innerText = this.text;
    btnElement.style.backgroundColor = this.background;
    return btnElement;
  }
  static createRed(text){
    return new Button(text, 'red')
  }
}

console.log(Button.createRed('Compre'))
const newTeste = new Button()
console.log(newTeste.objetos)
