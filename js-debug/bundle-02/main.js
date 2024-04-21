/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, dovrebbe creare una costante di tipo number ed una variabile di tipo string vuota. Se la costante di tipo number è minore di 18 sostituisce il valore della variabile string con un messaggio "Sei troppo giovane! Hai ${myAge} anni!" altrimenti sostituisce il valore della variabile string con un messaggio "Hai più di 18 anni!". Dovrebbe poi restituire la variabile string.
// 2- Errore sintassi: la variabile andrebbe dichiarata con "let" non con "const" (riga 16).
// 3- Errore logica: la funzione dovrebbe restituire la variabile message con un "return" (riga 23).


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, dovrebbe creare una costante "colors" di tipo array. e stampare un messaggio in console "Nella mia palette ci sono ${lunghezza dell'array} colori!".
// 2- Errore sintassi: "length" invece di "lenght" (riga 33).
// 3- Errore logica: nessuno.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, dovrebbe chiedere un valore numerico tramite prompt e salvarlo in una costante, creare una costante "total" e salvarvi il valore inserito tramite prompt più 12. Infine stampare in console il messaggio "Il risultato finale è ${total}".
// 2- Errore sintassi: inserire funzione parseInt per assicurarsi che la somma avvenga tra dati number "parseInt(prompt('Inserisci un numero'));"" (riga 43).
// 3- Errore logica: nessuno.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, dovrebbe creare una costante di tipo array "addresses" di valori string, creare una costante di tipo array "userEmail" chiedendo un valore string tramite prompt, ed una variabile di tipo boolean "grantAccess" di valore false. Se il valore di "userEmail" è incluso nell'array "addresses" dichiarare valore di "grantAccess" come true. Se il valore di "grantAccess" è true stampare in console "Accesso consentito!" altrimenti stampare in console "Accesso negato!".
// 2- Errore sintassi: il valore true deve essere inserito senza apici come valore booleano (riga 62).
// 3- Errore logica: nessuno.

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, dovrebbe creare una costante di tipo array "addresses" di valori string, creare una costante di tipo array "userEmail" chiedendo un valore string tramite prompt, ed una variabile di tipo string "grantAccess" di valore false. Per tutti gli elementi dell'array "addresses": se la lunghezza dell'array "addresses" è maggiore di 5 e se il valore dell'elemento è uguale al valore inserito tramite prompt dichiarare valore di "grantAccess" come true. Se il valore di "grantAccess" è true stampare in console "Accesso consentito!" altrimenti stampare in console "Accesso negato!".
// 2- Errore sintassi: il valore true deve essere inserito senza apici come valore booleano (riga 90).
// -- Errore sintassi: la parentesi graffa che chiude lo scope di funzione non è presente (riga 102).
// 3- Errore logica: nessuno.





























