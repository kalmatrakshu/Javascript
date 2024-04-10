let a = 9;
let b = 4;


a = a + b; // Add the value of b to a 
b = a - b; // Subtract the original value of b from the updated value of a to get the original value of a
a = a - b; // Subtract the original value of a (now stored in b) from the updated value of a to get the original value of b 

console.log("a: " + a); // Output: 8 (original value of b)
console.log("b: " + b); // Output: 5 (original value of a)
