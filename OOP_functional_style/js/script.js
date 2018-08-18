var argumentOne = document.getElementById("argument_one");
var argumentTwo = document.getElementById("argument_two");
var play = document.getElementById("play");
var totals = document.getElementById("totals"); 
console.log(argumentOne, argumentTwo, play, totals);

function Merger(x, y){
	var result;
	this.x = x;
	this.y = y;
	function sum(){
		result = this.x + " " + this.y;
		totals.value = result;
	};
	sum();
};

play.addEventListener("click", function(){
	x = argumentOne.value;
	y = argumentTwo.value;
	var merger = new Merger(x,y);
})