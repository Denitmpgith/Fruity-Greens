const close = document.querySelectorAll(".closepopup");
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.style.display = "none";
    e.preventDefault();
  });
});
