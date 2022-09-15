//// Uppercase each Word in the String
let string = "the quick brown fox";


function uppercaseWordFirstLetter(string) {
    let uppercaseString = "";

    let stringArr = string.split(" ");

    stringArr.forEach(element => {
        uppercaseString = uppercaseString.concat(element.charAt(0).toUpperCase() + element.slice(1) + " ");
    })

    document.getElementById('problem-five-output').textContent = uppercaseString;
}

//console.log(uppercaseString)