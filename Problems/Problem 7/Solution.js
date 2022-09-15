// let string = "The quick brown fox";
// let pattern = /[aeiouAEIOU]/g;

// let vowels = string.match(pattern);

// console.log("Number of vowels in the word: The quick brown fox")
// console.log(vowels.length);

function vowelCount(string) {
    let pattern = /[aeiouAEIOU]/g;
    let vowels = string.match(pattern);

    document.getElementById('problem-seven-output').textContent = vowels.length;
}