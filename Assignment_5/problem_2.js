function maxSumOfRemovedElements(A, B) {
    letSum = 0;
    let N = A.length;
  
    // Calculate prefix sum of the array A
    let prefixSum = [];
    for (let i = 0; i <= N; i++) {
      prefixSum[i] =0;
    }
    for (let i = 1; i <= N; i++) {
   prefixSum[i] = prefixSum[i - 1] + A[i - 1];
    }
  
    // Iterate through all possible combinations of left and right elements
    for (let left = 0; left <= B; left++){    
    let right = B - left;
      let sum = 0;
      for (let i = left; i <= N - right; i++)  {    
      sum += A[i - 1];
      }
      maxSum = (sum > maxSum) ? sum : maxSum;
    }
  
    return maxSum;
  }
  
  
  console.log(maxOfRemovedElements([5, -2, 3, 1, 2], 3)); 

  console.log(maxSumOfRemovedElements([2, 3, -1, 4, 2, 1], 4 ))