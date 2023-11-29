
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//tools:

//array
//prompt
//variabili
//ciclo for
//if else


//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const invitati = ['Luca', 'Marco', 'Paolo', 'Matteo', 'Leo'];

//chiedi all’utente il suo nome
const name = prompt('Come ti chiami?');

//vedere se l'utente è invitato
let trovato = false;


for(let i = 0; i < invitati.length; i++){

    console.log(invitati[i])

    //stampo messaggio con esito del controllo
    if(name === invitati[i]){

        trovato = true;

    }    
}

//comunica all'utente se può partecipare o no alla festa
if(trovato === true){
    
    alert('Benvenuto')
    
}else{
    
    alert('Mi dispiace ma non sei invitato alla festa')
    
}




