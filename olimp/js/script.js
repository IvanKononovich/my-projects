particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
function SetResizeContent() {
	var maxWidth = $(window).width();
	$("canvas").css('max-width', maxWidth);
	console.log(maxWidth);
};