const pessoa = new Object({
  nome: "Léo",
});

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return " buzinou";
  },
};

const honda = Object.create(carro).init("Honda");
console.log(honda);
console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");
console.log(ferrari);
console.log(ferrari.acelerar());

// OBJECT.ASSIGN()
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

// OBJECT.DEFINEPROPERTIES()

const moto2 = {
  capacete: true,
};

Object.defineProperties(moto2, {
  rodas: {
    //configurable: false, //NÃO CONSEGUE DELETAR ESSA PROPIEDADE (RODAS).
    //writable: true, // MAS AQUI CONSEGUE ESCREVER EM CIMA E MUDAR O VALOR.
    get() {
      // TRADUÇÃO (pegar)
      // QUANDO DEFINIRMOS OU ATRIBUIMOS UM VALOR AQUI
      return this._rodas; // aqui é uma propiedade nova dentro do get
    },
    set(valor) {
      // TRADUÇÃO (definir)
      // O SET VAI MODIFICAR O VALOR QUE SETAMOS A CIMA NO GET!!!
      this._rodas = valor * 2 + " Total Rodas";
    },
  },
});

console.log(moto2);
