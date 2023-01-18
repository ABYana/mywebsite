// Loader effect 
  window.onload = function () {
    document.body.classList.add('loaded'); }
    
//Auto Slider
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

//PopUp form
  let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
	
// No auto Slider
let slideInd = 1;
showSlider(slideInd);
function plusSlides(n) {
  showSlider (slideInd += n);
}
function currentSlide(n) {
  showSlider (slideInd = n);
}
function showSlider (n) {
  let i;
  let slider = document.getElementsByClassName("mySlider");
  let dot = document.getElementsByClassName("dots");
  if (n > slider.length) {slideInd = 1}    
  if (n < 1) {slideInd = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slider[slideInd-1].style.display = "block";  
  dot[slideInd-1].className += " active";
}

//Scrolling  page effect  
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();