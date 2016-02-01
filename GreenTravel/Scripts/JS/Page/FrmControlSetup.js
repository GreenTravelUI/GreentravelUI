$(document).ready(function () {
    $('.btnSave').click(function (e) {
        e.preventDefault();

        var Srno = '';
        var Corporate =2;
        var FormCode = 2;
        var TabCode = $('#drpTab option:selected').val();
        var SectionCode = $('#drpSection option:selected').val();
        var FieldControlLabel = $('#txtcontrollabel').val();
        var ControlId = $('#txtcontrolid').val();
        var FieldControlType = $('#drpcontroltype option:selected').val();
        var ValidationCode = $('#txtValiadtioncode').val();
        var PlaceholderText = $('#txtPlaceholdertext').val();
        var TooltipHelpText = $('#txtTooltiptext').val();
        var RequiredField = $('#reqfield').val();
        var ReqValidationMsg = $('#txtreqValidationmessage').val();
        var ReglarExField = $('#regfield').val();
        var RegexValidationMsg = $('#txtRegvalidationmessage').val();
        var GuidedTourText = $('#txtGuidedTour').val();
        var GuidedTourStepNo = $('#txtGuidedtourStep').val();
        var FieldOrderNumber = $('#txtorder').val();
        var FieldCaptionName ='';
        var ValidationMaxSize ='';
        var ValidationDateType ='';
        var InProcessValidation ='';
        var Status ='';
        var Tags ='';
        var Attribute1 ='';
        var Attribute2 ='';
        var Attribute3 ='';
        var Attribute4 ='';
        var Attribute5 ='';
        var Attribute6 ='';
        var Attribute7 ='';
        var Attribute8 ='';
        var Attribute9 ='';
        var Attribute10 ='';
        var CreatedBy ='';
        var EntryDatetime ='';
        var EditedBy ='';
        var EditDatetime ='';
        var CorpcentreBy ='';
        var UnitCorpBy ='';
        var TerminalBy ='';
        var BranchBy = '';
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
                     alert("Record Save Sucessfully!");
                 } 
             }
         });
    });
});