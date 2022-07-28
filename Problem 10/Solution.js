let numArray = [5, 4, 3, 2, 1];
numArray = numArray.sort(); // Sorts the array

let answer = []
answer["second lowest"] = numArray[1];
answer["second highest"] = numArray[numArray.length - 2]

console.log(answer)