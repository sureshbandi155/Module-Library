$(document).ready(function(){
    $('.outer-layer-slick1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

