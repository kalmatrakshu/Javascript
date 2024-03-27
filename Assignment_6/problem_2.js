function isPossibleToDivideIntoSubarrays(A) {
    if (A.length < 2) {
        return "NO";
    }
    if (A[0] % 2 === 0 && A.length  % 2 === 0 && A[A.length-1] % 2 ===0) {
        return "YES"; 
    } else {
        return "NO"; 
    }
}


console.log(isPossibleToDivideIntoSubarrays([2, 4, 8, 6])); 
console.log(isPossibleToDivideIntoSubarrays([2, 4, 8, 7, 6])); 