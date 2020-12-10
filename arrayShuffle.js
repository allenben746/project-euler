// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//Space Complexity - O(n)
//Time Complexity - O(n)

const shuffle = function(nums, n) {
    const splitBy = nums.length / (nums.length / n) 
    
    const arr1 = nums.slice(0, splitBy).reverse();
    const arr2 = nums.slice(splitBy, nums.length).reverse();
    
    const result = [];
    
    const recursiveShuffle = (num) => {
        if (num < 0) return;
        
        result.push(arr1[num]);
        result.push(arr2[num])
        
        recursiveShuffle(num - 1)
    }

    recursiveShuffle(arr1.length - 1)
    
    return result;
};

console.log(shuffle([2,5,1,3,4,7], 3))
console.log(shuffle([1,2,3,4,4,3,2,1], 4))
console.log(shuffle([1,1,2,2], 2))