/*......Create a calculator to perform  sum, subraction, multiplication and division of 2 integers provided by user ....*/

 function calculator(num1,num2,operation){
    switch(operation) {
        case 'add':
            return num1+num2;
          
        case 'sub':
           return num1-num2;

        case 'mul':
         return num1*num2;

         case 'div':
         if(num2!=0){
           return num1/num2;
         }
        else{
           return ("not divisible by Zero");
        }
        default:
            return("not a valid operatiom")
        
    }
}
let num1=10;
let num2=5;

console.log("Addition :",calculator(num1,num2,'add'));
console.log("Substraction :",calculator(num1,num2,'sub'));
console.log("Multiplication :",calculator(num1,num2,'mul'));
console.log("Division :",calculator(num1,num2,'div'));

