var focusedCaption = '';
var focusedValidation = '';

$(window).unload(function () {
    $('select option').remove();
});

$(document).ready(function () {
    /*Tab 1*/
    FillDropDown_Category();

    $('#type').val('Save');

    var deletesrno;

    bind_dropdown();

    getdata();

    $("#drpSegment").change(function () {
        bind_dropdown();
    });

    $("#drpCorporate").change(function () {
        bind_dropdown();
    });

    $('.btnSave').click(function (e) {
        e.preventDefault();
        var a = 0;
        /* Form Validation */

        if (!checkReqValidation($('#txtValidationCode1'))) {
            swal('', 'Cannot save first field without required(REQ) code.', 'error')
            return false;
        }

        if (!validateForm($(this).parent())) {
            swal(
                'Invalid data found!',
                '',
                'error'
              )
            return false;
        }
        if (!ValidateControls()) {
            swal('Inappropriate data found!', 'About to saving inappropriate data!', 'error')
            return false;
        }

        var Type = $('#type').val();
        var xmaster = $('#txtMasterCode').val();
        var xname = $('#txtMasterName').val();
        var drpCaption = $('#txtdrpCaption').val();
        var ENTRYCONTROL = $('#drpEntrylevel option:selected').val();
        var SEGMENT = $('#drpSegment option:selected').val();
        var Corporate = $('#drpCorporate option:selected').val();
        var xlink = $('#drpDropdownMastersetup1 option:selected').val();
        var xcross = $('#drpMastersetup2 option:selected').val();
        var xcross1 = $('#drpMastersetup3 option:selected').val();
        var xcross2 = $('#drpMastersetup4 option:selected').val();
        var xcross3 = $('#drpMastersetup5 option:selected').val();
        var xcross4 = $('#drpMastersetup6 option:selected').val();
        var MultiSelect1 = $('#drpMultiselectsetup1 option:selected').val();
        var MultiSelect2 = $('#drpMultiselectsetup2 option:selected').val();
        var MultiSelect3 = $('#drpMultiselectsetup3 option:selected').val();
        var MultiSelect4 = $('#drpMultiselectsetup4 option:selected').val();
        var MultiSelect5 = $('#drpMultiselectsetup5 option:selected').val();
        $.ajax(
        {
            type: "POST",
            async: false,
            url: "/Masters/Insert_Data",
            data: {
                Type: Type, xmaster: xmaster, xname: xname, drpCaption: drpCaption, ENTRYCONTROL: ENTRYCONTROL, SEGMENT: SEGMENT, Corporate: Corporate, xlink: xlink, xcross: xcross, xcross1: xcross1, xcross2: xcross2, xcross3: xcross3, xcross4: xcross4,
                MultiSelect1: MultiSelect1, MultiSelect2: MultiSelect2, MultiSelect3: MultiSelect3, MultiSelect4: MultiSelect4, MultiSelect5: MultiSelect5
            },
            dataType: 'json',
            success: function (responsedata) {
                if (responsedata['Event'] == 'error') {
                    a = 1;
                    clearValidations($(this).parent());
                    e.preventDefault();
                    $('#btnsUpdate').hide();
                    $('#btnDelete').hide();
                    $('#btnSaveMastersetup').show();
                    $('#txtMasterCode').attr("disabled", false)

                    $('#type').val('Save');
                    swal(responsedata['success'], '', responsedata['Event']);
                } else {
                    //caption
                    var xmastercaption = $('#txtMasterCode').val();
                    var SEGMENTcaption = $('#drpSegment option:selected').val();
                    var Field1caption = 'Sr.No';
                    var Field2caption = 'Code';
                    var Field3caption = $('#txtcaption1').val();
                    var Field4caption = $('#txtcaption2').val();
                    var Field5caption = $('#txtCaption3').val();
                    /*DropDown*/
                    var Field6caption = $('#txtCaption4').val();
                    var Field7caption = $('#txtCaption5').val();
                    var Field8caption = $('#txtCaption6').val();
                    var Field9caption = $('#txtCaption7').val();
                    var Field10caption = $('#txtCaption8').val();

                    var Field11caption = $('#txtCaption9').val();

                    /*DropDown*/
                    /*Textbox*/
                    var Field12caption = $('#txtCaption10').val();
                    var Field13caption = $('#txtCaption11').val();
                    var Field14caption = $('#txtCaption12').val();
                    var Field15caption = $('#txtCaption13').val();
                    var Field16caption = $('#txtCaption14').val();
                    var Field17caption = $('#txtCaption15').val();
                    /*Textbox*/

                    var Rating1caption = $('#txtCaption16').val();
                    var Rating2caption = $('#txtCaption17').val();
                    var Rating3caption = $('#txtCaption18').val();

                    var Date1caption = $('#txtCaption19').val();
                    var Date2caption = $('#txtCaption20').val();
                    var Date3caption = $('#txtCaption21').val();

                    var Email1caption = $('#txtCaption24').val();
                    var Email2caption = $('#txtCaption25').val();
                    var Email3caption = $('#txtCaption26').val();

                    var Amountcaption = $('#txtCaption27').val();
                    var Amount2caption = $('#txtCaption28').val();
                    var Amount3caption = $('#txtCaption29').val();

                    var Time1caption = $('#txtCaption22').val();
                    var Time2caption = $('#txtCaption23').val();

                    var Htmlcaption = $('#txtCaption31').val();
                    var Uploadcaption = $('#txtCaption32').val();
                    var TextAreacaption = $('#txtCaption30').val();
                    var MultiSelect1caption = $('#txtCaption33').val();
                    var MultiSelect2caption = $('#txtCaption34').val();
                    var MultiSelect3caption = $('#txtCaption35').val();
                    var MultiSelect4caption = $('#txtCaption36').val();
                    var MultiSelect5caption = $('#txtCaption37').val();

                    $.ajax({
                        type: "POST",
                        url: "/Masters/Insert_Data_Caption",
                        data: {
                            xmastercaption: xmastercaption, SEGMENTcaption: SEGMENTcaption, Field1caption: Field1caption, Field2caption: Field2caption, Field3caption: Field3caption, Field4caption: Field4caption, Field5caption: Field5caption, Field6caption: Field6caption, Field7caption: Field7caption, Field8caption: Field8caption, Field9caption: Field9caption, Field10caption: Field10caption, Field11caption: Field11caption,
                            Field12caption: Field12caption, Field13caption: Field13caption, Field14caption: Field14caption, Field15caption: Field15caption, Field16caption: Field16caption, Field17caption: Field17caption, Rating1caption: Rating1caption, Rating2caption: Rating2caption, Rating3caption: Rating3caption,
                            Date1caption: Date1caption, Date2caption: Date2caption, Date3caption: Date3caption, Email1caption: Email1caption, Email2caption: Email2caption, Email3caption: Email3caption, Amountcaption: Amountcaption, Amount2caption: Amount2caption, Amount3caption: Amount3caption, Time1caption: Time1caption, Time2caption: Time2caption, Htmlcaption: Htmlcaption,
                            Uploadcaption: Uploadcaption, TextAreacaption: TextAreacaption,
                            MultiSelect1caption: MultiSelect1caption, MultiSelect2caption: MultiSelect2caption, MultiSelect3caption: MultiSelect3caption, MultiSelect4caption: MultiSelect4caption, MultiSelect5caption: MultiSelect5caption
                        },
                        dataType: 'json',
                        success: function (response) {


                        }
                    });

                    /*Place Holder*/
                    var xmaster = $('#txtMasterCode').val();
                    var SEGMENT = $('#drpSegment option:selected').val();
                    var Field1 = 'Sr.No';
                    var Field2 = 'Code';
                    var Field3 = $('#txtPlaceHolder1').val();
                    var Field4 = $('#txtPlaceHolder2').val();
                    var Field5 = $('#txtPlaceHolder3').val();
                    /*DropDown*/
                    var Field6 = $('#txtPlaceHolder4').val();
                    var Field7 = $('#txtPlaceHolder5').val();
                    var Field8 = $('#txtPlaceHolder6').val();
                    var Field9 = $('#txtPlaceHolder7').val();
                    var Field10 = $('#txtPlaceHolder8').val();
                    var Field11 = $('#txtPlaceHolder9').val();

                    /*DropDown*/
                    /*Textbox*/
                    var Field12 = $('#txtPlaceHolder10').val();
                    var Field13 = $('#txtPlaceHolder11').val();
                    var Field14 = $('#txtPlaceHolder12').val();
                    var Field15 = $('#txtPlaceHolder13').val();
                    var Field16 = $('#txtPlaceHolder14').val();
                    var Field17 = $('#txtPlaceHolder15').val();
                    /*Textbox*/

                    var Rating1 = $('#txtPlaceHolder16').val();
                    var Rating2 = $('#txtPlaceHolder17').val();
                    var Rating3 = $('#txtPlaceHolder18').val();

                    var Date1 = $('#txtPlaceHolder19').val();
                    var Date2 = $('#txtPlaceHolder20').val();
                    var Date3 = $('#txtPlaceHolder21').val();

                    var Email1 = $('#txtPlaceHolder24').val();
                    var Email2 = $('#txtPlaceHolder25').val();
                    var Email3 = $('#txtPlaceHolder26').val();

                    var Amount = $('#txtPlaceHolder27').val();
                    var Amount2 = $('#txtPlaceHolder28').val();
                    var Amount3 = $('#txtPlaceHolder29').val();

                    var Time1 = $('#txtPlaceHolder22').val();
                    var Time2 = $('#txtPlaceHolder23').val();

                    var Html = $('#txtPlaceHolder31').val();
                    var Upload = $('#txtPlaceHolder32').val();
                    var TextArea = $('#txtPlaceHolder30').val();

                    var MultiSelect1 = $('#txtPlaceHolder33').val();
                    var MultiSelect2 = $('#txtPlaceHolder34').val();
                    var MultiSelect3 = $('#txtPlaceHolder35').val();
                    var MultiSelect4 = $('#txtPlaceHolder36').val();
                    var MultiSelect5 = $('#txtPlaceHolder37').val();
                    $.ajax({
                        type: "POST",
                        url: "/Masters/Insert_Data_PlaceHolder",
                        data: {
                            xmaster: xmaster, Field1: Field1, Field2: Field2, Field3: Field3, Field4: Field4, Field5: Field5, Field6: Field6, Field7: Field7, Field8: Field8, Field9: Field9, Field10: Field10, Field11: Field11,
                            Field12: Field12, Field13: Field13, Field14: Field14, Field15: Field15, Field16: Field16, Field17: Field17, Rating1: Rating1, Rating2: Rating2, Rating3: Rating3,
                            Date1: Date1, Date2: Date2, Date3: Date3, Email1: Email1, Email2: Email2, Email3: Email3, Amount: Amount, Amount2: Amount2, Amount3: Amount3, Time1: Time1, Time2: Time2, Html: Html,
                            Upload: Upload, TextArea: TextArea,
                            MultiSelect1: MultiSelect1, MultiSelect2: MultiSelect2, MultiSelect3: MultiSelect3, MultiSelect4: MultiSelect4, MultiSelect5: MultiSelect5
                        },
                        success: function (response) {
                            //if (response != null && response.success) {
                            //    alert("Record Save Sucessfully!");
                            //}
                        }
                    });

                    /*Help*/
                    var xmaster = $('#txtMasterCode').val();
                    var Field1 = 'Sr.No';
                    var Field2 = 'Code';
                    var Field3 = $('#txtHelp1').val();
                    var Field4 = $('#txtHelp2').val();
                    var Field5 = $('#txtHelp3').val();
                    /*DropDown*/
                    var Field6 = $('#txtHelp4').val();
                    var Field7 = $('#txtHelp5').val();
                    var Field8 = $('#txtHelp6').val();
                    var Field9 = $('#txtHelp7').val();
                    var Field10 = $('#txtHelp8').val();
                    var Field11 = $('#txtHelp9').val();

                    /*DropDown*/
                    /*Textbox*/
                    var Field12 = $('#txtHelp10').val();
                    var Field13 = $('#txtHelp11').val();
                    var Field14 = $('#txtHelp12').val();
                    var Field15 = $('#txtHelp13').val();
                    var Field16 = $('#txtHelp14').val();
                    var Field17 = $('#txtHelp15').val();

                    /*Textbox*/

                    var Rating1 = $('#txtHelp16').val();
                    var Rating2 = $('#txtHelp17').val();
                    var Rating3 = $('#txtHelp18').val();

                    var Date1 = $('#txtHelp19').val();
                    var Date2 = $('#txtHelp20').val();
                    var Date3 = $('#txtHelp21').val();

                    var Email1 = $('#txtHelp24').val();
                    var Email2 = $('#txtHelp25').val();
                    var Email3 = $('#txtHelp26').val();

                    var Amount = $('#txtHelp27').val();
                    var Amount2 = $('#txtHelp28').val();
                    var Amount3 = $('#txtHelp29').val();

                    var Time1 = $('#txtHelp22').val();
                    var Time2 = $('#txtHelp23').val();

                    var Html = $('#txtHelp31').val();
                    var Upload = $('#txtHelp32').val();
                    var TextArea = $('#txtHelp30').val();

                    var MultiSelect1 = $('#txtHelp33').val();
                    var MultiSelect2 = $('#txtHelp34').val();
                    var MultiSelect3 = $('#txtHelp35').val();
                    var MultiSelect4 = $('#txtHelp36').val();
                    var MultiSelect5 = $('#txtHelp37').val();
                    $.ajax({
                        type: "POST",
                        url: "/Masters/Insert_Data_Help",
                        data: {
                            xmaster: xmaster, Field1: Field1, Field2: Field2, Field3: Field3, Field4: Field4, Field5: Field5, Field6: Field6, Field7: Field7, Field8: Field8, Field9: Field9, Field10: Field10, Field11: Field11,
                            Field12: Field12, Field13: Field13, Field14: Field14, Field15: Field15, Field16: Field16, Field17: Field17, Rating1: Rating1, Rating2: Rating2, Rating3: Rating3,
                            Date1: Date1, Date2: Date2, Date3: Date3, Email1: Email1, Email2: Email2, Email3: Email3, Amount: Amount, Amount2: Amount2, Amount3: Amount3, Time1: Time1, Time2: Time2, Html: Html,
                            Upload: Upload, TextArea: TextArea,
                            MultiSelect1: MultiSelect1, MultiSelect2: MultiSelect2, MultiSelect3: MultiSelect3, MultiSelect4: MultiSelect4, MultiSelect5: MultiSelect5
                        },
                        success: function (response) {
                            //if (response != null && response.success) {
                            //    alert("Record Save Sucessfully!");
                            //}
                        }
                    });

                    /*Validation*/
                    var xmaster = $('#txtMasterCode').val();
                    var Field1 = 'Sr.No';
                    var Field2 = 'Code';
                    var Field3 = $('#txtValidationCode1').val();
                    var Field4 = $('#txtValidationCode2').val();
                    var Field5 = $('#txtValidationCode3').val();
                    /*DropDown*/
                    var Field6 = $('#txtValidationCode4').val();
                    var Field7 = $('#txtValidationCode5').val();
                    var Field8 = $('#txtValidationCode6').val();
                    var Field9 = $('#txtValidationCode7').val();
                    var Field10 = $('#txtValidationCode8').val();
                    var Field11 = $('#txtValidationCode9').val();

                    /*DropDown*/
                    /*Textbox*/
                    var Field12 = $('#txtValidationCode10').val();

                    var Field13 = $('#txtValidationCode11').val();
                    var Field14 = $('#txtValidationCode12').val();
                    var Field15 = $('#txtValidationCode13').val();
                    var Field16 = $('#txtValidationCode14').val();
                    var Field17 = $('#txtValidationCode15').val();
                    /*Textbox*/

                    var Rating1 = $('#txtValidationCode16').val();
                    var Rating2 = $('#txtValidationCode17').val();
                    var Rating3 = $('#txtValidationCode18').val();

                    var Date1 = $('#txtValidationCode19').val();
                    var Date2 = $('#txtValidationCode20').val();
                    var Date3 = $('#txtValidationCode21').val();

                    var Email1 = $('#txtValidationCode24').val();
                    var Email2 = $('#txtValidationCode25').val();
                    var Email3 = $('#txtValidationCode26').val();

                    var Amount = $('#txtValidationCode27').val();
                    var Amount2 = $('#txtValidationCode28').val();
                    var Amount3 = $('#txtValidationCode29').val();

                    var Time1 = $('#txtValidationCode22').val();
                    var Time2 = $('#txtValidationCode23').val();

                    var Html = $('#txtValidationCode31').val();
                    var Upload = $('#txtValidationCode32').val();
                    var TextArea = $('#txtValidationCode30').val();

                    var MultiSelect1 = $('#txtValidationCode33').val();
                    var MultiSelect2 = $('#txtValidationCode34').val();
                    var MultiSelect3 = $('#txtValidationCode35').val();
                    var MultiSelect4 = $('#txtValidationCode36').val();
                    var MultiSelect5 = $('#txtValidationCode37').val();
                    $.ajax({
                        type: "POST",
                        url: "/Masters/Insert_Data_Validation",
                        data: {
                            xmaster: xmaster, Field1: Field1, Field2: Field2, Field3: Field3, Field4: Field4, Field5: Field5, Field6: Field6, Field7: Field7, Field8: Field8, Field9: Field9, Field10: Field10, Field11: Field11,
                            Field12: Field12, Field13: Field13, Field14: Field14, Field15: Field15, Field16: Field16, Field17: Field17, Rating1: Rating1, Rating2: Rating2, Rating3: Rating3,
                            Date1: Date1, Date2: Date2, Date3: Date3, Email1: Email1, Email2: Email2, Email3: Email3, Amount: Amount, Amount2: Amount2, Amount3: Amount3, Time1: Time1, Time2: Time2, Html: Html,
                            Upload: Upload, TextArea: TextArea,
                            MultiSelect1: MultiSelect1, MultiSelect2: MultiSelect2, MultiSelect3: MultiSelect3, MultiSelect4: MultiSelect4, MultiSelect5: MultiSelect5
                        },
                        success: function (response) {
                            if (response != null && response.success) {
                                //getdata();
                                swal(responsedata['success'], '', responsedata['Event']);
                                //swal('Good job!', 'Record Save Sucessfully!', 'success');
                            }
                        }
                    });
                    var tablename = 'dbo.ADMINMASTER';
                    var Corporate = '2';
                    var unit = '0';
                    var Formcode = '0';
                    var Formtabcode = '0';
                    var Xmaster = $('#txtMasterCode').val();
                    var Type = 'EditMode';
                    $('#btnsUpdate').show();
                    $('#btnDelete').hide();
                    $('#btnSaveMastersetup').hide();
                    $('#CreateMaster').children().find('span.tab-name').text('Update Master');
                    $('.tab-section-name').text('Update Master');
                    EditData(tablename, Corporate, unit, Formcode, Formtabcode, Xmaster, Type, true);
                    RedefineSrNo();
                }
            }
        }).done(function () {



        }); //Ajax call End
    });

    $('#btnQuitform').click(function (e) {
        clearValidations($(this).parent());

        /* Hide/Show Tab */
        $("#SearchMaster").addClass("active");
        $("#CreateMaster").removeClass("active");
        $("#tab2").removeClass("active");
        $("#tab1").addClass("active");
        getdata();
        $('#btnCancelMastersetup').trigger('click');
        e.preventDefault();
    });

    $('#btnCancelMastersetup').click(function (e) {
        var thisForm = $(this).closest('form');

        $('#CreateMaster').children().find('span.tab-name').text('Create Master');
        $('.tab-section-name').text('Create Master');

        $('#btnsUpdate').hide();
        $('#btnDelete').hide();
        $('#btnSaveMastersetup').show();
        thisForm.find('input').removeAttr('disabled');
        thisForm.find('input').val('');

        thisForm.find('select').each(function () {
            $(this).find('option').removeAttr('selected');
        });
        thisForm.find('.Dropdown').each(function () {
            setValueAndDisable($(this), '0');
            $(this).removeAttr('disabled');
        });
        thisForm.find('.drpdown').each(function () {
            setValueAndDisable($(this), '0');
            $(this).removeAttr('disabled');
        });
        $('#type').val('Save');
        clearValidations($(this).parent());
        bind_dropdown();
        ShowControls();
        e.preventDefault();
    });

    $("table").delegate(".editor_edit", "click", function () {
        clearValidations($('#tab2').find('form'));
        $('#btnCancelMastersetup').trigger('click');

        $('#btnsUpdate').show();
        $('#btnDelete').hide();
        $('#btnSaveMastersetup').hide();

        var tablename = 'dbo.ADMINMASTER';
        var Corporate = '2';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(2)').text();
        var Type = 'EditMode';
        ShowControls();
        $('#CreateMaster').children().find('span.tab-name').text('Update Master');
        $('.tab-section-name').text('Update Master');
        EditData(tablename, Corporate, unit, Formcode, Formtabcode, Xmaster, Type, false);
        RedefineSrNo();
    });

    $("table").delegate(".edit_master", "click", function () {
        clearValidations($('#tab2').find('form'));
        $('#btnCancelMastersetup').trigger('click');

        $('#btnsUpdate').show();
        $('#btnDelete').hide();
        $('#btnSaveMastersetup').hide();

        var tablename = 'dbo.ADMINMASTER';
        var Corporate = '2';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(2)').text();
        var Type = 'EditMode';
        ShowControls();
        $('#CreateMaster').children().find('span.tab-name').text('Update Master');
        $('.tab-section-name').text('Update Master');
        EditData(tablename, Corporate, unit, Formcode, Formtabcode, Xmaster, Type, true);

        HideControls();
    });

    $("table").delegate(".editor_Delte", "click", function () {
        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(2)').text()
        $("#lbldelete").text("Are You Sure Do You Want to Delete This Record ?");
    });

    $('.form-group').on("change", ".Dropdown", function () {
        if ($(this).val() != '0') {
            if (!preventAlreadySelectedMaster($(this))) {
                swal('\'' + $(this).val() + '\' is already selected!', '', 'warning');
                setSelect2Value($(this), '0');
            }
            if (!preventEditedMasterSelection($(this))) {
                swal('\'' + $(this).val() + '\' is not allowed to be selected!', '', 'warning');
                setSelect2Value($(this), '0');
            }
        }
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
                    //alert("Record Delete Sucessfully!");
                }
            }
        });
    });

    $('.control-caption').on('focus', function () {
        focusedCaption = $(this).val();
    });

    $('.control-caption').on('blur', function () {
        var control = $(this);
        if ($(this).val().trim() == '' && $(this).val().trim() != focusedCaption) {
            swal({
                title: 'Are you sure?',
                text: 'You are about to remove this control from master!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove it!',
                cancelButtonText: 'No, cancel it!',
                confirmButtonClass: 'confirm-class',
                cancelButtonClass: 'cancel-class',
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    var row = control.parent().parent();
                    if (row.children(':eq(2)').find('select').length) {
                        setSelect2Value(row.children(':eq(2)').find('select'), '0');
                    }
                    row.children(':eq(4)').find('input').val('');
                    row.children(':eq(5)').find('input').val('');
                    row.children(':eq(6)').find('input').val('');
                    swal(
                      'Removed!',
                      'Your control has been removed.',
                      'success'
                    );
                } else {
                    control.val(focusedCaption);
                    swal(
                      'Cancelled',
                      'Your control is safe.',
                      'error'
                    );
                    control.focus();
                }
            });
        }
    });

    $('#tab1ExportExcel').on('click', function () {
        $('#example1').tableExport({
            type: 'excel',
            escape: 'false',
            ignoreColumn: [5]
        });
    });

    $('#tab1ExportPdf').on('click', function () {
        $('#example1').tableExport({
            type: 'pdf',
            escape: 'true',
            pdfFontSize: 7,
            pdfLeftMargin: 20,
            ignoreColumn: [5]
        });
    });

    $('#txtValidationCode1').on('focus', function () {
        focusedValidation = $(this).val();
    });

    $('#txtValidationCode1').on('blur', function () {
        if (!checkReqValidation($('#txtValidationCode1'))) {
            swal('', 'Cannot save first field without required(REQ) code.', 'error')
            $(this).val(focusedValidation);
        }
    });
});

