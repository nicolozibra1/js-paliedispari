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