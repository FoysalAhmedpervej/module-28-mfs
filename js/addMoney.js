//alert('add meney js added');
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-money-input').value;
    const pinNumberOne = document.getElementById('pin-input-one').value;
    console.log(addMoney,pinNumberOne);

    if(pinNumberOne === '1234'){
       // alert('yout entered correct pin');
       const totalBalance = document.getElementById('totalBalance').innerText;
       const newBalance = parseFloat(totalBalance) + parseFloat(addMoney);
       document.getElementById('totalBalance').innerText = newBalance;
    }else{
        alert('failed to add money. please try again');
    }
})