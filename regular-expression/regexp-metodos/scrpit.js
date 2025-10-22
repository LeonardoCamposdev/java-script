const regexp = /\w+/gi;

const frase = 'JavaScript, TypeScript, CoffeScript, 200';

let i = 0;

while(regexp.test(frase)){
  console.log(i++, regexp.lastIndex);
}

let regexpResult;
while((regexpResult = regexp.exec(frase)) !== null){
  console.log(regexpResult[0]);
}

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp2 = /(?<=<\/?)\w+/g;
const regexp3 = /<li/g;

console.log(tags.replace(regexp2, 'h1'));
console.log(tags.replace(regexp3, '$& class="ativo"'));



const emails = `
empresa@email.com
contato@outluk.com
suporte@lives.com
`;

console.log(emails);
const regexp4 = /(\w+@)([\w.]+)/g;

//console.log(emails.replace(regexp4, '$1gmail.com'));

const resultados = emails.replace(regexp4,function(...args){
  console.log(args);
  if(args[2] === 'email.com'){
    return `${args[1]}gmail.com.br` 
  } else if(args[2] === 'outluk.com'){
    return `${args[1]}outlook.com.br`
  } else if(args[2] === 'lives.com'){
    return `${args[1]}live.com.br`
  } else{
    return 'Nunca nem vi deu erro em algo ai patrão'
  }
});

console.log(resultados)