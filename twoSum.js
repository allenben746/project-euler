const twoSum = function(nums, target) {
    const map = new Map()
    let result;
    
    const recursiveSearch = (num) => {
        if (num < 0) return;
        
        if(map.has(nums[num])) {
            return result = [map.get(nums[num]), num]
        }
        
        map.set(target - nums[num], num)
        
        recursiveSearch(num - 1);
    }
    
    recursiveSearch(nums.length - 1);
     
    return result;
 };

 console.log(twoSum([2,7,11,15], 9))
 console.log(twoSum([3,2,4], 6));
 console.log(twoSum([3,3], 6))