var timers = {
    snap1: {
        current: 0,
        timer: null,
        max:5,
        status: 'h',
        time:5,
    },

    snap2: {
        current: 0,
        timer: 5,
        max:5,
        status: 'h'
    },
    snap3: {
        current: 0,
        timer: 5,
        max:5,
        status: 'h'
    },
    snap4: {
        current: 0,
        timer: 5,
        max:5,
        status: 'h',
    },
    snap5: {
        current: 0,
        timer: 5,
        max:5,
        status: 'h',
    }
};

//machine starts here 
function machine(phn){
    var startsec = timers[phn].time;
    var seconds = startsec;
    var snaps = timers[phn].current;
    var lastsnap = timers[phn].max;

    console.log(startsec + " " + seconds + " " + snaps + " " + lastsnap);

    function secondPassed() {
        $('#'+[phn]+" .timer-no").html(seconds);
        console.log(seconds);
        if (seconds == 0) {
            if (snaps < lastsnap){
                seconds = startsec;
                snaps ++;
                $('#snap1 .snap').attr('src', 'img/snaps1/'+snaps+'.png');
                $('#'+[phn]+" .timer-no").html(seconds);
                } else {
                    clearInterval(countdownTimer);
                    $('#snap1 .replay').addClass('show');
                    $('#snap1 .stuff').addClass('fade');
                }

            } else {
                seconds--;
                console.log(seconds)
            }
        }

    var countdownTimer = setInterval('secondPassed([phn])', 1000);
}

// check page location
machine ('snap1');
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




/*
var pw1 = new Waypoint({
  element: document.getElementById("snap1"),
  handler: function(direction) {
    console.log('s-intro ' + direction);
    if (direction == 'up'){
        timers.snap1.status = 'p';
    }
    if (direction == 'down'){
        timers.snap1.status = 'p';
    }
  },
  offset: 'bottom-in-view'
})

var pw2 = new Waypoint({
  element: document.getElementById("snap2"),
  handler: function(direction) {
    console.log('s-user-growth ' + direction);
    if (direction == 'up'){
        timers.snap2.status = 'p';
    }
    if (direction == 'down'){
        timers.snap2.status = 'h';
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
        timers.snap3.status = 'h';
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
        timers.snap4.status = 'h';
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
        timers.snap5.status = 'h';
    }
  },
  offset: 'bottom-in-view'
})
*/



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

        