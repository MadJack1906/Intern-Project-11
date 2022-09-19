//let value = "String";

function returnTypeOf(object){
    let type = typeof eval(document.getElementById(object).value);
    
    document.getElementById('problem-nine-output').textContent = type.toString();
}
// console.log("What is the type of a value variable (string)");
// console.log(returnTypeOf(value));