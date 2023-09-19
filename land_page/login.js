const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

wrapper.classList.add('active');
wrapper.classList.add('active-popup');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});  

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});  

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
}); 

function func(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == 'gautam.arora468@gmail.com' && password == 'abcd'){
        window.location.assign("../dash/dashboard.html");
    }
    else{
        alert("either email or password is wrong");
    }
}
