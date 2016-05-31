function invoiceopen() {
    $("#litab1").removeClass("active");
    $("#litab4").addClass("active");
    $("#tab1").removeClass("active");
    $("#tab4").addClass("active");
}

$(document).ready(function () {

    $('.hotelstatus').editable({
        value: 2,
        source: [
            { '1': 'Active' },
            { '2': 'Inactive' }
        ]
    });


});