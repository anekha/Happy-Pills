
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


//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$( document ).ready(function() {
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        var fieldName = $(this).attr('data-field');
        var type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                var minValue = parseInt(input.attr('min')); 
                if(!minValue) minValue = 1;
                if(currentVal > minValue) {
                    input.val(currentVal - 1).change();
                } 
                if(parseInt(input.val()) == minValue) {
                    $(this).attr('disabled', true);
                }
    
            } else if(type == 'plus') {
                var maxValue = parseInt(input.attr('max'));
                if(!maxValue) maxValue = 9999999999999;
                if(currentVal < maxValue) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == maxValue) {
                    $(this).attr('disabled', true);
                }
    
            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function(){
       $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {
        
        var minValue =  parseInt($(this).attr('min'));
        var maxValue =  parseInt($(this).attr('max'));
        if(!minValue) minValue = 1;
        if(!maxValue) maxValue = 9999999999999;
        var valueCurrent = parseInt($(this).val());
        
        var name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        
        
    });
    $(".input-number").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                 // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) || 
                 // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                     // let it happen, don't do anything
                     return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
    });
});

$(document).on("click", ".cart-btn", function(e) {
      e.preventDefault();

      // Get the current values of the button, caption, badge, and count
      var btnCaption = $(document).find(".btn-caption")       
      var badge = $(document).find(".cart-badge")
      var count = parseInt(badge.text());

      // Update the buttons caption text (if desired), and increment the counter
     
      badge.text(count + 1);
  });


$(document).on("click", ".cart-btn-neg", function(e) {
      e.preventDefault();

      // Get the current values of the button, caption, badge, and count
      var btnCaption = $(document).find(".btn-caption")       
      var badge = $(document).find(".cart-badge")
      var count = parseInt(badge.text());

      // Update the buttons caption text (if desired), and increment the counter
    
      badge.text(count - 1);
  });














