//jq

$(document).ready(function(){

	//alert with function
	$('.btn_alert').click(function(){
		alert("hello world");
	});

	//hide content
	$('.btn_hide').on("click", function(){
		$('.h2_hide').hide();
	});

	//show content
	$('.btn_show').on("click", function(){
		$('.h2_hide').show();
	});

	//toggle content
	$('.toggle').on("dblclick", function(){
		$('.tog_h2').toggle();
	});

	//qus & ans
	$('.qus').on("click", function(){
		$('.ans').slideToggle(2000);
	});

	//delay
	$('.delay').on("click", function(){
		$('.red').slideUp( 300 ).fadeIn( 400 );
		$('.blue').slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	//height
	$('.h_div').on("click",function(){
		$('.h_div').height(30);
	});
	//css
	$('#p_css').on("mouseover", function(){
		$('#p_css').css("color", "red");
	});

	//width
	$('#width_h1').on("mouseover", function(){
		$('#width_h1').css("width","+=600");
	});

	//background-color
	$('.bg_btn').on("dblclick", function(){
		$('.bg_h1').css("background-color", "yellow")
	})

	//mouse enter mouse leave
	$('.mel_h1').on("mouseenter", function(){
		$('.mel_h1').css("background-color", "yellow");
	});
	$('.mel_h1').on("mouseleave", function(){
		$('.mel_h1').css("background-color", "yellowgreen");
	});

	//animate
	$('.ani_btn').one("click", function(){
		$('.ani_h1').animate({
			 width: "100%",
			 opacity: 0.7,
			 marginLeft: "20px",
			 fontSize: "100px",
			 borderWidth: "10px",
		}, 1500 );
	});
	//mouse enter
	$('.h1_mouse').on("mouseenter", function(){
		alert("you entered h1");
	});

	//mouse leave
	$('.h2_mouse').on("mouseleave", function(){
		alert("Bye!you leave h1");
	});

	//focus
	$('.input1').focus(function(){
		$('.input1').css("background-color", "yellow");
	});

	//blur
	$('.input2').blur(function(){
		$('.input2').css("background-color", "teal");
	});
	$('.input2').focus(function(){
		$('.input2').css("background-color", "yellowgreen");
	});

	//fadein
	$('.fade_btn').on("click", function(){
		$('.fadein').fadeIn(3000);
	});
	//fadeout
	$('.fadeo_btn').on("click", function(){
		$('.fadeout').fadeOut(3000);
	});
	//fadeout/in
	$('.fadet_btn').on("click", function(){
		$('.fadet').fadeToggle(3000);
	});
	//fadeto
	$('.fadeto_btn').on("click", function(){
		$('.fadeto').fadeTo("slow", 0.4);
	});


});