function preventAlreadySelectedMaster(control) {
    var flag = true;
    $(".Dropdown").each(function () {
        var drp = $(this)
        if (drp.attr('id') != control.attr('id')) {
            //alert(drp.val() + ' === ' + control.val());
            if (drp.val() == control.val()) {
                flag = false;
            }
        }
    });
    return flag;
}

function preventEditedMasterSelection(control) {
    var flag = true;
    if (control.val() == $('#txtMasterCode').val()) {
        flag = false;
    }
    return flag;
}

function FillDropDown_Category() {
    //$('#drpSegment').html('');
    //$('#drpSegment').append($('<option value="0">--None--</option>'));
    //$('#drpSegment').append($('<option value="1">Travels</option>'));

    //$('#drpCorporate').html('');
    //$('#drpCorporate').append($('<option value="0">--None--</option>'));
    //$('#drpCorporate').append($('<option value="1">Flamingo</option>'));
    //$('#drpCorporate').append($('<option value="2">Travels Unlimited</option>'));

    //$('#drpEntrylevel').html('');
    //$('#drpEntrylevel').append($('<option value="0">--None--</option>'));
    //$('#drpEntrylevel').append($('<option value="1">Admin</option>'));
    //$('#drpEntrylevel').append($('<option value="2">General</option>'));

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
        url: "/AllMaster/BindDropDown",
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Language: Language, Type: Type
        },
        success: function (data) {
            if (data['Segment'].length > 0) {
                $('#drpSegment').html('');
                for (var i = 0; i < data['Segment'].length; i++) {
                    var opt = new Option(data['Segment'][i]['Text'], data['Segment'][i]['Value']);
                    $('#drpSegment').append(opt);
                }
            }
            if (data['Corporate'].length > 0) {
                $('#drpCorporate').html('');
                for (var i = 0; i < data['Corporate'].length; i++) {
                    var opt = new Option(data['Corporate'][i]['Text'], data['Corporate'][i]['Value']);
                    $('#drpCorporate').append(opt);
                }
            }
        },
        error: function (data) {
            alert("error found");
        }
    });
}

