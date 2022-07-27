let string = "The quick brown fox";
let pattern = /[aeiouAEIOU]/g;

let vowels = string.match(pattern);

console.log(vowels.length);