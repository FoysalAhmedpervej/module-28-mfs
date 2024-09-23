//alert('add meney js added');
//console.log('add money loaded');
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();


    //getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value ', addMoney);

    const addMoney = getInputFieldValueById('add-money-input');   
    const pinOne = getInputFieldValueById('pin-input-one');
    //console.log(typeof pinOne)        ;
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    //wrong way to verify
    if(pinOne === 1234){
        const balance = getTextFieldValueById('totalBalance');
        const newBalance = balance + addMoney;
        document.getElementById('totalBalance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText= `Added: ${addMoney} tk. Balance: ${newBalance}`;
        console.log(p);
        document.getElementById('transaction-container').appendChild(p);

    }else{
        alert('Failed to add money');
    }
    

});