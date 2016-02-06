$(document).ready(function () {
    $('#btnSave').show();
    $('#btnUpdate').hide();
    //  Bind Drop-Down 
    FillDropdown('drpFeatureCategory', 'Dropdown');

    // Function ( Bind Drop-Down )
    function FillDropdown(controlId, type) {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = $('#txtCorporateID').val().toString();
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
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
            },
            success: function (data) {
                $('#' + controlId + '').html('');
                for (var i = 0; i < data.length; i++) {
                    var opt = new Option(data[i]['Text'], data[i]['Value']);
                    $('#' + controlId + '').append(opt);
                }
                $("#" + controlId + " option:first").attr('selected', 'selected');

            }
        });
    }

    // For Feature-Category Drop-Down Change
    $("#drpFeatureCategory").change(function () {
        var countrySelected = $("select option:selected").first().text();
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = $('#txtCorporateID').val().toString();
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
        getdata();
    });

    // For Save Button Click event 
    $(".btnSave").on('click', function (e) {
        Save();
    });

    // To Clear
    $("btnClear").on('click', function (e) {
        clearForm();
    });
    $("btnQuit").on('click', function (e) {
        window.location.href = '/WhitelabelStep2/Index';
    });

});
// Function ( Edit Mode )
function getdata() {
    var tablename = 'dbo._White_feature_mapping';
    var Corporate = $('#txtCorporateID').val().toString();
    var unit = '0';
    var Formcode = '0';
    var Formtabcode = '';
    var srno = $('#drpFeatureCategory option:selected').val();
    var Type = 'EditMode';
    $.ajax({
        url: "/WhitelabelStep2/Edit",
        type: "POST",
        async: false,
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type,
        },
        success: function (response) {
            var i;
            if (response['Grid'].length > 0) {

                $('#btnSave').hide();
                $('#btnUpdate').show();
                $.each(response['Grid'], function () {
                    var tempgroup = this;
                    var chkloop = this['Feature'].toString().split("||");
                    $.each(chkloop, function () {
                        var tempfeature = this;
                        $('ul.grid div').find('li').each(function () {
                            //alert($(this).find('.myDiv h3').text().trim());
                            // if ($(this).find('.myDiv h3').text().trim() == tempgroup)
                            $(this).find('table tbody tr').each(function () {
                                if ($(this).find("input").attr('id') == tempfeature) {

                                    $(this).find("input").prop('checked', true);
                                }

                            });

                        });

                    });
                });
            }
        }
    });
}

function Save() {
    e.preventDefault();
    var groupAry = [];
    var FeatureAry = [];
    var flagCategory = 0;
    var msg = "";
    var i = 0;
    var srno = '0';
    var Corporate = $('#txtCorporateID').val();
    var Module = '0';
    var Screen = '0';
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
    var checkedInput = '';
    var FeaturesCategory = '';
    var FeatureGroup = '';
    var Feature = '';

    $('ul.grid div').find('li').each(function () {
        groupAry.push($(this).find('.myDiv h3').text().trim());
        checkedInput = '';
        var Feature = '';
        FeaturesCategory = $('#drpFeatureCategory option:selected').val();
        FeatureGroup = $(this).find('.myDiv h3').text().trim();
        $(this).find('table tbody tr').each(function () {
            if ($(this).find('input').is(':checked')) {
                if (i != 0) {
                    checkedInput += '||';
                }
                checkedInput += $(this).find('input').attr('id');
                i += 1;
            }
        });
        Feature = checkedInput;
        FeatureAry.push(Feature);
    });

    var theIds1 = JSON.stringify(FeatureAry);
    var theIds2 = JSON.stringify(groupAry);
    $.ajax({
        type: "POST",
        url: "/WhitelabelStep2/Insert",
        async: false,
        data: {
            srno: srno, Corporate: Corporate, FeaturesCategory: FeaturesCategory,
            FeatureGroup: FeatureGroup, Feature: Feature, EntryDatetime: EntryDatetime, CreatedBy: CreatedBy, EditedBy: EditedBy, CorpcentreBy: CorpcentreBy,
            UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy, Attribute1: Attribute1,
            Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
            Attribute9: Attribute9, Attribute10: Attribute10, FeatureAry: theIds1, groupAry: theIds2
        },
        dataType: 'json',
        success: function (response) {
            if (response != null) {
                flagsection = 1
                msg = "Record Save Sucessfully";
            }
        }
    });
    if (flagsection == 1) {
        alert(msg);
    }
}

function clearForm() {
    $('.inputform').val('');
    $('.Dropdown').each(function () {
        $(this).val($(this).find('option:first').val()).change();
    });
}

