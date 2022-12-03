const handleSignup = async (event) => {
  event.preventDefault();
  const formValue = {
    email: document.getElementById("emailID").value,
    password: document.getElementById("password").value,
    repeatPassword: document.getElementById("repeatPassword").value,
  };

  const formDataValidated = validateSignup(formValue);

  if (formDataValidated) {
    const response = await fetch("/signup", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });
    console.log(response);
    if (response.status === 200) {
      console.log("happy path");
      window.location.assign("/leggings");
    } else {
      const responseBody = await response.json();
      console.log(responseBody);
      showError(responseBody.error);
    }
  }
};

const validateSignup = (formValue) => {
  if (!formValue.email || formValue.email === "") {
    return false;
  }

  if (!formValue.password || formValue.password === "") {
    return false;
  }

  if (!formValue.repeatPassword || formValue.repeatPassword === "") {
    return false;
  }

  if (!formValue.email.includes("@")) {
    return false;
  }

  if (formValue.password !== formValue.repeatPassword) {
    return false;
  }
  return true;
};

const showError = (errorMessage) => {
  const body = document.getElementsByTagName("body")[0];

  body.insertAdjacentHTML(
    "beforeend",
    `
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
</div>`
  );
};

const closeError = () => {
  const toast = document.getElementById;
};

const signupButton = document.getElementById("signUpBtn");
signupButton.addEventListener("click", handleSignup),
  showError("Sample Error Message");

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
