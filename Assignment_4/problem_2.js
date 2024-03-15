function findQuerySums(A, B) {
    let result = [];
    for (let i = 0; i < B.length; i++) {
        let L = B[i][0];
        let R = B[i][1];
        let sum = 0;
        for (let j = L; j <= R; j++) {
            sum += A[j];
        }
        result.push(sum);
    }
    return result;
}

let A1 = [1, 2, 3, 4, 5];
let B1 = [[0, 3], [1, 2]];
console.log(findQuerySums(A1, B1));