
//select login button
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
let userNameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let userNameVal;
let passwordVal;

//Event listeners
loginBtn.addEventListener("click", logIn);
registerBtn.addEventListener("click", registerNewUser);

//grab data, pass to login route to log user in
function logIn(event) {
    event.preventDefault();
    //get username and password data
    userNameVal = userNameInput.value;
    passwordVal = passwordInput.value;
    console.log(userNameVal);
    //send this data to routes? 
}

function registerNewUser() {}
