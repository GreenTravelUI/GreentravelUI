﻿$(document).ready(function () {
    $('ol.sortable').nestedSortable({
        forcePlaceholderSize: true,
        handle: 'div',
        helper: 'clone',
        items: 'li',
        opacity: .6,
        placeholder: 'placeholder',
        revert: 250,
        tabSize: 25,
        tolerance: 'pointer',
        toleranceElement: '> div',
        maxLevels: 3,

        isTree: true,
        expandOnHover: 700,
        startCollapsed: true
    });

    if ($('ol.sortable').length) {
        $('ol.sortable').nestedSortable({
            forcePlaceholderSize: true,
            handle: 'div',
            helper: 'clone',
            items: 'li',
            opacity: .6,
            placeholder: 'placeholder',
            revert: 250,
            tabSize: 25,
            tolerance: 'pointer',
            toleranceElement: '> div',
            maxLevels: 3,
            //isTree: true,
            expandOnHover: 700,
            startCollapsed: true
        });

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

    $('#startGuiededTour').on('click', function () {
        //var _tour = GuidedTour();\
        var tour = new Tour({
            steps: [
            {
                element: ".formagentdetail",
                title: "Create Agent.",
                content: "Enter data for masters from here.",
                placement: "bottom"
            },
            {
                element: ".panelsummery",
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

    $('.Agentstatus').editable({
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
    //$("#example-editable_length").css('display', 'none');
    $("#example-editable_filter").css('display', 'none');

});
function confirmAlert() {
    swal({
        title: "Are you sure want to create agent as supplier?",
        text: "You are going to create supplier!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, create it!",
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        if (isConfirm) {
            //  window.location.href = "/bookingsfit"
            swal("Created!", "Your supplier has been created.", "success");

        } else {
            swal("Cancelled", "Your supplier is cancelled :)", "error");
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
