var lengthOfLongestSubstring = function(s) {
    const trimmedString = s.replace(/ /g, '')
    
    splitString = trimmedString.split('');
    
    const uniqueChars = [];
    
    for (let i=0; i < splitString.length; i++) {
        console.log(splitString[i])
        
        if (uniqueChars.includes(splitString[i])) {
            //pass
        } else {
            uniqueChars.push(splitString[i])
        }
    }
    
};

lengthOfLongestSubstring('hi my name is john');