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

