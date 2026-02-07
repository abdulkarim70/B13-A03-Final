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


