let word = prompt("Inserisci una parola");

let letters = word.split("");

let reversedLetters = letters.reverse();

let reversedWord = reversedLetters.join("");

//console.log(reversedWord == word);

if(word.toLowerCase() == reversedWord.toLowerCase()) {
    console.log("Palindromo");
} else {
    console.log("Non palindromo");
}