const btnAtivar = document.querySelector('[data-btn="ativar"]');
const inputNome = document.querySelector('[data-nome]');
const inputlAltura = document.querySelector('[data-altura]');
const inputlPeso = document.querySelector('[data-peso]');


function handleClick(event){
  event.preventDefault();

  
  function multiplicarAltura(){
    let multAltura = inputlAltura.value * inputlAltura.value;
    const buscarImc = inputlPeso.value / multAltura;
    return buscarImc.toFixed(1);
  }

  function mostrarDiv(){
    const resultado = document.querySelector('.div-resultado');

     if(multiplicarAltura() >= 35.00 || multiplicarAltura() < 39.99){
      resultado.innerText = `${inputNome.value} o seu nível de IMC é de ${multiplicarAltura()}, vai te lascar, cuida em ir pra academia, parece a vovózona, miséricordia que barriga grande, barriga de aluguel`;
    }
    
    if(multiplicarAltura() >= 30.00 || multiplicarAltura() < 34.99){
      resultado.innerText = `${inputNome.value} o seu nível de IMC é de ${multiplicarAltura()}, cuidado! você está na  Obesidade Grau I, procure um médico profissional e comece a praticar exercício fisíco`;
    }

    if(multiplicarAltura() >= 25.00 || multiplicarAltura() < 29.99){
      resultado.innerText = `${inputNome.value} o seu nível de IMC é de ${multiplicarAltura()}, cuidado! você está na Pré-Obesidade`;
    }

    if(multiplicarAltura() < 24.99){
      resultado.innerText = `${inputNome.value} o seu nível de IMC é de ${multiplicarAltura()}, parabéns, seu peso está normal, continue assim sendo essa pessoa sadável `;
    }  
    return resultado; 
  }

  mostrarDiv();
}

btnAtivar.addEventListener('click',handleClick);