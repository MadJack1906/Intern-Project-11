//console.log(alphabeticalOrder("webmaster"))

function alphabeticalOrder(x) {
    let output = Array.from(x).sort().toString().replace(/,/g, "");
    document.getElementById('problem-four-output').textContent = output;
}