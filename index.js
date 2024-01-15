let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
let cross_icon = document.querySelector(".cross-icon");

icon.addEventListener("click", () => {

    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
  
});

