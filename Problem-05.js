function  analyzeText(str) {

      let words= str.split(" ")  
      let longWord ="" ;
      for(let word of words ){
        if(word.length>longWord.length){
          longWord=word;
        }
      }
let length=str.split(" ").join("").length
return{
  longWords: longWord , token :length
};

}


let test =analyzeText("Keep coding keep shining")
console.log(test)