let sumOfMultiples = 0;

for (let i=0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sumOfMultiples = sumOfMultiples + i;
    } else {
        //pass
    }
}

console.log(sumOfMultiples);