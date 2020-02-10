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
    var mySwiper = new Swiper('.top-cover-swiper-container', {
        slidesPerView: 'auto',
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.cover-swiper-pagination',
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

    // ---------------------- //
    var mySwiper = new Swiper('.news-swiper-container', {
        slidesPerView: 'auto',
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.news-swiper-button-next',
            prevEl: '.news-swiper-button-prev',
        },
    })

    // ---------------------- //
    var mySwiper = new Swiper('.partner-swiper-container', {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: '.partner-swiper-button-next',
            prevEl: '.partner-swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            }
        }
    })

    // ---------------------- //
    var mySwiper = new Swiper('.video-swiper-container', {
        slidesPerView: 'auto',
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.video-swiper-button-next',
            prevEl: '.video-swiper-button-prev',
        },
    })

    $(".video-carousel-modal").modalVideo();

})