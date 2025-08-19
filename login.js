
let Btn = document.getElementById("submit");


Btn.addEventListener("click", function(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
    let remember = document.getElementById("rememberMe");

    if(remember.checked){
        localStorage.setItem("name",name.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",pass.value);
    }else{
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }

});

window.onload = function() {
    let savedName = localStorage.getItem("name");
    let savedEmail = localStorage.getItem("email");
    let savedPass = localStorage.getItem("password");

    if(savedName && savedEmail && savedPass){
        document.getElementById("name").value = savedName;
        document.getElementById("email").value = savedEmail;
        document.getElementById("password").value = savedPass;
        document.getElementById("rememberMe").checked = true;
    }
};