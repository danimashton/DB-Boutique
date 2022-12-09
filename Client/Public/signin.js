const signIn = async (event) => {
  event.preventDefault()
  const formData = {
    email: document.getElementById ('emailInput').value,
    password: document.getElementById ('passwordInput').value,
  }
  const response = await fetch("/signIn", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: formValue.password,
      email: formValue.email,
    }),
  });

  console.log(response)
}

const signInButton = document.getElementById ('signInBtn')

signInButton.addEventListener('click', signIn)




// const handleSignin = async (event) => {
//     event.preventDefault();
//     const formValue = {
//       email: document.getElementById("emailID").value,
//       password: document.getElementById("password").value,
//     };
  
//     const formDataValidated = validateSignin(formValue);
  
//     if (formDataValidated) {
//       const response = await fetch("/signin", {
//         method: "POST", 
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formValue),
//       });
//       console.log(response);
//       if (response.status === 200) {
//         console.log("happy path");
//         window.location.assign("/leggings");
//       } else {
//         const responseBody = await response.json();
//         console.log(responseBody);
//         showError(responseBody.error);
//       }
//     }
//   };
  
//   const validateSignin = (formValue) => {
//     if (!formValue.email || formValue.email === "") {
//       return false;
//     }
  
//     if (!formValue.password || formValue.password === "") {
//       return false;
//     }
  
//     if (!formValue.email.includes("@")) {
//       return false;
//     }
  
//     if (formValue.password !== formValue.repeatPassword) {
//       return false;
//     }
//     return true;
//   };
  
//   const signinButton = document.getElementById("signInBtn");
//   signinButton.addEventListener("click", handleSignin),
//     showError("Sample Error Message");