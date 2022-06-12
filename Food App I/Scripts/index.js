console.log("Food App I");

import navbar from "../Components/navbar.js";
import {userLogin,logout} from "../Components/userLogin.js";
document.getElementById("navbar").innerHTML = navbar();
let container=document.querySelector("#container");
let signup=document.getElementsByClassName("signup");
let login=document.getElementsByClassName("login");
let search = document.querySelector("#item");
let searchDiv = document.querySelector("#search");
search.addEventListener("input", () => {
  magic(getData,500);
});
let id;

function getData() {
  let input = document.querySelector("#item").value;
  if(input===""){
    search.style.borderBottomLeftRadius="15px";
    search.style.borderBottomRightRadius="15px";
   return container.style.display="none";
}
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  fetchData(url);
  
}
function fetchData(url){
  try {
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        showData(res.meals);
    })  
} catch (error) {
   
}
}

function magic(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
}

function showData(data){
    container.innerHTML=null;
    search.style.borderBottomLeftRadius="0px";
    search.style.borderBottomRightRadius="0px";
    container.style.display="block";
data.forEach(element => {
    let box=document.createElement("div");
    box.setAttribute("class","box");
    let img=document.createElement("img");
    let dish=document.createElement("h4");
    let country=document.createElement("p"); 
    img.src=element.strMealThumb; 
    dish.innerText=element.strMeal;
    country.innerText=element.strArea;
    box.append(img,dish,country);
    container.append(box);
});
    
}
login[0].addEventListener("click",()=>{
  logout(login,signup);
});
userLogin();