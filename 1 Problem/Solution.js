function reverseNumber(x){
    x = x.toString();
    let reversedNumber = "";

    for (let i = 0; i < x.length; i++) {
        reversedNumber = reversedNumber.concat(x[(x.length - 1) - i]);
    }

    document.getElementById("output").innerHTML = reversedNumber;
}