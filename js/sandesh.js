function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  }
}

$(document).ready(function () {
  initParadoxWay();
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
