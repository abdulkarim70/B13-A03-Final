function gonoVote(array) {
    if(!Array.isArray(array)){
return "Invalid";
    }
         let countHa=0;
         let countNa=0;
       for (let ans of array){
        if(ans==='ha'){
            countHa++;
        }
        if(ans==='na'){
            countNa++;
        }
       }
  if(countHa>countNa){
    return true;
  }
 if(countHa==countNa){
    return "equal";
 }
 else {
    return false;
 }
 
}

