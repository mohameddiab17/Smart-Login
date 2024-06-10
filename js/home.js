
let welcomeMessage = document.getElementById("welcome-message");
let logOutBtn = document.getElementById("logOut-btn");

if (localStorage.getItem("userName") != null) {
    welcomeMessage.innerHTML = localStorage.getItem("userName") ;
}

function logOut() {
    localStorage.removeItem("userName");
    welcomeMessage.innerHTML = "";
    navigateToAnotherPage();
}

function navigateToAnotherPage() {
    window.location.href = 'index.html';
}

logOutBtn.addEventListener("click" , logOut);