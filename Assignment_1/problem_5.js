/*4. how to iterate over an array? explain with an example..*/

let cars=["Bmw","volvu","audi","rolls royce","inova","maruthi"]
for (let i=0; i<cars.length;i++){
    console.log(cars[i]);
}
//...for..in loop ...//
for(let i in cars){
    console.log( cars[i]);
}
