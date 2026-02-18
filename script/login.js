document.getElementById('login-btn')
    .addEventListener('click', function(){
        // getting the number from the input box
        const inputNumber = document.getElementById('input-number');
        const contactNumber = inputNumber.value;
        // getting the pin from input box
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;
        // checking the condition for login
        if(contactNumber == "01234567890" && pin == "1234"){
            alert("Login Successfull!");
            window.location.assign("/home.html");
        }else{
            alert("Login failed!");
        }
    })