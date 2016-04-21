$(function () {
    $('.star-ratings').show();
    $('.example-bootstrap').barrating({
        theme: 'bootstrap-stars',
        showSelectedRating: false,
        readonly: true
    });
    $('#st-accordion').accordion(
        //{
        //oneOpenedItem: true
        //}
    );
});
$(document).ready(function () {

    $('.hotelstatus').editable({
        value: 2,
        source: [
            { '1': 'Active' },
            { '2': 'Inactive' }
        ]
    });
    $('.next').on('click', function () {
        if ($(this).hasClass('active')) {
            //$(this).parent().parent().css('transform', 'rotate3d(0,1,0,-360deg)');
            $(this).parent().parent().hide();
            $(this).parent().parent().next().show();
            //$(this).parent().parent().next().css('transform', 'rotate3d(0,1,0,360deg)');
        }
    });
    $('.prev').on('click', function () {
        if ($(this).hasClass('active')) {
            //$(this).parent().parent().css('transform', 'rotate3d(0,1,0, -360deg)');
            $(this).parent().parent().hide();
            $(this).parent().parent().prev().show();
            //$(this).parent().parent().prev().css('transform', 'rotate3d(0,1,0, 360deg)');
        }
    });
    $('.searchpanel-button').on('click', function (e) {
        var currentButton = $(this);
        var panelClass = $(this).attr('data-show-panel');
        $('.panel-search:visible').slideUp(600);
        var panel = $('.' + panelClass);
        if ($('.' + panelClass).is(':visible')) {
            panel.slideUp(600, function () {
                collapsePanelButton($('.booking-panel-button').children());
                collapsePanelButton($('.advanced-panel-button').children());
            });
        } else {
            panel.find('.panel-body').show();
            panel.slideDown(600, function () {
                if ($(this).hasClass('booking-panel')) {
                    collapsePanelButton($('.advanced-panel-button').children());
                    expandPanelButton($('.booking-panel-button').children());
                } else {
                    collapsePanelButton($('.booking-panel-button').children());
                    expandPanelButton($('.advanced-panel-button').children());
                }
            });
        }
        currentButton.trigger('focusout');
        e.preventDefault();
    });
    $('#startGuiededTour').on('click', function () {
        //var _tour = GuidedTour();\
        var tour = new Tour({
            steps: [
            {
                element: ".formcreatehotel",
                title: "Create Hotel Entry.",
                content: "Enter data for masters from here.",
                placement: "bottom"
            },
            {
                element: ".panelsummeryguide",
                title: "Page Summary",
                content: "Your page summary will be goes here.",
                placement: "bottom"
            }
            ]
        });
        localStorage.clear();
        tour.init();
        tour.start();
    });

    $('st-accordion').on('click', 'li div.my_class', handle_click);
    $('.orderby-accordion li').on('click', function () {
        var thisControl = $(this);
        $('.orderby-accordion li').removeClass('orderby').find('i').removeClass('fa').removeClass('fa-check');
        thisControl.find('i').addClass('fa').addClass('fa-check')
        thisControl.addClass('orderby')
    });
    Morris.Bar({
        element: 'morris2',
        data: [
            { year: '11-Mar-2016', a: 25, b: 15 },
            { year: '12-Mar-2016', a: 05, b: 12 },
            { year: '13-Mar-2016', a: 05, b: 32 },
            { year: '14-Mar-2016', a: 19, b: 05 },
            { year: '15-Mar-2016', a: 25, b: 40 },
            { year: '16-Mar-2016', a: 65, b: 10 },
            { year: '17-Mar-2016', a: 65, b: 60 }
        ],
        xkey: 'year',
        ykeys: ['a', 'b'],
        labels: ['a', 'b'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#6ad6c3', '#22BAA0'],
        resize: true
    });

});
function expandPanelButton(control) {
    control.removeClass('fa-plus');
    control.addClass('fa-minus');
}
function collapsePanelButton(control) {
    control.removeClass('fa-minus');
    control.addClass('fa-plus');
}
function handle_click(e) {
    e.stopPropagation();
    // your event code
}