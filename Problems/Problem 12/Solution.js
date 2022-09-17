// let string = "OJZroysyPTBNcTfKilAo";



// console.log(letterOccurrences);


function letterOccurrences(string) {
    string = document.getElementById(string).value;

    let stringArray = Array.from(string);
    let letterOccurrences = []; // key value pair of occurrence of a letter e.g. a: 1

    let letterSet = new Set(stringArray);

    letterSet.forEach(element => {
        let regex = new RegExp(element, "g");

        letterOccurrences[element] = string.match(regex).length;
    });

    console.log(letterOccurrences)

    let value = document.createElement('p')

    for (let letter in letterOccurrences) {
        const textNode = document.createTextNode(`${letter} : ${letterOccurrences[letter]},`)    
        value.appendChild(textNode);
    }
    
    document.getElementById('problem-twelve-output').appendChild(value);
    
}