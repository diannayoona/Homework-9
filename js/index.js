
$('#button1').click(red);
$('#button2').click(big);
$('#button3').click(animate);
$('#button4').click(slide);
$('#button5').click(square);





function red() {
	reset ();
    console.log("circle turned red");
    $('#circle').css("background-color", "red");
}

function square() {
	reset ();
    $('#circle').removeClass("regcircle");
    $('#circle').addClass("square");
}

function big() {
	reset ();
    console.log("circle got big");
    $('#circle').removeClass("regcircle");
    $('#circle').addClass("bigcircle");
}

function slide() {
	reset ();
    console.log("circle slid");
    $('#circle').slideUp();
    $('#circle').slideDown();

}

function animate() {
	reset ();
    console.log("animate");
	$('#circle').animate({opacity: '0.4'}, "slow");
}

function reset() {
	console.log("reset");
	 $('#circle').css("background-color", "black");
	 $('#circle').css("opacity", "1");

	 $('#circle').removeClass("bigcircle");
	 $('#circle').removeClass("square");
	 $('#circle').addClass("regcircle");

}

