function hover() {
    document.getElementById("hover-bar").style.height = "200px";
    document.getElementById("but").style.display = "inline-block";
    document.getElementById("but1").style.display = "none";
    

}

function butt() {
    document.getElementById("but").style.display = "none";
    document.getElementById("hover-bar").style.height = 0;
    document.getElementById("but1").style.display = "inline-block";
}





const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');





const hamburger = document.querySelector(".hamburger");
const navi = document.querySelector(".navi");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navi.classList.toggle("active");
}