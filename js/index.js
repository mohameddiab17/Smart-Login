
let emailInput = document.getElementById("email-login-input");
let passwordInput = document.getElementById("password-login-input");
let alertMessage = document.getElementById("alert-message");
let logInBtn = document.getElementById("login-btn");
let userInfo = [];

if (localStorage.getItem("userInfo") != null) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
}

function signIn() {
    if (inputsIsEmpty()==true) 
    {
        getAlertMessage("All Inputs Is Required" , "#DC3542")
    }
    else
    {
        if (checkEmailAndPasswordAreValid()) 
        {
            navigateToAnotherPage();
            clearInputs();
        }
        else
        {
            getAlertMessage('Email or Password inCorrect','#DC3542');
        }
    }
}


function checkEmailAndPasswordAreValid() {
    for (let i = 0; i < userInfo.length; i++) {
        if(userInfo[i].email == emailInput.value && userInfo[i].password == passwordInput.value){
            localStorage.setItem("userName" , userInfo[i].name);
            return true;
        }
    }
}

function getAlertMessage(text , color) {
    alertMessage.classList.replace("d-none" , "d-block");
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}

function inputsIsEmpty() {
    if (emailInput.value == "" || passwordInput.value == "") {
        return true
    }else{
        return false
    }
}

function navigateToAnotherPage() {
    window.location.href = 'home.html';
}

function clearInputs() {
    emailInput.value = ""
    passwordInput.value = ""
}

logInBtn.addEventListener("click" , signIn);
document.addEventListener("keydown" , function (event) {
    if (event.key === "Enter") {
        signIn()
    }
})