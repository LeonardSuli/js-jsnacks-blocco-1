
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


// Chiedi un numero di 4 cifre all’utente
const num_4_cifre = parseInt(prompt('Inserisci un numero di 4 cifre'));
console.log(num_4_cifre)

if(isNaN(num_4_cifre) || num_4_cifre.length !== 4){

    alert('Ritenta sarai più fortunato')

}else{

    console.log(num_4_cifre);
}


const num = []

num.push(num_4_cifre)

console.log(num);