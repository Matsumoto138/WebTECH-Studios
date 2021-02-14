const deleteBtn = document.querySelector("#delete-btn");
const textArea = document.querySelector("#text-area");
const navBtn = document.querySelector(".navbar-toggler");
var counter = 0;

deleteBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    textArea.value = " ";
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

console.log(screen.width);
console.log(screen.height);

navBtn.addEventListener("click" ,()=>{
  counter++;
  let navBar = document.getElementById("navbar");

  if (counter %2 == 1) {
    navBar.style.background = "rgba(33,37,41,0.9)";
  }
  else{
    navBar.style.background = "rgb(33,37,41)";
  }
  
});