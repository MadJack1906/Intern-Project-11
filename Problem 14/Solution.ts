console.log(findTheLetterOccurrencesTS("aaaaaaa", "a"))

function findTheLetterOccurrencesTS(string: string, letter: string) {
    let occurrences = string.match(new RegExp(letter, "g"));
    console.log(typeof string.match(new RegExp(letter, "g")))

    if (occurrences != null) {

        return occurrences.length;

    } else {

        return 0;

    }
}