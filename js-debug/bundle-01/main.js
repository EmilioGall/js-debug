/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {

    console.log(i);

};
// 1- Questo codice itera per 5 volte stampando in console l'indice per ogni iterazione (da 0 a 4).
// 2- Errore sintassi: nessuno.
// 3- Errore logica: i > 5 non entra mai nel ciclo. Sarebbe corretto 1 < 5 (riga 14).


// ESERCIZIO 2
 function addIfEven(num) {
     if (num % 2 = 0) {
         return num + 5;
     }
     return num;
 };
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, restituisce il parametro inserito +5 se lo stesso parametro diviso per 2 non dà resto. In ogni altro caso restituisce il parametro.
// 2- Errore sintassi: la condizione ha un operatore di assegnamento "=" al posti di uguaglianza "==" (riga 26).
// 3- Errore logica: nessuno.


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, itera per 5 volte stampando in console l'indice per ogni iterazione (da 0 a 4).
// 2- Errore sintassi: nel ciclo FOR dopo l'inizializzazione della variabile e dopo la condizione ";" e non "," (riga 38).
// 3- Errore logica: nessuno.


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// 1- Questo codice definisce una funzione pura. La funzione, quando invocata, dovrebbe creare un array di numeri ed un array vuoto. Itera per un numero di volte pari alla lunghezza dell'array di numeri. Se il numero è pari inserirlo nell'array vuoto creato e restituire l'array risultante.
// 2- Errore sintassi: dopo l'incremento non dovrebbe esserci il ";" (riga 51).
// -- Errore sintassi: nel ciclo FOR dopo l'inizializzazione della variabile e dopo la condizione ";" e non "," (riga 52).
// -- Errore sintassi: dopo le parentesi della condizione non va ";" (riga 52).
// -- Errore sintassi: il return dovrebbe essere fuori dal ciclo for (riga 55).
// 3- Errore logica: "numbers.length-1" dovrebbe essere "numbers.length" (riga 51).
// -- Errore logica: andrebbe controllato il valore degli elementi dell'array e non l'array. "numbers[i]" invece di "numbers" (riga 52).
// -- Errore logica: dovremmo fare push del valore dell'elemento in numbers con l'indice corrente. "evenNumbers.push(numbers[i]);" invece di "evenNumbers.push(i);" (riga 53).

// ESERCIZIO 4 - Correct
function displayEvenNumbers() {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 == 0){

            evenNumbers.push(numbers[i]);

        };

    };

    return evenNumbers;
};

let array = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

console.log("array",array);