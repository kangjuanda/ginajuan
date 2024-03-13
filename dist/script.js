$(window).on('load', function() {
    $('.pcalon').addClass('muncul');
    $('.pketcountdown').addClass('muncul');
    $('.pket1').addClass('muncul');
    $('.lhtundangan').addClass('muncul');
    $('.cliptart').addClass('muncul');
    $('.cliptart1').addClass('muncul');
    $('.cliptart2').addClass('muncul');
    $('.cliptart3').addClass('muncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // console.log('ok');


    //home
    if(wScroll > $('.home').offset().top - 900) {
        $('.home .psatu').each(function(i) {
            setTimeout(function() {
                $('.home .psatu').eq(i).addClass('muncul');
                $('.home .pcliptart').addClass('muncul');
            }, 500 * (i+1));
        });
    }
    //home cowok & cewek
    if(wScroll > $('.couple').offset().top - 850) {
        $('.couple .pcowok').addClass('muncul');
    }

    if(wScroll > $('.couple').offset().top - 750) {
        $('.couple .pcewek').addClass('muncul');
    }

    if(wScroll > $('.info').offset().top - 350) {
        $('.info .cardinformasi').each(function(i) {
            setTimeout(function() {
                $('.info .cardinformasi').eq(i).addClass('muncul');
                $('.info .pcliptart1').addClass('muncul');
            }, 300 * (i+1));
        });
        // $('.info .cardinformasi').addClass('muncul');
    }

    //gallery
    if(wScroll > $('.gallery').offset().top - 500) {
        // console.log('ok');
        $('.gallery .img-container').each(function(i) {
            setTimeout(function() {
                $('.gallery .img-container').eq(i).addClass('muncul');
                $('.gallery .pcliptart2').addClass('muncul');
            }, 500 * (i+1));
        });
    }
    if(wScroll < $('.gallery').offset().top - 500) {
        $('.gallery .img-container').each(function(i) {
            setTimeout(function() {
                console.log('ok');
                $('.gallery .img-container').eq(i).removeClass('muncul');
                $('.gallery .pcliptart2').removeClass('muncul');
            }, 500 * (i+1));
        })
    }
    //story
    if(wScroll > $('.story').offset().top - 500) {
        // console.log('ok');
        $('.story .pcliptart3').each(function(i) {
            setTimeout(function() {
                $('.story .pcliptart3').addClass('muncul');
            }, 500 * (i+1));
        });
    }
    //rsvp
    if(wScroll > $('.rsvp').offset().top - 500) {
        // console.log('ok');
        $('.rsvp .pcliptart4').each(function(i) {
            setTimeout(function() {
                $('.rsvp .pcliptart4').addClass('muncul');
            }, 500 * (i+1));
        });
        $('.rsvp .pcliptart4-down').each(function(i) {
            setTimeout(function() {
                $('.rsvp .pcliptart4-down').addClass('muncul');
            }, 500 * (i+1));
        });
    }
    //gifts
    if(wScroll > $('.gifts').offset().top - 500) {
        // console.log('ok');
        $('.gifts .pcliptart5').each(function(i) {
            setTimeout(function() {
                $('.gifts .pcliptart5').addClass('muncul');
            }, 500 * (i+1));
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var btnLihatUndangan = document.querySelector('.lhtundangan');

    btnLihatUndangan.addEventListener('click', function () {
        document.body.classList.add('show-scroll');
    });
});