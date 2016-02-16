﻿$(document).ready(function () {
    $('#txtSrNo').val('0');

    //  Bind Drop-Down 
    FillDropdown('drpFeatureCategory', 'Dropdown');

    // Function ( Bind Drop-Down )
    $('#btnSave').hide();
    $('#btnClear').hide();
    $('#btnUpdate').hide();


    // For Feature-Category Drop-Down Change
    $("#drpFeatureCategory").change(function () {

        var field1 = $('#drpFeatureCategory option:selected').val();

        $("#partial").html('');
        $('#btnClear').hide();
        $('#btnSave').hide();
        $('#btnUpdate').hide();

        if (field1 != '0' || field1 != '--None--') {
            getdata();
            clearValidations($(this).closest('form'));
            Loaddata();
        }
        else {


        }
    });


    // For Save Button Click event
    $('.btnSaveStep2').click(function (e) {
        {

            var a = 0;
            e.preventDefault();
            if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
                swal('Invalid data found!');
                return false;
            }

            $('ul.grid div').find('li').each(function () {

                $(this).find('table tbody tr').each(function () {
                    if ($(this).find('input').is(':checked')) {
                        a = 1;
                    }
                });
            });

            if (a == 0) {
                swal('', 'Please select atleast 1 records ', 'warning');
                return false;
            }

            var groupAry = [];
            var FeatureAry = [];
            var flagCategory = 0;
            var msg = "";
            var event = "";
            var i = 0;
            var srno = $('#txtSrNo').text();
            var Corporate = $('#txtCorporateID').val();
            var Module = '0';
            var Screen = '0';
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
                    FeatureGroup: FeatureGroup, Feature: Feature, BranchBy: BranchBy, Attribute1: Attribute1,
                    Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                    Attribute9: Attribute9, Attribute10: Attribute10, FeatureAry: theIds1, groupAry: theIds2
                },
                dataType: 'json',
                success: function (response) {
                    if (response != null) {
                        flagsection = 1;
                        msg = response['success'];
                        event = response['Event'];
                        $('#txtSrNo').text(response['SrNo']);
                    }
                }
            });
            if (flagsection == 1) {
                swal('', msg, event);
                $('#btnSave').hide();
                $('#btnUpdate').show();
            }
        }
    });

    // To Clear
    $("#btnClear").on('click', function (e) {

        e.preventDefault();

        $('.inputformTab').val('');
        $('.DropdownTab').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $("#partial").html('');
        setSelect2Value($('#drpFeatureCategory'), '0');
        clearValidations($(this).closest('form'));
        $('#btnSave').hide();
        $('#btnUpdate').hide();
        $('#btnClear').hide();
    });


    $("#btnQuit").on('click', function (e) {

        window.location.href = '/WhitelabelStep1/Index';
    });

});

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
            setSelect2Value($('#' + controlId + ''), '0');

        }
    });
}


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
            $('#txtSrNo').text('0');
            $('#btnSave').hide();
            $('#btnUpdate').hide();
            if (response['Dropdown'].length > 0) {
                $('#txtSrNo').text(response['Dropdown'][0]['srno']);
                $('#btnSave').hide();
                $('#btnUpdate').show();
                $('#btnClear').show();
            }
            if (response['Grid'].length > 0) {
                $('#btnSave').hide();
                $('#btnUpdate').show();
                $('#btnClear').show();
                //$('#txtSrNo').val() = response['Grid']['WhitelabelStep2']
                $.each(response['Grid'], function () {
                    var tempgroup = this;
                    var chkloop = this['Feature'].toString().split("||");
                    $.each(chkloop, function () {
                        var tempfeature = this;
                        $('ul.grid div').find('li').each(function () {
                            console.log($(this).html());
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


function clearForm() {
    $('.inputform').val('');
    $('.Dropdown').each(function () {
        $(this).val($(this).find('option:first').val()).change();
    });
    $('#txtSrNo').val('0');
}


function Loaddata() {
    var tablename = 'dbo._White_feature_mapping';
    var Corporate = $('#txtCorporateID').val().toString();
    var field1 = $('#drpFeatureCategory option:selected').val();;
    var unit = '0';
    var Formcode = '0';
    var Formtabcode = '';
    var srno = $('#drpFeatureCategory option:selected').val();
    var Type = 'EditMode';
    $("#partial").html('');
    $.ajax({
        url: "/WhitelabelStep2/FillAll",
        type: "POST",
        async: false,
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type, field1: field1
        },
        success: function (data) {
            var html = '';
            if (data['HeaderList'].length > 0) {

                for (var i = 0; i < data['HeaderList'].length; i++) {
                    if (html == '') {
                        html = '<li><figure><figcaption class="panel-body tab-itenaries">' +

                                '<label style="display: none" id="lbheadingName" >  ' + data['HeaderList'][i]['SrNo'] + ' </label>' +
                                '<h3 style="margin-top: 0; text-align: center;">' +
                                '<label id="lbheading">  ' + data['HeaderList'][i]['xname'] + '</label></h3>' +
                                '<table class="table sampletable" style="margin-bottom: 0;">' +
                                '<tbody>' +
                                '[@Tbody]' +
                                '</tbody></table></figcaption></figure></li>';
                        var Column = '';
                        for (var col = 0; col < data['ColumnList'].length; col++) {
                            if (data['HeaderList'][i]['SrNo'] == data['ColumnList'][col]['xlink']) {
                                if (Column == '') {
                                    Column = '<tr><td>' + data['ColumnList'][col]['xname'] + '</td><td><input id="' + data['ColumnList'][col]['SrNo'] + '"  type="checkbox" ></td></tr>';
                                }
                                else {
                                    Column += '<tr><td>' + data['ColumnList'][col]['xname'] + '</td><td><input id="' + data['ColumnList'][col]['SrNo'] + '"  type="checkbox" ></td></tr>';
                                }
                            }
                        }
                        html = html.replace("[@Tbody]", Column);
                    }

                    else {
                        html += '<li><figure><figcaption class="panel-body tab-itenaries">' +

                                '<label style="display: none" id="lbheadingName" >  ' + data['HeaderList'][i]['SrNo'] + ' </label>' +
                                '<h3 style="margin-top: 0; text-align: center;">' +
                                '<label id="lbheading">  ' + data['HeaderList'][i]['xname'] + '</label></h3>' +
                                '<table class="table sampletable" style="margin-bottom: 0;">' +
                                '<tbody>' +
                                '[@Tbody]' +
                                '</tbody></table></figcaption></figure></li>';

                        var Column = '';
                        for (var col = 0; col < data['ColumnList'].length; col++) {
                            if (data['HeaderList'][i]['SrNo'] == data['ColumnList'][col]['xlink']) {
                                if (Column == '') {
                                    Column = '<tr><td>' + data['ColumnList'][col]['xname'] + '</td><td><input id="' + data['ColumnList'][col]['SrNo'] + '"  type="checkbox" ></td></tr>';
                                }
                                else {
                                    Column += '<tr><td>' + data['ColumnList'][col]['xname'] + '</td><td><input id="' + data['ColumnList'][col]['SrNo'] + '"  type="checkbox" ></td></tr>';
                                }
                            }
                        }
                        html = html.replace("[@Tbody]", Column);

                    }



                }
                $(html).appendTo($("#partial"))
            }
        }
    });
}


