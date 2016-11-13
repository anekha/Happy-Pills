
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#content-anchor').offset().top;
    if (window_top > div_top) {
        $('.header_one').addClass('sticky');
        $('#sticky-phantom').show();
    } else {
        $('.header_one').removeClass('sticky');
        $('#sticky-phantom').hide();
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});



$(document).ready(function() { 
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  xs
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 20) {
      $('nav').addClass('fixed');
    }
    if ($(window).scrollTop() < 21) {
      $('nav').removeClass('fixed');
    }
  });
});

