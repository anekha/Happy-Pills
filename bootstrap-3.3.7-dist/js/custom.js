
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
	   var navHeight = $( window ).height() - 65;
			 if ($(window).scrollTop() > navHeight) {
				 $('.navbar-default').addClass('fixed');
			 }
			 else {
				 $('.navbar-default').removeClass('fixed');
			 }
		});
	});