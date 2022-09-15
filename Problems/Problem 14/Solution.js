//console.log(findTheLetterOccurrences("aaaaaaa", "a"))

function findTheLetterOccurrences(string, letter) {
    string = document.getElementById(string).value;
    letter = document.getElementById(letter).value;

    let occurrences = string.match(new RegExp(letter, "g"));
    console.log(typeof string.match(new RegExp(letter, "g")))

    if (occurrences != null) {

        document.getElementById('problem-four-teen-output').textContent = occurrences.length;

    } else {

        document.getElementById('problem-four-teen-output').textContent = '';

    }
}