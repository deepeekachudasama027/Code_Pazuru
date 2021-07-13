$(window).load(function () {
    console.log("hi");
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  });

  $(document).ready(function () {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 1500);
  });

  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });