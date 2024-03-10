/*...Implement string reversal. dont use builtin function ..*/

function reversalString(inputString){
    let reverseString="";

    for(let i=inputString.length-1; i>=0;i--){
        reverseString+=inputString[i];
    }
    return(reverseString);
    
}

console.log(reversalString("good"));