function bind_dropdown() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = $('#drpCorporate option:selected').val();
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var Type = 'ConditionalDropdown';
    var field1 = $('#txtMasterCode').val();
    var field2 = $('#drpSegment option:selected').val();
    var field3 = '';
    var field4 = '';
    var field5 = '';
    var Control = '';
    var Language = '';
    $.ajax({
        url: "/Masters/BindDropDown",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
        },
        success: function (data) {
            $('.Dropdown').html('');
            for (var i = 0; i < data.length; i++) {
                var opt = new Option(data[i]['Text'], data[i]['Value']);
                $('.Dropdown').append(opt);
            }
            $(".Dropdown").each(function () {
                setSelect2Value($(this), '0');
            });
        }
    });
}

function getdata() {
    var tablename = 'dbo.ADMINMASTER';
    var Corporate = '0';
    var Segment = '0';
    var PageNo = '1';
    var type = 'Grid';
    var Formcode = '0';
    var Formtabcode = '0';
    var table = $('#example1').dataTable({
        "ServerSide": true,
        "destroy": true,
        "autoWidth": false,
        "ajax": {
            "url": "/Masters/BindGridView",
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
            { "data": "name" },
            { "data": "Mastercode" },
            { "data": "Entry_Level" },
            { "data": "segment" },
            {
                data: null,
                className: "center",
                defaultContent: '<a href="javascript:void(0);" class="editor_edit" title="Add Control"><i class="fa fa-plus-square"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="edit_master" title="Edit Master"><i class="fa fa-pencil-square-o"></i></a>'
            }
        ],
        columnDefs: [
            { orderable: false, targets: 5 }
        ]

    });
    //var tableTools = new $.fn.dataTable.TableTools(table, {
    //    'sSwfPath': '//cdn.datatables.net/tabletools/2.2.4/swf/copy_csv_xls_pdf.swf',
    //    "aButtons": [
    //        {
    //            "sExtends": "xls",
    //            "sFileName": "Masters" + new Date() + ".xls",
    //            "aButtons": ["xls"],
    //            "bFooter": false
    //        }
    //    ]
    //});
    //$(tableTools.fnContainer()).insertBefore('#example1_wrapper');
    //bind_dropdown();
}

