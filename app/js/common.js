$(document).ready(function() {
	var swiper = new Swiper('.s-auto-swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
      },
    });
    var swiper = new Swiper('.s-works-swiper-container', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
