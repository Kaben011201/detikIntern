$(document).ready(function () {
  var $carousel = $(".slick-carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false,
        },
      },
    ],
  });

  // Custom Next Button
  $(".custom-next").on("click", function () {
    $carousel.slick("slickNext");
  });

  // Custom Previous Button
  $(".custom-prev").on("click", function () {
    $carousel.slick("slickPrev");
  });
});
