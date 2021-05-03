/*
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// L'utente sceglie pari o dispari

var sceltaUtente = prompt("Scegli pari o dispari");
console.log(sceltaUtente);

// L'utente inserisce un numero da 1 a 5 

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Numero utente: ", numeroUtente);

// Generare un numero random da 1 a 5 per il computer usando una funzione

function numeroRandomUno (min, max) {
    var number = Math.floor(Math.random() * (max - min + 1 ) + min);
    return number;
}

for (var i = 0; i < 1; i++) {
    var numeroRandomDue = numeroRandomUno (1, 5);
    console.log("Numero random computer: ", numeroRandomDue);
}

// Sommiamo i 2 numeri 

var somma = numeroUtente + numeroRandomDue;
console.log("Somma: ", somma);

// Stabilire se la somma dei 2 numeri è pari o dispari con una funzione

function pari (num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    } 
}

var controlloSomma = pari(somma);
console.log(controlloSomma);

// Dichiariamo chi ha vinto

if (numeroUtente > numeroRandomDue) {
    console.log("Ha vinto l'utente");
} else if (numeroUtente == numeroRandomDue) {
    console.log("Avete pareggiato");
} else {
    console.log("Ha vinto il computer");
}