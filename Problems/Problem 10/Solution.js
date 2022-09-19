// let numArray = [5, 4, 3, 2, 1];


// console.log(answer)

function getSecondLowestAndHighest(array) {
    array = document.getElementById(array).value.split(',');
    array = array.map(element => Number.parseInt(element));
    array = array.sort(); // Sorts the array

    let answer = []
    answer["Second lowest"] = array[1];
    answer["Second highest"] = array[array.length - 2];

    for (let field in answer) {
        let textNode = document.createTextNode(`${field} : ${answer[field]}, `);
        document.getElementById('problem-ten-output').appendChild(textNode);
    }

    console.log(answer)
}