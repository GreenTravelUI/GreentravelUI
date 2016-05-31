

$(document).ready(function () {
  
    $('.ulviewlistclass').delegate("a", "click", function (e) {
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().addClass("active");
    });
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item'
    });

});

$('#SearchMaster').click(function () {
    window.dispatchEvent(new Event('resize'));
});


