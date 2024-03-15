function productArrayPuzzle(arr){
    let n=arr.length;
    let leftProducts=[];
    let rightProducts=[];
    let productArray=new Array(n);

// Calculate the products of all elements to the left of the current element

    for(let i=0;i<n;i++){
         leftProducts[0]=1;
        leftProducts[i]=leftProducts[i-1]*arr[i-1];
     }

 // Calculate the products of all elements to right of the current element

    for(let i=n-2;i>=0;i--){
        rightProducts[n-1]=1;
        rightProducts[i]=rightProducts[i+1]*arr[i+1];
    }

// Multiply the left and right products to get the final product array

    for(let i=0;i<n;i++){
        productArray[i]=leftProducts[i]*rightProducts[i];
    }
return productArray;


}

let arr=[1,2,3,4,5];
console.log(productArrayPuzzle(arr));