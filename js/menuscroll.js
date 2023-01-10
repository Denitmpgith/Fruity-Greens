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
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll >= 5) {
    $("nav")
      .css({
        transition: "all 1s",
      })
      .addClass("navbg");
    $(".menu ul li a").removeClass("color");
  } else {
    $("nav")
      .css({
        transition: "all 1s",
      })
      .removeClass("navbg");
    $(".menu ul li a").addClass("color");
  }
});
