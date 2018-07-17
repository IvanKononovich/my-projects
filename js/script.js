// popup popup popup popup popup popup

var buy  = document.querySelectorAll(".item-hover .buy a");
var popupBuy = document.querySelector(".product-added");
var close = document.querySelectorAll(".cross");
var canselContact = document.querySelectorAll(".cansel");

for ( var i = 0; i < buy.length; i++) {
	buy[i].addEventListener("click", function(event) {
		event.preventDefault();
		popupBuy.classList.add("visible");
	});
};	

function hidePopup(){
	var popupAll = document.querySelectorAll(".modal-popup.visible");
	for (var z = 0; z < popupAll.length; z++){
		popupAll[z].classList.remove("visible");
	};
};

window.addEventListener("keydown", function(event){
	if(event.keyCode == 27){
		hidePopup();
	};
});

for (var j = 0; j < close.length; j++){
	close[j].addEventListener("click", hidePopup);
};

for (var s = 0; s < canselContact.length; s++){
	canselContact[s].addEventListener("click", hidePopup);
};

// contact contact contact contact contact

var letter = document.querySelector(".letter");
var contact = document.querySelector(".contact");
var canselContact = document.querySelectorAll(".cansel");

if(letter){
	letter.addEventListener("click", function(event){
		event.preventDefault();
		contact.classList.add("visible");
	});
};	

// maps maps maps maps maps 

var linkmap = document.querySelector(".contacts .maps");
var popupmap = document.querySelector(".modal-content-map");

if(linkmap){
	linkmap.addEventListener("click", function(event) {
		popupmap.classList.add("visible");
	});
};


// gallery gallery gallery gallery gallery 

var arrowLeft = document.querySelector(".arrow.left");
var arrowRight = document.querySelector(".arrow.right");
var btn;
var dataNamberBtn = 0;
var btnArr = document.querySelectorAll(".gallery .btn");
var slide = document.querySelectorAll(".gallery .slide");
var parentElemBtn = document.querySelector(".btn-container");
var timeId = setTimeout(moveSlide, 3500);
var arrowX;

if(arrowLeft && arrowRight && slide.length){

	(function btnCreature(){
		for(var i = 0; i < slide.length; i++){
			dataNamberBtn++;
			btn = document.createElement("div");
			parentElemBtn.appendChild(btn);
			btn.classList.add("btn");
			btn.dataset.slide = ".slide-" + dataNamberBtn;
			btnArr = document.querySelectorAll(".gallery .btn");
		};	
		btnArr[btnArr.length-1].classList.add("btn-active");
	}());

	moveSlide();

	function moveSlide(){
		timeId = setTimeout(moveSlide, 3500);	
		arrowX = + 1; 
		change(arrowX);
	};

	function clearId(){
		clearTimeout(timeId);
		timeId = setTimeout(moveSlide, 3500);
	};

	function change(arrowX){
		for(var i = 0; i < slide.length; i++){
			
			if(slide[i].classList.contains("show")){

				slide[i].classList.remove("show");
				btnArr[i].classList.remove("btn-active");

				i = i + arrowX;

				if( i <= slide.length - 1 && i >=0 ) {
					slide[i].classList.add("show");
					btnArr[i].classList.add("btn-active");
					break;
				};

				if( i > slide.length - 1) {
					slide[0].classList.add("show");
					btnArr[0].classList.add("btn-active");
					break;
				};	

				if(i < 0) {
					slide[slide.length - 1].classList.add("show");
					btnArr[slide.length - 1].classList.add("btn-active");
					break;
				};
			}
		}
	};

	arrowLeft.addEventListener("click", function(){
		clearId();
		arrowX = - 1; 
		change(arrowX);
	});

	arrowRight.addEventListener("click", function(){
		clearId();
		arrowX = + 1; 
		change(arrowX);
	});

	for(var c = 0; c < btnArr.length; c++){
		btnArr[c].addEventListener("click", function(){
			clearId();
			for(var i = 0; i < slide.length; i++){
				slide[i].classList.remove("show");
				btnArr[i].classList.remove("btn-active");
			};
			this.classList.add("btn-active");
			var slideNow = document.querySelector(this.dataset.slide);
			slideNow.classList.add("show");
		});
	};
};

