jQuery(document).ready(function() {

    // when the user scrolling the page this function will triggered
    jQuery(window).scroll(function() {

        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos > 20) {

            jQuery(".scroll-container").show(300);

            // add animated to pda-title

            $(".pda-title").addClass("wobble animated");

        } else {

            jQuery(".scroll-container").hide(300);

        }

    })

    // make the cards (div) clickables

    $(".card-style").click(function() {

        window.location = $(this).find("a").attr("href");

        return false;
    });


    // make hide button clickables
    // for get to know button 
    $(".scroll-box1").click(function() {

        window.location.href = "html/gettoknow.html";
    });

    $(".scroll-box2").click(function() {

        window.location.href = "html/treatmentOption.html";
    });

    $(".scroll-box3").click(function() {

        window.location.href = "html/comparison.html";
    });

    $(".scroll-box4").click(function() {

        window.location.href = "html/decisions.html";
    });

    $(".manual-button").click(function() {

        window.location.href = "html/gettoknow.html";
    });


})
