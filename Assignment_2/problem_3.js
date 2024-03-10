/*Declare an array and print all values in an array using loops - for, while — Use functions*/


let arr=[2,3,4,5,6];
let arr1=[5,6,7,8];

// using for loop
function array(arr){
    let result='';
    for(i=0;i<arr.length;i++){
        result+=arr[i];
        result+=' ';
    }
    return(result);
}

//using while loop

function array1(arr1){
    let result='';
    let i=0;
    while(i<arr1.length){
        result+=arr1[i];
        result+=' ';
        i++;
        
    }
    return(result);
}
console.log(array(arr));
console.log(array1(arr1));

