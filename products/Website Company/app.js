const navbarBtn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
const deleteBtn = document.querySelector("#delete-btn");
const textArea = document.querySelector("#text-area");
var counter = 0;
var prevScroll = window.pageYOffset;

navbarBtn.addEventListener("click",()=>{
    counter++;
    if (counter % 2 == 1) {
        navbar.style.background = "rgba(43, 43, 43,0.9)";
        
    }

    else{
        navbar.style.background = "rgba(43, 43, 43,0.2)";
    }
    
});

window.onscroll = function(){
    var currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        document.getElementById("navbar").style.top = "0px";
    }

    else{
        document.getElementById("navbar").style.top = "-70px";
    }

    prevScroll = currentScroll;

    if (currentScroll > 200) {
        navbar.style.background = "rgb(43, 43, 43)";
    }

    else{
        navbar.style.background = "rgba(43, 43, 43,0.2)";
    }
}

deleteBtn.addEventListener("click",(event)=>{
    event.defaultPrevented;
    textArea.value = " ";
    
});