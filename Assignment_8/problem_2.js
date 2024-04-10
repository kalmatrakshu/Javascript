// * for the specific character of a string */

function countOccurrencesWithoutBuiltin(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}


const inputString = "Hello, how are you?";
const characterToCount = 'o';
console.log(countOccurrencesWithoutBuiltin(inputString, characterToCount));

/* for all the charaters of the string */

function countAllOccurrences(str) {
    const charMap = {};
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }
  
  
  const inputString1 = "Hello, how are you?";
  console.log(countAllOccurrences(inputString1));
  