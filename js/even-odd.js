// ESERCIZIO 2
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// MYSCRIPT

const select = document.getElementById('even-odd');
console.dir(select);

const numberIn = document.querySelector('.choose-number');
console.dir(numberIn);

const btnSend = document.querySelector('.btn');
console.dir(btnSend);

select.addEventListener('change', userSelect);
function userSelect(){
    const userChoice = select.value;
    console.log (userChoice);

}

btnSend.addEventListener('click', userNumber);
function userNumber(){
    const numberChoice = numberIn.value;
    console.log (numberChoice);
}