// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "flex";
//   setTimeout(carousel, 2000);
// }

// // var myIndex = 0;
// // carousel();

// // function carousel() {
// //   var i;
// //   var x = document.getElementsByClassName("mySlides");
// //   for (i = 0; i < x.length; i++) {
// //     x[i].classList.remove("show");
// //   }
// //   myIndex++;
// //   if (myIndex > x.length) {
// //     myIndex = 1;
// //   }
// //   x[myIndex - 1].classList.add("show");
// //   setTimeout(carousel, 1000);
// // }

let slideIndex = 1;
let intervalId;

showSlides(slideIndex); // show the first slide
startAutoSlide(); // start the automatic slide

function plusSlides(n) {
  clearInterval(intervalId);
  showSlides((slideIndex += n));
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(intervalId);
  showSlides((slideIndex = n));
  startAutoSlide();
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    showSlides((slideIndex += 1));
  }, 2000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