function EditData(tablename, Corporate, unit, Formcode, Formtabcode, Xmaster, Type, hideControls) {


    $.ajax({
        type: "POST",
        url: "/Masters/Edit_data",
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
        },
        dataType: 'json',
        async: false,
        success: function (response) {
            //Master
            clearValidations($(this).parent());
            if (response['AMaster'].length > 0) {
                $('#txtMasterCode').attr("disabled", true)
                $('#type').val('Update');
                $('#txtMasterCode').val(response['AMaster'][0]['xmaster']);
                $('#txtMasterName').val(response['AMaster'][0]['xname']);
                $('#txtdrpCaption').val(response['AMaster'][0]['drpCaption']);
                //$('#drpEntrylevel').find('option[value="' + response['AMaster'][0]['ENTRYCONTROL'] + '"]').attr('selected', true).change();
                setSelect2Value($('#drpEntrylevel'), response['AMaster'][0]['ENTRYCONTROL']);
                setSelect2ValueDisable($('#drpSegment'), response['AMaster'][0]['SEGMENT']);
                setSelect2ValueDisable($('#drpCorporate'), response['AMaster'][0]['Corporate']);
                bind_dropdown();

                setValueAndDisable($('#drpDropdownMastersetup1'), response['AMaster'][0]['xlink']);
                setValueAndDisable($('#drpMastersetup2'), response['AMaster'][0]['xcross']);
                setValueAndDisable($('#drpMastersetup3'), response['AMaster'][0]['xcross1']);
                setValueAndDisable($('#drpMastersetup4'), response['AMaster'][0]['xcross2']);
                setValueAndDisable($('#drpMastersetup5'), response['AMaster'][0]['xcross3']);
                setValueAndDisable($('#drpMastersetup6'), response['AMaster'][0]['xcross4']);

                setValueAndDisable($('#drpMultiselectsetup1'), response['AMaster'][0]['MultiSelect1']);
                setValueAndDisable($('#drpMultiselectsetup2'), response['AMaster'][0]['MultiSelect2']);
                setValueAndDisable($('#drpMultiselectsetup3'), response['AMaster'][0]['MultiSelect3']);
                setValueAndDisable($('#drpMultiselectsetup4'), response['AMaster'][0]['MultiSelect4']);
                setValueAndDisable($('#drpMultiselectsetup5'), response['AMaster'][0]['MultiSelect5']);
            }
            //Caption
            if (response['ACaption'].length > 0) {
                $('#txtcaption1').val(response['ACaption'][0]['Field3caption']);
                $('#txtcaption2').val(response['ACaption'][0]['Field4caption']);
                $('#txtCaption3').val(response['ACaption'][0]['Field5caption']);
                setValueAndDisable($('#txtCaption4'), response['ACaption'][0]['Field6caption']);
                setValueAndDisable($('#txtCaption5'), response['ACaption'][0]['Field7caption']);
                setValueAndDisable($('#txtCaption6'), response['ACaption'][0]['Field8caption']);
                setValueAndDisable($('#txtCaption7'), response['ACaption'][0]['Field9caption']);
                setValueAndDisable($('#txtCaption8'), response['ACaption'][0]['Field10caption'])
                setValueAndDisable($('#txtCaption9'), response['ACaption'][0]['Field11caption'])
                $('#txtCaption10').val(response['ACaption'][0]['Field12caption']);
                $('#txtCaption11').val(response['ACaption'][0]['Field13caption']);
                $('#txtCaption12').val(response['ACaption'][0]['Field14caption']);
                $('#txtCaption13').val(response['ACaption'][0]['Field15caption']);
                $('#txtCaption14').val(response['ACaption'][0]['Field16caption']);
                $('#txtCaption15').val(response['ACaption'][0]['Field17caption']);
                $('#txtCaption16').val(response['ACaption'][0]['Rating1caption']);
                $('#txtCaption17').val(response['ACaption'][0]['Rating2caption']);
                $('#txtCaption18').val(response['ACaption'][0]['Rating3caption']);
                $('#txtCaption19').val(response['ACaption'][0]['Date1caption']);
                $('#txtCaption20').val(response['ACaption'][0]['Date2caption']);
                $('#txtCaption21').val(response['ACaption'][0]['Date3caption']);
                $('#txtCaption24').val(response['ACaption'][0]['Email1caption']);
                $('#txtCaption25').val(response['ACaption'][0]['Email2caption']);
                $('#txtCaption26').val(response['ACaption'][0]['Email3caption']);
                $('#txtCaption27').val(response['ACaption'][0]['Amountcaption']);
                $('#txtCaption28').val(response['ACaption'][0]['Amount2caption']);
                $('#txtCaption29').val(response['ACaption'][0]['Amount3caption']);
                $('#txtCaption22').val(response['ACaption'][0]['Time1caption']);
                $('#txtCaption23').val(response['ACaption'][0]['Time2caption']);
                $('#txtCaption31').val(response['ACaption'][0]['Htmlcaption']);
                $('#txtCaption32').val(response['ACaption'][0]['Uploadcaption']);
                $('#txtCaption30').val(response['ACaption'][0]['TextAreacaption']);
                setValueAndDisable($('#txtCaption33'), response['ACaption'][0]['MultiSelect1caption']);
                setValueAndDisable($('#txtCaption34'), response['ACaption'][0]['MultiSelect2caption']);
                setValueAndDisable($('#txtCaption35'), response['ACaption'][0]['MultiSelect3caption']);
                setValueAndDisable($('#txtCaption36'), response['ACaption'][0]['MultiSelect4caption']);
                setValueAndDisable($('#txtCaption37'), response['ACaption'][0]['MultiSelect5caption']);
            }
            //Placeholder
            if (response['Aplaceholder'].length > 0) {
                $('#txtPlaceHolder1').val(response['Aplaceholder'][0]['Field3']);
                $('#txtPlaceHolder2').val(response['Aplaceholder'][0]['Field4']);
                $('#txtPlaceHolder3').val(response['Aplaceholder'][0]['Field5']);
                $('#txtPlaceHolder4').val(response['Aplaceholder'][0]['Field6']);
                $('#txtPlaceHolder5').val(response['Aplaceholder'][0]['Field7']);
                $('#txtPlaceHolder6').val(response['Aplaceholder'][0]['Field8']);
                $('#txtPlaceHolder7').val(response['Aplaceholder'][0]['Field9']);
                $('#txtPlaceHolder8').val(response['Aplaceholder'][0]['Field10']);
                $('#txtPlaceHolder9').val(response['Aplaceholder'][0]['Field11']);
                $('#txtPlaceHolder10').val(response['Aplaceholder'][0]['Field12']);
                $('#txtPlaceHolder11').val(response['Aplaceholder'][0]['Field13']);
                $('#txtPlaceHolder12').val(response['Aplaceholder'][0]['Field14']);
                $('#txtPlaceHolder13').val(response['Aplaceholder'][0]['Field15']);
                $('#txtPlaceHolder14').val(response['Aplaceholder'][0]['Field16']);
                $('#txtPlaceHolder15').val(response['Aplaceholder'][0]['Field17']);
                $('#txtPlaceHolder16').val(response['Aplaceholder'][0]['Rating1']);
                $('#txtPlaceHolder17').val(response['Aplaceholder'][0]['Rating2']);
                $('#txtPlaceHolder18').val(response['Aplaceholder'][0]['Rating3']);
                $('#txtPlaceHolder19').val(response['Aplaceholder'][0]['Date1']);
                $('#txtPlaceHolder20').val(response['Aplaceholder'][0]['Date2']);
                $('#txtPlaceHolder21').val(response['Aplaceholder'][0]['Date3']);
                $('#txtPlaceHolder24').val(response['Aplaceholder'][0]['Email1']);
                $('#txtPlaceHolder25').val(response['Aplaceholder'][0]['Email2']);
                $('#txtPlaceHolder26').val(response['Aplaceholder'][0]['Email3']);
                $('#txtPlaceHolder27').val(response['Aplaceholder'][0]['Amount']);
                $('#txtPlaceHolder28').val(response['Aplaceholder'][0]['Amount2']);
                $('#txtPlaceHolder29').val(response['Aplaceholder'][0]['Amount3']);
                $('#txtPlaceHolder22').val(response['Aplaceholder'][0]['Time1']);
                $('#txtPlaceHolder23').val(response['Aplaceholder'][0]['Time2']);
                $('#txtPlaceHolder31').val(response['Aplaceholder'][0]['Html']);
                $('#txtPlaceHolder32').val(response['Aplaceholder'][0]['Upload']);
                $('#txtPlaceHolder30').val(response['Aplaceholder'][0]['TextArea']);
                $('#txtPlaceHolder33').val(response['Aplaceholder'][0]['MultiSelect1']);
                $('#txtPlaceHolder34').val(response['Aplaceholder'][0]['MultiSelect2']);
                $('#txtPlaceHolder35').val(response['Aplaceholder'][0]['MultiSelect3']);
                $('#txtPlaceHolder36').val(response['Aplaceholder'][0]['MultiSelect4']);
                $('#txtPlaceHolder37').val(response['Aplaceholder'][0]['MultiSelect5']);
            }
            //validation
            if (response['AValidation'].length > 0) {
                $('#txtValidationCode1').val(response['AValidation'][0]['Field3']);
                $('#txtValidationCode2').val(response['AValidation'][0]['Field4']);
                $('#txtValidationCode3').val(response['AValidation'][0]['Field5']);
                $('#txtValidationCode4').val(response['AValidation'][0]['Field6']);
                $('#txtValidationCode5').val(response['AValidation'][0]['Field7']);
                $('#txtValidationCode6').val(response['AValidation'][0]['Field8']);
                $('#txtValidationCode7').val(response['AValidation'][0]['Field9']);
                $('#txtValidationCode8').val(response['AValidation'][0]['Field10']);
                $('#txtValidationCode9').val(response['AValidation'][0]['Field11']);
                $('#txtValidationCode10').val(response['AValidation'][0]['Field12']);
                $('#txtValidationCode11').val(response['AValidation'][0]['Field13']);
                $('#txtValidationCode12').val(response['AValidation'][0]['Field14']);
                $('#txtValidationCode13').val(response['AValidation'][0]['Field15']);
                $('#txtValidationCode14').val(response['AValidation'][0]['Field16']);
                $('#txtValidationCode15').val(response['AValidation'][0]['Field17']);
                $('#txtValidationCode16').val(response['AValidation'][0]['Rating1']);
                $('#txtValidationCode17').val(response['AValidation'][0]['Rating2']);
                $('#txtValidationCode18').val(response['AValidation'][0]['Rating3']);
                $('#txtValidationCode19').val(response['AValidation'][0]['Date1']);
                $('#txtValidationCode20').val(response['AValidation'][0]['Date2']);
                $('#txtValidationCode21').val(response['AValidation'][0]['Date3']);
                $('#txtValidationCode24').val(response['AValidation'][0]['Email1']);
                $('#txtValidationCode25').val(response['AValidation'][0]['Email2']);
                $('#txtValidationCode26').val(response['AValidation'][0]['Email3']);
                $('#txtValidationCode27').val(response['AValidation'][0]['Amount']);
                $('#txtValidationCode28').val(response['AValidation'][0]['Amount2']);
                $('#txtValidationCode29').val(response['AValidation'][0]['Amount3']);
                $('#txtValidationCode22').val(response['AValidation'][0]['Time1']);
                $('#txtValidationCode23').val(response['AValidation'][0]['Time2']);
                $('#txtValidationCode31').val(response['AValidation'][0]['Html']);
                $('#txtValidationCode32').val(response['AValidation'][0]['Upload']);
                $('#txtValidationCode30').val(response['AValidation'][0]['TextArea']);
                $('#txtValidationCode33').val(response['AValidation'][0]['MultiSelect1']);
                $('#txtValidationCode34').val(response['AValidation'][0]['MultiSelect2']);
                $('#txtValidationCode35').val(response['AValidation'][0]['MultiSelect3']);
                $('#txtValidationCode36').val(response['AValidation'][0]['MultiSelect4']);
                $('#txtValidationCode37').val(response['AValidation'][0]['MultiSelect5']);
            }

            //tooltip
            if (response['Atooltip'].length > 0) {
                $('#txtHelp1').val(response['Atooltip'][0]['Field3']);
                $('#txtHelp2').val(response['Atooltip'][0]['Field4']);
                $('#txtHelp3').val(response['Atooltip'][0]['Field5']);
                $('#txtHelp4').val(response['Atooltip'][0]['Field6']);
                $('#txtHelp5').val(response['Atooltip'][0]['Field7']);
                $('#txtHelp6').val(response['Atooltip'][0]['Field8']);
                $('#txtHelp7').val(response['Atooltip'][0]['Field9']);
                $('#txtHelp8').val(response['Atooltip'][0]['Field10']);
                $('#txtHelp9').val(response['Atooltip'][0]['Field11']);
                $('#txtHelp10').val(response['Atooltip'][0]['Field12']);
                $('#txtHelp11').val(response['Atooltip'][0]['Field13']);
                $('#txtHelp12').val(response['Atooltip'][0]['Field14']);
                $('#txtHelp13').val(response['Atooltip'][0]['Field15']);
                $('#txtHelp14').val(response['Atooltip'][0]['Field16']);
                $('#txtHelp15').val(response['Atooltip'][0]['Field17']);
                $('#txtHelp16').val(response['Atooltip'][0]['Rating1']);
                $('#txtHelp17').val(response['Atooltip'][0]['Rating2']);
                $('#txtHelp18').val(response['Atooltip'][0]['Rating3']);
                $('#txtHelp19').val(response['Atooltip'][0]['Date1']);
                $('#txtHelp20').val(response['Atooltip'][0]['Date2']);
                $('#txtHelp21').val(response['Atooltip'][0]['Date3']);
                $('#txtHelp24').val(response['Atooltip'][0]['Email1']);
                $('#txtHelp25').val(response['Atooltip'][0]['Email2']);
                $('#txtHelp26').val(response['Atooltip'][0]['Email3']);
                $('#txtHelp27').val(response['Atooltip'][0]['Amount']);
                $('#txtHelp28').val(response['Atooltip'][0]['Amount2']);
                $('#txtHelp29').val(response['Atooltip'][0]['Amount3']);
                $('#txtHelp22').val(response['Atooltip'][0]['Time1']);
                $('#txtHelp23').val(response['Atooltip'][0]['Time2']);
                $('#txtHelp31').val(response['Atooltip'][0]['Html']);
                $('#txtHelp32').val(response['Atooltip'][0]['Upload']);
                $('#txtHelp30').val(response['Atooltip'][0]['TextArea']);
                $('#txtHelp33').val(response['Atooltip'][0]['MultiSelect1']);
                $('#txtHelp34').val(response['Atooltip'][0]['MultiSelect2']);
                $('#txtHelp35').val(response['Atooltip'][0]['MultiSelect3']);
                $('#txtHelp36').val(response['Atooltip'][0]['MultiSelect4']);
                $('#txtHelp37').val(response['Atooltip'][0]['MultiSelect5']);
            }
        }
    }).done(function () {
        if (hideControls) {
            HideControls();
        }
        $(".Dropdown").find('option[value="' + Xmaster + '"]').remove();
        $("#SearchMaster").removeClass("active");
        $("#CreateMaster").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab2").addClass("active");
    });
}

