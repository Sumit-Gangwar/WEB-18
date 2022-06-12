import navbar from "../Components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let form = document.querySelector("form");
form.addEventListener("submit", userRes);

let userArr=JSON.parse(localStorage.getItem("userData")) || [];
function userRes() {
  event.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let user = new cretObj(name, email, password);
  userArr.push(user);
  localStorage.setItem("userData",JSON.stringify(userArr));
  form.reset();
  alert(`SignUp Successfully! Press "OK" to login`);
  window.location.href="../login.html";
}

function cretObj(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}
