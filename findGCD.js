function generalizedGCD(num, arr)
{
    let result = 1;
    let nextStep = true
    
    for (let i=0; nextStep; i++) {
        if (arr[i] % result === 0) {
            if(i === num - 1) {
                result++
                i = 0;
            }
        } else {
            result--
            nextStep = false 
        }
        
    }

    console.log(result)
}

// generalizedGCD(5, [2,3,4,5,6])
generalizedGCD(5, [12, 24, 48, 60, 72])