// PALINDROMA

function checkPalindroma(word){
    let reversed = word.split("").reverse().join("");
    if(reversed == word){
        alert("La parola inserita è palindroma");
    }
    else{
        alert("La parola inserita non è palindroma");
    }   
}
let string = prompt("Inserisci una parola")
checkPalindroma(string);

// PARI E DISPARI

function generateRandomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

function checkSomma(sum){
    if(sum % 2 == 0){
        return "pari";
    }
    return "dispari";
}

let choice = prompt("Inserisci un valore tra pari e dispari");

let number = parseInt(prompt("Inserisci un numero da 1 a 5"));

let pc_number = generateRandomNumber();

let somma = number + pc_number;

let result = checkSomma(somma);

if(result == "choice"){
    alert("Hai vinto");
}
else{
    alert("Hai perso");
}