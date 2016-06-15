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
$(window).load(function () {
    //var $container = $('.grid-item');

    //$container.isotope({
    //    itemSelector: '.item',
    //    layoutMode: 'masonry',
    //});

});
$(document).ready(function () {

    //$("#btnswitchview").click(function (e) {

    //        $(this).text("Switch To Tour View");

    //});
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
    $('st-accordion').on('click', 'li div.my_class', handle_click);
    $('.orderby-accordion li').on('click', function () {
        var thisControl = $(this);
        $('.orderby-accordion li').removeClass('orderby').find('i').removeClass('fa').removeClass('fa-check');
        thisControl.find('i').addClass('fa').addClass('fa-check')
        thisControl.addClass('orderby')
    });
    $('.show-followup-details').on('click', function () {
        //var followupDetails = $(this).parent().parent().next();
        $(this).next().children('.searchshhd').slideToggle('slow');
        $(this).next().next().slideToggle('slow');
    });
    Morris.Bar({
        element: 'morris2',
        data: [
            { year: 'A', a: 25},
            { year: 'A+', a: 05},
            { year: 'A++', a: 05},
            { year: 'B', a: 19},
            { year: 'B+', a: 25},
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
    $('#ulViewList').delegate("a", "click", function (e) {
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().addClass("active");
    });

    $('.show-all-expand').on('click', function () {
        $('.searchshhd').slideToggle('slow');
      
    });

});
function expandPanelButton(control) {
    control.removeClass('fa-search');
    control.addClass('fa-search');
}
function collapsePanelButton(control) {
    control.removeClass('fa-search');
    control.addClass('fa-search');
}
function handle_click(e) {
    e.stopPropagation();
    // your event code
}