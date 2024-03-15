function equilibriumIndex(arr) {
    let cumArr = [arr[0]];
    // let count = 0;
    let equilibriumIndices=[];

    // Calculate the cumulative array
    for (let i = 1; i < arr.length; i++) {
        cumArr[i] = cumArr[i - 1] + arr[i];
    }

    for (let i = 1; i < arr.length - 1; i++) { // Iterate through the array elements
        let ls = cumArr[i - 1]; // left sum
        let rs = cumArr[arr.length - 1] - cumArr[i]; // right sum

        if (ls === rs) {
            equilibriumIndices.push(i);
            // count++; // Increment count if left sum equals right sum
        }
       
    }
    if (equilibriumIndices.length === 0) {
        return -1; // Return -1 if no equilibrium index is found
    }

    return equilibriumIndices; 
    // return count;// Return the count of equilibrium indices
}

let arr1 = [1,2,3];
console.log(equilibriumIndex(arr1));