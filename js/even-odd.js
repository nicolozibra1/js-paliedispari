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

let a = true;
console.log(a);
let b = false;

select.addEventListener('change', userSelect);
function userSelect(){
    const userChoice = select.value;
    console.log (userChoice);

    if (userChoice === "even"){
        a = true;
        b = false;
        console.log("hai scelto pari");
        console.log(a);
    }
    else if (userChoice === "odd") {
        b = true;
        a = false;
        console.log("hai scelto dispari")
    }
}

btnSend.addEventListener('click', userNumber);
function userNumber(){
    const numberChoice = parseInt(numberIn.value);
    console.log (numberChoice);

    let numberBot = getRndNumber(1, 5);
    console.log(numberBot);

    numberResult = numberChoice + numberBot;
    console.log(numberResult);

    if (numberResult % 2 === 0 && a == true) {
        console.log('Hai vinto con il pari');
    }
    else if (numberResult % 2 !== 0 && b == true){
        console.log('hai vinto con il dispari');
    }
    else if (numberResult % 2 === 0 && a == false){
        console.log('hai perso');
    }
    else if(numberResult % 2 !== 0 && b == false){
        console.log('hai perso');
    }
}