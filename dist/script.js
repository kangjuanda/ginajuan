$(window).on('load', function() {
    $('.pcalon').addClass('muncul');
    $('.pketcountdown').addClass('muncul');
    $('.pket1').addClass('muncul');
    $('.cliptart').addClass('muncul');
    $('.cliptart1').addClass('muncul');
    $('.cliptart2').addClass('muncul');
    $('.cliptart3').addClass('muncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // console.log('ok');


    //home
    if(wScroll > $('.home').offset().top - 100) {
        $('.home .pcliptart, .home .psatu, .couple .pcowok, .couple .pcewek').each(function(i) {
            setTimeout(function() {
                $('.home .pcliptart, .home .psatu, .couple .pcowok, .couple .pcewek').eq(i).addClass('muncul');
            }, 500 * (i+1));
        });
    }
    if(wScroll < $('.home').offset().top - 300) {
        $('.couple .pcewek, .couple .pcowok, .home .psatu, .home .pcliptart').each(function(i) {
            setTimeout(function() {
                console.log('ok');
                $('.couple .pcewek, .couple .pcowok, .home .psatu, .home .pcliptart').eq(i).removeClass('muncul');
            }, 500 * (i+1));
        })
    }
    //informasi acara
    if(wScroll > $('.info').offset().top - 350) {
        $('.info .cardinformasi, .info .pcliptart1').each(function(i) {
            setTimeout(function() {
                $('.info .cardinformasi, .info .pcliptart1').eq(i).addClass('muncul');
            }, 1000 * (i+1));
        });
    }
    if(wScroll < $('.info').offset().top - 400) {
        $('.info .cardinformasi, .info .pcliptart1').each(function(i) {
            setTimeout(function() {
                $('.info .cardinformasi, .info .pcliptart1').eq(i).removeClass('muncul');
            }, 600 * (i+1));
        });
    }

    //gallery
    if(wScroll > $('.gallery').offset().top - 350) {
        // console.log('ok');
        $('.gallery .img-container, .gallery .pcliptart2').each(function(i) {
            setTimeout(function() {
                $('.gallery .img-container, .gallery .pcliptart2').eq(i).addClass('muncul');
            }, 500 * (i+1));
        });
    }
    if(wScroll < $('.gallery').offset().top - 400) {
        $('.gallery .img-container, .gallery .pcliptart2').each(function(i) {
            setTimeout(function() {
                console.log('ok');
                $('.gallery .img-container, .gallery .pcliptart2').eq(i).removeClass('muncul');
            }, 500 * (i+1));
        })
    }
    //story
    if(wScroll > $('.story').offset().top - 350) {
        $('.story .pcliptart3').addClass('muncul');
    }
    if(wScroll < $('.story').offset().top - 400) {
        $('.story .pcliptart3').removeClass('muncul');
    }

    //rsvp
    if(wScroll > $('.rsvp').offset().top - 350) {
        $('.rsvp .pcliptart4').addClass('muncul');
    }
    if(wScroll < $('.rsvp').offset().top - 400) {
        $('.rsvp .pcliptart4').removeClass('muncul');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var btnLihatUndangan = document.querySelector('.lhtundangan');
    var body = document.body;

    // Fungsi untuk menambahkan kelas 'show-scroll' pada body dan menyimpan statusnya di localStorage
    function addShowScrollClass() {
        body.classList.add('show-scroll');
        localStorage.setItem('scrollStatus', 'shown');
    }

    // Fungsi untuk menghapus kelas 'show-scroll' dari body dan menyimpan statusnya di localStorage
    function removeShowScrollClass() {
        body.classList.remove('show-scroll');
        localStorage.setItem('scrollStatus', 'hidden');
    }

    // Cek status pada localStorage saat halaman dimuat kembali
    var scrollStatus = localStorage.getItem('scrollStatus');
    if (scrollStatus === 'shown') {
        addShowScrollClass();
    } else {
        removeShowScrollClass();
    }

    // Tambahkan event listener untuk tombol
    btnLihatUndangan.addEventListener('click', function () {
        addShowScrollClass();
    });

    // Tambahkan event listener untuk event sebelum unload untuk menyimpan status terakhir sebelum halaman dimuat kembali
    window.addEventListener('beforeunload', function () {
        if (body.classList.contains('show-scroll')) {
            localStorage.setItem('scrollStatus', 'shown');
        } else {
            localStorage.setItem('scrollStatus', 'hidden');
        }
    });
});
