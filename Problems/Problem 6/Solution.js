function longestWord(string) {

    string = string.split(" ")

    let largestLength = {
        'word': string[0],
        'length': string[0].length
    };

    for (let i = 0; i < string.length - 1; i++) {

        if (string[i].length < string[i + 1].length) {
            largestLength['word'] = string[i + 1];
            largestLength['length'] = string[i + 1].length;
        }

    }

    document.getElementById('problem-six-output').textContent = `The longest word is: ${largestLength['word']}, with a length of ${largestLength['length']}`;  
}