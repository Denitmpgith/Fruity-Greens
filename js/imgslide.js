var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.opacity = 0;
    x[i].style.transition = "opacity 0.5s";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  x[myIndex - 1].style.opacity = 1;
  // setTimeout(carousel, 5000); // Change image every 2 seconds
}
