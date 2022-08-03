let stringTS: string = "the quick brown fox";
let uppercaseStringTS = "";

let stringArrTS: string[] = stringTS.split(" ");
stringArrTS.forEach(element => {
    uppercaseStringTS = uppercaseStringTS.concat(element.charAt(0).toUpperCase()) + element.slice(1) + " ";
})

console.log(uppercaseStringTS)