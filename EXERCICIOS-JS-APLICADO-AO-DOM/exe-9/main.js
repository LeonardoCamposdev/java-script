

const tempClient = {
  nome: 'Leonardo',
  email: 'Leonardo.kiss66@live.com',
  celular: '87996507215',
  cidade: 'Buique-PE'
}

const setLocalStorage = (dbClient) => localStorage.setItem('dbClient', JSON.stringify(dbClient));
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? [];

const updadeClient = () =>{
  
}

//PUXAR
const readClient = () => getLocalStorage();

//CRIAR
const createClient = (cliente) =>{
  const dbClient = getLocalStorage();
  dbClient.push(cliente)
  setLocalStorage(dbClient);
}