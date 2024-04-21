const input = document.querySelector('input');                       //
const array = null;                                                  // - Errore sintassi: array vuoto si definisce con "[]".

input.addEventListener('keypress', function(event) {                 //

    if (event.code != 'Enter')    return;                            //
    if (input.value.length == '') return;                            // - Errore logica: andrebbe verificato solo il valore dell'input, non la sua lunghezza ("input.value" invece di "input.value.length").

    array.add(input.value);                                          //

    const li = document.createElement('li');                         //
    li.classList.add('list-group-item');                             //
    li.text = input.value;                                           // - Errore sintassi: per scrivere dentro l'elemento "li" creato bisogna usare "li.innerText" invece di "li.text"
    document.querySelector('ul').push(li);                           //

    let counter = '';                                                // - Errore sintassi: la variabile contatore va impostata con un valore di tipo number uguale a 0.
    let item    = array[0];                                          //
    const max   = 1;                                                 //
    const elems = [];                                                //

    for (let i = 0; i < array; i++) {                                // - Errore logica: il ciclo andrebbe iterato per la lunghezza dell'array ("array.length" invece di "array").
        let val = array[i];                                          //

        if (!elems[val]) {                                           //
            elems[val] = 1;                                          //
        } else {                                                     //
            elems[val]++;                                            //
        }                                                            //

        for (let j = i; j < array.length; i++) {                     //
            if (array[i] == array[j]) {                              //
                counter++;                                           //
                if (max < counter)                                   //
                max  = counter;                                      //
                item = array[i];                                     //
            }                                                        //
        }

        counter = 0;                                                 //
    }

    const alert = document.getElementsByClassName('alert');          //

    alert.classList.remove('d-none');                                //
    alert.classList.add('d-flex');                                   //

    alert.querySelector('span:first-child').innerText = item;        //
    alert.querySelector('span:last-child').innerText = max;          //

    console.log('${item} trovato ${max} volte');                     // - Errore sintassi: il messaggio andrebbe scritto mediante l'utilizzo di template litteral.
});