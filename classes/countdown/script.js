import Countdown from"./countdown.js"

const tempoParaONatal = new Countdown("24 December 2024 23:59:59 GMT-0300");
const tempoParaAniversario = new Countdown("24 January 2025 07:00:00 GMT-0300");
console.log(tempoParaONatal);
console.log(tempoParaONatal.total)

console.log(tempoParaAniversario.total);