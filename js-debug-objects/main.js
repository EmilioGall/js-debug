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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// 1- Questo codice definisce la costante "cars" di tipo array con elementi di tipo object. Definisce la costante "gasolineCars" di tipo array con gli elementi di "cars" che hanno type "benzina". Definisce la costante "dieselCars" di tipo array con gli elementi di "cars" che hanno type "diesel". Definisce la costante "otherCars" di tipo array con gli elementi di "cars" che hanno type diverso da "benzina" e "diesel". Stampa in console il messaggio "Auto a benzina". Stampa in console il messaggio "*******************************". Stampa in console gli elementi dell'array "gasolineCars". Stampa in console il messaggio "Auto a diesel". Stampa in console il messaggio "*******************************". Stampa in console gli elementi dell'array "dieselCars". Stampa in console il messaggio "Tutte le altre auto". Stampa in console gli elementi dell'array "otherCars".
// 2- Errore sintassi: manca "," dopo "}" (riga 59).
// -- Errore sintassi: arrow function è definita come "=>" non come ">=" (riga 67).
// -- Errore sintassi: assenza di "return" (riga 71).
// 3- Errore logica: andrebbe usato operatore logico "&&" anziché "||" (riga 74).
// -- Errore logica: assenza del controllo sulle lettere maiuscole/minuscole (riga 67 - 70 - 74).