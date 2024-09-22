//alert('cash out js added');
//console.log('cash out loaded');

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    //console.log('clicked inside the click handler');
    const cashOut = getInputFieldValueById('cash-out-input');
    //console.log(cashOut);
    const pinNumber = getInputFieldValueById('pin-input-two');
    //console.log("pin is : ", pinNumber);
if(pinNumber === 1234){
   const balance = getTextFieldValueById('totalBalance');
   const newBalance = balance - cashOut;
   document.getElementById('totalBalance').innerText = newBalance;
}
else{
    alert('Failed to cash out')
}

});
