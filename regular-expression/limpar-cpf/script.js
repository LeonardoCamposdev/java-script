const cpfList = document.querySelectorAll('.cpf li');

const elementInnterText = ([...elements]) =>{
  return elements.map((element)=>{
    return element.innerText;
  })
}

const limparCPF = (cpf) =>{
  return cpf.replace(/\D/g,'');
}

const construirCPF = (cpf) =>{
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formartarCPFS = (cpfs) =>{
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituiCPFS = (cpfElements) =>{
  const cpfs = elementInnterText(cpfElements);
  const cpfsFormatados = formartarCPFS(cpfs);

  cpfElements.forEach((element,index) =>{
    element.innerText = cpfsFormatados[index];
  })
}

const resultado = elementInnterText(cpfList);
console.log(formartarCPFS(resultado));
console.log(substituiCPFS(cpfList));