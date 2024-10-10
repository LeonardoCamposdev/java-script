function Dados(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Dados.prototype.curiosidades = () => {
  this.curiosidades = {
    apelido: "léozinho",
    perninha: "oca",
  };
  return curiosidades;
};

const novaPessoa = new Dados("Léo", "25");
console.log(novaPessoa);
console.log(novaPessoa.curiosidades());

////////////// USANDO A CLASSE ///

class Info {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  novoCadasto() {
    this.cadastro = {
      apelido: "narigudo",
      perninha: "de pau",
    };
    return this.cadastro;
  }
}

const novoCadastro = new Info("leozote", "14");
console.log(novoCadastro);
console.log(novoCadastro.novoCadasto());

/////////////BUTTON////////

class Button {
  constructor() {
    this.text = text;
    this.color = color;
    this.background = background;
  }
  static element(text, color, background) {
    const elementButton = document.createElement("button");
    elementButton.innerText = text;
    elementButton.style.color = color;
    elementButton.style.backgroundColor = background;
    return elementButton;
  }
}


const newBtnStatic = Button.element("clique", "blue", "red");
console.log(newBtnStatic);
