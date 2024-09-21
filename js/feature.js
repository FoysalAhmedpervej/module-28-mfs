//alert('Feature js added');

document.getElementById('cash-out-switch').addEventListener('click',function(){

    // add hidden class to add money section
    document.getElementById('add-money-form').classList.add('hidden');
    // remove hidden class from cash out form
    document.getElementById('cash-out-form').classList.remove('hidden');
})

// click add money
document.getElementById('add-money-switch').addEventListener('click',function(){

    // add hidden class to cash out section
    document.getElementById('cash-out-form').classList.add('hidden');
    //add hidden class to add money form
    document.getElementById('add-money-form').classList.remove('hidden');
})