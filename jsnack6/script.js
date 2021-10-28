/*
1 - L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let x = parseInt(prompt('Inserisci il primo numero x: '));
let y = parseInt(prompt('Inserisci il secondo numero y: '));

if (x>y){
    console.log('Il numero maggiore è x; ',x);
} else if (x<y){
    console.log('Il numero maggiore è y; ',y);
} else {
    console.log('I numeri sono uguali');
}