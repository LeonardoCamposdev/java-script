function espera(tempo) {
  console.log(tempo);
}

setTimeout(espera,5000,"nunca nem vi");

setTimeout(() =>{
  console.log("ravi deixa eu estudar por favor mlk");
},4500);


for(let i = 0; i < 20; i++){
  setTimeout(() =>{
    console.log(i);
  },300 * i);
}