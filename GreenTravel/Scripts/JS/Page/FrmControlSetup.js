$(window).unload(function () {
    $('select option').remove();
});
var deletesrno;
$(document).ready(function () {
    $('select option').remove();
    Control_type();
    BindGrid();
    $('#searchcontrol').click(function (e) {
        BindGrid();
    });
    $('.btnSave').click(function (e) {
        e.preventDefault();
        /* OnSave validations */
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal('Invalid data found!');
            return false;
        }
        if ($('#txtTabsrno').val() == '') {
            var Srno = 0;
        }
        else {
            var Srno = $('#txtTabsrno').val();
        }
        var Corporate = 2;
        var FormCode = $('#txtFormcode').val();
        var TabCode = $('#drpTab option:selected').val();
        var SectionCode = $('#drpSection option:selected').val();
        var FieldControlLabel = $('#txtcontrollabel').val();
        var ControlId = $('#txtcontrolid').val();
        var FieldControlType = $('#drpcontroltype option:selected').val();
        var ValidationCode = $('#txtValiadtioncode').val();
        var PlaceholderText = $('#txtPlaceholdertext').val();
        var TooltipHelpText = $('#txtTooltiptext').val();
        //  var RequiredField = $('#reqfield').is(":checked");
        var RequiredField = false;
        var ReqValidationMsg = '';
        var ReglarExField = false;
        var RegexValidationMsg = '';
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
                 ValidationDateType: ValidationDateType, InProcessValidation: InProcessValidation, Status: Status, Tags: Tags
             },
             dataType: 'json',
             success: function (response) {
                 if (response != null && response.success) {
                     Message = response.responseText;
                     swal('Good job!', Message, 'success');
                     // swal('Good job!', 'Record Save Sucessfully!', 'success');
                 }
             }
         }).done(function () {
             $('#btnUpdateControl').show();
             $('#btnSaveControl').hide();
         });
    });
    FillDropdown(2, $('#txtFormcode').val(), '', 'drpTab');
    $("#drpTab").change(function () {
        FillDropdown(0, '', $('#drpTab option:selected').val(), 'drpSection');
    });

    $("table").delegate(".editor_Step", "click", function () {
        $('#btnclear').trigger('click');
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
                 if (response.length > 0) {
                     $('#btnSaveControl').hide();
                     $('#btnUpdateControl').show();
                     $('#txtTabsrno').val(response[0].Srno);
                     setSelect2Value($('#drpTab'), response[0].TabCode);
                     FillDropdown(0, '', $('#drpTab option:selected').val(), 'drpSection');
                     setSelect2Value($('#drpSection'), response[0].SectionCode);
                     $('#txtcontrollabel').val(response[0].FieldControlLabel);
                     $('#txtcontrolid').val(response[0].ControlId);
                     setSelect2Value($('#drpcontroltype'), response[0].FieldControlType);
                     $('#txtValiadtioncode').val(response[0].ValidationCode);
                     $('#txtPlaceholdertext').val(response[0].PlaceholderText);
                     $('#txtTooltiptext').val(response[0].TooltipHelpText);
                     //if (response[0].RequiredField.toLowerCase() == 'true') {
                     //    $("#reqfield").attr('checked', true);
                     //    $("#reqfield").parent().addClass('checked');
                     //}
                     //else {
                     //    $('#reqfield').attr('checked', false);
                     //    $('#reqfield').parent().removeClass('checked');
                     //}
                     //$('#txtreqValidationmessage').val(response[0].ReqValidationMsg);
                     //if (response[0].ReglarExField.toLowerCase() == 'true') {
                     //    $("#regfield").attr('checked', true);
                     //    $("#regfield").parent().addClass('checked');
                     //}
                     //else {
                     //    $('#regfield').attr('checked', false);
                     //    $('#regfield').parent().removeClass('checked');
                     //}
                     //$('#txtRegvalidationmessage').val(response[0].RegexValidationMsg);
                     $('#txtGuidedTour').val(response[0].GuidedTourText);
                     $('#txtGuidedtourStep').val(response[0].GuidedTourStepNo);
                     $('#txtorder').val(response[0].FieldOrderNumber);
                 }
             }
         }).done(function () {
             $("#searchcontrol").removeClass("active");
             $("#Fromcontrol").addClass("active");
             $("#tab1").removeClass("active");
             $("#tab3").addClass("active");
             $('#btnUpdate').show();
             $('#btnSave').hide();
         });
    });

    $("table").delegate(".editor_Delte", "click", function () {

        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(1)').text()
        $("#lbldelete").text("Are You Sure Do You Want to Delete This Record ?");
    });

    $('#modeldelete').click(function (e) {

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
                    swal('Good job!', 'Record Delete Sucessfully!', 'success');
                }
            }
        });
    });
    $('#btnclear').click(function (e) {
        e.preventDefault();
        clearValidations($(this).closest('form'));
        $('#btnUpdateControl').hide();
        $('#btnSaveControl').show();
        $('.inputControl').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        //$('#regfield').attr('checked', false);
        //$('#regfield').parent().removeClass('checked');
        //$('#reqfield').attr('checked', false);
        //$('#reqfield').parent().removeClass('checked');
    });
    $('#btnquitfrom').click(function (e) {
        e.preventDefault();
        clearValidations($(this).closest('form'));
        $('#btnUpdateControl').hide();
        $('#btnSaveControl').show();
        $("#searchcontrol").addClass("active");
        $("#Fromcontrol").removeClass("active");
        $("#tab3").removeClass("active");
        $("#tab1").addClass("active");
        $('.inputControl').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        //$('#regfield').attr('checked', false);
        //$('#regfield').parent().removeClass('checked');
        //$('#reqfield').attr('checked', false);
        //$('#reqfield').parent().removeClass('checked');
        BindGrid();
    });
});
function BindGrid() {
    var tablename = 'dbo._Form_Field_Master';
    var Corporate = '2';
    var Segment = '';
    var PageNo = '1';
    var type = 'Grid';
    var Formcode = $('#txtFormcode').val();
    var Formtabcode = '0';
    $('#fromcontrolsetup').dataTable({
        "destroy": true,
        "ServerSide": true,
        "autoWidth": false,
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

function FillDropdown(Corporate, Field1, Field2, controlId) {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = Corporate;
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;
    var field2 = Field2;
    var field3 = '';
    var field4 = '';
    var field5 = '';
    var Control = controlId;
    var Language = '';
    var Type = 'ConditionalDropdown';
    var Srno = '';
    $.ajax({
        url: "/FormControlSetup/BindDropDown",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (data) {

            $('#' + controlId + '').html('');
            for (var i = 0; i < data.length; i++) {
                //var opt = new Option(data[i]['Text'], data[i]['Value']);
                $('#' + controlId + '').append($('<option value="' + data[i]['Value'] + '">' + data[i]['Text'] + '</option>'));
            }
            // $("#" + controlId + " option:first").attr('selected', 'selected').change();
            setSelect2Value($('#' + controlId + ''), '0');
        }
    });
}

function Control_type() {
    $('#drpcontroltype').html('');
    $('#drpcontroltype').append($('<option value="0">--None--</option>'));
    $('#drpcontroltype').append($('<option value="1">Texobox</option>'));
    $('#drpcontroltype').append($('<option value="2">DropDown</option>'));
}