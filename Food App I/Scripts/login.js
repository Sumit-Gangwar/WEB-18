import navbar from "../Components/navbar.js";
import {userLogin,logout} from "../Components/userLogin.js";
document.getElementById("navbar").innerHTML=navbar();
let form = document.querySelector("form");
form.addEventListener("submit", userRes);
let signup=document.getElementsByClassName("signup");
let login=document.getElementsByClassName("login");
let userArr=JSON.parse(localStorage.getItem("userData"));
function userRes() {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;

  checkCred(email,password);
  form.reset();
}
function checkCred(email,password){
  let check=false;
  for(let i=0;i<userArr.length;i++){
    if(userArr[i].email===email && userArr[i].password===password){
      check=true;
      alert("Login Successful");
    localStorage.setItem("loginCred",userArr[i].name);
    }
  }
  if(!check) alert("Invalid email or password");
  window.location.reload();
}
login[0].addEventListener("click",()=>{
    logout(login,signup);
});
userLogin();


