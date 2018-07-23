particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
function SetResizeContent() {
	var minheight = $(window).height();
	$("body").css('min-height', minheight);
};
 SetResizeContent();