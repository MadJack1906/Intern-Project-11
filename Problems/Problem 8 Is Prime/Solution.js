// Is Prime
let num = 6;

console.log(isPrime(num))

function isPrime(n) {
    // initial checks if the num provided is equal or lesser than 1 or equals to 2
    let isPrime = false;
    
    if (n <= 1) {
        isPrime = false;
    } else if (n === 2) {
        isPrime = true;
    }

    // for greater than 2
    // It is important to note that Math.sqrt(n) is used for shorter comparison 
    // if you have to compare 2 to 10000... number
    // http://mathandmultimedia.com/2012/06/02/determining-primes-through-square-root/

    let numSquareRoot = Math.sqrt(n);
    for (let i = 2; i <= numSquareRoot; i++){
        // is it divisible to i?
        if (n % i === 0) {
            isPrime = false;
        } else {
            isPrime = true;
        }
    }

    return isPrime;
}