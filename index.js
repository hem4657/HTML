let icon = document.getElementById("icon");
let search = document.getElementById("search");

icon.addEventListener("click",function(){
    if(search.style.display === "none"){
        search.style.display = "inline-block"
        search.focus()
    }
    else{
        search.style.display = "none";
    }
})

let left = document.getElementById("left");
let right = document.getElementById("right");


left.addEventListener("click",function(){
    let items = document.querySelector("click-imag");
    document.querySelector("project1").appendChild(items[0]);
})
