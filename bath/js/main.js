$(document).ready(function() {
	$('.flowing-scroll').on( 'click', function(){
    var el = $(this);
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') {
        $('html').animate({
    	    scrollTop: $(dest).offset().top
        }, 500
        );
    }
    return false;
});
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

	const menuBtn = document.getElementsByClassName('menu__btn')[0],
	      menuBbody = document.getElementsByClassName('menu__body')[0]

	menuBtn.addEventListener('click', () =>{
	  menuBtn.classList.toggle("active");
	  menuBbody.classList.toggle("active");
	});

	document.body.addEventListener('click', (e) =>{
	  let path = e.path;
	  if (!path.includes(menuBbody) && !path.includes(menuBtn)){
	    menuBbody.classList.remove("active");
	    menuBtn.classList.remove("active");
	  }
	});
});
