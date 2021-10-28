/*
4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// creiamo un array mockup con i nomi degli invitati
let invitati = [
    'Mario',
    'Paolo',
    'Gennaro',
    'Riccardo',
    'Giovanni',
    'Valentina',
    'Maria',
    'Nicole',
    'Jasmine'
];

// chiediamo all'utente il suo nome
let userName = prompt('Inserisci il tuo nome');
let userVerifed = false;
// se il nome inserito è nella lista dei nomi dell'array iniziale allora l'utente partecipa altrimenti no.
for ( i=0; i<invitati.length; i++){
    if (invitati[i] === userName){
        userVerifed = true;
        console.log(`Benvenuto ${userName}, sei in lista Complimenti.`);
    }
}

if (!userVerifed){
    console.log(`Mi dispiace ${userName}, NON sei in lista!`);
};
