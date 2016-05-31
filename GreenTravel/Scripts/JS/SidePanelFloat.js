/* 
Side Panel Floating js | By Amit Parmar (28-Dec-2015 12:27 PM)
*/
$(window).scroll(function () {
    set_prev = $('.summery-detail').css('top');
    if ($('body').hasClass('page-horizontal-bar')) {
        if ($('body').hasClass('page-sidebar-fixed')) {
            if ($(document).scrollTop() >= 161) {
                set = ($(document).scrollTop() - (160)) + "px";
                $('.summery-detail').animate({ top: set }, { duration: 0, queue: false });
                if (($('.summery-detail').parent().parent().parent().parent().offset().top + $('.summery-detail').parent().parent().parent().parent().height()) < ($('.summery-detail').offset().top + $(document).scrollTop() + 202)) {
                    $('.summery-detail').animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $('.summery-detail').css('top', '');
            }
        } else if ($('body').hasClass('page-header-fixed')) {
            if ($(document).scrollTop() >= 228) {
                set = ($(document).scrollTop() - 225) + "px";
                $('.summery-detail').animate({ top: set }, { duration: 0, queue: false });
                if (($('.summery-detail').parent().parent().parent().parent().offset().top + $('.summery-detail').parent().parent().parent().parent().height()) < ($('.summery-detail').offset().top + $(document).scrollTop() + 140)) {
                    $('.summery-detail').animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $('.summery-detail').css('top', '');
            }
        } else {
            if ($(document).scrollTop() >= 286) {
                set = ($(document).scrollTop() - 288) + "px";
                $('.summery-detail').animate({ top: set }, { duration: 0, queue: false });
                if (($('.summery-detail').parent().parent().parent().parent().offset().top + $('.summery-detail').parent().parent().parent().parent().height()) < ($('.summery-detail').offset().top + $(document).scrollTop() + 73)) {
                    $('.summery-detail').animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $('.summery-detail').css('top', '');
            }
        }
    } else {
        if ($('body').hasClass('page-header-fixed')) {
            if ($(document).scrollTop() >= 156) {
                set = ($(document).scrollTop() - 155) + "px";
                $('.summery-detail').animate({ top: set }, { duration: 0, queue: false });
                if (($('.summery-detail').parent().parent().parent().parent().offset().top + $('.summery-detail').parent().parent().parent().parent().height()) < ($('.summery-detail').offset().top + $(document).scrollTop() + 200)) {
                    $('.summery-detail').animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $('.summery-detail').css('top', '');
            }
        } else {
            if ($(document).scrollTop() >= 218) {
                set = ($(document).scrollTop() - 216) + "px";
                $('.summery-detail').animate({ top: set }, { duration: 0, queue: false });
                if (($('.summery-detail').parent().parent().parent().parent().offset().top + $('.summery-detail').parent().parent().parent().parent().height()) < ($('.summery-detail').offset().top + $(document).scrollTop() + 145)) {
                    $('.summery-detail').animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $('.summery-detail').css('top', '');
            }
        }
    }
});