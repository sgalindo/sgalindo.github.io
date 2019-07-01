$(document).ready(function() {
    /* ---- MOBILE NAVIGATION ---- */
    $(".burger-icon").on("click", function() {
        if ($(".main-nav").hasClass("mobile-hide")) {
            $(".main-nav").removeClass("mobile-hide");
            $(".main-nav").addClass("mobile-show");
        } else {
            $(".main-nav").addClass("mobile-hide");
            $(".main-nav").removeClass("mobile-show");
        }
    });
    $(".featured h1").hide();
    $(".main-content").hide();
});

// $(document).ready(function() {
//     /* ---- FADE IN ---- */
//     $('body').css('display', 'none').fadeIn(1000);
// });

$(window).on("load", function() {
    /* ---- FADE IN ---- */
    $(".featured h1").css('color', '#fff').fadeIn(2250);
    $(".main-content").css('color', '#fff').fadeIn(1000);
});