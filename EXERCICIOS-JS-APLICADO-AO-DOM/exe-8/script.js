const btnTask = document.querySelector('#btn-new-task');

const localStorageKey = 'to-do-list-lc';

function newTask(){
   let input = document.querySelector('#input-new-task');

   //VALIDAÇÃO!!
   if(!input.value){
    alert('Digite algo para inserir na sua lista!');
   }
   
   //else if()

   else{
       //increment to localStorege
       let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
       values.push({
         name: input.value,
       })
       localStorage.setItem(localStorageKey, JSON.stringify(values));
       showValues();
   }
}

function showValues(){
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.querySelector('#to-do-list');
  list.innerHTML = '';
  for(let i = 0; i < values.length; i++){
    list.innerHTML += `<li>${values[i]['name']}</li>`;
  }
}
showValues();

btnTask.addEventListener('click', newTask);