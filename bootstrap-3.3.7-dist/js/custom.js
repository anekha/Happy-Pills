
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header_one').addClass("sticky");
    }
    else{
        $('.header_one').removeClass("sticky");
    }
});