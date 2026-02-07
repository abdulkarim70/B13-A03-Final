function finalScore (omr) {
  let totalQuestions= omr.right+omr.wrong+omr.skip
  if(totalQuestions!==100 || typeof omr !=="object" || Array.isArray(omr) ){
    return "Invalid"
  }


  let finalResult= omr.right-omr.wrong*0.5+omr.skip*0
  return Math.round(finalResult)
  
}

