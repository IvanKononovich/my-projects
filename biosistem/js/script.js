
// --------------------------------------------------------------------------------------------
// sliders start -------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

let isMobileSlidersInit = null;
const listMobileSlidersPrefix = [
    {
        prefix: '.clinical-trials',
        responsive: [{
            breakpoint: 320,
            settings: {
                dots: true,
                arrows: false,
            },
        }]
    },
    {
        prefix: '.composition',
    }
];

function initSlider(prefix, options, responsive) {
    const { dots, arrows } = options;

    $(`${prefix} .slider`).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots,
        arrows,
        prevArrow:  `${prefix} .slider-arrow_pre`,
        nextArrow:  `${prefix} .slider-arrow_next`,
        responsive,
    });
}
initSlider('.reviews', {
        dots: false,
        arrows: true,
    },
    [{
        breakpoint: 761,
        settings: {
            dots: true,
            arrows: false,
        },
    }]
);

function mobileSlidersInit() {
    if (window.innerWidth <= 760 && !isMobileSlidersInit) {
        listMobileSlidersPrefix.forEach((item) => {
            initSlider(item.prefix, {
                dots: true,
                arrows: true,
            }, 
            item.responsive);
        });

        isMobileSlidersInit = true;
    }
    
    if(window.innerWidth > 760 && isMobileSlidersInit) {
        listMobileSlidersPrefix.forEach((item) => {
            $(`${item.prefix} .slider`).slick('unslick');
        });

        isMobileSlidersInit = null;
    }
}
mobileSlidersInit();

window.addEventListener('resize', () => {
    mobileSlidersInit();
}); 

// --------------------------------------------------------------------------------------------
// sliders end ---------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
