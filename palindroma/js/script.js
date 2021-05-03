/*
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente di inserire una parola

var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);

//Funzione per capire se la parola inserita è palindroma

function palindroma (str) {

    // Trovare lunghezza della parola
    var lunghezza = parolaUtente.length;

    // Metà della parola
    for (var i = 0; i < lunghezza / 2; i++) {

        // Controlla se la prima e l'ultima parola sono uguali
        if (parolaUtente[i] !== parolaUtente[lunghezza - 1 - i]) {
            return 'Non è palindroma';
        }
    }
    return 'è palindroma';
}

// Chiamare la funzione
var valore = palindroma(parolaUtente);
console.log(valore);