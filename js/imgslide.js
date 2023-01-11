var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "flex";
  setTimeout(carousel, 2000);
}

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].classList.remove("show");
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].classList.add("show");
//   setTimeout(carousel, 1000);
// }
