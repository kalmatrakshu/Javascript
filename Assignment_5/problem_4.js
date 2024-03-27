function closestMinMaxArraySize(A) {
    let minIdx = -1;
    let maxIdx = -1;
    let minMaxSubarraySize = 0;
  
    // Find the indices of the minimum and maximum values in the array
    for (let i = 0; i < A.length; i++) {
      if (minIdx === -1 || A[i] < A[minIdx]) {
        minIdx = i;
      }
      if (maxIdx === -1 || A[i] > A[maxIdx]) {
        maxIdx = i;
      }
    }
  
    // Calculate the size of the smallest subarray containing both the minimum and maximum values
    if (minIdx < maxIdx) {
      let subarray1 = A.length - (maxIdx - minIdx);
      minMaxSubarraySize=subarray1;
} else {
      let subarray2 = A.length - (minIdx - maxIdx);
      minMaxSubarraySize=subarray2;

    }
  
    return minMaxSubarraySize;
  }
  
  console.log(closestMinMaxArraySize([ 6,7,5,8,9])); // Output: 3
  console.log(closestMinMaxArraySize([2, 6, 1, 6, 9])); // Output: 3