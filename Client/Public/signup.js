


const handleSignup = async () => {
    const formValue = {
        email: document.getElementById('emailID').value,
        passowrd: document.getElementById('password').value,
        repeatPassword: document.getElementById('repeatPassword').value,
    }
    const forDataValidated = validateSignup(formValue)

    if(formDataValidated) {
    
    const response = await fetch('/signup', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc. 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) 
    });
    console.log(response)
    if(response.status !== 200) {
        const responseBody = await response.json()
        console.log(responseBody)
        showError(responseBody.error)
    }
  }
}

const validateSignup = (formValue) => {

    if( (!formValue.email || formValue.email === "")) {

    }

    if( (!formValue.password || formValue.password === "")) {

    }

    if( (!formValue.repeatPassword || formValue.repeatPassword === "")) {

    }
    
    if (!formValue.email.includes('@')) {
        
    }

    if(formValue.password === formValue.repeatPassword) {

    }
}

const showError = (errorMessage) => {
    const body = document.getElementsByTagName('body')[0]

    body.insertAdjacentHTML('beforeend', `
    <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        ${errorMessage}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" 
      data-bs-dismiss="toast" 
            aria-label="Close" onClick=""></button>
    </div>
  </div>  
</div>`)
}

const closeError = () => {
    const toast = document.getElementById
}

const signupButton = document.getElementById("signupBtn")
signupButton.addEventListener('click', handleSignup),

showError('Sample Error Message')

// const inputElement = document.getElementById('emailId');

// const handleUserType = () => {
//     console.log(inputElement.value)
// }

// const userSelectsInputElement = () => {
//     console.log('user clicked on the input form')
// }

// const checkEmail = () => {
//     console.log('focus out')
//     const emailInput = inputElement.value
//     if(emailInput.includes('@')){
//         console.log('valid email')
//     } else {
//         console.error('invalid email')
//     }
// }

// inputElement.onkeyup = handleUserType;

// inputElement.onfocus = userSelectsInputElement

// inputElement.addEventListener('focusout', checkEmail)



