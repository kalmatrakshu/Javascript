/*3. Find sum of N numbers
// eg  1,2,3,4,5---N.....*/

//.....without using function....//
let arr =[1,2,3,4,5];
let sum =0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
        
    }
    console.log(sum);
    
//......using function.....//

function sumOfNum(arr){
    let sum =0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return(sum);
}
 
console.log(sumOfNum([1,2,3,4,5]));