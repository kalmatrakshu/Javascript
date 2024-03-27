/*Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
 */


function countIndices(arr) {
    let n = arr.length;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i];  // Calculate the sum of even-indexed elements
        } else {
            oddSum += arr[i];   // Calculate the sum of odd-indexed elements
        }
    }

    let count = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            let currSum = evenSum - arr[i];  // Calculate the sum after removing the current element
            if (currSum + oddSum === evenSum) {
                count++;
            }
        } else {
            let currSum = oddSum - arr[i];   // Calculate the sum after removing the element
            if (currSum + evenSum === oddSum) {
                count++;
            }
        }
    }
    return count;
}

// Test cases
console.log(countIndices([2, 1, 6, 4]));  // Output: 1
console.log(countIndices([1, 1, 1]));     // Output: 3
