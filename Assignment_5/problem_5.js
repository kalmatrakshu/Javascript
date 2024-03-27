function bulbs(A) {
    let switches = 0;
    let current = 1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== current) {
            switches++;
            current = 1 - current; // Change the current state
        }
    }
    return switches;
}


console.log(bulbs([0, 1, 0, 1])); // Output: 4
console.log(bulbs([1, 1, 1, 1])); // Output: 0