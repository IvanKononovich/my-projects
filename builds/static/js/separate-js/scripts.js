'use strict';

$(function() {

    /*
    |--------------------------------------------------------------------------
    | Mobile menu
    |--------------------------------------------------------------------------
    */

    $('.burger').click(function() {
        $(this).toggleClass('-open');
    });

    /*
    |--------------------------------------------------------------------------
    | Sticky Kit
    |--------------------------------------------------------------------------
    */

	$(".sticky").stick_in_parent({
		offset_top: 0,
	});

    /*
    |--------------------------------------------------------------------------
    | Navbar
    |--------------------------------------------------------------------------
    */

	$(window).scroll(function() {
		if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
		{
			$('.nav-bar').addClass('nav-bar_collapsed');
		} else {
			$('.nav-bar').removeClass('nav-bar_collapsed');
		}
	});

    /*
    |--------------------------------------------------------------------------
    | Entry Slider
    |--------------------------------------------------------------------------
    */

	let entrySlider = new Swiper('.jsEntrySlider', {
		speed: 800,
		mousewheel: false,
		loop: true,
		/*autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},*/
        pagination: {
            el: '.swiper-pagination',
        },
		spaceBetween: 0,
		slidesPerView: 1,
	});

    /*
    |--------------------------------------------------------------------------
    | Light Gallery
    |--------------------------------------------------------------------------
    */

	$('.lightGallery').lightGallery({
		selector: ".gallery-item",
	});

    /*
    |--------------------------------------------------------------------------
    | Nice Select
    |--------------------------------------------------------------------------
    */

	$('.niceSelect').niceSelect();

    /*
    |--------------------------------------------------------------------------
    | Stop Youtube video after closing modal window
    |--------------------------------------------------------------------------
    */

    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var src = $('.jsModalIframe').attr('data-iframe-src');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $('.modal-video, .modal-big-video').on('show.bs.modal', function (e) {
        $('.jsModalIframe').attr('src', src);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $('.modal-video, .modal-big-video').on('hide.bs.modal', function (e) {
        $('.jsModalIframe').attr('src', '');
    });

    /*
    |--------------------------------------------------------------------------
    | Wow Js
    |--------------------------------------------------------------------------
    */

	var wow = new WOW({
		offset:100,        // distance to the element when triggering the animation (default is 0)
		mobile:false       // trigger animations on mobile devices (default is true)
	});
	wow.init();

    /*
    |--------------------------------------------------------------------------
    | Declare Functions
    |--------------------------------------------------------------------------
    */

	$(document).ready(function(){
		// ...
	});


	//$(window).load(function(){
		// ...
	//});


	$(window).resize(function() {
		// ...
	});

	if (document.addEventListener){
		window.addEventListener("orientationchange", function() {
			// ...
		});

		window.addEventListener("resize", function() {
			// ...
		});
	}

});
