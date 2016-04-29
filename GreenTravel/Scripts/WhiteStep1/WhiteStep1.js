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
        $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
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
                element: ".formwl1",
                title: "Basic Detail Entry.",
                content: "Enter data for masters from here.",
                placement: "bottom"
            },
            {
                element: ".guidesummerywl1",
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
    //$("#example-editable_length").css('display', 'none');
    $("#example-editable_filter").css('display', 'none');
   
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