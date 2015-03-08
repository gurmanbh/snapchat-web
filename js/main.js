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
	var space = $(this).attr('data-refer');
    var l= '#s-'+space;
    var pos = $(l).offset();
    $('html, body').animate({scrollTop:(pos.top)}, 600);
});

function getImagePath() {

}
    var seconds = 10;
    function secondPassed(id) {
        document.getElementById([id]).getElementsByClassName("timer-no")[0].innerHTML = seconds;
        if (seconds == 0) {
            clearInterval(countdownTimer);

        } else {
            seconds--;
            console.log(seconds)
        }
    }
    x = 1;
    var countdownTimer = setInterval('secondPassed("snap"+[x])', 1000);

