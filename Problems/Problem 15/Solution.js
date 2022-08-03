let string = "OJZroysyPTBNcTfKilAo";
let stringArray = Array.from(string);
let uniqueCharacter = "";
let letterOccurrences = [];

// Getting the each letters of the string
let stringSet = new Set(stringArray);

stringSet.forEach(element => {
    let regex = new RegExp(element, "g");
    let length = string.match(regex).length;

    letterOccurrences[element] = length;
    
    if (uniqueCharacter.length == 0){
        uniqueCharacter = (length == 1) ? element : "";
    }
});

console.log(letterOccurrences)
console.log(uniqueCharacter)