// tab tab tab tab tab

var tabs = document.querySelectorAll(".list-advantages li");
var tabPopup = document.querySelectorAll(".advantages .tab");

for(var c = 0; c < tabs.length; c++){
	tabs[c].addEventListener("click", function(){
		for(var n = 0; n < tabs.length; n++){
			tabs[n].classList.remove("active");
			tabPopup[n].classList.remove("show");
		};
		this.classList.add("active");
		var tabPopupNow = document.querySelector(this.dataset.tab);
		tabPopupNow.classList.add("show");
	});
};

// range range range range range 

var rangeRight  	= document.getElementById("circleright");
var rangeRightX;

var rangeLeft 		= document.getElementById("circleleft");
var rangeLeftX;

var inputStart 		= document.getElementById("price-filter-start");
var inputEnd    	= document.getElementById("price-filter-end");
var inputNow;
var whereWeAre;
var feedbackTimeId;
var line 			= document.getElementById("line-range");

var shiftX = 0;
var parentOffset;
var currentCircle;
var x;
var rangeWidth = rangeRight.getBoundingClientRect().width;

if(rangeRight && rangeLeft) {

	function initialization(){

		if(currentCircle == rangeLeft || whereWeAre == inputStart ){ 
			if( x >= rangeRightX ){
				x = rangeRightX ;
			};
			if(x < 20) {
				x = 20;
				inputStart.value = "0руб.";
			};
			line.style.transform  = "translateX("+ x +"px)";
			rangeLeft.style.transform  = "translateX("+ x +"px)";	
			if(x > 20)inputStart.value = x*100 + "руб.";
		};

		if(currentCircle == rangeRight || whereWeAre == inputEnd){ 
			if( x <= rangeLeftX + rangeWidth*2){
				x = rangeLeftX + rangeWidth*2;
			};
			if(x >= 180) {
				x = 180;
			};
			rangeRight.style.transform  = "translateX("+ x +"px)";
			inputEnd.value = x*100*2 + "руб.";
		};			

		line.style.width = rangeRightX - rangeLeftX + "px";
	};	

	function documentMouseMove(e) {
		e.preventDefault();
		moveAt(e);
	};

	function moveAt(e) {

		parentOffset = currentCircle.closest(".range").getBoundingClientRect().left;
		rangeLeftX = rangeLeft.getBoundingClientRect().left - parentOffset - rangeWidth;
		rangeRightX = rangeRight.getBoundingClientRect().left - parentOffset -  rangeWidth;

		x = e.pageX - shiftX - parentOffset;
		initialization();
		

	};

	function circleMouseDown(e) {

		currentCircle = this;
		shiftX = e.pageX - currentCircle.getBoundingClientRect().left;
		moveAt(e);
		document.addEventListener("mousemove", documentMouseMove);
		document.addEventListener("mouseup", function() {
			document.removeEventListener("mousemove", documentMouseMove);	
		});
	}

	// function feedBack(e){
	// 	this.addEventListener("keyup", function(){
	// 		inputNow = this;
	// 		clearTimeout(feedbackTimeId);
	// 		feedbackTimeId = setTimeout( function(){
	// 			rangeLeftX = rangeLeft.getBoundingClientRect().left - rangeLeft.closest(".range").getBoundingClientRect().left - rangeWidth;
	// 			rangeRightX = rangeRight.getBoundingClientRect().left - rangeRight.closest(".range").getBoundingClientRect().left -  rangeWidth;

	// 			x = parseInt(inputNow.value)/200;
	// 			if(x > 180) x = 180;
	// 			if(x < 20) x = 20;
	// 			whereWeAre = inputNow;
	// 			initialization();
	// 		}, 500);
	// 	});
	// };


	rangeLeft.addEventListener("mousedown", circleMouseDown);
	rangeRight.addEventListener("mousedown", circleMouseDown);
	// inputStart.addEventListener("keydown", feedBack);
	// inputEnd.addEventListener("keydown", feedBack);

};	
