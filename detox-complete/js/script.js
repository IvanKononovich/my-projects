// --------------------------------------------------------------------------------------
// start video popup
// --------------------------------------------------------------------------------------

const popup = document.querySelector('.video-popup');

function changeStatePopup(event) {
    const keycode__ESC = 27;

    if (event.keyCode === keycode__ESC) {
        popup.classList.remove('show');
        return;
    }

    const target = event.target;

    if (target.classList.contains('play')) {
        popup.classList.add('show');
        return;
    }

    if (target.classList.contains('video-popup')) {
        popup.classList.remove('show');
        return;
    }

    if (target.classList.contains('close')) {
        popup.classList.remove('show');
        return;
    }
}

document.addEventListener('click', changeStatePopup);
document.addEventListener('touchend', changeStatePopup);
document.addEventListener('keyup', changeStatePopup)

// --------------------------------------------------------------------------------------
// start video popup
// --------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
// sliders start  
// --------------------------------------------------------------------------------------------

const listMobileSlidersPrefix = [
    {
        prefix: '.risk-infection',
        resolution: 720,
        isInit: false,
        options: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [{ 
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]
        },
    },
    {
        prefix: '.signs-infection',
        resolution: 720,
        isInit: false,
        options: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [{ 
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]
        },
    },
    {
        prefix: '.composition',
        resolution: Infinity,
        isInit: false,
        options: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [{ 
                breakpoint: 1111,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]
        },
    },
    {
        prefix: '.certificates',
        resolution: 720,
        isInit: false,
        options: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [{ 
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]
        },
    },
    {
        prefix: '.causes-infection',
        resolution: 720,
        isInit: false,
        options: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [{ 
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]
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
            centerMode: true,
            variableWidth: true,
            prevArrow: '.reviews .arrow_prev',
            nextArrow: '.reviews .arrow_next',
            customPaging: (slick) => {
                const total = document.querySelector('.reviews .total');
                total.innerHTML = slick.slideCount;
            },
            responsive: [{ 
                breakpoint: 1111,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]
        },
        eventHandler(slider) {
            const passed = document.querySelector('.reviews .passed');

            slider.on('afterChange', (event, slick) => {
                passed.innerHTML = slick.currentSlide + 1;

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
            mainTextBtn: 'Читать больше...',
            altTextBtn: 'Скрыть', 
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