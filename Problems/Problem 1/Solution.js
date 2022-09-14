const regex = new RegExp(/[\d]+/)

function reverseNumber(x) {
    
    if ( x.match(regex) ) {

        x = x.toString();
        let reversedNumber = "";

        for (let i = 0; i < x.length; i++) {
            reversedNumber = reversedNumber.concat(x[(x.length - 1) - i]);
        }

        document.getElementById("output").innerText = reversedNumber;

    } else {

        document.getElementById("output").textContent = 'Not a number!';

    }
    
}