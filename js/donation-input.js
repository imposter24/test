$(document).ready(function () {
  $(document).on("focus", ".custom-amount-input", function () {
    $(".dollar-sign").css("color", "#2cc3a4");
    $(this).css("color", "#2cc3a4");
    $(this).css("border-color", "#2cc3a4");
    $(".custom-amount-label").css("color", "#2cc3a4");
  });

  $(document).on("blur", ".custom-amount-input", function () {
    if ($(this).val() == "") {
      $(".dollar-sign").css("color", "#6c757d");
      $(this).css("color", "#6c757d");
      $(this).css("border-color", "#6c757d");
      $(".custom-amount-label").css("color", "#6c757d");
    } else {
      $(".dollar-sign").css("color", "#2cc3a4");
      $(this).css("color", "#2cc3a4");
      $(this).css("border-color", "#2cc3a4");
      $(".custom-amount-label").css("color", "#2cc3a4");
    }
  });

  $(document).on("focus", ".full-name-input", function () {
    $(".full-name-icon").css("color", "#2cc3a4");
    $(this).css("color", "#2cc3a4");
    $(this).css("border-color", "#2cc3a4");
    $(".full-name-label").css("color", "#2cc3a4");
  });

  $(document).on("blur", ".full-name-input", function () {
    if ($(this).val() == "") {
      $(".full-name-icon").css("color", "#6c757d");
      $(this).css("color", "#6c757d");
      $(this).css("border-color", "#6c757d");
      $(".full-name-label").css("color", "#6c757d");
    } else {
      $(".full-name-icon").css("color", "#2cc3a4");
      $(this).css("color", "#2cc3a4");
      $(this).css("border-color", "#2cc3a4");
      $(".full-name-label").css("color", "#2cc3a4");
    }
  });

  $(document).on("focus", ".email-input", function () {
    $(".email-icon").css("color", "#2cc3a4");
    $(this).css("color", "#2cc3a4");
    $(this).css("border-color", "#2cc3a4");
    $(".email-label").css("color", "#2cc3a4");
  });

  $(document).on("blur", ".email-input", function () {
    if ($(this).val() == "") {
      $(".email-icon").css("color", "#6c757d");
      $(this).css("color", "#6c757d");
      $(this).css("border-color", "#6c757d");
      $(".email-label").css("color", "#6c757d");
    } else {
      $(".email-icon").css("color", "#2cc3a4");
      $(this).css("color", "#2cc3a4");
      $(this).css("border-color", "#2cc3a4");
      $(".email-label").css("color", "#2cc3a4");
    }
  });

  $(document).on("focus", ".address-input", function () {
    $(".address-icon").css("color", "#2cc3a4");
    $(this).css("color", "#2cc3a4");
    $(this).css("border-color", "#2cc3a4");
    $(".address-label").css("color", "#2cc3a4");
  });

  $(document).on("blur", ".address-input", function () {
    if ($(this).val() == "") {
      $(".address-icon").css("color", "#6c757d");
      $(this).css("color", "#6c757d");
      $(this).css("border-color", "#6c757d");
      $(".address-label").css("color", "#6c757d");
    } else {
      $(".address-icon").css("color", "#2cc3a4");
      $(this).css("color", "#2cc3a4");
      $(this).css("border-color", "#2cc3a4");
      $(".address-label").css("color", "#2cc3a4");
    }
  });

  $(document).on("focus", ".city-input", function () {
    $(".city-icon").css("color", "#2cc3a4");
    $(this).css("color", "#2cc3a4");
    $(this).css("border-color", "#2cc3a4");
    $(".city-label").css("color", "#2cc3a4");
  });

  $(document).on("blur", ".city-input", function () {
    if ($(this).val() == "") {
      $(".city-icon").css("color", "#6c757d");
      $(this).css("color", "#6c757d");
      $(this).css("border-color", "#6c757d");
      $(".city-label").css("color", "#6c757d");
    } else {
      $(".city-icon").css("color", "#2cc3a4");
      $(this).css("color", "#2cc3a4");
      $(this).css("border-color", "#2cc3a4");
      $(".city-label").css("color", "#2cc3a4");
    }
  });
});
