const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("lol");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("lol");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

$(document).ready(function () {
  $(document).load().scrollTop(0);
  var offsetTop = 0;
  var navbarHeight = parseInt($(".custom-header").height()) + 40;
  $(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    if (offsetTop < windowTop) {
      $(".custom-header").addClass("sticky");
      $(".custom-header").css("margin-bottom", navbarHeight + "px");
    } else {
      $(".custom-header").removeClass("sticky");
      $(".custom-header").css("margin-bottom", "25px");
    }
  });

  $(".nav-links li a").click(function () {
    $(".nav-links li a span").removeClass("active");
    $(this).find("span").addClass("active");
    $(this).find("span").addClass("active");
  });

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
