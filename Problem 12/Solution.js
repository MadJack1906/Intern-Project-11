let string = "OJZroysyPTBNcTfKilAo";
let stringArray = Array.from(string);
let letterOccurrences = []; // key value pair of occurrence of a letter e.g. a: 1

let letterSet = new Set(stringArray);

letterSet.forEach(element => {
    let regex = new RegExp(element, "g");

    letterOccurrences[element] = string.match(regex).length;
});

console.log(letterOccurrences);

