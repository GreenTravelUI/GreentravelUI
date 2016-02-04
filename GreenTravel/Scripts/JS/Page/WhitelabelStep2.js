$(document).ready(function () {
  
    FillDropdown('drpFeatureCategory', 'Dropdown');

    function FillDropdown(controlId, type) {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '0';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var field1 = '0';
        var field2 = '0';
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = controlId;
        var Language = '';
        var Type = type;
        $.ajax({
            url: "/WhitelabelStep2/BindDropDown",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
            },
            success: function (data) {
                //$('#drpMasterTab3').html('');
                $('#' + controlId + '').html('');
                for (var i = 0; i < data.length; i++) {
                    var opt = new Option(data[i]['Text'], data[i]['Value']);
                    //$('#drpMasterTab3').append(opt);
                    $('#' + controlId + '').append(opt);
                }
                $("#" + controlId + " option:first").attr('selected', 'selected');

            }
        });
    }

    $("#txt").change(function () {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '0';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var field1 = $('#drpFeatureCategory option:selected').val();;
        var field2 = '';
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = 'DrpFeatureGroup';
        var Language = '';
        var Type = 'Conditional';
        $.ajax({
            url: "/WhitelabelStep2/BindGridBase",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
            },
            success: function (data) {
                //alert("hi");
              


            }
        });
    }
    );

    $("#drpFeatureCategory").change(function () {
        var countrySelected = $("select option:selected").first().text();
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '0';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var field1 = $('#drpFeatureCategory option:selected').val();;
        var field2 = '';
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = 'DrpFeatureGroup';
        var Language = '';
        var Type = 'Conditional';
        

        $("#partial").load('/WhitelabelStep2/_DisplayGridData?id=' + field1);
    });


});

