// // Is Prime
// let num = 6;

// console.log(isPrime(num))

// function isPrimeNumber(n) {
//     let isPrime = false;
//     // initial checks if the num provided is equal or lesser than 1 or equals to 2
    
//     if (n <= 1) {
//         isPrime = false;
//     } else if (n == 2 || n == 1) {
//         isPrime = true;
//     } else {
//         // for greater than 2
//         // It is important to note that Math.sqrt(n) is used for shorter comparison 
//         // if you have to compare 2 to 10000... number
//         // http://mathandmultimedia.com/2012/06/02/determining-primes-through-square-root/
//         let numSquareRoot = Math.sqrt(n);
//         for (let i = 2; i <= numSquareRoot; i++) {
//             // is it divisible to i?
//             if (n % i === 0) {
//                 isPrime = false;
//             } else {
//                 isPrime = true;
//             }
//         }
//     }

// }

const isPrime = (n) => {
    n = Number.parseInt(n);
    
    const isNPrimeNumber = (n) => {
        for (let i = 2, sqrt = Math.sqrt(n) ; i <= sqrt; i++) {
            if (n % i === 0) {
                return false;
            } 
        }
        return (n > 1)
    }
    
    document.getElementById('problem-eight-output').textContent = `Is ${n} prime? ${isNPrimeNumber(n)}`;    
}