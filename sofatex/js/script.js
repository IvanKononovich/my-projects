// --------------------------------------------------
// start cover texture change
// --------------------------------------------------

const sofaPreview = document.querySelector('.product-promo__preview');
const listSofaTexture = document.querySelector('.product-promo__list-select');
let activeTexture = document.querySelector('.product-promo__cover-type_active');

function changeTexture(event) {
    const target = event.target;
    if (!target.classList.contains('product-promo__cover-type')) return;
    
    const bgURL = target.dataset.url;
    sofaPreview.setAttribute('src', bgURL);
    
    activeTexture.classList.remove('product-promo__cover-type_active');
    activeTexture = target;
    activeTexture.classList.add('product-promo__cover-type_active');
}

listSofaTexture.addEventListener('click', changeTexture);
listSofaTexture.addEventListener('touch', changeTexture);

// --------------------------------------------------
// end cover texture change
// --------------------------------------------------



// --------------------------------------------------
// start slider
// --------------------------------------------------

$('.reviews__slider-for').slick({
    asNavFor: '.reviews__slider-nav',
    arrows: false,
});
$('.reviews__slider-nav').slick({
    asNavFor: '.reviews__slider-for',
    prevArrow: $('.reviews__slider-arrow_pre'),
    nextArrow: $('.reviews__slider-arrow_next'),
  });
      

// --------------------------------------------------
// end slider
// --------------------------------------------------



// --------------------------------------------------
// start popup
// --------------------------------------------------

const feedbackPopup = document.querySelector('.popup-wrap');
const buttonSendForm = document.querySelector('.btn-order');

function openPopup(close = false) {
    if (close) {
        feedbackPopup.classList.remove('-show');
    } else {
        feedbackPopup.classList.toggle('-show');
    }
}

function checkForValidity(str) {
    return str.match(/^\+?375[0-9]{9}/gi);
}

function dataFormCollection() {
    const inputs = feedbackPopup.querySelectorAll('input');
    const data = {};

    inputs.forEach((item) => {
        const title = item.getAttribute('type');

        data[title] = item.value; 
    })

    return data;
}

function checkOpenPopup(event) {
    const target = event.target;
    let result = false;

    if (target.classList.contains('open-popup')) {
        result = true;
    } else if (target.classList.contains('popup-bg')) {
        result = true;
    } else if (target.classList.contains('popup__content')) {
        result = true;
    } else if (target.classList.contains('popup-close')) {
        result = true;
    } else if (target.classList.contains('btn-order')) {
        event.preventDefault();

        const data = dataFormCollection();
        const tellLabel = feedbackPopup.querySelector('.label-phone');

        if (checkForValidity(data.tell)) {
            result = true;
            tellLabel.classList.remove('-err');
        } else {
            tellLabel.classList.add('-err');
        }
    }

    if (result) {
        openPopup();
    }
}

document.addEventListener('click', checkOpenPopup);
document.addEventListener('touch', checkOpenPopup);

document.addEventListener('keyup', (event) => {
    const keyCode = event.keyCode;
    const keyESC = 27;

    if (keyCode === keyESC) {
        openPopup(true);
    }
});

// --------------------------------------------------
// end popup
// --------------------------------------------------

