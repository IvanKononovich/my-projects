// --------------------------------------------------------------------------------------------
// sliders start  
// --------------------------------------------------------------------------------------------

const listMobileSlidersPrefix = [
    {
        prefix: '.proven',
        resolution: 700,
        isInit: false,
        options: {
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
        },
    },
    {
        prefix: '.check-yourself',
        resolution: 700,
        isInit: false,
        options: {
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
        },
    },
    {
        prefix: '.composition',
        resolution: Infinity,
        isInit: false,
        options: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: true,
            prevArrow: '.composition .arrow_prev',
            nextArrow: '.composition .arrow_next',
            responsive: [
                {
                    breakpoint: 966,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        },
    },
    {
        prefix: '.reviews',
        resolution: Infinity,
        isInit: false,
        options: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: true,
            prevArrow: '.reviews .arrow_prev',
            nextArrow: '.reviews .arrow_next',
            responsive: [
                {
                    breakpoint: 966,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        },
        eventHandler(slider) {
            slider.on('afterChange', () => {
                const listReviewsBlockquote = document.querySelectorAll('.reviews .read-more');
                const listBtnReadMore = document.querySelectorAll('.reviews .hide-more-btn');

                [...listReviewsBlockquote].forEach((item) => {
                    item.classList.remove('read-more');
                });

                [...listBtnReadMore].forEach((item) => {
                    item.innerHTML = item.dataset.mainText;
                    item.classList.remove('hide-more-btn');
                });
            });
        }
    },
    {
        prefix: '.causes-infection',
        resolution: 965,
        isInit: false,
        options: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            centerMode: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        },
    },
];



function initSlider(prefix, options) {
    return $(`${prefix} .slider`).slick(options);
}

function mobileSlidersInit() {
    listMobileSlidersPrefix.forEach((item) => {
        if (window.innerWidth <= item.resolution && !item.isInit) {
            const slider = initSlider(item.prefix, item.options);

            if (item.eventHandler) {
                item.eventHandler(slider);
            }

            item.isInit = true;
        }

        if (window.innerWidth > item.resolution && item.isInit) {
            $(`${item.prefix} .slider`).slick('unslick');

            item.isInit = null;
        }
    });
}
mobileSlidersInit();

window.addEventListener('resize', () => {
    mobileSlidersInit();
});

// --------------------------------------------------------------------------------------------
// sliders end
// --------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------
// IncompleteText start
// --------------------------------------------------------------------------------------------

new IncompleteText(
    {
        btnOptions: {
            classNameBtn: 'read-more-btn',
            classNameBtnClose: 'hide-more-btn',
            mainTextBtn: 'подробнее',
            altTextBtn: 'скрыть',
        },
        textOptions: {
            classNameText: 'incomplete-text',
            classNameTextHide: 'read-more',
        }
    }
);

// --------------------------------------------------------------------------------------------
// IncompleteText end
// --------------------------------------------------------------------------------------------