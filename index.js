//  drawer
$(document).ready(function () {
    $('.drawer').drawer();
});


// wow.js
new WOW({
    mobile: false
}).init();


// スクロールボタン
jQuery(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

//Swiper
// var swiper = undefined;
// var winW =  window.innerWidth;
// var swiperElement = document.getElementById("slider");
// var swiperWrapper = swiperElement.getElementsByClassName("swiper-wrapper");
// var swiperSlide = swiperElement.getElementsByClassName("swiper-slide");
// var options = {
//   loop: true,
//   centeredSlides : true,
//   pagination: '.swiper-pagination',
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
//   breakpoints: {
//     991: {
//       slidesPerView: 2,
//       spaceBetween: 10
//     },
//     767: {
//       slidesPerView: 1,
//       spaceBetween: 0
//     }
//   }
// };
// function initSwiper() {
//   if(swiperElement){
//     var screenWidth = window.innerWidth;
//     if(screenWidth > 992 && swiper == undefined) { 
//       swiper = new Swiper('#slider', options);
//     } else if (screenWidth > 991 && swiper != undefined) {
//       swiper.destroy();
//       swiper = undefined;
//       for( var i=0;i<swiperWrapper.length; i++ ) {
//         swiperWrapper[i].removeAttribute('style');
//       }
//       for( var i=0;i<swiperSlide.length; i++ ) {
//         swiperSlide[i].removeAttribute('style');
//       }
//     }
//   }
// }
// initSwiper();

// window.addEventListener('resize',initSwiper);

$(function () {
    //swiper 559以下で起動
    var swiper;
    $(window).on('load resize', function () {
        var w = $(window).width();
        if (w <= 559) {
            if (swiper) {
                return;
            } else {
                swiper = new Swiper('.portfolio', {
                    loop: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                });
            }
        } else {
            if (swiper) {
                swiper.destroy();
                swiper = undefined;
            }
        }
    });
}); 
