function sumOfAllSubarrays(A) {
    let N = A.length;
    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            for (let k = i; k <= j; k++) {
                result += A[k];
            }
        }
    }
    return result;
}

let input1 = [1, 2, 3];
let input2 = [2, 1, 3];

console.log(sumOfAllSubarrays(input1));
console.log(sumOfAllSubarrays(input2));