function countSubarrays(A, B) {
    let count = 0;
    for (let start = 0; start < A.length; start++) {
      let sum = 0;
      for (let end = start; end < A.length; end++) {
        sum += A[end];
        if (sum < B) { 
          count++;
        } else {
          break; // exit the inner loop if the sum is greater than or equal to B
        }
      }
    }
    return count;
}

const A1 = [2, 5, 6];
const B1 = 10;

const A2 = [1, 11, 2, 3, 15];
const B2 = 10;

const output1 = countSubarrays(A1, B1); 
const output2 = countSubarrays(A2, B2); 

console.log(output1); // Output: 4
console.log(output2); // Output: 4


