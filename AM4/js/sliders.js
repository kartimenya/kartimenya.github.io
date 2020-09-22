$( document ).ready(function() {
  $('.main__slider').slick({
    fade: true,
    arrows: false,
    asNavFor: '.slider__dots',
    infinite: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          swipe: true,
          fade: false
        }
      }
    ]
  })
  $('.slider__dots').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    asNavFor: '.main__slider',
    focusOnSelect: true,
    variableWidth: true,
    swipe: false
  })
  $('.games-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    infinite: false,
    swipe: false,
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="imagines/prev.png" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="imagines/next.png" alt=""></button>',
    dotsClass: 'games__slider-dots dots-style',
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true
        }
      }
    ]
  })

  $('.trailers-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 3,
    infinite: false,
    swipe: false,
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="imagines/prev.png" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="imagines/next.png" alt=""></button>',
    dotsClass: 'trailers__slider-dots dots-style',
    variableWidth:true,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          variableWidth:false,
        }
      }
    ]

  })
});
