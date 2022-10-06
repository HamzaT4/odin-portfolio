
let ddButton = document.querySelector(".ddb");
let dtButton = document.querySelector(".label");


ddButton.addEventListener("click", show);
dtButton.addEventListener("click",toggleTheme)

function show() {
 let menu =  document.querySelector(".dropdown-menu")
 menu.classList.toggle("show");
      
}

function toggleTheme(){

let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let root = document.documentElement;
sun.classList.toggle("show-sun");
moon.classList.toggle("show-moon");
root.classList.toggle("light");



}