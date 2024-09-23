//alert('Feature js added');
//console.log('features loaded')
document.getElementById('cash-out-switch').addEventListener('click',function(){
 console.log('show cash out section ');
 showSectionById('cash-out-form');

})

// click add money
document.getElementById('add-money-switch').addEventListener('click',function(){

console.log('show add money button');
showSectionById('add-money-form')
})

// click transaction
document.getElementById('transaction-switch').addEventListener('click',function(){
    showSectionById('transection-section')
})