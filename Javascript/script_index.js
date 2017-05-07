jQuery(document).ready(function(){

	// when the user scrolling the page this function will triggered
	jQuery(window).scroll(function(){

		var scrollPos = jQuery(window).scrollTop();

		if (scrollPos > 20) {

			jQuery(".scroll-container").show(150);

		}else{

			jQuery(".scroll-container").hide(150);

		}

	})

	// make the cards (div) clickables

	$(".card-style").click(function() {

  		window.location = $(this).find("a").attr("href"); 

 		 return false;
	});
	

})