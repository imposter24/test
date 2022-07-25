$(document).ready(function (e) {
  $(".seva-btn").on("mouseenter", function (e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({ top: y, left: x });
  });
  $(".seva-btn").on("mouseout", function (e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({ top: y, left: x });
  });

  if ($(".info-holder").length > 0) {
    $(".info-holder").matchHeight();
  }
});
