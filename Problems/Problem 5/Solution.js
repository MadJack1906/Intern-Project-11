// Uppercase each Word in the String
let string = "the quick brown fox";
let uppercaseString = "";

let stringArr = string.split(" ");

stringArr.forEach(element => {
    uppercaseString = uppercaseString.concat(element.charAt(0).toUpperCase() + element.slice(1) + " ");
})

console.log(uppercaseString)