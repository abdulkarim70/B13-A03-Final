function validOtp(otp) {
if(typeof otp=='string' && otp.length ==8 && otp.startsWith('ph-') ){
  return true
}
else{return false}

}
          
let otp1= validOtp('ph-10985')
console.log(otp1)