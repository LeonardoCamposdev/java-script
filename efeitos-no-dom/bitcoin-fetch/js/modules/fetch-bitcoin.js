export default function initFetchBitcoin() {}

const doeBitcoin = document.querySelector("[data-bitcoin]");

async function bitcoinFetch(url) {
  try{
    const bitcoinResponse = await fetch(url);
    const bitcoinJSON = await bitcoinResponse.json();
    const bitcoinBuy = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
    documentBitcoin(bitcoinBuy);
  }
  catch(erro){
    console.log(erro);
  }
}

function documentBitcoin(bitcoin) {
  doeBitcoin.innerText = bitcoin;
}

bitcoinFetch("https://blockchain.info/ticker");
