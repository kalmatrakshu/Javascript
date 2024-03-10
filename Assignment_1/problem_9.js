 /*.....Implement array reversal. dont use builtin function ...*/

 function reverseArray(person){

       let reverseArr=[];

    for(i=person.length-1;i>=0;i--){
        reverseArr+=person[i];
        reverseArr += " "; //to add space between the items in the array.
        
    }
    return(reverseArr);

 }
   console.log( reverseArray(["ranju","chai","Rakshu","nevi"]));
