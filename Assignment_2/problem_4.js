/*Declare an array and sum of all values in an array using loops - for, while  — Use functions*/


let arr=[2,3,4,5,6];
let arr1=[5,6,7,8];

// using for loop
function array(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
        
    }
    return(sum);
}

//using while loop

function array1(arr1){
    let sum=0;
    let i=0;
    while(i<arr1.length){
        sum+=arr1[i];
        i++;
        
    }
    return(sum);
}
console.log(array(arr));
console.log(array1(arr1));
 
