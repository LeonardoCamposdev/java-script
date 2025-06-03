const setLocalStorage = (dbClient) =>
  localStorage.setItem("dbClient", JSON.stringify(dbClient));
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbClient")) ?? [];

//CRUD

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

const updateClient = (index, client) => {
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

const isvalidFields = () => {
  return document.getElementById("form").reportValidity();
};

//MANIPULANDO O DOM!!
const clearFields = () => {
  const modalField = document.querySelectorAll(".modal-field");
  modalField.forEach((field) => {
    field.value = "";
  });
};

function saveClient() {
  if (isvalidFields()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    createClient(client);
    updadeTable();
    closeModal();
  }
}

const createRow = (client) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
                      <td>${client.nome}</td>
                    <td>${client.email}</td>
                    <td>${client.celular}</td>
                    <td>${client.cidade}</td>
                    <td>
                        <button type="button" class="button green">editar</button>
                        <button type="button" class="button red">excluir</button>
                    </td>
  `;
  const tbody = document.querySelector('tbody');
  tbody.appendChild(newRow);
};

const clearTable = () =>{
  const rows = document.querySelectorAll("tbody> tr")
  rows.forEach((row) =>{
    row.parentNode.removeChild(row);
  });
}

const updadeTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};

function openModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("active");
}

function closeModal() {
  clearFields();
  const modal = document.querySelector("#modal");
  modal.classList.remove("active");
}

updadeTable();
//EVENTS!!!!
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);