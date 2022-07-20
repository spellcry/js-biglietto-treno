// Accedo agli elementi del DOM che dovrò modificare
const kmDomElement = document.getElementById('km');
const etaDomElement = document.getElementById('eta');
const prezzoDomElement = document.getElementById('prezzo');

let error = false;

// Salvo i dati inseriti dall'utente in due variabili
let km = parseInt(prompt('Inserisci il numero dei km da percorrere'));
if (! isNaN( km ) ) {
    let eta = parseInt(prompt('Inserisci la tua età'));
    if( !isNaN( eta ) ) {
        kmDomElement.innerHTML = `${km}km`;
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
    } else {
        alert('Il valore dell\'età inserito non è valido');
        error = true;
    }
} else {
    alert('Il valore inserito per i km non è valido');
    error = true;
}
if ( error === true ) {
    kmDomElement.innerHTML = "Errore";
    etaDomElement.innerHTML = "Errore";
    prezzoDomElement.innerHTML = "Errore";
}