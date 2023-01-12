$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $("nav").css({ transition: "all 0.5s" });
  if (wScroll < 5) {
    $("nav").removeClass("navbg").removeClass("navbg2").removeClass("navbg3");
    $(".menu ul li a").addClass("color1").removeClass("color2").removeClass("color3");
  } else if (wScroll >= 5 && wScroll < 750) {
    $("nav").removeClass("navbg2").removeClass("navbg3").addClass("navbg");
    $(".menu ul li a").addClass("color2").removeClass("color1").removeClass("color3");
  } else if (wScroll >= 751 && wScroll < 1500) {
    $("nav").removeClass("navbg").removeClass("navbg3").addClass("navbg2");
    $(".menu ul li a").addClass("color3").removeClass("color1").removeClass("color2");
  } else if (wScroll >= 1501) {
    $("nav").removeClass("navbg").removeClass("navbg2").addClass("navbg3");
    $(".menu ul li a").addClass("color1").removeClass("color2").removeClass("color3");
  }
  // console.log(wScroll);
});
