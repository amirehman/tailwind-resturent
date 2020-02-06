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
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

})