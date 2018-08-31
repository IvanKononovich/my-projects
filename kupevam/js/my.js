(function(jq) {
    jq.autoScroll = function(ops) {
        ops = ops || {};
        ops.styleClass = ops.styleClass || 'header';
        var t = jq('<div class="'+ops.styleClass+'"></div>'),
            d = jq(ops.target || document);

        $(window).scroll(function(){
            var sv = d.scrollTop();


            if  (sv > 110) {
                $('.header-inner-1-wrapper').css({'position':'fixed' , 'top': '0', zIndex: '4500'});
            } if (sv < 110)  {
                $('.header-inner-1-wrapper').css({'position':'relative', 'top': 'auto'});

            }
        });

    };
})(jQuery);

$(document).ready(function(){

    $.autoScroll();

    $('.mobile-menu-open').click(function () {
        $(this).parents('.main-section:first').find('.header-nav').slideDown(500);
        $(this).parents('.main-section:first').find('.mobile-menu-close').slideDown(500);
        $(this).slideUp(500);
        return false;
    });

    $('.mobile-menu-close').click(function () {
        $(this).parents('.main-section:first').find('.header-nav').slideUp(500);
        $(this).parents('.main-section:first').find('.mobile-menu-open').slideDown(500);
        $(this).slideUp(500);
        return false;
    });

    $(".modalbox").fancybox({
        padding : 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });


    $('.examples-more-button').click(function () {
        if($(this).html()==('Еще фото')) {
            $(this).html('Скрыть');
        }   else {
            $(this).html('Еще фото')
        };
        $(this).parents('.examples-inner:first').find('.examples-catalog-hidden').slideToggle(1000);
        return false;
    });

    $('.slider-1 > ul').bxSlider({
        mode: 'vertical',
        auto: false,
        pager: false,
        controls: true,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 30,
        speed: 500,
        pause: 6000
    });

    $('.slider-1 .bx-pager').wrap('<div class="bx-pager-box"></div>');


    $('.slider-2 > ul').bxSlider({
        mode: 'horizontal',
        auto: false,
        pager: false,
        controls: true,
        slideWidth: 250,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 30,
        speed: 500,
        pause: 4000
    });



    $('.input-phone').ForceNumericOnly();
    
    /*calculator*/
    $('.calculator-list-1 input[type=radio]').change(function () {
        if ( $(this).prop( "checked" ) ) {
            $('#inline8').find('#shkaf_type').val($(this).val());
        }
    });


    $('.range').change(function () {
        $('#inline8').find('#shkaf_width').val($(this).val());
    });

    $('.range1').change(function () {
        $('#inline8').find('#shkaf_height').val($(this).val());
    });

    $('.range2').change(function () {
        $('#inline8').find('#shkaf_depth').val($(this).val());
    });

    $('.calculator-list-2 input[type=radio]').change(function () {
        if ( $(this).prop( "checked" ) ) {
            $('#inline8').find('#shkaf_decor').val($(this).val());
        }
    });

    $('.header-nav ul li a').mousedown(function(){
        $('.header-nav ul li a').removeClass("active-link").clearQueue();
        $(this).addClass("active-link").clearQueue();
    });



});



jQuery.fn.ForceNumericOnly = function() {
    return this.each(function(){
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
            return (
            key == 8 ||
            key == 9 ||
            key == 46 ||
            (key >= 37 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
        });
    });
};

