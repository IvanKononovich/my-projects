var rangeContainer 	= document.querySelector(".range-filter");
var rangeRight  	= document.getElementById("circleright");
var rangeLeft 		= document.getElementById("circleleft"); 
var parentOffset;
var x;
var rangeFrom 		= +rangeContainer.dataset.from;
var rangeTo 		= +rangeContainer.dataset.to;
var rangeMax 		= +rangeContainer.dataset.max; // 200$
var shiftX 			= 0;
var currentCircle;
var line 			= document.getElementById("line-range");
var inputStart 		= document.getElementById("price-filter-start");
var inputEnd    	= document.getElementById("price-filter-end");
var sliderWidth 	= parseInt(getComputedStyle(document.querySelector(".range-slider")).width);
var rangeLeftX  	= rangeFrom; 
var rangeRightX 	= rangeTo;
var rangeWidth;
var value;
var whereWeAre ;




// для правильной конвертации валюты в перемещение 
// var rangeLeftX  	= rangeFrom * sliderWidth / rangeMax;
// var rangeRightX 	= rangeTo * sliderWidth / rangeMax;

initialization();

function inputValue(){
	value.value = x + "$";
};

function initialization(){

	if(currentCircle == rangeLeft || whereWeAre == inputStart ){
		value = inputStart
		if (x > rangeRightX - rangeRight.getBoundingClientRect().width) x = rangeRightX - rangeWidth;
		if (x <= 15) {
			x = 15;
			inputStart.value = 0 + "$";
		};
		line.style.transform = "translateX(" + x + "px)";
		rangeLeftX = x;
	};

	if(currentCircle == rangeRight) {	
		value = inputEnd
		if (x < rangeLeftX + rangeLeft.getBoundingClientRect().width) x = rangeLeftX + rangeWidth;
		if (x >= 180) x = 180;
		rangeRightX = x;
	};

	if(currentCircle === undefined){
		rangeLeft.style.transform  = "translateX("+ rangeLeftX +"px)";
		rangeRight.style.transform = "translateX("+ rangeRightX +"px)";
		line.style.transform = "translateX(" + rangeFrom + "px)";
		inputStart.value 	 = rangeLeftX.toFixed() + "$";
		inputEnd.value 	  	 = rangeRightX.toFixed() + "$";
	};

	line.style.width = rangeRightX - rangeLeftX + "px";
	if(currentCircle !== undefined) {
		inputValue();
		currentCircle.style.transform = "translateX(" + x + "px)";	
	};

};	

function documentMouseMove(e) {
	e.preventDefault();
	moveAt(e);
};

function moveAt(e) {

	parentOffset = currentCircle.closest(".range").getBoundingClientRect().left;
	x = e.pageX - shiftX - parentOffset;
	rangeWidth = currentCircle.getBoundingClientRect().width;
	console.log("x", x, "shiftX", shiftX, "pageX", e.pageX);
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

rangeLeft.addEventListener("mousedown", circleMouseDown);
rangeRight.addEventListener("mousedown", circleMouseDown);

// var p;
// var theRangeOff ;
// var theRangeEnd; 
// var theRangeTo ;
// var whereWeAre ;

// function feedBack(){

// 	if(parseInt(this.value) < rangeMax && parseInt(this.value) > 0){
// 		x = parseInt(this.value);		
// 	if(this == inputStart){
// 		whereWeAre = inputStart;
// 		currentCircle = rangeLeft;
// 		theRangeOff = x > 0 && x <= rangeRightX - 20;
// 		theRangeEnd = x > rangeRightX - 20;
// 		theRangeTo = x <= 0;
// 		rangeLeftX = x;
// 	} else {
// 		whereWeAre = inputEnd;
// 		currentCircle = rangeRight;
// 	  	theRangeOff = x > 0 && x >= rangeLeftX + 20 ;
// 	  	theRangeEnd = x < rangeLeftX + 20 ;
// 		theRangeTo = x >= 200;
// 		rangeRightX = x;
// 	};
// 	if( theRangeOff ) {
// 		initialization();
// 	};
// 	if(theRangeEnd){
// 		if(whereWeAre == inputStart){
// 			x = rangeRightX - 20;
// 		} else {
// 			x = rangeLeftX + 20;
// 		};
// 		initialization();
// 	};
// 	if(theRangeTo){
// 		if(whereWeAre == inputStart){
// 			initialization();
// 		} else {
// 			x = 200;
// 			initialization();
// 		}
// 	};
// 	this.addEventListener("keyup", feedBack);
// 	};

// };

// inputStart.addEventListener("mouseover", feedBack);
// inputEnd.addEventListener("mouseover", feedBack);




// вынести общую часть в функции

var closecoment  = document.querySelector(".contact .personal-area-close");
var comentlink   = document.querySelector(".contacts .comentlink");
var comentpopup  = document.querySelector(".contact");
var popup 		 = document.querySelector("body>.product-added");
var exetComent	 = document.querySelector(".contact-footer .exet"); 

comentlink.addEventListener("click", function (event) {
	showPopup(event, comentpopup);
});

function showPopup(event, popup) {
	event.preventDefault()
	popup.classList.add("visibital");
}

closecoment.addEventListener("click", function () {
	comentpopup.classList.remove("visibital");
});
exetComent.addEventListener("click", function () {
	comentpopup.classList.remove("visibital");
});


