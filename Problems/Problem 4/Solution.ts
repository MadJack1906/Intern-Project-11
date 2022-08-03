console.log(alphabeticalOrder("websmaster"))

function alphabeticalOrder(x: String) {
    return Array.from(x).sort().toString().replace(/,/g, "");
}