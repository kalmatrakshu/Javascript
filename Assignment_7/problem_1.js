
function maxSubArraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
    
        currentSum = (currentSum > 0) ? currentSum + arr[i] : arr[i];
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}


let input1 = [1, 2, 3, 4, -10];
let input2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let output1 = maxSubArraySum(input1); // This will result in 10
let output2 = maxSubArraySum(input2); // This will result in 6

console.log(output1); // Output: 10
console.log(output2); // Output: 6
