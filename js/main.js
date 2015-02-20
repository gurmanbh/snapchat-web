$(document).ready(function() {  
var stickyNavTop = $('#rail').offset().top;  
var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  

    if (scrollTop > stickyNavTop) {   
        $('#rail').addClass('sticky');  
    } else {  
        $('#rail').removeClass('sticky');   
    }  
    };  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});  


$('.nav').on('click', function(){
	var space = $(this).attr('refer');
    var l= '#l-'+space;
    var pos = $(l).offset();
    console.log(pos);
    $('html, body').animate({scrollTop:(pos.top)}, 500);
});