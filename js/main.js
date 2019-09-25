$(function () {
    $('.gallery>ul').slick({
        arrows: true,
        dots: true,
        dotsClass: 'gallery__dots',
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        appendArrows:$('.gallery__navigation'),
        appendDots:$('.gallery__navigation'),
        prevArrow: '<button type="button" class="gallery__btn gallery__btn_left"></button>',
        nextArrow: '<button type="button" class="gallery__btn gallery__btn_right"></button>',
        responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                variableWidth: true
            }
        }]
    });
});