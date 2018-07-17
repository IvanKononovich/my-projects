var rangeRight   = document.getElementById("circleright");
var rangeLeft 	 = document.getElementById("circleleft"); 

var rangeLeftX  = 0 ;
var rangeRightX = 265 ;

	
var shiftX = 0;
var currentCircle;

var line = document.getElementById("line-range");

var inputStart = document.getElementById("price-filter-start");
var inputEnd   = document.getElementById("price-filter-end");
var rangeContainer = document.querySelector(".range-cost-filter");

if(rangeRight && rangeLeft) {	
	
	var rangeContainerWidth = rangeContainer.getBoundingClientRect().width;

	function documentMouseMove(e) {
		e.preventDefault();
		moveAt(e);
		line.style.width = rangeRightX - rangeLeftX + "px"; 
	};

	function moveAt(e) {

		var parentOffset = currentCircle.closest(".range-cost-filter").getBoundingClientRect().left;
		var x = e.pageX - shiftX - parentOffset;
		
		if(currentCircle == rangeLeft) {
			if (x < 0) x = 0;
			if (x > rangeRightX - rangeRight.getBoundingClientRect().width) x = rangeRightX - 20;
			line.style.transform = "translateX(" + x + "px)";
			inputStart.value = "от: " + parseInt(x*10) + " руб.";
		};

		if(currentCircle == rangeRight) {
			if (x < rangeLeftX + rangeLeft.getBoundingClientRect().width) x = rangeLeftX + 20;
			if (x > rangeContainerWidth - 15) x = rangeContainerWidth -	15;
			inputEnd.value = "до: " + parseInt(x*10) + " руб.";
		};

		currentCircle.style.transform = "translateX(" + x + "px)";

		line.style.width = rangeRightX - rangeLeftX + "px";

		if (currentCircle == rangeLeft) rangeLeftX = x;
		if (currentCircle == rangeRight) rangeRightX = x;


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










	// original

	function feedBack(){

		if(parseInt(this.value) < rangeMax && parseInt(this.value) > 0){
				x = parseInt(this.value);
			

			if(this == inputStart){
			 	p = rangeLeft;
			 	rangeLeftX = x;
				if(x > 0 && x <= rangeRightX - 20 ){
					line.style.transform = "translateX(" + x  + "px)"; 
					p.style.transform = "translateX(" + x + "px)";
				}; 
				if(x > rangeRightX - 20  ) {
					x = rangeRightX - 20;
					p.style.transform = "translateX(" + x + "px)";
				};
				if(x == 0) {
					p.style.transform = "translateX(" + 15 + "px)";
					line.style.transform = "translateX(" + 15 + "px)";
				};
			};
			if(this == inputEnd){
				p = rangeRight;
			 	p.style.transform = "translateX(" + x + "px)"; 
			 	rangeRightX = x;
			 	if(x > 0 && x >= rangeLeftX + 20 ){
					p.style.transform = "translateX(" + x + "px)";
				}; 
				if(x < rangeLeftX + 20  ) {
					x = rangeLeftX + 20;
					p.style.transform = "translateX(" + x + "px)";
				};
				if(x >= 200) {
					x = 200;
					p.style.transform = "translateX(" + 180 + "px)";
				};		

			};


			line.style.width 	 = Math.abs(rangeRightX - rangeLeftX) + "px"; 

			this.addEventListener("keyup", feedBack);
		};
	};

	inputStart.addEventListener("mouseover", feedBack);
	inputEnd.addEventListener("mouseover", feedBack);
};

var searchHotelsLink = document.querySelector(".interested .search-for-hotels");
var hotelsPopup = document.querySelector(".search-for-hotels-popup");

searchHotelsLink.addEventListener("click", function(e){
	e.preventDefault();
	hotelsPopup.classList.toggle("show")
});



























