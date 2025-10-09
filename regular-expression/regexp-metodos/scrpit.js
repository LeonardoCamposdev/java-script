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
contato@email.com
suporte@email.com
`;

const regexp4 = /(\w+@)[\w.]+/g;

console.log(emails.replace(regexp4, '$1gmail.com'));