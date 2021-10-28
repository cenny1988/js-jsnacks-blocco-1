/*
6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
*/

// impostiamo la ricerca per esempio su 100 numeri random in una mariabile che possiamo modificare sempre;
//fincchè il contatore non arriva a 50 numeri tutti diversi
// il pc genera sempre numeri random

let arrayNum = [];
let contatore = 0;
const maxNumeri = 100;

//finchè il contatore è minore di 50 numeri restiamo del ciclo
while (contatore < 50){
    //impostiamo una variabile con stato false e generiamo un numero casuale
    let numTrovato = false;
    let numRandom = Math.floor(Math.random() * maxNumeri);
    
    //cicliamo tutto l'arrary se il numero risulta già presente la variabile di stato diventa true
    for ( i=0; i< arrayNum.length; i++){
        if ( numRandom === arrayNum [i]){
            numTrovato = true;
        }
    }

    //se la variabile non è true aggiungiamo il numero appena generato nell'array ed incrementiamo il contatore iniziale
    if (!numTrovato) {
        arrayNum.push(numRandom);
        contatore++
    }
}

// stampiamo l'array per verificarlo.
console.log(arrayNum);