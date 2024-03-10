/*..Implement your own search function for strings. dont use builtin function ..*/


function searchString(inputString, searchTerm) {
    for (let i = 0; i <= inputString.length - searchTerm.length; i++) {
      let j;
      for (j = 0; j < searchTerm.length; j++) {
        if (inputString[i + j] !== searchTerm[j]) {
          break;
        }
      }
      if (j === searchTerm.length) {
        return i; // Return the index of the start of the match
      }
    }
    return ("search item not found"); // Return -1 if the search term is not found
  }
  
  // Example usage
  let inputString = "This is a sample input string for searching";
  let searchTerm = "sample";
  let result = searchString(inputString, searchTerm);
  console.log(result); // This will print the index of the start of the match or -1 if not found
  