//alert('cash out js added');
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut = document.getElementById('cash-out-input').value;
    const pinTwo = document.getElementById('pin-input-two').value;
    if(pinTwo === '1234'){
    const amountMoney = document.getElementById('totalBalance').innerText;
    const newBalance = parseFloat(amountMoney) - parseFloat(cashOut);
    document.getElementById('totalBalance').innerText = newBalance
    }else{
        alert('Failed to cash out . Please try again');
    }
})