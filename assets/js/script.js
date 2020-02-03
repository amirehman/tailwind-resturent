jQuery(document).ready(function() {

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
    })
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
    });


    // ---------- //

    var i = 0;
    $(".megamenu-burgur")
        .mouseenter(function() {
            i += 1;
            $('.megamenu-wrapper').addClass('megamenu-active')
        })
        .mouseleave(function() {
            $('.megamenu-wrapper').removeClass('megamenu-active')
        });


    // ---------------------- //

    $('#homeCaousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

})