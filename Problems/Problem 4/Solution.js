console.log(alphabeticalOrder("webmaster"))

function alphabeticalOrder(x) {
    return Array.from(x).sort().toString().replace(/,/g, "");
}