/*
5 - Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let arrDispari = [];

for ( i=0; i<6; i++){
    let numUser = parseInt(prompt(`Inserisci il numero ${i+1}: `));
    if (numUser % 2 != 0){
        arrDispari.push(numUser);
    }
}

console.log("L'array finale è: ", arrDispari);