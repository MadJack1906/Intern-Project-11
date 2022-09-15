// let string = "dog";
// let possibleCombination = [];

// for (let i = 0; i < string.length; i++) {
//     possibleCombination.push(string[i])
//     for (let j = i + 1; j < string.length; j++) {
//         possibleCombination.push(possibleCombination[possibleCombination.length - 1] + string[j]);
//     }
// }
// console.log("Possible Combination of the string: dog")
// console.log(possibleCombination);

function possibleWordCombination(string) {
    let possibleCombination = [];

    for (let i = 0; i < string.length; i++) {
        possibleCombination.push(string[i])
        for (let j = i + 1; j < string.length; j++) {
            possibleCombination.push(possibleCombination[possibleCombination.length - 1] + string[j]);
        }
    }

    document.getElementById('problem-three-output').textContent = possibleCombination.join(', ');
}