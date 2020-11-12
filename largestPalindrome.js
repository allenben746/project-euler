// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const limit = 998001 //the product of 999 * 999

for(let i=limit; i > 10000; i--) {
    const firstThreeDigits = i.toString().split('', 3)
    const lastThreeDigits = firstThreeDigits.slice().reverse()

    const palindromeArr = firstThreeDigits.concat(lastThreeDigits)

    let palindromeString = '';

    for (let i=0; i < palindromeArr.length; i++) {
        palindromeString = palindromeString + palindromeArr[i]
    }

    const palindrome = parseInt(palindromeString)

    if (palindrome > limit) {
        console.log(`Palindrome (${palindrome}) is greater than limit (${limit}). Discarding.`)
        continue;
    } else {
        let digits = [0, 0]
        for (let i=999; i > 99; i--) {
            if (palindrome % i === 0) {
                digits[0] = i;
                digits[1] = palindrome / i;

                if (digits[0].toString().length > 3 || digits[1].toString().length > 3) {
                    continue;
                } else {
                    console.log(digits)
                    return digits
                }
            } else {
                continue;
            }
            
        }
    }
}