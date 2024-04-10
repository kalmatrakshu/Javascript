function findPatternIndex(inputString, pattern) {
    for (let i = 0; i <= inputString.length - pattern.length; i++) {
        let j;
        for (j = 0; j < pattern.length; j++) {
            if (inputString[i + j] !== pattern[j]) {
                break;
            }
        }
        if (j === pattern.length) {
            return i; // Found the pattern at index i
        }
    }
    return -1; // Pattern not found
}


const inputString = "hello world";
const userPattern = "lo";
const index = findPatternIndex(inputString, userPattern);
console.log(index); // Output: 3 (index where "lo" starts in "hello world")
