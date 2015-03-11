var timers = {
    snap1: {
        current: 1,
        timer: null,
        max:4,
        status: 'h',
        time:5,
    },

    snap2: {
       current: 1,
        timer: null,
        max:4,
        status: 'h',
        time:5,
    },
    snap3: {
        current: 1,
        timer: null,
        max:4,
        status: 'h',
        time:5,
    },
    snap4: {
        current: 1,
        timer: null,
        max:4,
        status: 'h',
        time:5,
    },
    snap5: {
        current: 1,
        timer: null,
        max:4,
        status: 'h',
        time:5,
    }
};

function pause (phn){


    }

//machine starts here 
function machine(phn){
    var startsec = timers[phn].time;
    var seconds = startsec;
    var snaps = timers[phn].current;
    var lastsnap = timers[phn].max;

    console.log(startsec + " " + seconds + " " + snaps + " " + lastsnap);
    var countdownTimer = setInterval(secondPassed, 1000);
    timers[phn].timer = countdownTimer;
    function secondPassed() {
        
        if (seconds < 0) {
            if (snaps < lastsnap){
                seconds = startsec;
                snaps ++;
                $('#snap1 .snap').attr('src', 'img/'+phn+'/'+snaps+'.png');
                $('#'+[phn]+" .timer-no").html(seconds);
                } else {
                    clearInterval(countdownTimer);
                    $('#'+phn+' .replay').addClass('show');
                    $('#'+phn+' .stuff').addClass('fade');
                }

            } else if (timers[phn].status == 'p' && $()) {
                
                $('#'+[phn]+" .timer-no").html(seconds);
                seconds--;
            }
        }

    
}

// check page location

/* $(window).scroll(function() { 
    var buffer = 200;

    var loc1 = $('#snap1').offset().top - buffer;
    var loc2 = $('#snap2').offset().top - buffer;
    var loc3 = $('#snap3').offset().top - buffer;
    var loc4 = $('#snap4').offset().top - buffer;
    var loc5 = $('#snap5').offset().top - buffer;

    var page = $(window).scrollTop();  

    if (page>loc1 && page<loc2){
    machine ('snap1');
    console.log('on snap 1');
    }

    if (page>loc2 && page<loc3){
    machine ('snap2');
    console.log('on snap 2');
    }

    if (page>loc3 && page<loc4){
    machine ('snap3');
    console.log('on snap 3');
    }

});
*/
//waypoints
// html
        //<div id="zero" class="iphone" data-which-phone="zero"></div>


        // on scroll past phonefunction(){
            //var which = $(this.element).attr('data-which-phone');
            //var timer = setInterval(secondPassed(which))
            //timers[which].timer = timer;
        //})

        // on pause
            //var which = $(this.element).attr('data-which-phone');
            //clearInterval(timers[which].timer);
/*
var datedata = jQuery.grep(bigdata, function(obj) {
                return obj.thedate === strDateTime;
                });

                */

var pw1 = new Waypoint({
  element: document.getElementById("snap1"),
  handler: function(direction) {
    console.log('s-intro ' + direction);
    if (direction == 'up'){
        timers.snap1.status = 'p';
        machine ('snap1');

    }
    if (direction == 'down'){
        timers.snap1.status = 'p';
        machine ('snap1');
    }
  },
  offset: 'bottom-in-view'
})

var pw2 = new Waypoint({
  element: document.getElementById("snap2"),
  handler: function(direction) {
    console.log('s-user-growth ' + direction);
    if (direction == 'up'){
        
        machine ('snap2');
    }
    if (direction == 'down'){
        timers.snap2.status = 'p';
        timers.snap1.status = 'h';
        machine ('snap2');
    }
  },
  offset: 'bottom-in-view'
})

var pw3 = new Waypoint({
  element: document.getElementById("snap3"),
  handler: function(direction) {
    console.log('s-interfaces ' + direction);
    if (direction == 'up'){
        timers.snap3.status = 'p';
    }
    if (direction == 'down'){
        timers.snap2.status = 'h'
        timers.snap1.status = 'p';
        machine ('snap3');
    }
  },
  offset: 'bottom-in-view'
})

var pw4 = new Waypoint({
  element: document.getElementById("snap4"),
  handler: function(direction) {
    console.log('s-stories ' + direction);
    if (direction == 'up'){
        timers.snap4.status = 'p';
    }
    if (direction == 'down'){
        timers.snap2.status = 'h'
        timers.snap1.status = 'p';
        machine ('snap4');
    }
  },
  offset: 'bottom-in-view'
})

var pw5 = new Waypoint({
  element: document.getElementById("snap5"),
  handler: function(direction) {
    if (direction == 'up'){
        timers.snap5.status = 'p';
    }
    if (direction == 'down'){
        timers.snap2.status = 'h'
        timers.snap1.status = 'p';
        machine ('snap5');
    }
  },
  offset: 'bottom-in-view'
})




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

/*

$(document).ready(function() {  
var sticky = $('#s-intro .purplehead').offset().top;  
var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  

    if (scrollTop > sticky) {   
        $('#s-intro .purplehead').addClass('sticky1');
    } else {  
        $('#s-intro .purplehead').removeClass('sticky1');
    }  
    };  
  
    $(window).scroll(function() {  
        stickyNav();  
    });  
});    

*/

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

        