function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random= Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin =getPin();

    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number=event.target.innerText;
    const typeNumberdFeild = document.getElementById('typed-number');

    const previousTypedNumber = typeNumberdFeild.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberdFeild.value =''
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberdFeild.value=remainingDigits;
        }
    }
    else{

        const newTypedNumber = previousTypedNumber + number;
        typeNumberdFeild.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField =document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberFeild =document.getElementById('typed-number');
    const typedNumber = typeNumberFeild.value;

    const pinSuccessMessage = document.getElementById('pin-success');

    const pinFailureMessage =document.getElementById('pin-failure');

    if(currentPin == typedNumber){

        pinSuccessMessage.style.display='block';
        pinFailureMessage.style.display ='none';

    }
    else{

        pinFailureMessage.style.display ='block';
        pinSuccessMessage.style.display='none';

    }
})

 