$('.dropdown').click( function () {
	$(this).toggleClass('dropdown-tran')
	//$('.dropdown-menu').fadeToggle()
})

$('.button-change').click( function () {
	$('.control-change').fadeToggle('')
})

//bg-img
$('.background_1').click( function () {
	$('.background_2 a').removeClass('active-main')
	$('#bg2').css({
		'display': 'none'
	})

	$('.background_3 a').removeClass('active-main')
	$('#bg3').css({
		'display': 'none'
	})

	$('.background_4 a').removeClass('active-main')
	$('#bg4').css({
		'display': 'none'
	})

	$('.background_1 a').addClass('active-main')
	$('#bg1').css({
		'display': 'block'
	})

	event.preventDefault();
	console.log()
});

$('.background_2').click( function () {
	$('.background_1 a').removeClass('active-main')
	$('#bg1').css({
		'display': 'none'
	})

	$('.background_3 a').removeClass('active-main')
	$('#bg3').css({
		'display': 'none'
	})

	$('.background_4 a').removeClass('active-main')
	$('#bg4').css({
		'display': 'none'
	})

	$('.background_2 a').addClass('active-main')
	$('#bg2').css({
		'display': 'block'
	})

	event.preventDefault();
});

$('.background_3').click( function () {
	$('.background_2 a').removeClass('active-main')
	$('#bg2').css({
		'display': 'none'
	})

	$('.background_1 a').removeClass('active-main')
	$('#bg1').css({
		'display': 'none'
	})

	$('.background_4 a').removeClass('active-main')
	$('#bg4').css({
		'display': 'none'
	})

	$('.background_3 a').addClass('active-main')
	$('#bg3').css({
		'display': 'block'
	})

	event.preventDefault();
});

$('.background_4').click( function () {
	$('.background_2 a').removeClass('active-main')
	$('#bg2').css({
		'display': 'none'
	})

	$('.background_3 a').removeClass('active-main')
	$('#bg3').css({
		'display': 'none'
	})

	$('.background_1 a').removeClass('active-main')
	$('#bg1').css({
		'display': 'none'
	})

	$('.background_4 a').addClass('active-main')
	$('#bg4').css({
		'display': 'block'
	})

	event.preventDefault();
});

//bg-color

$(".color_one").click(function() {
	$(".bg-color1").addClass("color1-BG");
	$(".bg-color2").removeClass("color2-BG")
	$(".bg-color3").removeClass("color3-BG")
	$(".bg-color4").removeClass("color4-BG")
	$(".bg-color5").removeClass("color5-BG")
})

$(".color_two").click(function() {
	$(".bg-color1").removeClass("color1-BG");
	$(".bg-color2").addClass("color2-BG")
	$(".bg-color3").removeClass("color3-BG")
	$(".bg-color4").removeClass("color4-BG")
	$(".bg-color5").removeClass("color5-BG")
})
$(".color_three").click(function() {
	$(".bg-color1").removeClass("color1-BG");
	$(".bg-color2").removeClass("color2-BG")
	$(".bg-color3").addClass("color3-BG")
	$(".bg-color4").removeClass("color4-BG")
	$(".bg-color5").removeClass("color5-BG")
})
$(".color_four").click(function() {
	$(".bg-color1").removeClass("color1-BG");
	$(".bg-color2").removeClass("color2-BG")
	$(".bg-color3").removeClass("color3-BG")
	$(".bg-color4").addClass("color4-BG")
	$(".bg-color5").removeClass("color5-BG")
})
$(".color_five").click(function() {
	$(".bg-color1").removeClass("color1-BG");
	$(".bg-color2").removeClass("color2-BG")
	$(".bg-color3").removeClass("color3-BG")
	$(".bg-color4").removeClass("color4-BG")
	$(".bg-color5").addClass("color5-BG")
})

//button nav
$('.button-fade').click( function () {
	$('.nav-mobile').fadeToggle('slow')
})


//test Home
var testHome = document.getElementById("testTypedJs")
if(testHome)
{
	var text = testHome.getAttribute("data-typedJs")
	text = text.split(",")
	new Typed('#testTypedJs', {
  		strings: text,
  		loop: true,
        typeSpeed: 100,
        backSpeed: 70,
        backDelay: 2000
	});
}