$(window).unload(function () {
    $('select option').remove();
});
var deletesrno;
$(document).ready(function () {
    Formname();
    FormLoadData();
    BindGrid();

    $('#searchcontrol').click(function (e) {
        BindGrid();
    });

    $('.btnSave').click(function (e) {
        e.preventDefault();
        /* OnSave validations */
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal(
               'Invalid data found!',
               '',
               'error'
             )
            return false;
        }
        if ($('#txtTabsrno').val() == '') {
            var Srno = 0;
        }
        else {
            var Srno = $('#txtTabsrno').val();
        }
        var Corporate = $('#txtcorporate').val();
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
        $.ajax({
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
            success: function (data) {
                Message = data.responseText;
                var EventClass = '';
                EventClass = data.Event;
                if (EventClass != 'error') {
                    $('#btnUpdateControl').show();
                    $('#btnSaveControl').hide();
                }
                swal(Message, '', EventClass);
                //swal('Good job!', Message, EventClass);
            }
        }).done(function () {

        });
    });

    FillDropdown($('#hdfCorporate').val(), $('#txtFormcode').val(), '', 'drpTab');

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
            setSelect2Value($(this), '0');
        });
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
            setSelect2Value($(this), '0');
            //$(this).val($(this).find('option:first').val()).change();
        });
        BindGrid();
    });
});

function BindGrid() {
    var tablename = 'dbo._Form_Field_Master';
    var Corporate = $('#hdfCorporate').val();
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
             { "data": "Srno", className: "hide_cell" },
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
                defaultContent: '<a href="javascript:void(0);" class="editor_Step" rel="tooltip" title="Edit Data" ><i class="fa fa-pencil-square-o"></i></a> &nbsp;&nbsp;'
            }
        ]
    });
    //Delete Button Code
    //<a href="javascript:void(0);" class="editor_Delte" data-toggle="modal" data-target="#DeleteModel" rel="tooltip" title="Delete Data"><i class="fa fa-trash-o"></i></a>
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
                $('#' + controlId + '').append($('<option value="' + data[i]['Value'] + '">' + data[i]['Text'] + '</option>'));
            }
            setSelect2Value($('#' + controlId + ''), '0');
        }
    });
}

function Control_type() {
    $('#drpcontroltype').html('');
    $('#drpcontroltype').append($('<option value="0" select>--None--</option>'));
    $('#drpcontroltype').append($('<option value="1">Texobox</option>'));
    $('#drpcontroltype').append($('<option value="2">DropDown</option>'));
}

function Formname() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = '';
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = $('#txtFormcode').val();
    var field2 = 0;
    var field3 = '';
    var field4 = '';
    var field5 = '';
    var Control = '';
    var Language = '';
    var Type = 'Formname';
    var Srno = '';
    $.ajax({
        url: "/FormControlSetup/FromName_Corporate",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (result) {
            if (result.length > 0)
                
                $('.tabFormname').text(result[0]['Text']);
                $('#txtcorporate').val(result[0]['Value']);
        }
    });
}

function FormLoadData() {
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
        url: "/FormControlSetup/BindDropDownLoadColumn",
        type: "POST",
        data: {
            "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate,
            "unit": unit, "Branch": Branch, "userid": userid, "Ip": Ip, "Type": Type
        },
        success: function (response) {
            if (response['GTCorporate'].length > 0) {
                $('#drpcontroltype').html('');
                for (var i = 0; i < response['GTCorporate'].length; i++) {
                    var opt = new Option(response['GTCorporate'][i]['Text'], response['GTCorporate'][i]['Value']);
                    $('#drpcontroltype').append(opt);
                }
                setSelect2Value($('#drpcontroltype'), '0');
            }
        }
    });
}