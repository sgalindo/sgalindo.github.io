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
});

$(document).ready(function() {
    /* ---- FADE IN ---- */
    $('body').css('display', 'none').fadeIn(1000);
});

$(window).on("load", function() {
    /* ---- FADE IN ---- */
    $(".featured h1").css('color', '#fff').fadeIn(2500);
});