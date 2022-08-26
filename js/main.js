$(function(){
    $('.design-slider').slick({
        dots: false,
        sliderToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/prev-arrow.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/next-arrow.svg" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    sliderToShow: 1,
                }
            }
        ],
    });
});