function maximumSubarray(A, B, C) {
    let maxSum = 0;
    let sum = 0;
    let start = 0;
    
    for (let end = 0; end < A; end++) {
        sum += C[end];

        if (sum <= B && sum > maxSum) {
            maxSum = sum;
        }

        while (sum > B && start <= end) {
            sum -= C[start];
            start++;
        }
        
        if (sum <= B && sum > maxSum) {
            maxSum = sum;
        }
    }
    
    return maxSum;
}

const A1 = 5;
const B1 = 12;
const C1 = [2, 1, 3, 4, 5];

const A2 = 3;
const B2 = 1;
const C2 = [2, 2, 2];

const output1 = maximumSubarray(A1, B1, C1); 
console.log(output1); // Output: 12
console.log(output2); // Output: 0
