function subarrayWithLeastAverage(A, k) {
    let sum = 0;
    let minAvg = Infinity;
    let minIndex = 0;
    
    // Calculate sum of the first window of size k
    for (let i = 0; i < k; i++) {
      sum += A[i];
    }
    
    // Set initial minimum average and index
    minAvg = sum / k;
    
    // Iterate through the array to find the window with the least average

    for (let i = k; i < A.length; i++) {
      sum += A[i] - A[i - k]; 
      let currentAvg = sum / k;
      if (currentAvg < minAvg) {
        minAvg = currentAvg;
        minIndex = i - k + 1; 
      }
    }
    
    return minIndex;
}


let input1 = [3, 7, 90, 20, 10, 50, 40];
let input2 = [3, 7, 5, 20, -10, 0, 12];
let k1 = 3;
let k2 = 2;

const output1 = subarrayWithLeastAverage(input1, k1); 
const output2 = subarrayWithLeastAverage(input2, k2); 

console.log(output1); 
console.log(output2); 
