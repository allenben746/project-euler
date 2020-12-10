// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)

//[0,1,0,0,0,0,1,0,0,0]
//[0,1,1,1,0,1,1,1,1,0]
{
    //Gives algo the true array
    
    let processedStates = []
    
    for (let dayCount=1; dayCount <= days; dayCount++) {
        
        
        for(let i=3; i <= states.length; i++) {
        states.unshift(0)
        states.push(0)
        const statesSnippet = states.slice(i-3, i);
        
        const homeOne = statesSnippet[0];
        let homeTwo;
        const homeThree = statesSnippet[2];

        if (homeOne === homeThree) {
            homeTwo = 0
        } else {
            homeTwo = 1
        }
            
            processedStates.push(homeTwo);
        }
        if (dayCount === days) {
            return processedStates
        } else {
           states = processedStates.slice(9)
        }
    }
    // console.log(processedStates);
    // return processedStates
}
// FUNCTION SIGNATURE ENDS