function HideControls() {
    $('.control-caption').each(function () {
        if ($(this).val().trim() == '') {
            $(this).parent().parent().parent().hide();
        }
    });
    RedefineSrNo();
}

function ShowControls() {
    $('.control-caption').parent().parent().parent().show();
    RedefineSrNo();
}

function RedefineSrNo() {
    var srnoIndex = 1;
    $('.control-caption').each(function () {
        var control = $(this);
        var row = $(this).parent().parent().parent();
        if (row.is(':visible')) {
            console.log();
            row.find('.control-srno').text(srnoIndex);
            srnoIndex = srnoIndex + 1;
        }
    });
}

function ValidateControls() {
    var flag = true;
    $('.control-caption').each(function () {
        var controlCaption = $(this);
        var row = controlCaption.parent().parent();
        if (row.children(':eq(2)').find('select').length > 0) {
            if (controlCaption.val().toString().trim().length != 0 && (row.children(':eq(2)').find('select').val().toString().trim() != '0' && row.children(':eq(2)').find('select').val().toString().trim() != '')) {
                //flag = true;
            } else if (controlCaption.val().toString().trim().length == 0 && (row.children(':eq(2)').find('select').val().toString().trim() != '0' && row.children(':eq(2)').find('select').val().toString().trim() != '')) {
                flag = false;
            } else if (controlCaption.val().toString().trim().length != 0 && (row.children(':eq(2)').find('select').val().toString().trim() == '0' || row.children(':eq(2)').find('select').val().toString().trim() == '')) {
                flag = false;
            } else if (controlCaption.val().toString().trim().length == 0 && (row.children(':eq(2)').find('select').val().toString().trim() == '0' || row.children(':eq(2)').find('select').val().toString().trim() == '')) {
                if (row.children(':eq(4)').find('input').val().toString().trim().length != 0) {
                    flag = false;
                }
                if (row.children(':eq(5)').find('input').val().toString().trim().length != 0) {
                    flag = false;
                }
                if (row.children(':eq(6)').find('input').val().toString().trim().length != 0) {
                    flag = false;
                }
            }
        } else {

            if (controlCaption.val() == '') {
                if (controlCaption.parent().parent().children(':eq(4)').find('input').val() != '') {
                    flag = false;
                }
                if (controlCaption.parent().parent().children(':eq(5)').find('input').val() != '') {
                    flag = false;
                }
                if (controlCaption.parent().parent().children(':eq(6)').find('input').val() != '') {
                    flag = false;
                }
            }
        }
    });
    return flag;
}

function checkReqValidation(control) {
    return control.val().trim().toLowerCase().contains('req');
}