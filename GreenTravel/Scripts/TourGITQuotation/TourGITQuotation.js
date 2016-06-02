$(function () {
    $('#st-accordion').accordion(
        //{
        //oneOpenedItem: true
        //}
    );
    $('.example-bootstrap').barrating({
        theme: 'bootstrap-stars',
        showSelectedRating: false,
        readonly: true
    });
});
$(document).ready(function () {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    $('#calendar').fullCalendar({

        header: {
            left: 'prev today',
            right: 'next',
            center: 'title'
        },
        defaultView: "agendaWeek",
        editable: false,
        droppable: false, // this allows things to be dropped onto the calendar
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'A-One Bangkok',
                start: (new Date(year, month, day)),
                color: '#ff0000'
            },
            {
                title: 'Grand Palace',
                start: new Date(year, month, day + 2),
                color: '#00ff00'
            },
            {
                title: 'Birthday Party',
                start: new Date(year, month, day + 1),
                color: '#0000ff'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: new Date(year, month, day + 3)
            }
        ]
    });
    $('#drpSharingType').change(function () {

    });
    $('.wizard-tab li a[href="#tab3"]').click(function () {
        //$('#calendar').fullCalendar('today');

        $('' + $(this).attr('href')).addClass('active');
        $('' + $(this).attr('href')).addClass('n');
        $('.fc-today-button').trigger('click');
        $('.fc-today-button').hide();
    });
    $('.removeHandler').on('click', function () {
        $(this).closest('li.ui-state-default').remove();
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

    if ($('ol.sortable').length) {


        $('.disclose').on('click', function () {
            $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
        })

        $('#serialize').click(function () {
            serialized = $('ol.sortable').nestedSortable('serialize');
            $('#serializeOutput').text(serialized + '\n\n');
        })

        $('#toHierarchy').click(function (e) {
            hiered = $('ol.sortable').nestedSortable('toHierarchy', { startDepthCount: 0 });
            hiered = dump(hiered);
            (typeof ($('#toHierarchyOutput')[0].textContent) != 'undefined') ?
            $('#toHierarchyOutput')[0].textContent = hiered : $('#toHierarchyOutput')[0].innerText = hiered;
        })

        $('#toArray').click(function (e) {
            arraied = $('ol.sortable').nestedSortable('toArray', { startDepthCount: 0 });
            arraied = dump(arraied);
            (typeof ($('#toArrayOutput')[0].textContent) != 'undefined') ?
            $('#toArrayOutput')[0].textContent = arraied : $('#toArrayOutput')[0].innerText = arraied;
        })
    }

    $('.drag-close').click(function () {
        $(this).parent().parent().remove();
    });

    $('#ulViewList').delegate("a", "click", function (e) {
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().addClass("active");
    });
    $('.ulviewlistclass').delegate("a", "click", function (e) {
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().addClass("active");
    });
    $('.btn-distribute-right').on('click', function () {
        $('.utilities-sidebar').parent().hide('slide', 'right', 400);
        $('.quickreport-sidebar').parent().hide('slide', 'left', 400);
        $('.distribute-sidebar').parent().show('slide', 'left', 400);
        $('.followup-sidebar').parent().hide('slide', 'left', 400);
        $('.btn-quickreports-right').removeClass('tab-itenaries');
        $('.btn-utilitiess-right').removeClass('tab-itenaries');
        $('.btn-followup-right').removeClass('tab-itenaries');
        $(this).addClass('tab-itenaries');
    });
    $('.btn-utilitiess-right').on('click', function () {
        $('.utilities-sidebar').parent().show('slide', 'right', 400);
        $('.quickreport-sidebar').parent().hide('slide', 'left', 400);
        $('.distribute-sidebar').parent().hide('slide', 'left', 400);
        $('.followup-sidebar').parent().hide('slide', 'left', 400);
        $('.btn-quickreports-right').removeClass('tab-itenaries');
        $('.btn-distribute-right').removeClass('tab-itenaries');
        $('.btn-followup-right').removeClass('tab-itenaries');
        $(this).addClass('tab-itenaries');
    });
    $('.btn-quickreports-right').on('click', function () {
        $('.quickreport-sidebar').parent().show('slide', 'left', 400);
        $('.utilities-sidebar').parent().hide('slide', 'right', 400);
        $('.distribute-sidebar').parent().hide('slide', 'left', 400);
        $('.followup-sidebar').parent().hide('slide', 'left', 400);
        $('.btn-utilitiess-right').removeClass('tab-itenaries');
        $('.btn-distribute-right').removeClass('tab-itenaries');
        $('.btn-followup-right').removeClass('tab-itenaries');
        $(this).addClass('tab-itenaries');
    });
    $('.btn-followup-right').on('click', function () {
        $('.followup-sidebar').parent().show('slide', 'left', 400);
        $('.quickreport-sidebar').parent().hide('slide', 'left', 400);
        $('.utilities-sidebar').parent().hide('slide', 'right', 400);
        $('.distribute-sidebar').parent().hide('slide', 'left', 400);
        $('.btn-utilitiess-right').removeClass('tab-itenaries');
        $('.btn-distribute-right').removeClass('tab-itenaries');
        $('.btn-quickreports-right').removeClass('tab-itenaries');
        $(this).addClass('tab-itenaries');
    });
    $('#startGuiededTour').on('click', function () {
        //var _tour = GuidedTour();\
        var tour = new Tour({
            steps: [
            {
                element: ".formgitquotation",
                title: "Create Inquiry.",
                content: "Enter data for masters from here.",
                placement: "bottom"
            },
            {
                element: ".panel-title-sm",
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
    $('.searchpanel-button').on('click', function (e) {
        var currentButton = $(this);
        var panelClass = $(this).attr('data-show-panel');
        $('.panel-search:visible').slideUp(600);
        var panel = $('.' + panelClass);
        if ($('.' + panelClass).is(':visible')) {
            panel.slideUp(600, function () {

                collapsePanelButton($('.advanced-panel-button').children());
            });
        } else {
            panel.find('.panel-body').show();
            panel.slideDown(600, function () {
                if ($(this).hasClass('booking-panel')) {
                    collapsePanelButton($('.advanced-panel-button').children());

                } else {

                    expandPanelButton($('.advanced-panel-button').children());
                }
            });
        }
        currentButton.trigger('focusout');
        e.preventDefault();
    });
});
function confirmAlert() {
    swal({
        title: "Are you sure?",
        text: "You are going to book this tour!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, book it!",
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        if (isConfirm) {
            //window.location.href = "/bookingsfit"
            swal("Booked!", "Your package has been bookled.", "success");

        } else {
            swal("Cancelled", "Your Booking is cancelled :)", "error");
        }
    });
}

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