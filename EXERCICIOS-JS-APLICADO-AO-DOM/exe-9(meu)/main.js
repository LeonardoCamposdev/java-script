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

const isvalidFields = () => {
  return document.getElementById("form").reportValidity();
};

const clearFields = () => {
  const modalFiled = document.querySelectorAll(".modal-field");
  modalFiled.forEach((field) => {
    field.value = "";
  });
};
//MANIPULANDO O DOM
const saveClient = () => {
  if (isvalidFields()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    const index = document.getElementById("nome").dataset.index;
    if (index == "new") {
      createClient(client);
      updadeTable();
      clearFields();
      closeModal();
    } else{
      updadeClient(index,client);
      updadeTable();
      closeModal();
    }
  }
};

const createRow = (client, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
         <td>${client.nome}</td>
                    <td>${client.email}</td>
                    <td>${client.celular}</td>
                    <td>${client.cidade}</td>
                    <td>
                        <button type="button" class="button green" id='edit-${index}'>Editar</button>
                        <button type="button" class="button red" id='delete-${index}'>Excluir</button>
                    </td>
  `;
  const tbody = document.querySelector("tbody");
  tbody.appendChild(row);
};

const clearTable = () => {
  const rows = document.querySelectorAll("tbody>tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const updadeTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};

const fillFields = (client) => {
  document.getElementById("nome").value = client.nome;
  document.getElementById("email").value = client.email;
  document.getElementById("celular").value = client.celular;
  document.getElementById("cidade").value = client.cidade;
  document.getElementById('nome').dataset.index = client.index;
};

const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  openModal();
};

const editDelete = (event) => {
  if (event.target.type === "button") {
    const [action, index] = event.target.id.split("-");

    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const response = confirm (`Deseja realmente excluir o client ${client.nome} ?`);
      if(response){
        deleteClient(index);
        updadeTable();
      }
    }
  }
};

const openModal = () => {
  const modal = document.querySelector("#modal");
  modal.classList.add("active");
};

const closeModal = () => {
  const modal = document.querySelector("#modal");
  modal.classList.remove("active");
};

updadeTable();

//EVENTS
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);

document.querySelector("tbody").addEventListener("click", editDelete);
