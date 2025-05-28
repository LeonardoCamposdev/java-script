const tempClient = {
  nome: "Edileuza",
  email: "Edileuza.kiss66@live.com",
  celular: "87996507215",
  cidade: "Buique-PE",
};

const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient));
const getLocalStorage = () => JSON.parse(localStorage.getItem("dbClient")) ?? [];

const deleteClient = (index) => {
  const dbClient = restClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

const updadeClient = (index, client) => {
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

const isValidFields = () =>{ //SE O FORMULÁRIO ESTIVER 100% VÁLIDO VAI RETORNAR TRUE OU FALSE
  return document.getElementById('form').reportValidity();
}

const salveClient = () =>{
  if(isValidFields()){ // ATIVANDO A FUNÇÃO E VENDO SE O RESULTADO VAI SER TRUE OU FALSE
    console.log('cadastrando cliente');
  }
}

//INTERAÇÕES COM O LAYOUT
function openModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("active");
}

function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("active");
}

//EVENTS
document.getElementById("cadastrarCliente").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", salveClient);