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
    var startsec = 5;
    var seconds = startsec;
    var snaps = 1;
    var lastsnap = 4;
    var s=1

        function secondPassed(id) {
            document.getElementById([id]).getElementsByClassName("timer-no")[0].innerHTML = seconds;
            if (seconds == 0) {
                if (snaps < lastsnap){
                    seconds = startsec;
                    snaps ++;
                    $('#snap1 .snap').attr('src', 'img/snaps1/'+snaps+'.png');
                    document.getElementById([id]).getElementsByClassName("timer-no")[0].innerHTML = seconds;
                } else {
                    clearInterval(countdownTimer);
                }

            } else {
                seconds--;
                console.log(seconds)
            }
        }
        var countdownTimer = setInterval('secondPassed("snap"+[s])', 1000);
