function countGoodSubarrays(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j];
            if ((j - i + 1) % 2 === 0 && sum < B) {
                count++;
            }
            if ((j - i + 1) % 2 !== 0 && sum > B) {
                count++;
            }
        }
    }
    return count;
}


let A1 = [1, 2, 3, 4, 5];
let B1 = 4;
console.log(countGoodSubarrays(A1, B1)); 

let A2 = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9];
let B2 = 65;
console.log(countGoodSubarrays(A2, B2)); 
