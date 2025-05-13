const btnTask = document.querySelector('#btn-new-task');

function newTask(){
   let input = document.querySelector('#input-new-task');

   //VALIDAÇÃO!!
   if(!input.value){
    alert('Digite algo para inserir na sua lista!');
   }
}

btnTask.addEventListener('click', newTask);