function findRepeatedElementsAndFrequencyWithoutBuiltin(arr) {
    const elementFrequency = {};
    const repeatedElements = [];
  
    // Iterate through the array and populate the elementFrequency map
    for (let i = 0; i < arr.length; i++) {
      let isRepeated = false;
      for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
          isRepeated = true;
          break;
        }
      }
      if (!isRepeated) {
        let count = 0;
        for (let k = i; k < arr.length; k++) {
          if (arr[i] === arr[k]) {
            count++;
          }
        }
        if (count > 1) {
          repeatedElements.push(arr[i]);
          elementFrequency[arr[i]] = count;
        }
      }
    }
  
    // Return the repeated elements and their frequencies
    return {
      repeatedElements: repeatedElements,
      elementFrequency: elementFrequency
    };
  }
  
  
  const integerArray = [3, 4, 4, 5, 6, 4, 7, 3, 5, 3];
  const result = findRepeatedElementsAndFrequencyWithoutBuiltin(integerArray);
  console.log(result);
  