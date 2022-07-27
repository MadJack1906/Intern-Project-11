let x = 32243;

// function body
x = x.toString();

function reverseNumber(x){
    let reversedNumber = "";

    for (let i = 0; i < x.length; i++) {
        reversedNumber = reversedNumber.concat(x[(x.length - 1) - i]);
    }

    return parseInt(reversedNumber);
}

console.log(reverseNumber(x));