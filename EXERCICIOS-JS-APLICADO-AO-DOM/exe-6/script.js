const calculatorBtns = document.querySelectorAll('[id^="tecla"]');
console.log(calculatorBtns)


function controlCalc({ key }){
  
}

calculatorBtns.forEach((btn)=>{
  btn.addEventListener('click',controlCalc);
})