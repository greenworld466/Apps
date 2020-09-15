$(function () {
  $(window).on("load", function () {
    $(".perloader").delay(500).fadeOut(500);
  });

  $(".back-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
  });

  var containerEl = document.querySelector(".mixinit");

  var mixer = mixitup(containerEl);

  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });
});
