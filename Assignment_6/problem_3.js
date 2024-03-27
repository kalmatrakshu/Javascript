function findLeaders(A) {
    const leaders = [];
    let maxRight = -1;
    
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] > maxRight) {
            leaders.push(A[i]); // Add the new leader to the end of the array
            maxRight = A[i]; // Update the maximum element found so far
        }
    }
    
    return leaders.reverse(); // Return the reversed array to obtain the leaders in the correct order
}


console.log(findLeaders([16, 17, 4, 3, 5, 2])); 
console.log(findLeaders([5, 4])); 


