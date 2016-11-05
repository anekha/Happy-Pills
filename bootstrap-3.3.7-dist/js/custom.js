
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header_one').addClass("sticky");
    }
    else{
        $('.header_one').removeClass("sticky");
    }
});

$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() > 10;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	});