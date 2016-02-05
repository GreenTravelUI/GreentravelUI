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
    });

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


    $("#btnSave").on('click', function (e) {
        e.preventDefault();
        $('ul.grid div').find('li').each(function () {
            var checkedInput = '';
            var i = 0;
            var srno = '0';
            var Corporate = '2';
            var Module = '0';
            var Screen = '0';
            var FeaturesCategory = $('#drpFeatureCategory option:selected').val();
            var FeatureGroup = $(this).find('.myDiv h3').text().trim();
            var CreatedBy = '';
            var EntryDatetime = '';
            var EditedBy = '';
            var EditDatetime = '';
            var CorpcentreBy = '';
            var UnitCorpBy = '';
            var TerminalBy = '';
            var BranchBy = '';
            var Attribute1 = '';
            var Attribute2 = '';
            var Attribute3 = '';
            var Attribute4 = '';
            var Attribute5 = '';
            var Attribute6 = '';
            var Attribute7 = '';
            var Attribute8 = '';
            var Attribute9 = '';
            var Attribute10 = '';
            var CreatedBy = '';
            var EntryDatetime = '';
            var EditedBy = '';
            var EditDatetime = '';
            var CorpcentreBy = '';
            var UnitCorpBy = '';
            var TerminalBy = '';
            var BranchBy = '';
            $(this).find('table tbody tr').each(function () {
                if ($(this).find('input').is(':checked')) {
                    if (i != 0) {
                        checkedInput += ',';
                    }
                    checkedInput += $(this).find('input').attr('id');
                    i += 1;
                }
            });
            var Feature = checkedInput;
            $.ajax({
                type: "POST",
                url: "/WhitelabelStep2/Insert",
                async: false,
                data: {
                    srno: srno, Corporate: Corporate, FeaturesCategory: FeaturesCategory,
                    FeatureGroup: FeatureGroup, Feature: Feature,  EntryDatetime: EntryDatetime, CreatedBy: CreatedBy, EditedBy: EditedBy, CorpcentreBy: CorpcentreBy,
                    UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy
                },
                dataType: 'json',
                success: function (response) {
                    if (response != null && response.success) {
                        alert("Record Save Sucessfully!");
                    }
                }
            });




        });




    });


});

