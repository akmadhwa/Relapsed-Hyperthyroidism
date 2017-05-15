$(".scroll-box0").click(function scrollToCost() {
    $('html,body').animate({
        scrollTop: 0},
        'slow');
});

$(".scroll-box2").click(function scrollToSideEffects() {
    $('html,body').animate({
        scrollTop: $("#risk").offset().top},
        'slow');
});

$(".scroll-box3").click(function scrollToPrecautions() {
    $('html,body').animate({
        scrollTop: $("#precautions").offset().top},
        'slow');
});

$(".scroll-box4i").click(function scrollToHormone() {
    $('html,body').animate({
        scrollTop: $("#hormone").offset().top},
        'slow');
});

$(".scroll-box5").click(function scrollToSerious() {
    $('html,body').animate({
        scrollTop: $("#serious").offset().top},
        'slow');
});

$(".scroll-box6").click(function scrollToFull() {
    $('html,body').animate({
        scrollTop: $("#full").offset().top},
        'slow');
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the n