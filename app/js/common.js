$(document).ready(function() {
	var swiper = new Swiper('.s-auto-swiper-container', {
		loop: true,
     },
     autoplay: {
    	delay: 500
  	},
    });
    var swiper = new Swiper('.s-works-swiper-container', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});
