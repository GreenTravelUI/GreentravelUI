$(function () {
    $('.example-bootstrap').barrating({
        theme: 'bootstrap-stars',
        showSelectedRating: false,
        readonly: true
    });
});
function confirmAlert() {

    swal({
        title: "Are You Sure Want To Cancel Booking?",
        text: "This hotel is confirmed!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Cancel it!",
        cancelButtonText: "No, Do Not Cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        if (isConfirm) {
            swal("Cancelled!", "Your booking has been cancelled.", "success");
        } else {
            swal("Booking", "Your booking is safe :)", "error");
        }
    });
}
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
    $('#startGuiededTour').on('click', function () {
        //var _tour = GuidedTour();\
        var tour = new Tour({
            steps: [
            {
                element: ".formbookingupdate",
                title: "Update Bookings.",
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

});