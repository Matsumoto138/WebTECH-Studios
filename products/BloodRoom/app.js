const navbarBtn = document.querySelector(".navbar-toggler");
const navBar = document.querySelector("#navbar");
const links = document.querySelectorAll(".nav-link");
var counter = 0;
var scrollPosition = window.pageYOffset;


navbarBtn.addEventListener("click",()=>{
    var currentScroll = window.pageYOffset;
    console.log("working");
    counter++;
    if (counter%2 == 1) {
        navBar.style.background = "rgba(230, 230, 230,0.9)";
        document.getElementById("ana-sayfa-link").style.color = "black";
        document.getElementById("hakkımda-link").style.color = "black";
        document.getElementById("ürünler-link").style.color = "black";
        document.getElementById("iletişim-link").style.color = "black";
    }

    else if (counter%2 == 0 && currentScroll < 100){
        navBar.style.background = "rgba(230, 230, 230,0.0)";
        
    }

    
})

window.onscroll = function(){

    var currentScroll = window.pageYOffset;
    if (scrollPosition > currentScroll) {
        document.getElementById("navbar").style.top = "0";
    }

    else{
        document.getElementById("navbar").style.top = "-100px";
    }
    scrollPosition = currentScroll;

    if (scrollPosition < 100) {

        document.getElementById("ana-sayfa-link").style.color = "white";
        document.getElementById("hakkımda-link").style.color = "white";
        document.getElementById("ürünler-link").style.color = "white";
        document.getElementById("iletişim-link").style.color = "white";
        if (counter%2 == 1) {
            navBar.style.background = "rgba(230, 230, 230,0.9)";
            
        }

        else{
            navBar.style.background = "rgba(230, 230, 230,0.0)";
            
        }
        
    }

    else{
        navBar.style.background = "rgba(230, 230, 230,0.9)";
        document.getElementById("ana-sayfa-link").style.color = "black";
        document.getElementById("hakkımda-link").style.color = "black";
        document.getElementById("ürünler-link").style.color = "black";
        document.getElementById("iletişim-link").style.color = "black";
    }
}

