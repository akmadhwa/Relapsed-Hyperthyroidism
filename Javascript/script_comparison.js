
    $(".scroll-box0").click(function scrollToCost() {
        $('html,body').animate({
            scrollTop: $("#cost").offset().top},
            'fast');
    });

    $(".scroll-box2").click(function scrollToSideEffects() {
        $('html,body').animate({
            scrollTop: $("#risk").offset().top},
            'fast',);
        $('.scroll-container').show($("#risk").offset().top);
    });

    $(".scroll-box3").click(function scrollToPrecautions() {
        $('html,body').animate({
            scrollTop: $("#precautions").offset().top},
            'fast');
    });

    $(".scroll-box4i").click(function scrollToHormone() {
        $('html,body').animate({
            scrollTop: $("#hormone").offset().top},
            'fast');
    });

    $(".scroll-box5").click(function scrollToSerious() {
        $('html,body').animate({
            scrollTop: $("#serious").offset().top},
            'fast');
    });

    $(".scroll-box6").click(function scrollToFull() {
        $('html,body').animate({
            scrollTop: $("#full").offset().top},
            'fast');
    });

//hide div scrolling up and show when down
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll < mypos && up) { //newscroll < mypos && up
        $('.scroll-container').stop().slideToggle();
        up = !up;
    } else if(newscroll > mypos && !up) { //newscroll > mypos && !up
        $('.scroll-container').stop().slideToggle();
        up = !up;
    }
    mypos = newscroll;
});

$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});