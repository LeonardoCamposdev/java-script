export default function initAnimaNumeros(){
  function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]');
    
    numeros.forEach((numero) =>{
      const total = +numero.innerText;
      const incremento = Math.floor(total/100); // para arredondar o valor
    
      let start = 0;
      const timer = setInterval(() =>{
        start = start + incremento; // para ir pulando o número de 100 em 100
        numero.innerText = start; // para pegar o text do número.
        if(start > total){
          numero.innerText = total;
          clearInterval(timer);
        }
      },25 * Math.random()); // para os números carregarem um primeiro que o outro de forma aleátoria.
    });
    }
    function handleMutation(mutation){
      if(mutation[0].target.classList.contains("ativo")){
        observer.disconnect();
        animaNumeros();
      }
    }
    
    const observerTarget = document.querySelector(".numeros");
    const observer = new MutationObserver(handleMutation);
    
    observer.observe(observerTarget, {attributes: true});
}

