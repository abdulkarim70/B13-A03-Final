

function newPrice (currentPrice , discount ) {
          let discountedPrice= currentPrice-currentPrice*discount/100;
if(typeof currentPrice !=='number' || discount<0 || discount>100 || typeof discount!=="number"){
    return 'Invalid';
}

 return discountedPrice.toFixed(3);
         

}

function validOtp(otp) {
if(typeof otp=='string' && otp.length ==8 && otp.startsWith('ph-') ){
  return true;
}
else if(Array.isArray(otp) || typeof otp=="number" || typeof otp=="object"){
  return "Invalid";
}
 else{
  return false;
 }
}
          
function finalScore (omr) {
  let totalQuestions= omr.right+omr.wrong+omr.skip;
  if(totalQuestions!==100 || typeof omr !=="object" || Array.isArray(omr) ){
    return "Invalid";
  }


  let finalResult= omr.right-omr.wrong*0.5+omr.skip*0
  return Math.round(finalResult);
  
}

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

function  analyzeText(str) {
if(typeof(str)!=="string" || str.trim()===""){
  return 'Invalid'
}
      let words= str.split(" ")  
      let longword ="" ;
      for(let word of words ){
        if(word.length>longword.length){
          longword=word;
        }
      }
let length=str.split(" ").join("").length;
return{
  longwords: longword , token :length
};

}





