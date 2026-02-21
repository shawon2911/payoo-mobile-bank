// shortening the previous code 
document.getElementById('cashout-btn').addEventListener('click', function(){
    // get the agent number
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length != 11){
        console.log(cashoutNumber);
        alert("Invalid number");
        return;
    }
    // get the amount
    const cashoutAmount = getValueFromInput('cashout-amount');
    if(cashoutAmount <= 0){
        alert("Invalid amount");
        return;
    }
    // get the current balance 
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid amount");
        return;
    }
    // get the pin and do validation
    const cashoutPin = getValueFromInput('cashout-pin');
    if(cashoutPin == "1234"){
        alert("Cash Out Successfull");
        document.getElementById('balance').innerText = newBalance;
    }else{
        alert("invalid pin");
        return;
    }
})





// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // get the agent number
//     const cashoutNumberInput= document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid agent number");
//         return;
//     }
//     // get the amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     if(cashoutAmount <= 0){
//         alert("invalid amount");
//         return;
//     }
//     // get the current balance 
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     console.log(newBalance);
//     // check the condition for show new balance and cash out
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }

//     // get the pin and do validation
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const cashoutPin = cashoutPinInput.value;
//     if(cashoutPin == "1234"){
//         alert("Cash out successfull")
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Invalid Pin");
//         return;
//     }
    
// })