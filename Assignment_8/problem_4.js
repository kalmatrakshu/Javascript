function countVowelsAndConsonants(str) {
    // Initialize counters for vowels and consonants
    let vowelCount = 0;
    let consonantCount = 0;
    
    // Convert the input string to lowercase for easier comparison
    const lowerCaseStr = str.toLowerCase();
    
    // Define the regular expression patterns for vowels and consonants
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    
    // Iterate through each character in the string
    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }
    
    // Return the counts of vowels and consonants
    return { vowels: vowelCount, consonants: consonantCount };
}


const string = "Hello, how are you?";
const counts = countVowelsAndConsonants(string);
console.log(counts);  
