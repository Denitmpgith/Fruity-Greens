$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll >= 25) {
    $("nav")
      .css({
        transition: "all 1s",
      })
      .addClass("navbg");
  } else {
    $("nav")
      .css({
        transition: "all 1s",
      })
      .removeClass("navbg");
  }
});
