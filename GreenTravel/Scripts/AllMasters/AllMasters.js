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
                element: "#MastersRecord",
                title: "Create Master Data Entry.",
                content: "Enter data for masters from here.",
                placement: "bottom"
            },
            {
                element: ".panel-title",
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
function GuidedTour() {
    // Guided Tour Code Start
    var tour = new Tour({
        steps: [
        {
            element: "#MastersRecord",
            title: "Create Master Data Entry.",
            content: "Enter data for masters from here.",
            placement: "bottom"
        },
        {
            element: ".btn-tables-views",
            title: "Masters Views",
            content: "Open master views list and modifiy view data.",
            placement: "bottom"
        }
        ]
    });
    localStorage.clear();
    tour.init();
    //tour.start();
    return tour;
    // Guided Tour Code End
}