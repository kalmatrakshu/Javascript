// /*...........2.upside down pyramid.....*/

let n = 5; 
for (let i = n; i >= 1; i--) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}

//...using function......//

function pyramid(num){
    for(let i=num;i>=1;i--){  
        let row='';
        for(let j=0;j<num-i;j++){ 
        
            row+=' '; //
        }
        for(let k=1;k<=2*i-1; k++){ 
            row+=' * ';
        } 
        console.log(row);
    }
    
}

pyramid(5);