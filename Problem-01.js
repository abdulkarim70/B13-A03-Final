



function newPrice (currentPrice , discount ) {
          let discountedPrice= currentPrice-currentPrice*discount/100;
if(typeof currentPrice !=='number' || discount<0 || discount>100 || typeof discount!=="number"){
    return 'Invalid'
}

 return discountedPrice.toFixed(3);
         

}
