/*
2- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let parola1 = prompt('Inserisci il primo numero x: ');
let parola2 = prompt('Inserisci il primo numero x: ');

if (parola1.length<parola2.length){
    console.log('La parola più corta è: ', parola1);
    console.log('La parola più lunga è: ', parola2);
} else if (parola1.length>parola2.length){
    console.log('La parola più corta è: ', parola2);
    console.log('La parola più lunga è: ', parola1);
} else {
    console.log('Le parole inserite sono lunghe uguali');
}