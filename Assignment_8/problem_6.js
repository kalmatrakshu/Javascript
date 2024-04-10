function reverseArrayWithoutMath(arr) {
    
    for (let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArrayWithoutMath(originalArray);
  console.log(reversedArray);  
  