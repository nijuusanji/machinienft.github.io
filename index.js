$(document).ready(function(){


    if($(window).width() < 991) {
        $('.desktop').addClass('hide');
        $('.bars').removeClass('hide');
        $('.whatare_con').removeClass('d-flex');
        $('.cp_img_mobile').removeClass('hide');
        $('.cp_img_desk').addClass('hide');
    }
    if($(window).width() > 991) {
        $('.desktop').removeClass('hide');
        $('.bars').addClass('hide');
        $('.whatare_con').addClass('d-flex');
        $('.cp_img_mobile').addClass('hide');
        $('.cp_img_desk').removeClass('hide');
    }

    $('.bars').on('click', function(){
        $('.menu_bars').removeClass('hide');
        console.log('bars click')
    })

    $('.toggle_inside').on('click',function(){
        $('.menu_bars').addClass('hide');
    })

    $('.link_btn').on('click',function(){
        $('.menu_bars').addClass('hide');
    })

    $('.bar_btn').on('click',function(){
        $('.menu_bars').addClass('hide');
    })

    $(window).on('resize', function() {
        // var width = $(window).width();
        if($(window).width() < 991) {
            $('.desktop').addClass('hide');
            $('.bars').removeClass('hide');
            $('.whatare_con').removeClass('d-flex');
            $('.cp_img_mobile').removeClass('hide');
            $('.cp_img_desk').addClass('hide');
            //$('.mobile .hide').addClass('show');
        }
        if($(window).width() > 991) {
            //$('.mobile').removeClass('hide');
            $('.desktop').removeClass('hide');
            $('.bars').addClass('hide');
            $('.whatare_con').addClass('d-flex');
            $('.cp_img_mobile').addClass('hide');
            $('.cp_img_desk').removeClass('hide');
        }
    });
})


const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20

console.log(hours);
console.log(isDayTime);


