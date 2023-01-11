// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();
//   if (wScroll >= 5) {
//     $("nav")
//       .css({
//         transition: "all 1s",
//       })
//       .addClass("navbg");
//   } else {
//     $("nav")
//       .css({
//         transition: "all 1s",
//       })
//       .removeClass("navbg");
//   }
// });
// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();
//   if (wScroll >= 5) {
//     $("nav")
//       .css({
//         transition: "all 1s",
//       })
//       .addClass("navbg");
//     $(".menu ul li a").addClass("color2");
//     $(".menu ul li a").removeClass("color1");
//   } else {
//     $("nav")
//       .css({
//         transition: "all 1s",
//       })
//       .removeClass("navbg");
//     $(".menu ul li a").addClass("color1");
//     $(".menu ul li a").removeClass("color2");
//   }
// });
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $("nav").css({ transition: "all 0.5s" });
  if (wScroll >= 5) {
    $("nav").addClass("navbg");
    $(".menu ul li a").addClass("color2").removeClass("color1");
  } else {
    $("nav").removeClass("navbg");
    $(".menu ul li a").addClass("color1").removeClass("color2");
  }
});
