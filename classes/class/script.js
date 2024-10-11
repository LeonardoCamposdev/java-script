class Button {
  constructor(text, color, background) {
    this.text = text;
    this.color = color;
    this.background = background;
  }

  static element() {
    const btnElement = document.createElement("button");
    btnElement.innerText = this.text;
    btnElement.style.color = this.color;
    btnElement.style.backgroundColor = this.background;
    btnElement.style.padding = "20px 80px";
    btnElement.style.textTransform = "uppercase";
    btnElement.style.fontWeight = "800";
    btnElement.style.margin = "40px";
    return btnElement;
  }

}

const button1 = new Button("COMPRAR", "green", "lightblue");
const button2 = new Button("ALUGAR", "red", "grey");
const button3 = new Button("VENDER", "purple", "pink");
console.log(Button.element())
