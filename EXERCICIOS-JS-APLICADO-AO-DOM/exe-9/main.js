const Tempclient = {
  nome: "Edileuza",
  email: "Edileuza.maria66@live.com",
  numero: "87996507215",
  cidade: "Buique-PE",
};

const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient));
const getLocalStorage = () => JSON.parse(localStorage.getItem("dbClient")) ?? [];

//CRUD

const deleteClient = (index) =>{
  const dbClient = restClient();
  dbClient.splice(index,1);
  setLocalStorage(dbClient);
}

const updateClient = (index, client) => {
  const dbClient = restClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};


const restClient = () => getLocalStorage();

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const isvalidFields = () =>{
  const form = document.querySelector('#form');
  return form.reportValidity();
}

//MANIPULANDO O DOM!!
function saveClient(){
  if(isvalidFields()){
    console.log('validando cadastro');
  }
}


function openModal(){
  const modal = document.querySelector('#modal');
  modal.classList.add('active');
}

function closeModal(){
   const modal = document.querySelector('#modal');
   modal.classList.remove('active');
}


//EVENTS!!!!
document.getElementById('cadastrarCliente').addEventListener('click',openModal);

document.getElementById('modalClose').addEventListener('click',closeModal);

document.getElementById('salvar').addEventListener('click',saveClient);