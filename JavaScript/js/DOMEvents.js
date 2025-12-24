// let btn = document.getElementById("btn");

// btn.addEventListener("mouseout",function(){
//     alert("Mouse Out");
// })

// let dd = document.getElementById("dropdown");

// dd.addEventListener("change",function(){
//     confirm("option changed");
// })

// let double = document.getElementById("dc");

// double.addEventListener("dblclick", function(){
//     alert("Double clicked");
// })


let tt = document.getElementById("key");

tt.addEventListener("keypress",function(e){
    console.log(e.target.value);
})