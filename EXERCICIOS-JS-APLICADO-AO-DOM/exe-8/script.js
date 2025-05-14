const btnTask = document.querySelector('#btn-new-task');

const localStorageKey = 'to-do-list-lc'

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
   }
}

btnTask.addEventListener('click', newTask);