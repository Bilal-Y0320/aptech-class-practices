let button = document.getElementById("btn");
let navbar = document.getElementsByClassName("nav")[0];

button.addEventListener("click", function(){
    navbar.classList.toggle("nav");
})
