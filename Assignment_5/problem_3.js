function countAGSubsequences(A) {
    const MOD = 1000000007;
    let count = 0;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 'A') {
        for (let j = i + 1; j < A.length; j++) {
          if (A[j] === 'G') {
            count++;
            count %= MOD;
          }
        }
      }
    }
  
    return count;
  }
  
  console.log(countAGSubsequences("ABCGAG"));  // Output: 3
  console.log(countAGSubsequences("GAB"));     // Output: 0
  