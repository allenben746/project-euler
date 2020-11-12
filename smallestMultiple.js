// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSquareDiff(limit, power) {
    //find sum of powers
    let sumOfPowers = 0;
    for(let i=0; i <= limit; i++) {
        sumOfPowers = sumOfPowers + Math.pow(i, power);
    }

    //find power of sum
    let squareOfSum = 0;
    for(let i=0; i <= limit; i++) {
        squareOfSum = squareOfSum + i;
    }

    //power the sum
    squareOfSum = Math.pow(squareOfSum, power);
    
    console.log(squareOfSum - sumOfPowers);
    return squareOfSum - sumOfPowers;
}

sumSquareDiff(100, 2);