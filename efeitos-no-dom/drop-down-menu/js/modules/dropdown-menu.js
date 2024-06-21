import outsideClick from './outsideClick.js'
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown"); //NODELIST

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      //PARA USAR MAIS DE UM TIPO DE EVENTO NESSE MENU!!!!
      menu.addEventListener(userEvent, handleCLick);
    });
  });
  
  function handleCLick(event) {
    event.preventDefault();
    this.classList.add("active"); // FAZ REFERÊNCIA AO MENU-DROPDOWN!!!!
    outsideClick(this, ["touchstart", "click"], () => { //O (THIS) FAZENDO REFERENCIA O ELEMENTO E O (CALLBACK), DO HANDLEOUTSIDECLICK ESSE () => É O CALLBACK VAZIO
      this.classList.remove('active')
    }); // TODA VEZ QUE O (HANDLECLICK) OCORRER O CALLBACK (OUTSIDECLICK) VAI SER ATIVADA
  }
  
  
}

