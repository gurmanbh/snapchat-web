/* javascript 
$(function() {

    var $sidebar   = $("#rail"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 10;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});*/
/*
$(function() {

    var $sidebar   = $("#rail"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 10;
    var elementStyle = document.getElementById("rail").style;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            elementStyle.position="fixed",
            elementStyle.marginTop=10%
            else {
           elementStyle.position="static";
            };
        });
}); 
*/
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
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});  