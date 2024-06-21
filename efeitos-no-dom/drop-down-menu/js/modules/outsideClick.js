export default function outsideClick(element, events, callback) {   //FUNÇÃO PARA QUANDO CLICARMOS NO HTML (FORA DO MENU), O MENU FECHAR!!!
  const html = document.documentElement; //SELECIONANDO O HTML
  const outside = 'data-outside'

  if(!element.hasAttribute(outside)){ //SE NÃO TIVER O ATRIBUTO OUTSIDE NO THIS, VAI ATIVAR APENAS UMA VEZ, SE TIVER NÃO VAI ADICIONAR 
    events.forEach(userEvent =>{
      html.addEventListener(userEvent, handleOutsideClick); // USEREVENT, É A ARRAY COM OS EVENTOS DE CLICK E TOUCHSCREEN
    })
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    if(!element.contains(event.target)){ // SE ESSA CONDIÇÃO FOR FALSA, VAI EXECUTAR O CALLBACK!!!!, SE FOR TRUE NÃO VAI ACONTECER
      element.removeAttribute(outside, '');
      events.forEach(userEvent =>{
        html.removeEventListener("click", handleOutsideClick); // PARA REMOVER O EVENTO NO HTML!!
      })
      callback(); //ATIVANDO A FUNÇÃOA DE CALLBACK DO (HANDLEOUTSIDECLICK) (CALLBACK VAZIO!!)
    }
    
  }
}

// O TRUE É SE A GENTE TIVER CLICKANDO DENTRO DO MENU!! AI DIZ QUE O TARGET É TRUE PORQUE ESTAMOS CLIKANDO DENTRO DELE
 // SE ESSA CONDIÇÃO FOR FALSA, VAI EXECUTAR O CALLBACK!!!!, SE FOR TRUE NÃO VAI ACONTECER, (SE O CLICK FOR NO HTML, O MENU VAI SE FECHAR )
