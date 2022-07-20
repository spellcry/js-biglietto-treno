// Accedo agli elementi del DOM che dovrò modificare
const kmDomElement = document.getElementById('km');
const etaDomElement = document.getElementById('eta');
const prezzoDomElement = document.getElementById('prezzo');

// Salvo i dati inseriti dall'utente in due variabili
let km = parseInt(prompt('Inserisci il numero dei km da percorrere'));
kmDomElement.innerHTML = `${km}km`;
let eta = parseInt(prompt('Inserisci la tua età'));
etaDomElement.innerHTML = `${eta} anni`;

// Calcolo il prezzo del biglietto
let prezzo = 0.21 * km;
if(eta < 18) {
    prezzo = (prezzo * 0.8).toFixed(2);
} else if(eta > 65) {
    prezzo = (prezzo * 0.6).toFixed(2);
}

// Modifico il DOM e visualizzo il prezzo
prezzoDomElement.innerHTML = `${prezzo}€`;