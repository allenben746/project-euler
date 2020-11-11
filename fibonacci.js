const limit = 4000000;

let firstTerm = 1;
let secondTerm = 2;

let sumOfEvenTerms = 2;

for (let i=0; i < limit; i = firstTerm + secondTerm) {
    let nextTerm = firstTerm + secondTerm;
    if (nextTerm % 2 === 0) {
        sumOfEvenTerms = sumOfEvenTerms + nextTerm;
    }

    firstTerm = secondTerm;
    secondTerm = nextTerm;
}

console.log(sumOfEvenTerms)