// Random String ID generation
// Initial Solution is there's a comparison between the string and the number generator
// Any if any of their number is the greatest, will be added to the string builder

let length = 20;
let stringId = "";


for (let i = 0; i < length; i++){
    let letterGeneratorContainer = letterGenerator();
    let numberGeneratorContainer = numberGenerator();

    if (letterGeneratorContainer[0] >= numberGeneratorContainer[0]) {
        
        stringId = stringId.concat(letterGeneratorContainer[1])    ;
    
    } else {

        stringId = stringId.concat(numberGeneratorContainer[1] );

    }
}

console.log(stringId.replace(/,/g), "")

function letterGenerator(){
    // returns an array [random 1 to 10 number, randomCharacter]
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz';
    let index = Math.floor(Math.random() * 52)

    return [Math.floor(Math.random() * 11), letters[index]];
}

function numberGenerator(){
    return [Math.floor(Math.random() * 11), Math.floor(Math.random() * 0) ];
}


