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
      method: "POST", 
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

const signupButton = document.getElementById("signUpBtn");
signupButton.addEventListener("click", handleSignup),
  showError("Sample Error Message");


