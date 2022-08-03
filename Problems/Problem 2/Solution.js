let palindrome = "kayak";
console.log("Is kayak a palindrome?")
console.log(isPalindrome(palindrome))

function isPalindrome(palindrome){
    let isPalindrome = false;

    // Removing the whitespace by using replace() and regex
    palindrome = palindrome.replace(/\s/g, '');

    for (let i = 0; i < palindrome.length / 2; i++){
        if (palindrome[i] === palindrome[palindrome.length - (i + 1)]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
