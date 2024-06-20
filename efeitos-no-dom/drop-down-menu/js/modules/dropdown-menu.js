export default function initDropdownMenu(){

}

const dropdownMenus = document.querySelectorAll("[data-dropdown");

function handleCLick(event){
  event.preventDefault();
  this.classList.toggle("ativo");
}

dropdownMenus.forEach((menu) =>{
  menu.addEventListener("click", handleCLick);
})
