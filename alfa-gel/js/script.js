$(document).ready(function() {

// --------------------------------------------------
// start slider
// --------------------------------------------------

let listSliders = document.querySelectorAll('.slider');
listSliders = Array.from(listSliders);

listSliders.forEach((slider) => {
  const sliderContainer = slider.querySelector('.slider__slider-container');
  const arrowPre = slider.querySelector('.slider__arrow_pre');
  const arrowNext = slider.querySelector('.slider__arrow_next');

  $(sliderContainer).slick({
      prevArrow: arrowPre,
      nextArrow: arrowNext,
      dots: true,
      dotsClass: 'slider__dot',
      responsive: [
        {
          breakpoint: 580,
          settings: {
            arrows: false,
          }
        },
      ]
  });
});

$('.test-results__slider').slick({
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          dots: true,
          dotsClass: 'slider__dot',
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
          dotsClass: 'slider__dot',
        }
      },
    ]
})

// --------------------------------------------------
// end slider
// --------------------------------------------------



// --------------------------------------------------
// start promotion date
// --------------------------------------------------

// let listDateContainer = document.querySelectorAll('.today-date');
// listDateContainer = Array.from(listDateContainer);

// const todayDate = new Date();
// const dateInFormat = {
//   year: todayDate.getFullYear() - 2000,
//   month: todayDate.getMonth(),
//   day: todayDate.getDate(),
// }

// for(key in dateInFormat) {
//   const number = dateInFormat[key];

//   if (number < 10) {
//     dateInFormat[key] = `0${number}`; 
//   }
// }

// listDateContainer.forEach((container) => {
//   container.innerHTML = `${dateInFormat.day}.${dateInFormat.month}.${dateInFormat.year}`; 
// });

// --------------------------------------------------
// end promotion date
// --------------------------------------------------



// --------------------------------------------------
// start smooth anchor
// --------------------------------------------------

const $page = $('html, body');

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    
    return false;
});

// --------------------------------------------------
// end smooth anchor
// --------------------------------------------------

});