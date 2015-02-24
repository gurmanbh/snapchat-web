$(document).ready(function() {  
var stickyNavTop = $('#rail').offset().top;  
var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  

    if (scrollTop > stickyNavTop) {   
        $('#rail').addClass('sticky');
        $('#content img').addClass('move');
    } else {  
        $('#rail').removeClass('sticky');
        $('#content img').removeClass('move');   
    }  
    };  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});  


$('.nav').on('click', function(){
	var space = $(this).attr('refer');
    var l= '#s-'+space;
    var pos = $(l).offset();
    console.log(pos);
    $('html, body').animate({scrollTop:(pos.top)}, 600);
});