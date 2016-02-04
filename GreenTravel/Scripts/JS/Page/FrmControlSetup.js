﻿$(document).ready(function () {
    var deletesrno;
    BindGrid();
    $('.btnSave').click(function (e) {
        e.preventDefault();
        if ($('#txtTabsrno').val() == '') {
            var Srno = 0;
        }
        else {
            var Srno = $('#txtTabsrno').val();
        }
        var Corporate = 2;
        var FormCode = 2;
        var TabCode = $('#drpTab option:selected').val();
        var SectionCode = $('#drpSection option:selected').val();
        var FieldControlLabel = $('#txtcontrollabel').val();
        var ControlId = $('#txtcontrolid').val();
        var FieldControlType = $('#drpcontroltype option:selected').val();
        var ValidationCode = $('#txtValiadtioncode').val();
        var PlaceholderText = $('#txtPlaceholdertext').val();
        var TooltipHelpText = $('#txtTooltiptext').val();
        alert($('#reqfield').is(":checked"));
        var RequiredField = $('#reqfield').is(":checked");
        var ReqValidationMsg = $('#txtreqValidationmessage').val();
        var ReglarExField = $('#regfield').is(":checked");
        var RegexValidationMsg = $('#txtRegvalidationmessage').val();
        var GuidedTourText = $('#txtGuidedTour').val();
        var GuidedTourStepNo = $('#txtGuidedtourStep').val();
        var FieldOrderNumber = $('#txtorder').val();
        var FieldCaptionName = '';
        var ValidationMaxSize = '';
        var ValidationDateType = '';
        var InProcessValidation = '';
        var Status = '';
        var Tags = '';
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
        var CreatedBy = 0;
        var EntryDatetime = '';
        var EditedBy = 0;
        var EditDatetime = '';
        var CorpcentreBy = 0;
        var UnitCorpBy = 0;
        var TerminalBy = 0;
        var BranchBy = 0;
        $.ajax(
         {
             type: "POST",
             url: "/FormControlSetup/Insert_Data",
             data: {
                 Srno: Srno, Corporate: Corporate, FormCode: FormCode, TabCode: TabCode, SectionCode: SectionCode, FieldControlLabel: FieldControlLabel,
                 ControlId: ControlId, FieldControlType: FieldControlType,
                 ValidationCode: ValidationCode, PlaceholderText: PlaceholderText, TooltipHelpText: TooltipHelpText, RequiredField: RequiredField,
                 ReqValidationMsg: ReqValidationMsg, ReglarExField: ReglarExField, RegexValidationMsg: RegexValidationMsg, GuidedTourText: GuidedTourText,
                 GuidedTourStepNo: GuidedTourStepNo, FieldOrderNumber: FieldOrderNumber, FieldCaptionName: FieldCaptionName, ValidationMaxSize: ValidationMaxSize,
                 ValidationDateType: ValidationDateType, InProcessValidation: InProcessValidation, Status: Status, Tags: Tags, CreatedBy: CreatedBy,
                 EditedBy: EditedBy, CorpcentreBy: CorpcentreBy, UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy

             },
             dataType: 'json',
             success: function (response) {
                 if (response != null && response.success) {
                     alert("Record Save Sucessfully!");
                 }
             }
         });
    });
    function BindGrid() {
        var tablename = 'dbo._Form_Field_Master';
        var Corporate = '2';
        var Segment = '';
        var PageNo = '1';
        var type = 'Grid';
        var Formcode = '0';
        var Formtabcode = '0';
        $('#example1').dataTable({
            "ServerSide": true,
            "ajax": {
                "url": "/FormControlSetup/BindGridView",
                "Type": "GET",
                "dataType": 'json',
                "contentType": "application/json; charset=utf-8",
                "dataSrc": function (json) {
                    return json;
                },
                "data": {
                    "tablename": tablename,
                    "Corporate": Corporate,
                    "Segment": Segment,
                    "PageNo": PageNo,
                    "type": type,
                    "Formcode": Formcode,
                    "Formtabcode": Formtabcode
                }
            },
            "columns": [
                { "data": "RowNumber" },
                 { "data": "Srno" },
                { "data": "corporate" },
                { "data": "Features" },
                { "data": "Module" },
                { "data": "Form" },
                { "data": "Tab" },
                { "data": "Section" },
                { "data": "Controls" },
                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a> &nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Delte" data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o"></i></a>'
                }
            ]
        });
    }

    function Dropdown_Bind_Tab1() {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var Type = 'DropDown';
        $.ajax({
            url: "/FormControlSetup/BindDropDown",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {
                if (response['GTIndutry'].length > 0) {
                    $('.Industry').html('');
                    for (var i = 0; i < response['GTIndutry'].length; i++) {
                        var opt = new Option(response['GTIndutry'][i]['Text'], response['GTIndutry'][i]['Value']);
                        $('.Industry').append(opt);
                    }
                    $('#drpcompanyIndustry option:first').attr('selected', 'selected').change();
                }
            }
        });
    }

    $("table").delegate(".editor_Step", "click", function () {
        console.log($(this).parent().parent().children(':eq(0)').text());
        console.log($(this).parent().parent().children(':eq(1)').text());
        $("#searchcontrol").removeClass("active");
        $("#Fromcontrol").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab3").addClass("active");
        $('#btnUpdate').show();
       // $('#btnDelete').show();
        $('#btnSave').hide();
        var tablename = 'dbo._Form_Field_Master';
        var Corporate = '2';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/FormControlSetup/Edit_Data",
             data: {
                 tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
             },
             dataType: 'json',
             success: function (response) {
                 console.log(response[0])
                 if (response.length > 0) {
                     $('#txtTabsrno').val(response[0].Srno);
                     $('#drpTab').find('option[value="' + response[0].TabCode + '"]').attr('selected', true).change();
                     $('#drpSection').find('option[value="' + response[0].SectionCode + '"]').attr('selected', true).change();
                     $('#txtcontrollabel').val(response[0].FieldControlLabel);
                     $('#txtcontrolid').val(response[0].ControlId);
                     $('#drpcontroltype').find('option[value="' + response[0].FieldControlType + '"]').attr('selected', true).change();
                     $('#txtValiadtioncode').val(response[0].ValidationCode);
                     $('#txtPlaceholdertext').val(response[0].PlaceholderText);
                     $('#txtTooltiptext').val(response[0].TooltipHelpText);
                     //   alert(response[0].RequiredField.toLowerCase());
                     if (response[0].RequiredField.toLowerCase() == 'true') {
                         $("#reqfield").attr('checked', 'checked');
                         $("#reqfield").parent().addClass('checked');
                     }
                     else {
                         $("#reqfield").removeAttr('checked');
                         $("#reqfield").parent().removeClass('checked');
                     }
                     $('#txtreqValidationmessage').val(response[0].ReqValidationMsg);
                     $('#regfield').is(":checked");
                     $('#txtRegvalidationmessage').val(response[0].RegexValidationMsg);
                     $('#txtGuidedTour').val(response[0].GuidedTourText);
                     $('#txtGuidedtourStep').val(response[0].GuidedTourStepNo);
                     $('#txtorder').val(response[0].FieldOrderNumber);
                 }
             }
         });
    });
    $("table").delegate(".editor_Delte", "click", function () {
        console.log( ($(this).parent().parent().children(':eq(1)').text()));
        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(1)').text()
        $("#lbldelete").text("Are You Sure Do You Want to Delete This Record ?");
    });
    $('#modeldelete').click(function (e) {
        console.log(deletesrno);
        var Module = 0;
        var screen = 0;
        var FormCode = 0;
        var TabCode = 0;
        var Corporate = 0;
        var unit = '';
        var Branch = '';
        var userid = 0;
        var Ip = '';
        var Type = 'Delete';
        var field1 = deletesrno;
        var field2 = '';
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = '';
        var Language = '';
        $.ajax({
            url: "/Masters/Delete_Data",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
            },
            success: function (data) {
                if (data.length > 0) {
                    alert("Record Delete Sucessfully!");
                }
            }
        });
    });
    $('#btnclear').click(function (e) {
        e.preventDefault();
        $('#btnUpdate').hide();
        $('#btnSave').show();

        $('input[type="text"]').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    });
    $('#btnquitfrom').click(function (e) {
        e.preventDefault();
        $("#searchcontrol").addClass("active");
        $("#Fromcontrol").removeClass("active");
        $("#tab3").removeClass("active");
        $("#tab1").addClass("active");
        $('input[type="text"]').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    });
});