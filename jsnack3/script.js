/*
3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//creiamo un ciclo dove chiediamo all'utente di inserire 10 numeri
//e nel frattempo sommiamo questi numeri in un contatore
let tot = 0;
for( i=0; i<10; i++){
    tot += parseInt(prompt(`Inesrisci il numero ${i+1} :`));
}
//stampiamo il totale del contatore
console.log('La somma totale dei numeri inseriti è: ',tot);