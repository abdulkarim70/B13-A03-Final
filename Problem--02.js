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
          
