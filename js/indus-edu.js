var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".backTop-btn").fadeIn("slow");
    } else {
      $(".backTop-btn").fadeOut("slow");
    }
  });
  $("a[href='#backTop']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
