$(window).scroll(function () {
    var $tabsummery = $('.summery' + $('.form-tabs').find('li[class=active]').children().data('section'))
    //set_prev = $('.summery-detail').css('top');
    set_prev = $tabsummery.css('top');
    if ($('body').hasClass('page-horizontal-bar')) {
        if ($('body').hasClass('page-sidebar-fixed')) {
            if ($(document).scrollTop() >= 161) {
                set = ($(document).scrollTop() - (160)) + "px";
                $tabsummery.animate({ top: set }, { duration: 0, queue: false });
                if (($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - $tabsummery.height()) < ($(document).scrollTop() + 100)) {
                    var new_top = ($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - ($tabsummery.height() + 286))
                    $tabsummery.animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $tabsummery.css('top', '');
            }
        } else if ($('body').hasClass('page-header-fixed')) {
            if ($(document).scrollTop() >= 228) {
                set = ($(document).scrollTop() - 225) + "px";
                $tabsummery.animate({ top: set }, { duration: 0, queue: false });
                if (($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - $tabsummery.height()) < ($(document).scrollTop() + 100)) {
                    var new_top = ($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - ($tabsummery.height()))
                    $tabsummery.animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $tabsummery.css('top', '');
            }
        } else {
            if ($(document).scrollTop() >= 286) {
                set = ($(document).scrollTop() - 288) + "px";
                $tabsummery.animate({ top: set }, { duration: 0, queue: false });
                if (($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - $tabsummery.height()) < ($(document).scrollTop() + 100)) {
                    var new_top = ($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - ($tabsummery.height() + 286))
                    $tabsummery.animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $tabsummery.css('top', '');
            }
        }
    } else {
        if ($('body').hasClass('page-header-fixed')) {
            if ($(document).scrollTop() >= 156) {
                set = ($(document).scrollTop() - 155) + "px";
                $tabsummery.animate({ top: set }, { duration: 0, queue: false });
                if (($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - $tabsummery.height()) < ($(document).scrollTop() + 100)) {
                    var new_top = ($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - ($tabsummery.height() + 286))
                    $tabsummery.animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $tabsummery.css('top', '');
            }
        } else {
            if ($(document).scrollTop() >= 218) {
                set = ($(document).scrollTop() - 216) + "px";
                $tabsummery.animate({ top: set }, { duration: 0, queue: false });
                if (($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - $tabsummery.height()) < ($(document).scrollTop() + 100)) {
                    var new_top = ($tabsummery.parent().parent().parent().parent().offset().top + $tabsummery.parent().parent().parent().parent().height() - ($tabsummery.height() + 286))
                    $tabsummery.animate({ top: set_prev }, { duration: 0, queue: false });
                }
            } else {
                $tabsummery.css('top', '');
            }
        }
    }
});
$(document).ready(function () {

    $('.hotelstatus').editable({
        value: 2,
        source: [
            { '1': 'Active' },
            { '2': 'Inactive' }
        ]
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
    $('#startGuiededTour').on('click', function () {
        //var _tour = GuidedTour();\
        var tour = new Tour({
            steps: [
            {
                element: ".formguideguide",
                title: "Create Guide Entry.",
                content: "Enter data for masters from here.",
                placement: "bottom"
            },
            {
                element: ".guidesummeryguide",
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