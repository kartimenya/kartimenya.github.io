
$( document ).ready(function() {
  $('.top-slider').slick({
    prevArrow: '<button type="button" class="slik-arrow top-slider__arrow top-slider__arrow-prev"><img src="img/top-slider/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slik-arrow top-slider__arrow top-slider__arrow-next"><img src="img/top-slider/next.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
      }
    }
  ]
  });
  $('.slider-activity').slick({
    prevArrow: '<button type="button" class="slik-arrow slider-activity__arrow slider-activity__arrow-prev"><img src="img/activity-slider/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slik-arrow slider-activity__arrow slider-activity__arrow-next"><img src="img/activity-slider/next.svg" alt=""></button>'
  });
  $('.reviews-slider').slick({
    prevArrow: '<button type="button" class="slik-arrow reviews-slider__arrow reviews-slider__arrow-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slik-arrow reviews-slider__arrow reviews-slider__arrow-next"><img src="img/next.svg" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    dotsClass:'reviews-slider__dots',
    variableWidth: true,
    responsive: [
    {
      breakpoint: 870,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });
})
