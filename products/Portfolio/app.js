const deleteBtn = document.querySelector("#delete");
const textArea = document.querySelector(".form-control");


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
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}


