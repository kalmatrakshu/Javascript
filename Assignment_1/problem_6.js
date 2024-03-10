/*...6.how iterate over an object data? explain with an example..*/


let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2021
  };
  //...by using for..in loop we can iterate through array of obejcts...//
for(let key in car){
    console.log(key +":" + car[key]);
}

//..by using object.keys() method.......//
  Object.keys(car).forEach(key => {
    console.log(key + ': ' + car[key]);
  });
console.log(car);