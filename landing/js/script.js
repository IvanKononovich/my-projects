function SetResizeContent() {
	var minheight = $(window).height();
	$("video").css('max-height', minheight);
	$(".video-wrapper").css('min-height', minheight);
	console.log(minheight);
};
SetResizeContent();
var navMenu = document.querySelector(".nav-menu");
var menuShow = document.querySelector(".menu-show");
var menuShowContent = document.querySelectorAll(".nav-menu li:not(.menu-show)");
var logo = document.querySelector(".nav .logo"); 
menuShow.addEventListener("click", function(){
	menuShow.classList.toggle("toggle");
	logo.classList.toggle("logoShow");
	navMenu.classList.toggle("menuShow");
	for(var i = 0; i < menuShowContent.length; i++){
		menuShowContent[i].classList.toggle("menuHideContent");

	}
});
function navMenuHide(){
	if($(window).width() > 480) {
		menuShow.classList.remove("toggle");
		logo.classList.remove("logoShow");
		navMenu.classList.remove("menuShow");
	}
};	
setInterval(navMenuHide, 1);