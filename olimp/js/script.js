function SetResizeContent() {
	var minwidth = $("main").width();
	$(".wrapper").css('min-width', minwidth + 160);
	var minheight = $("main").height();
	$(".wrapper").css('min-height', minheight);
};
SetResizeContent();


