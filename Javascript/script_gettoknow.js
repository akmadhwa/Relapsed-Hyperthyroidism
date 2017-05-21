jQuery(document).ready(function() {

    $(".opt-sym").click(function() {
        $("#Box1").fadeIn(150);
    });

    $(".opt-cause").click(function() {
        $("#Box2").fadeIn(150);
    });

    $(".opt-risk").click(function() {
        $("#Box3").fadeIn(150);
    });
    $(".opt-complicate").click(function() {
        $("#Box4").fadeIn(150);
    });

    $(".btn").click(function() {
        $(".popup-position").fadeOut(150);
    });

     $("#Box5").click(function() {
        $(".popup-position").fadeOut(150);
    });

     $(".btn").click(function() {
        $(".popup-position-warning").fadeOut(150);
    });
    
    $('[data-toggle="tooltip"]').tooltip();   
        

});
