const regexp = /\w+/g;

const frase = 'Javascript Java';

console.log(regexp.lastIndex);
console.log(regexp.test(frase));
console.log(regexp.lastIndex);
console.log(regexp.test(frase));
console.log(regexp.lastIndex);
console.log(regexp.test(frase));
console.log(regexp.lastIndex);


let i = 1;
while(regexp.test(frase)){
  console.log(i++,regexp.lastIndex);
}

console.log(regexp.exec(frase));
console.log(regexp.exec(frase));