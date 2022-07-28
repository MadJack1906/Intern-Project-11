let string = "The quick brown fox";
let pattern = /[aeiouAEIOU]/g;

let vowels = string.match(pattern);

console.log("Number of vowels in the word: The quick brown fox")
console.log(vowels.length);