let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

css.textContent = body.style.background + ";";


function changeColor(){
	body.style.background = "linear-gradient(to right, " +
							 color1.value +  ", " 
							 +  color2.value + ")";
	css.textContent = body.style.background + ";";
}