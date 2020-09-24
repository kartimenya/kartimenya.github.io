$( document ).ready(function() {
    $('.header__slider').slick({
      dots: true,
      dotsClass: 'header__slider-btn',
      arrows: true,
      prevArrow: '<button type="button" class="header__slider-prev"><img src="img/back.svg" alt=""></button>',
      nextArrow: '<button type="button" class="header__slider-next"><img src="img/next.svg" alt=""></button>',
      responsive: [
    {
      breakpoint: 811,
      settings: {
        arrows: false,
      }
    }
  ]
  });
  $('.posts__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="posts__slider-prev"><</button>',
    nextArrow: '<button type="button" class="posts__slider-next">></button>',
    responsive: [
  {
    breakpoint: 910,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 510,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });
});
