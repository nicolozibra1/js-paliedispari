// ESERCIZIO 1

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// MYSCRIPT

let wordIn = document.getElementById('word-in');
console.dir(wordIn);
let btnVerify = document.getElementById('verify');
console.dir(btnVerify);
let printResult = document.querySelector('.result-word');


btnVerify.addEventListener('click', function() {
    let wordUser = wordIn.value.toLowerCase().replace(/[\W_]/g, '');
    console.log(wordUser);

    let reverse = wordUser.split('').reverse().join('');
    console.log(reverse);

    if (wordUser === reverse) {
        printResult.innerHTML = `<h1 class="text-center">La parola che hai inserito è Palindroma</h1>`
    }

    else {
        printResult.innerHTML = `<h1 class="text-center">La parola che hai inserito NON è Palindroma</h1>`
    }
});




// ESERCIZIO 2
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// MYSCRIPT