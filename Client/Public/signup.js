const inputElement = document.getElementById('emailId');

const handleUserType = () => {
    console.log(inputElement.value)
}

const userSelectsInputElement = () => {
    console.log('user clicked on the input form')
}

const checkEmail = () => {
    console.log('focus out')
    const emailInput = inputElement.value
    if(emailInput.includes('@')){
        console.log('valid email')
    } else {
        console.error('invalid email')
    }
}

inputElement.onkeyup = handleUserType;

inputElement.onfocus = userSelectsInputElement

inputElement.addEventListener('focusout', checkEmail)



