let button = document.getElementById("btn");
let item = document.getElementsByClassName("item")[0];

button.addEventListener("click", function(){
    item.classList.toggle("item");
})