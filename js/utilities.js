//alert('utilities file added');
//console.log('utilities loaded');

// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const addMoney = document.getElementById('add-money-input').value;
//     return addMoney;
// }


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}