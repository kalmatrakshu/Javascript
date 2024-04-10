/* palindrome of a string */

function isPalindromeString(str) {
    
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();// the replace method will remove all the non alphabatic charaters 
                                                              // from the string and tolowercase method will change the characters to lower case.
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  
  const stringInput = "A man, a plan, a canal, Panama";
  console.log(isPalindromeString(stringInput));
  
  /* plaindrome of a number*/

  function isPalindromeNumber(num) {
    // Convert number to string
    const numStr = num.toString();
    // Check for palindrome
    return numStr === numStr.split('').reverse().join('');
  }
  
  
  const numberInput = 12321;
  console.log(isPalindromeNumber(numberInput)); // Output: true
  
  