// function changeMenu() {
//   let element = document.getElementById("menu__btn");
//   element.classList.toggle("menu__btn-active");
// }

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__menu").toggleClass("header__menu--active");
    $(".header__burger").toggleClass("header__burger--active");
  });
});

$("img.img-svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});
