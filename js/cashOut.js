//alert('cash out js added');
//console.log('cash out loaded');

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    //console.log('clicked inside the click handler');
    const cashOut = getInputFieldValueById('cash-out-input');
    //console.log(cashOut);
    const pinNumber = getInputFieldValueById('pin-input-two');
    //console.log("pin is : ", pinNumber);
    if(isNaN(cashOut)){
        alert('Failed to cash out');
        return;
    }
if(pinNumber === 1234){
   const balance = getTextFieldValueById('totalBalance');
   if(balance<cashOut){
    alert('you donot have much money.');
    return;
   }
   const newBalance = balance - cashOut;
   document.getElementById('totalBalance').innerText = newBalance;

   // add to transaction history 
   const div = document.createElement('div');
div.classList.add('bg-yellow-300');  // Wrapped class in quotes
div.innerHTML = `
   <h4 class="text-2xl font-bold">Cash Out</h4>
   <p>${cashOut} withdraw. New Balance: ${newBalance}</p>
`;
document.getElementById('transaction-container').appendChild(div);

}
else{
    alert('Failed to cash out')
}

});
