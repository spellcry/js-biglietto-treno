// Accedo agli elementi del DOM che dovrò modificare
const kmDomElement = document.getElementById('km');
const etaDomElement = document.getElementById('eta');
const prezzoDomElement = document.getElementById('prezzo');

// Dichiarazione variabili
let km = 0,
    eta = 0,
    prezzo = 0,
    prezzoFinale = 0,
    sconto = 0,
    error = false;

const PREZZO_AL_CHILOMETRO = 0.21,
      SCONTO_PERCENTUALE_MINORENNI = 0.2,
      SCONTO_PERCENTUALE_ANZIANI = 0.4;

// Salvo i dati inseriti dall'utente in due variabili
km = parseInt(prompt('Inserisci il numero dei km da percorrere'));
if (! isNaN( km ) ) {
    eta = parseInt(prompt('Inserisci la tua età'));
    if( !isNaN( eta ) ) {
        kmDomElement.innerHTML = `${km}km`;
        etaDomElement.innerHTML = `${eta} anni`;
        
        // Calcolo il prezzo del biglietto
        prezzo = PREZZO_AL_CHILOMETRO * km;
        if(eta < 18) {
            sconto = prezzo * SCONTO_PERCENTUALE_MINORENNI;
        } else if(eta > 65) {
            sconto = prezzo * SCONTO_PERCENTUALE_ANZIANI;
        }
        prezzoFinale = (prezzo - sconto).toFixed(2);

        // Modifico il DOM e visualizzo il prezzo
        prezzoDomElement.innerHTML = `${prezzoFinale}€`;
    } else {
        // Errore: età non valida
        alert('Il valore dell\'età inserito non è valido');
        error = true;
    }
} else {
    // Errore: km non validi
    alert('Il valore inserito per i km non è valido');
    error = true;
}
// SE c'è stato un errore lo scrivo nei vari campi
if ( error === true ) {
    kmDomElement.innerHTML = "Errore";
    etaDomElement.innerHTML = "Errore";
    prezzoDomElement.innerHTML = "Errore";
}