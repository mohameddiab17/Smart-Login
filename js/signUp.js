let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let signUpBtn = document.getElementById("signUp-btn");
let alertMessage = document.getElementById("alert-message");
let userInfo = [];

if (localStorage.getItem("userInfo") != null) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"))
}

function signUp() {
    let inputsValue = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value
    }
    getAlertMessage("" , "");
    if (inputsIsEmpty() == true) {
        getAlertMessage("All Inputs Is Required" , "#DC3542")
    }else{
        if (emailAlreadyExist()) {
            getAlertMessage("Email Already Exist" , "#DC3542")
        }else{
            userInfo.push(inputsValue);
            localStorage.setItem("userInfo" , JSON.stringify(userInfo));
            clearInputs();
            navigateToAnotherPage()
        }
    }
    
}


function clearInputs() {
    nameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
}

function emailAlreadyExist() {
    for (let i = 0; i < userInfo.length; i++) {
        if (userInfo[i].email == emailInput.value) {
            return true
        }
    }
}

function inputsIsEmpty() {
    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        return true
    }else{
        return false
    }
}

function getAlertMessage(text , color) {
    alertMessage.classList.replace("d-none" , "d-block");
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}

function navigateToAnotherPage() {
    window.location.href = 'index.html';
}

signUpBtn.addEventListener("click" , signUp);
document.addEventListener("keydown" , function (event) {
    if (event.key === "Enter") {
        signUp()
    }
})

