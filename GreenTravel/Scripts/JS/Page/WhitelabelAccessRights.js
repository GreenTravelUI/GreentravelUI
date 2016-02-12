
$(window).unload(function () {
    $('select option').remove();
});

$(document).ready(function () {

    // To Fill Corporate drop - Down
    FillDropDown_Corporate();

    // Drop-down  Corporate selected Index change event
    $("#drpCorporate").change(function () {

        // To Clear dropdown
        $('#drpCorporate').html('');
        setSelect2Value($('#drpCorporate'), '0');
        $('#DrpLocationTab2').html('');
        setSelect2Value($('#DrpLocationTab2'), '0');

        FillConditional_Base($('#drpCorporate option:selected').val(), 0, 0, 0, 'DrpUnitTab2');

    });


    // Drop-down Unit  selected Index change event
    $("#DrpUnitTab2").change(function () {
        FillConditional_Base($('#drpCorporate option:selected').val(), $('#DrpUnitTab2 option:selected').val(), 0, 0, 'DrpLocationTab2');
    });



})


function FillDropDown_Corporate() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = '0';
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var Language = '';
    var Type = 'DropDown';
    $.ajax({
        url: "/WhitelabelAccessRights/BindDropdown_Base",
        type: "POST",
        dataType: "json",
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Language: Language, Type: Type
        },
        success: function (response) {
            if (response['Corp'].length > 0) {
                $('.formcorporate').html('');
                for (var i = 0; i < response['Corp'].length; i++) {
                    var opt = new Option(response['Corp'][i]['Text'], response['Corp'][i]['Value']);
                    $('.formcorporate').append(opt);
                }
                setSelect2Value($('#drpCorporate'), '0');
            }
        },
    });

}

function FillConditional_Base(Corporate, Field1, Field2, Field3, controlId) {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = $('#drpCorporate option:selected').val();
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;
    var field2 = Field2;
    var field3 = Field3;
    var field4 = '';
    var field5 = '';
    var Control = controlId;
    var Language = '';
    var Type = 'ConditionalDropdown';
    var Srno = '';
    $.ajax({
        url: "/WhitelabelAccessRights/BindDropdown_FormLoad",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (data) {
            $('#' + controlId + '').html('');
            for (var i = 0; i < data['data'].length; i++) {
                var opt = new Option(data['data'][i]['Text'], data['data'][i]['Value']);
                $('#' + controlId + '').append(opt);
            }
            setSelect2Value($('#' + controlId + ''), '0');
        }
    });
}


