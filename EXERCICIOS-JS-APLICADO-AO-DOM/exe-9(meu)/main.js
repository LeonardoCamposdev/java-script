
const setLocalStorage = (dbClient) =>
  localStorage.setItem("dbClient", JSON.stringify(dbClient));
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbClient")) ?? [];

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};
//CRUD
const updadeClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const readClient = () => getLocalStorage();

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};
//CRUD

const isvalidFields = () =>{
  return document.getElementById('form').reportValidity();
}

const clearFields = () =>{
  const modalFiled = document.querySelectorAll('.modal-field');
  modalFiled.forEach((field) =>{
    field.value = '';
  })
}
//MANIPULANDO O DOM
const saveClient = () =>{
  if(isvalidFields()){
    const client = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      celular: document.getElementById('celular').value,
      cidade: document.getElementById('cidade').value,
    }
    createClient(client);
    clearFields();
    closeModal()
  } else{
    console.log('errou')
  }
}

const openModal = () =>{
  const modal = document.querySelector('#modal');
  modal.classList.add('active');
}

const closeModal = () =>{
  const modal = document.querySelector('#modal');
  modal.classList.remove('active');
}

//EVENTS
document.getElementById('cadastrarCliente').addEventListener('click',openModal);

document.getElementById('modalClose').addEventListener('click',closeModal);

document.getElementById('salvar').addEventListener('click',saveClient)