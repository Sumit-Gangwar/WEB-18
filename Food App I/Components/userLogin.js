function userLogin(){
const user= localStorage.getItem("loginCred");
let signup=document.getElementsByClassName("signup");
let login=document.getElementsByClassName("login");
if(user===null){
  signup[0].innerHTML=`<a href="./signup.html">SignUp</a>`
  login[0].innerHTML=`<a href="./login.html">Login</a>`
}
else{
  signup[0].innerHTML=`Hi, ${user}`;
  login[0].innerHTML=`Logout`;
}

}

function logout(login,signup){
        login[0].innerHTML=`<a href="./login.html">Login</a>`;
        signup[0].innerHTML=`<a href="./signup.html">SignUp</a>`;
       localStorage.removeItem("loginCred");
       window.location.reload();
}

export {userLogin,logout};