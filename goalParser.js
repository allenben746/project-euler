// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

const interpret = function(command) {
    let result = ''
    let currentMatch = "";

    for(let i=0; i < command.length; i++) {
        currentMatch = currentMatch.concat(command[i])

        switch (currentMatch) {
            case 'G':
                result = result.concat(currentMatch)
                currentMatch = ""
            break;
            case '()':
                result = result.concat("o")
                currentMatch = ""
            break;
            case '(al)':
                result = result.concat("al")
                currentMatch = ""
            default:
        }
    }

    console.log('Result:', result)
};

interpret("G()(al)")
interpret("G()()()()(al)")
interpret("(al)G(al)()()G")