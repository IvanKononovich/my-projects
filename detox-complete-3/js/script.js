
document.addEventListener("DOMContentLoaded", () => {
 
    

    // --------------------------------------------------------------------------------------------
    // hide more text start 
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
    // hide more text end 
    // --------------------------------------------------------------------------------------------



    // --------------------------------------------------------------------------------------------
    // sliders start
    // --------------------------------------------------------------------------------------------
    
    const listMobileSlidersPrefix = [
        {
            prefix: '.signs-infection',
            resolution: 1230,
            isInit: false,
            options: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1000,
                responsive: [
                    {
                        breakpoint: 751,
                        settings: {
                            slidesToShow: 3, 
                        }
                    },
                    {
                      breakpoint: 571,
                      settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        slidesToScroll: 1,
                        centerMode: true,
                      }
                    },
                ]
            }
        },
        {
            prefix: '.causes-infection',
            resolution: Infinity,
            isInit: false,
            options: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1000,
            }
        },
        {
            prefix: '.reviews',
            resolution: 700,
            isInit: false,
            options: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
                prevArrow: '.reviews .arrow_prev',
                nextArrow: '.reviews .arrow_next',

            },
            eventHandler(slider) {
                slider.on('beforeChange', () => {
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
            },
        }
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
            
            if(window.innerWidth > item.resolution  && item.isInit) {
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
    // smooth anchor start 
    // --------------------------------------------------------------------------------------------
    
    $('a').click((event) => {
      event.preventDefault();
      
      $('html, body').stop().animate(
          { 
            scrollTop: ($('#order_form').offset().top)
          },
        1500);
    });

    // --------------------------------------------------------------------------------------------
    // smooth anchor end 
    // --------------------------------------------------------------------------------------------



});
    
    