
/* SLIDERS */
/*Slider on home page in Hero Section*/
$('.hero__slider').slick({
    arrows: true,
    dots: true,
    nextArrow: '<span class="arrow-circle-next arrow-circle"><i class="fas fa-angle-right arrow-inside"></i></span>',
    prevArrow: '<span class="arrow-circle-prev arrow-circle"><i class="fas fa-angle-left arrow-inside"></i></span>'
});

$(".slick-dots").addClass("container");

// /*Item page Slider */
// $('.items__slider').slick({
//     arrows: true,
//     dots: false,
//     slidesToShow: 4
//   });

/*STICKY PAGE ELEMENTS */
/*Making the Logo part of the header sticky */
$(".header__logo").sticky({
    getWidthFrom: '.header',
    responsiveWidth: true
});

/*Making the main mavigation part of the header sticky */
$(".header__main-nav").sticky({
    topSpacing: 92,
    getWidthFrom: '.header',
    responsiveWidth: true
});


              