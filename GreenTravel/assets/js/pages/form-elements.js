$(document).ready(function () {
    $('.summernote').summernote({
        height: 350
    });

    $('.date-picker').datepicker({
        orientation: "auto",
    //    autoclose: true,

    //}).on('hide', function () {
    //    if (!this.firstHide) {
    //        if (!$(this).is(":focus")) {
    //            this.firstHide = true;
    //            // this will inadvertently call show (we're trying to hide!)
    //            this.focus();
    //        }
    //    } else {
    //        this.firstHide = false;
    //    }
    //}).on('show', function () {
    //    if (this.firstHide) {
    //        // careful, we have an infinite loop!
    //        $(this).datepicker('hide');
    //    }
    });

    $('#cp1').colorpicker({
        format: 'hex'
    });
    $('#cp2').colorpicker();

    $('.timepicker').timepicker({
        showMeridian: false,
        defaultTime: false,
        use24hours: true,
       
    });
});