console.log("Random Recipe")
import navbar from "../Components/navbar.js";
import {userLogin,logout} from "../Components/userLogin.js";

document.getElementById("navbar").innerHTML = navbar();
let container=document.getElementById("container");
let signup=document.getElementsByClassName("signup");
let login=document.getElementsByClassName("login");
const url="https://www.themealdb.com/api/json/v1/1/random.php";
function randomRecipe(){
    try {
        fetch(url).then((res)=>{
            return res.json();
        }).then((res)=>{
            showData(res.meals);
        })
    } catch (error) {
        
    }
}
function showData(data){
data.forEach(element => {
    let box=document.createElement("div");
    box.setAttribute("class","box");
    let img=document.createElement("img");
    let dish=document.createElement("h2");
    let country=document.createElement("h4");
    let recipe=document.createElement("p"); 
    img.src=element.strMealThumb; 
    dish.innerText=element.strMeal;
    country.innerText=`Type : - ${element.strArea}`;
    recipe.innerText=`Recipe : - ${element.strInstructions}`;
    box.append(img,dish,country,recipe);
    container.append(box);
});
    
}
randomRecipe()
login[0].addEventListener("click",()=>{
    logout(login,signup);
});
userLogin();

