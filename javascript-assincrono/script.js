const promessa = new Promise(function(resolve,reject){
  let condicao = true;
  if (condicao){
    resolve('Leozinho');
  } else{
    reject(Error('Um erro ocorreu na promise'))
  }
});

promessa.then(function(resolucao){
  console.log(resolucao);
})