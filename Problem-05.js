function  analyzeText(str) {
if()
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


let test =analyzeText("A quick brown fox")
console.log(test)