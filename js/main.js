var timers = {
    snap1: {
        current: 1,
        timer: null,
        max:7,
        status: 'h',
        time:5,
        index: 1,
        play: 'inactive',
        type: {1:  {ext: 'png',
                        time: 2},
                2: {ext: 'png',
                        time: 2},
                3: {ext: 'gif',
                        time: 7},
                4: {ext: 'gif',
                        time: 7},
                5: {ext: 'png',
                        time: 3},
                6: {ext: 'png',
                        time: 3},
                7: {ext: 'png',
                        time: 3},
        }
    },

    snap2: {
       current: 1,
        timer: null,
        max:4,
        status: 'h',
        time:5,
        index: 2,
        play: 'inactive',
        type: {1:  {ext: 'png',
                        time: 5},
                2: {ext: 'png',
                        time: 8},
                3: {ext: 'png',
                        time: 6},
                4: {ext: 'png',
                        time: 4},
       }
    },
    snap3: {
        current: 1,
        timer: null,
        max:3,
        status: 'h',
        time:5,
        index: 3,
        play: 'inactive',
        type: {1:  {ext: 'png',
                        time: 4},
                2: {ext: 'gif',
                        time: 3},
                3: {ext: 'gif',
                        time: 5},
    }
}};

$('.button').on('click',function(){
    var phone = $(this).attr('data-build');
    var type = $(this).attr('data-button');

    if (type=='play') {
        $('.s-'+phone).removeClass('active-button');
        $(this).addClass('active-button');
        if (timers[phone].play== 'inactive'){
            timers[phone].status='p';
            machine(phone);
            timers[phone].play= 'active';
        } 
        else {
        timers[phone].status='p';
        }} 
    else if (type=='pause'){
         $('.s-'+phone).removeClass('active-button');
        $(this).addClass('active-button');
        timers[phone].status='h';
    } else if (type=='reset'){
        $('.s-'+phone).removeClass('active-button');
        $('.s-'+phone+'.play').addClass('active-button');
        timers[phone].current=1;
        $('#'+phone+' .stuff').removeClass('fade');
        clearInterval(timers[phone].timer);
        timers[phone].status='p';
        machine(phone);
        $('#'+phone+' .snap').attr('src', 'img/'+phone+'/'+1+'.png');
        
    }

});

//machine starts here 
function machine(phn){
    var snaps = timers[phn].current;
    var startsec = timers[phn].type[snaps].time;
    var seconds = startsec;
    var lastsnap = timers[phn].max;
    timers[phn].timer = setInterval(secondPassed, 1000);
    function secondPassed() {
        
        if (seconds < 0) {
            if (snaps < lastsnap){
                var ext = timers[phn].type[snaps+1].ext;
                var time = timers[phn].type[snaps+1].time;
                console.log(snaps);
                snaps ++;
                seconds = time;
                $('#'+[phn]+' .snap').attr('src', 'img/'+phn+'/'+snaps+'.'+ext);
                $('#'+[phn]+" .timer-no").html(seconds);
                } else {
                    clearInterval(timers[phn].timer);
                    $('#'+phn+' .stuff').addClass('fade');
                    $('.s-'+phn+'.play').removeClass('active-button');
                }

            } else if (timers[phn].status == 'p') {
                $('#'+[phn]+" .timer-no").html(seconds);
                seconds--;
            }
        }
}

//make scroll sticky

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

//scroll to partcular section on the page
$('.nav').on('click', function(){
	var space = $(this).attr('data-refer');
    var l= '#s-'+space;
    var pos = $(l).offset();
    $('html, body').animate({scrollTop:(pos.top)}, 600);
});
//scroll to the page from the arrow
$('#arrow').on('click', function(){
    var pos = $('#s-intro').offset();
    $('html, body').animate({scrollTop:(pos.top)}, 400);
});
