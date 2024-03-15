function TimeEquality(arr){
    let maxArr=arr[0];

    for(let i=0;i<=arr.length;i++){
        if(maxArr<arr[i]){
            maxArr=arr[i];
        }
    }
    let sumOfDiff=0;
    for(let i=0;i<arr.length;i++){

        sumOfDiff+=maxArr-arr[i];
        
    }
    return sumOfDiff;
}

let arr=[2, 4, 1, 3, 2];

console.log( TimeEquality(arr));