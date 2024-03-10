/*..1. Generate * pattern to construct a pyramid .....*/

//..using repeat method : The repeat() method in JavaScript is used to construct
// and return a new string by concatenating the specified string the number of times indicated by the parameter.//

let n1 = 5; 
for (let i = 1; i <= n1; i++) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n1 - i)) + str.repeat(i * 2 - 1)); 
}
//...using function......//

function pyramid(num){
    for(let i=1;i<=num;i++){  
        let row='';
        for(let j=1;j<num-i;j++){ 
        
            row+=' '; //
        }
        for(let k=1;k<=2*i-1; k++){ 
            row+=' * ';
        } 
        console.log(row);
    }
    
}

pyramid(5);