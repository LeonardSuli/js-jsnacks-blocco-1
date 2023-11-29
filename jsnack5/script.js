
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Crea un array vuoto.
const num_dispari = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++){

    const num = parseInt(prompt('Inserisci un numero'))

    console.log(num)

        //come sapere se il numero è dispari
    if (num % 2 == 1){

        num_dispari.push(num)

    }
}

//numeri dispari nell'array
console.log(num_dispari)