// machine -> give id and take value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine -> id -> get balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}