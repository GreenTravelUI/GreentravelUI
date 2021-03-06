﻿$(window).unload(function () {
    $('select option').remove();
});

var ID = 2;
var customID = 2;
var Message;
var EventClass;
var deletesrno;
var Frmcode;
var FrmtabCode
var standardButton = '';
var duplicate = '';
var htmlutility = '';
$(document).ready(function () {

    Dropdown_Bind_Tab1();

    getdata();

    $('#frmsection').click(function (e) {
        if ($('#txtSrNo1').val() != '') {
            getdatatab();
            //$('.tab3section1').show();
            //$('.tab3Formname').text($('#txtFormName').val());
        }
        else {
            e.preventDefault();
            swal('Please Edit Data');
            Quitform();
            return false;
        }
    });

    $('#Searchfrom').click(function (e) {
        getdata();
    });

    //Tab2 Click  Event  
    $('#frmtab').click(function (e) {
        if ($('#txtSrNo1').val() == '') {
            e.preventDefault();
            swal('Please Edit Data');
            Quitform();
            return false;
        } else {
            // $('.tab3Formname').text($('#txtFormName').val());
        }
    });

    $("#drpCorporate1").change(function () {
        ClearDataoncorporate();
        FillDropdown($('#drpCorporate1 option:selected').val(), '', '', 'drpScreen');
    });

    $("#drpScreen").change(function () {
        claerdataonScreen();
    });

    //save Form  Code --tab1
    $('.btnSave').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal(
               'Invalid data found!',
               '',
               'error'
             )
            return false;
        }
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
        if ($('#txtSrNo1').val() == '') {
            var SrNo = 0;
        }
        else {
            var SrNo = $('#txtSrNo1').val();
        }
        var FormName = $('#txtFormName').val();
        var FormPrefixCode = $('#txtFormPreFix').val();
        var Corporate = $('#drpCorporate1 option:selected').val();
        var Module = '0';
        var Screen = $('#drpScreen option:selected').val();
        var FeatureGroup = '0';
        var Header = $('#txtHeader').val();
        var SubHeader = $('#txtSubHeader').val();
        $.ajax({
            type: "POST",
            url: "/FormSetup/InsertData",
            data: {
                "SrNo": SrNo, "FormName": FormName, "FormPrefixCode": FormPrefixCode, "Corporate": Corporate, "Module": Module, "Screen": Screen,
                "FeatureGroup": FeatureGroup, "Header": Header, "SubHeader": SubHeader, "Attribute1": Attribute1, "Attribute2": Attribute2,
                "Attribute3": Attribute3, "Attribute3": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6, "Attribute7": Attribute7,
                "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
            },
            dataType: 'json',
            success: function (data) {
                Message = data.responseText;
                EventClass = data.Event;
                if (EventClass != 'error') {
                    $('#txtSrNo1').val(data.srno)
                    $('#btnUpdateFS').show();
                    $('#btnSavefs').hide();
                }
                $('.tab3section1').show();
                $('.tab3Formname').text($('#txtFormName').val());

                swal(Message, '', EventClass);
            }
        });
    });

    //save Tab data --tab 2
    $('.btnSaveformtab').click(function (e) {
        e.preventDefault();

        if (duplicate != "") {
            swal(
                'Same Record Already Exits',
                '',
                'error'
              )
            return false;
        }
        else {
            //if ($('#txtSrNo').val() == "") {
                TabDuplication($('#drpCorporate1 option:selected').val(), '', $("#txtTabNumber").val())
                TabDuplication($('#drpCorporate1 option:selected').val(), $("#txtTabHeader").val(), '')
                TabDuplication($('#drpCorporate1 option:selected').val(), $("#txtTabHeader").val(), $("#txtTabNumber").val())
                if (duplicate != "") {
                    swal(
                        'Same Record Already Exits',
                        '',
                        'error'
                      )
                    return false;
                }
            //}
        }
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal(
               'Invalid data found!',
               '',
               'error'
             )
            return false;
        }
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
        var SummeryLabel = '';
        var TrxTable1 = $('#txtTrxTable1').val();
        var TrxTable2 = $('#txtTrxTable2').val();
        var TrxTable3 = $('#txtTrxTable3').val();
        var TrxTable4 = $('#txtTrxTable4').val();
        var TrxTable5 = $('#txtTrxTable5').val();
        var TrxTable6 = $('#txtTrxTable6').val();
        var TrxTable7 = $('#txtTrxTable7').val();
        var TrxTable8 = $('#txtTrxTable8').val();
        var TrxTable9 = $('#txtTrxTable9').val();
        var TrxTable10 = $('#txtTrxTable10').val();

        if ($('#txtSrNo').val() == "") {
            var SrNo = 0;
        }
        else {
            var SrNo = $('#txtSrNo').val();
        }
        var Corporate = $('#drpCorporate1 option:selected').val();
        var FormCode = $('#txtSrNo1').val();
        var TabNumber = $('#txtTabNumber').val();
        var TabHeader = $('#txtTabHeader').val();
        var TabClass = $('#txtTabClass').val();
        var TooltipHelpText = $('#txtTooltipHelpText').val();
        var MasterTable = $('#txtTabMainTable').val();
        var MasterTablePrefix = $('#txtTabMainTablePrefix').val();
        $.ajax(
           {
               type: "POST",
               url: "/FormSetup/InsertData_Formtab",
               data: {
                   "SrNo": SrNo, "Corporate": Corporate, "FormCode": FormCode, "TabNumber": TabNumber, "TabHeader": TabHeader,
                   "TabClass": TabClass, "TooltipHelpText": TooltipHelpText, "MasterTable": MasterTable, "MasterTablePrefix": MasterTablePrefix,
                   "TrxTable1": TrxTable1, "TrxTable2": TrxTable2, "TrxTable3": TrxTable3, "TrxTable4": TrxTable4, "TrxTable5": TrxTable5,
                   "TrxTable6": TrxTable6, "TrxTable7": TrxTable7, "TrxTable8": TrxTable8, "TrxTable9": TrxTable9, "TrxTable10": TrxTable10,
                   "SummeryLabel": SummeryLabel, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4,
                   "Attribute5": Attribute5, "Attribute6": Attribute6, "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9,
                   "Attribute10": Attribute10
               },
               dataType: 'json',
               success: function (data) {
                   Message = data.responseText;
                   EventClass = '';
                   EventClass = data.Event;
                   $('#txtSrNo').val(data.Tab_srno)
                   if (EventClass != 'error') {
                       $('#btnUpdatetab').show();
                       $('#btnSaveformtab').hide();
                   }
                   swal(Message, '', EventClass);
               }
           });

    });

    //model  Button  
    $('.btnSaveStandard').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent().parent().parent())) {  // Pass form control in parameter
            swal(
              'Invalid data found!',
              '',
              'error'
            )
            return false;
        }
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
        var srno = '';
        if (standardButton == "Edit") {
            srno = FrmtabCode;
        }
        var CorporateId = $('#drpCorporate1 option:selected').val();
        var FormCode = $('#txtSrNo1').val();
        var TabCode = FrmtabCode;
        var SaveName = $('#txtSaveName').val();
        var SaveClass = $('#txtSaveClass').val();
        var SaveVisibility = false;
        if ($("#chkSaveVisibility").parent().hasClass('checked')) {
            SaveVisibility = true;
        }
        var SaveNotification = false;
        var SaveTask = false;
        if ($("#chkNotification").parent().hasClass('checked')) {
            SaveNotification = true;
            SaveTask = true;
        }
        if ($("#chkTask").parent().hasClass('checked')) {
            SaveTask = true;
            SaveNotification = true;
        }

        var UpdateName = $('#txtUpdateName').val();
        var UpdateClass = $('#txtUpdateClass').val();

        var UpdateVisibility = false;
        if ($("#chkUpdateVisibility").parent().hasClass('checked')) {
            UpdateVisibility = true;
        }
        var UpdateNotification = false;
        var UpdateTask = false;
        if ($("#chkNotification1").parent().hasClass('checked')) {
            UpdateNotification = true;
            UpdateTask = true;
        }
        if ($("#chkTask1").parent().hasClass('checked')) {
            UpdateNotification = true;
            UpdateTask = true;
        }
        var DeleteName = $('#txtDeleteName').val();
        var DeleteClass = $('#txtDeleteClass').val();

        var DeleteVisibility = false;
        if ($("#chkDeleteVisibility").parent().hasClass('checked')) {
            DeleteVisibility = true;
        }

        var DeleteTask = false;
        var DeleteNotification = false;
        if ($("#chkNotification2").parent().hasClass('checked')) {
            DeleteNotification = true;
            DeleteTask = true;
        }
        if ($("#chkTask2").parent().hasClass('checked')) {
            DeleteNotification = true;
            DeleteTask = true;
        }
        var ClearName = $('#txtClearName').val();
        var ClearClass = $('#txtClearClass').val();
        var ClearVisibility = false;
        if ($("#chkClearVisibility").parent().hasClass('checked')) {
            ClearVisibility = true;
        }
        // var ClearVisibility = $("#chkClearVisibility").is(":checked");;
        var ClearNotification = false;
        var ClearTask = false;
        var FormQuitName = $('#txtFormQuitName').val();
        var FormQuitClass = $('#txtFormQuitClass').val();
        // var FormQuitVisibility = $('#chkFormQuitVisibility').is(":checked");
        var FormQuitVisibility = false;
        if ($("#chkFormQuitVisibility").parent().hasClass('checked')) {
            FormQuitVisibility = true;
        }
        var FormQuitNotification = false;
        var FormQuitTask = false;
        $.ajax(
           {
               type: "POST",
               url: "/FormSetup/InsertData_StandardButton",
               data: {
                   "srno": srno, "CorporateId": CorporateId, "TabCode": TabCode, "FormCode": FormCode, "SaveName": SaveName, "SaveClass": SaveClass,
                   "SaveVisibility": SaveVisibility, "SaveNotification": SaveNotification, "SaveTask": SaveTask, "UpdateName": UpdateName,
                   "UpdateClass": UpdateClass, "UpdateVisibility": UpdateVisibility, "UpdateNotification": UpdateNotification, "UpdateTask": UpdateTask,
                   "DeleteName": DeleteName, "DeleteClass": DeleteClass, "DeleteVisibility": DeleteVisibility, "DeleteNotification": DeleteNotification,
                   "DeleteTask": DeleteTask, "ClearName": ClearName, "ClearClass": ClearClass, "ClearVisibility": ClearVisibility, "ClearNotification": ClearNotification,
                   "FormQuitName": FormQuitName,
                   "FormQuitClass": FormQuitClass, "FormQuitVisibility": FormQuitVisibility, "FormQuitNotification": FormQuitNotification, "FormQuitTask": FormQuitTask,
                   "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                   "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10

               },
               dataType: 'json',
               success: function (data) {
                   $("#myModalIcon").modal('hide');
                   Message = data.responseText;
                   //swal('Good job!', 'Save Record Successfully', 'success');
                   swal(Message, '', 'success');
               }
           });

    });

    //Redirect Form Control
    $("table").delegate(".editor_Control", "click", function () {
        var tablename = 'dbo._Form_Tab_Master';
        var Corporate = $('#hdfCorporate').val()
        var unit = '';
        var userid = '';
        var WhereClause = '';
        var Branch = '';
        var PageNo = '1';
        var RecordsPerPage = '10';
        var FormCode = $(this).parent().parent().children(':eq(1)').text();
        var Formtabcode = '0';
        var type = 'Grid';
        var Segment = '';
        $.ajax({
            type: "POST",
            url: "/FormSetup/BindGridViewFormsetup",
            data: {
                "tablename": tablename, "Corporate": Corporate, "unit": unit, "userid": userid, "WhereClause": WhereClause, "Branch": Branch, "PageNo": PageNo, "RecordsPerPage": RecordsPerPage,
                "FormCode": FormCode, "Formtabcode": Formtabcode, "type": type, "Segment": Segment
            },
            dataType: 'json',
            success: function (result) {
                console.log(result.length);
                if (result.length > 0) {
                    window.location.href = '/FormControlSetup/Index/?id=' + FormCode;
                }
                else {
                    swal('', 'No Tab Found For This Form', 'error');
                }
            }
        });

    });

    //Edit Form  
    $("table").delegate(".editor_edit", "click", function () {
        $('#btnClearFS').trigger('click');
        $('#btncleartab').trigger('click');
        clearValidations($('#tab4'));
        var tablename = 'dbo._Form_Master';
        var Corporate = $('#hdfCorporate').val()
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax({
            type: "POST",
            url: "/FormSetup/Edit_Data",
            data: {
                tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
            },
            dataType: 'json',
            success: function (response) {
                if (response.length > 0) {
                    $('#txtSrNo1').val(response[0].SrNo);
                    $('#txtFormName').val(response[0].FormName);
                    //$('#txtFormPreFix').val(response[0].FormPrefixCode);
                    setValueAndDisable($('#txtFormPreFix'), response[0].FormPrefixCode);
                    setValueAndDisable($('#drpCorporate1'), response[0].Corporate);
                    FillDropdown($('#drpCorporate1 option:selected').val(), '', '', 'drpScreen');
                    //setSelect2Value($('#drpScreen'), response[0].Screen);
                    setValueAndDisable($('#drpScreen'), response[0].Screen);
                    $('#txtHeader').val(response[0].Header);
                    $('#txtSubHeader').val(response[0].SubHeader);
                }
            }
        }).done(function () {
            $('.tab3section1').show();
            $('.tab3Formname').text($('#txtFormName').val());
            $("#Searchfrom").removeClass("active");
            $("#Frmcreate").addClass("active");
            $("#tab1").removeClass("active");
            $("#tab3").addClass("active");
            $('#btnUpdateFS').show();
            $('#btnSavefs').hide();
        });
    });

    //Delete form 
    $("table").delegate(".editor_Delte", "click", function () {
        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(1)').text()
        $("#lbldelete").text("Are You Sure Do You Want to Delete This Record ?");
    });

    //editdata in  button ,custom button  ,utility
    $("table").delegate(".SectiontabButtonclass", "click", function () {
        clearValidations($('#frmStandardButton'));
        getUtility();
        Frmcode = 0;
        FrmtabCode = '';
        FrmtabCode = $(this).parent().parent().children(':eq(2)').text()
        var tablename = 'dbo._Form_Master';
        var Corporate = $('#hdfCorporate').val()
        var unit = '0';
        var Formcode = Frmcode;
        var Formtabcode = FrmtabCode;
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        var html = '';
        $.ajax({
            type: "POST",
            url: "/FormSetup/Edit_Data_icon",
            data: {
                tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
            },
            dataType: 'json',
            success: function (response) {
                Modeltabactive();
                clearButtonclass();
                //clearValidations($(this).closest('form'));
                $("#tblModalIconCustom tbody").html('');
                $('#btnstandardbutton').show();
                $('#btnSave22').hide();
                standardButton = '';
                clearcheckbocstandardbutton();
                if (response['AFrmStandardbtn'].length > 0) {
                    $('#btnstandardbutton').hide();
                    $('#btnSave22').show();
                    standardButton = "Edit";
                    //   $('#txtMasterCode').val(response['AFrmStandardbtn'][0]['xmaster']);
                    $('#txtSaveName').val(response['AFrmStandardbtn'][0]['SaveName']);
                    $('#txtSaveClass').val(response['AFrmStandardbtn'][0]['SaveClass']);
                    if (response['AFrmStandardbtn'][0]['SaveVisibility'].toLowerCase() == 'true') {
                        $('#chkSaveVisibility').attr('checked', true);
                        $('#chkSaveVisibility').parent().addClass('checked');
                    } else {
                        $('#chkSaveVisibility').attr('checked', false);
                        $('#chkSaveVisibility').parent().removeClass('checked');
                    }
                    if (response['AFrmStandardbtn'][0]['SaveNotification'].toLowerCase() == 'true') {
                        $('#chkNotification').attr('checked', true);
                        $('#chkNotification').parent().addClass('checked');
                    } else {
                        $('#chkNotification').attr('checked', false);
                        $('#chkNotification').parent().removeClass('checked');
                    }
                    if (response['AFrmStandardbtn'][0]['SaveTask'].toLowerCase() == 'true') {
                        $('#chkTask').attr('checked', true);
                        $('#chkTask').parent().addClass('checked');
                    } else {
                        $('#chkTask').attr('checked', false);
                        $('#chkTask').parent().removeClass('checked');
                    }

                    $('#txtUpdateName').val(response['AFrmStandardbtn'][0]['UpdateName']);
                    $('#txtUpdateClass').val(response['AFrmStandardbtn'][0]['UpdateClass']);
                    if (response['AFrmStandardbtn'][0]['UpdateVisibility'].toLowerCase() == 'true') {
                        $('#chkUpdateVisibility').attr('checked', true);
                        $('#chkUpdateVisibility').parent().addClass('checked');
                    } else {
                        $('#chkUpdateVisibility').attr('checked', false);
                        $('#chkUpdateVisibility').parent().removeClass('checked');
                    }
                    if (response['AFrmStandardbtn'][0]['UpdateNotification'].toLowerCase() == 'true') {
                        $('#chkNotification1').attr('checked', true);
                        $('#chkNotification1').parent().addClass('checked');
                    } else {
                        $('#chkNotification1').attr('checked', false);
                        $('#chkNotification1').parent().removeClass('checked');
                    }
                    if (response['AFrmStandardbtn'][0]['UpdateTask'].toLowerCase() == 'true') {
                        $('#chkTask1').attr('checked', true);
                        $('#chkTask1').parent().addClass('checked');
                    } else {
                        $('#chkTask1').attr('checked', false);
                        $('#chkTask1').parent().removeClass('checked');
                    }
                    $('#txtDeleteName').val(response['AFrmStandardbtn'][0]['DeleteName']);
                    $('#txtDeleteClass').val(response['AFrmStandardbtn'][0]['DeleteClass']);
                    if (response['AFrmStandardbtn'][0]['DeleteVisibility'].toLowerCase() == 'true') {
                        $('#chkDeleteVisibility').attr('checked', true);
                        $('#chkDeleteVisibility').parent().addClass('checked');
                    } else {
                        $('#chkDeleteVisibility').attr('checked', false);
                        $('#chkDeleteVisibility').parent().removeClass('checked');
                    }
                    if (response['AFrmStandardbtn'][0]['DeleteNotification'].toLowerCase() == 'true') {
                        $('#chkNotification2').attr('checked', true);
                        $('#chkNotification2').parent().addClass('checked');
                    } else {
                        $('#chkNotification2').attr('checked', false);
                        $('#chkNotification2').parent().removeClass('checked');
                    }
                    if (response['AFrmStandardbtn'][0]['DeleteTask'].toLowerCase() == 'true') {
                        $('#chkTask2').attr('checked', true);
                        $('#chkTask2').parent().addClass('checked');
                    } else {
                        $('#chkTask2').attr('checked', false);
                        $('#chkTask2').parent().removeClass('checked');
                    }

                    $('#txtClearName').val(response['AFrmStandardbtn'][0]['ClearName']);
                    $('#txtClearClass').val(response['AFrmStandardbtn'][0]['ClearClass']);
                    if (response['AFrmStandardbtn'][0]['ClearVisibility'].toLowerCase() == 'true') {
                        $('#chkClearVisibility').attr('checked', true);
                        $('#chkClearVisibility').parent().addClass('checked');
                    } else {
                        $('#chkClearVisibility').attr('checked', false);
                        $('#chkClearVisibility').parent().removeClass('checked');
                    }
                    $('#txtFormQuitName').val(response['AFrmStandardbtn'][0]['FormQuitName']);
                    $('#txtFormQuitClass').val(response['AFrmStandardbtn'][0]['FormQuitClass']);
                    if (response['AFrmStandardbtn'][0]['FormQuitVisibility'].toLowerCase() == 'true') {
                        $('#chkFormQuitVisibility').attr('checked', true);
                        $('#chkFormQuitVisibility').parent().addClass('checked');
                    } else {
                        $('#chkFormQuitVisibility').attr('checked', false);
                        $('#chkFormQuitVisibility').parent().removeClass('checked');
                    }

                    // $('#chkFormQuitVisibility').is(":checked");
                }

                $("#btncustomsave").show();
                $("#btnCustomUpdate").hide();
                clearValidations($('#frmCustomButton'));
                if (response['ACustomMaster'].length > 0) {
                    html = '';
                    customID = response['ACustomMaster'].length + 1;
                    $("#btncustomsave").hide();
                    $("#btnCustomUpdate").show();
                    for (var i = 0; i < response['ACustomMaster'].length; i++) {
                        var Customvisi = '';
                        var CustomNoti = '';
                        var CustomT = '';
                        if (response['ACustomMaster'][i]['CustomVisibility'].toLowerCase() == 'true') {
                            Customvisi = '<div class="checker"> <span class="checked"><input type="Checkbox" class="form-control" checked="checked" /></span></div>';
                        } else {
                            Customvisi = '<div class="checker"> <span ><input type="Checkbox" class="form-control"  /></span></div>';
                        }

                        if (response['ACustomMaster'][i]['CustomNotification'].toLowerCase() == 'true') {
                            CustomNoti = '<div class="checker"> <span class="checked"><input type="Checkbox" class="form-control" checked="checked" /></span></div>';
                        } else {
                            CustomNoti = '<div class="checker"> <span><input type="Checkbox" class="form-control"  /></span></div>';
                        }
                        if (response['ACustomMaster'][i]['CustomTask'].toLowerCase() == 'true') {
                            CustomT = '<div class="checker"> <span class="checked"><input type="Checkbox" class="form-control" checked="checked" /></span></div>';
                        } else {
                            CustomT = '<div class="checker"> <span ><input type="Checkbox" class="form-control"  /></span></div>';
                        }
                        if (html == '') {
                            html = '<tr>' +
                                   '<td>' + response['ACustomMaster'][i]['Rownumber'] + '</td>' +
                                   '<td><div class="form-group"> <input type="text" class="form-control req" placeholder="Custom Name" value="' + response['ACustomMaster'][i]['CustomName'] + '" /></div></td>' +
                                   '<td> <div class="form-group"><input type="text" class="form-control" placeholder="Custom Class"  value="' + response['ACustomMaster'][i]['CustomClass'] + '" /></div></td>' +
                                   '<td>' + Customvisi + '</td>' +
                                   '<td>' + CustomNoti + '</td>' +
                                   '<td>' + CustomT + '</td>' +
                                   '<td style="display: none"> <input type="text" placeholder="Custom Class" class="form-control"  value="' + response['ACustomMaster'][i]['srno'] + '" /></td>' +
                                   '</tr>'
                        } else {
                            html += '<tr>' +
                                   '<td>' + response['ACustomMaster'][i]['Rownumber'] + '</td>' +
                                   '<td><div class="form-group"> <input type="text" class="form-control req" value="' + response['ACustomMaster'][i]['CustomName'] + '" /></div></td>' +
                                   '<td><div class="form-group"> <input type="text" class="form-control" placeholder="Custom Class"   value="' + response['ACustomMaster'][i]['CustomClass'] + '" /></div></td>' +
                                   '<td>' + Customvisi + '</td>' +
                                   '<td>' + CustomNoti + '</td>' +
                                   '<td>' + CustomT + '</td>' +
                                   '<td style="display: none"> <input type="text" placeholder="Custom Class" class="form-control"  value="' + response['ACustomMaster'][i]['srno'] + '" /></td>' +
                                   '<td><a id="btnCloseCustomsection" class="text-danger in-editmode btnCloseCustomsection" href="javascript:void(0);" style="padding: 0px 6px;"><i class="fa fa-times"></i></a></td>' +
                                   '</tr>'
                        }
                    }
                    $(html).appendTo($("#tblModalIconCustom"))
                }
                else {
                    customID = response['ACustomMaster'].length + 1;
                    var html = '<tr>' +
                               '<td class="tdrearrenage">' + customID + '</td>' +
                               '<td><div class="form-group"><input type="text" placeholder="Custom Name"  class="form-control req" /></div></td>' +
                               '<td><div class="form-group"> <input type="text" placeholder="Custom Class"  class="form-control" /></div></td>' +
                               '<td> <div class="checker"> <span><input type="Checkbox" class="form-control" /></span></div></td>' +
                               '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                               '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                               '<td style="display: none"> <input type="text" placeholder="Custom Class" class="form-control"  /></td>' +
                               '<td></td>' +
                               '</tr>'
                    $(html).appendTo($("#tblModalIconCustom"))
                    customID++;
                }
                //utility Edit Mode
                $("#UtilityFrom").find('.checker').each(function () {
                    $(this).children().removeClass('checked');
                    $(this).children().children().removeAttr('checked');
                });
                if (response['AUtility'].length > 0) {
                    $('#btnutilityupdate').show();
                    $('#btnutilitySave').hide();
                    var data = response['AUtility'][0]['Utilities'];
                    var arr = data.split(',');
                    $.each(arr, function (i) {
                        $("#UtilityFrom").find('.checker').each(function () {
                            if (arr[i] == $(this).children().children().attr('id')) {
                                $(this).children().addClass('checked');
                                $(this).children().children().attr('checked', true);
                                return;
                            }
                        });
                    });
                }
                else {
                    if (htmlutility == '') {
                        $('#btnutilityupdate').hide();
                        $('#btnutilitySave').hide();
                    }
                    else {
                        $('#btnutilitySave').show();
                        $('#btnutilityupdate').hide();
                    }
                }
            }
        });
    });

    //Section In Editmode  
    $("table").delegate(".TabSection", "click", function () {
        clearValidations($(this).closest('form'));
        Frmcode = 0;
        FrmtabCode = '';
        FrmtabCode = $(this).parent().parent().children(':eq(2)').text()
        var tablename = 'dbo._Form_Master';
        var Corporate = $('#hdfCorporate').val()
        var unit = '0';
        var Formcode = Frmcode;
        var Formtabcode = FrmtabCode;
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        var html = '';
        $.ajax({
            type: "POST",
            url: "/FormSetup/Edit_Data_Section",
            data: {
                tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
            },
            dataType: 'json',
            success: function (response) {
                html = '';
                clearSectionNameTab();
                clearValidations($(this).closest('form'));
                $("#btnModalSectionSave").show();
                $("#btnModalSectionUpdate").hide();
                if (response['ASectionMaster'].length > 0) {
                    $("#tblModalSection tbody").html('');
                    ID = response['ASectionMaster'].length + 1;
                    $("#btnModalSectionSave").hide();
                    $("#btnModalSectionUpdate").show();
                    for (var i = 0; i < response['ASectionMaster'].length; i++) {
                        if (typeof html === typeof undefined && html === false || html == '') {
                            html = '<tr>' +
                                   '<td>' + response['ASectionMaster'][i]['rownumber'] + '</td>' +
                                   '<td><div class="form-group"><input type="text" placeholder="Section Name"  class="form-control req" value="' + response['ASectionMaster'][i]['SectionName'] + '" /></div></td>' +
                                   '<td style="display: none"><div class="form-group"><input type="text" class="form-control "  value="' + response['ASectionMaster'][i]['srno'] + '" /></div></td>' +
                                   '<td></td>' +
                                   '</tr>';
                        } else {
                            html += '<tr>' +
                                '<td>' + response['ASectionMaster'][i]['rownumber'] + '</td>' +
                                '<td> <div class="form-group"><input type="text" placeholder="Section Name"  class="form-control req" value="' + response['ASectionMaster'][i]['SectionName'] + '" /></div></td>' +
                                '<td style="display: none" > <div class="form-group"><input type="text" class="form-control " value="' + response['ASectionMaster'][i]['srno'] + '" /></div></td>' +
                                '<td><a id="btnDeleteSection" class="text-danger in-editmode btnDeleteSection" href="javascript:void(0);" style="padding: 0px 6px;"><i class="fa fa-times"></i></a></td>' +
                                '</tr>';
                        }
                    }
                    $(html).appendTo($("#tblModalSection"))
                } else {
                    ID = response['ASectionMaster'].length + 1;
                    var html = '<tr>' +
                               '<td>' + ID + '</td>' +
                               '<td> <div class="form-group"><input type="text" placeholder="Section Name"  class="form-control req" id="txtsection' + ID + '"/></div></td>' +
                               '<td  style="display: none"> <div class="form-group"><input type="text"  class="form-control " /></div></td>' +
                               '<td></td>' +
                               '</tr>'
                    $(html).appendTo($("#tblModalSection"))
                    ID++;
                }
            }
        });
    });

    //Edit tab Data 
    $("table").delegate(".EditTabData", "click", function () {
        duplicate = '';
        $('#btncleartab').trigger('click');
        $("#frmsection").removeClass("active");
        $("#frmtab").addClass("active");
        $("#tab5").removeClass("active");
        $("#tab4").addClass("active");
        $('#btnUpdatetab').show();
        $('#btnSaveformtab').hide();
        var tablename = 'dbo._Form_Tab_Master';
        var Corporate = $('#hdfCorporate').val()
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(2)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/FormSetup/Edit_FormTab",
             data: {
                 "tablename": tablename, "Corporate": Corporate, "unit": unit, "Formcode": Formcode, "Formtabcode": Formtabcode, "Xmaster": Xmaster, "Type": Type
             },
             dataType: 'json',
             success: function (response) {
                 if (response.length > 0) {
                     $('#txtSrNo').val(response[0].SrNo);
                     $('#txtTabNumber').val(response[0].TabNumber);
                     $('#txtTabClass').val(response[0].TabClass);
                     $('#txtTabHeader').val(response[0].TabHeader);
                     $('#txtTooltipHelpText').val(response[0].TooltipHelpText);
                     $('#txtTabMainTable').val(response[0].MasterTable);
                     $('#txtTabMainTablePrefix').val(response[0].MasterTablePrefix);
                     $('#txtTrxTable1').val(response[0].TrxTable1);
                     $('#txtTrxTable2').val(response[0].TrxTable2);
                     $('#txtTrxTable3').val(response[0].TrxTable3);
                     $('#txtTrxTable4').val(response[0].TrxTable4);
                     $('#txtTrxTable5').val(response[0].TrxTable5);
                     $('#txtTrxTable6').val(response[0].TrxTable6);
                     $('#txtTrxTable7').val(response[0].TrxTable7);
                     $('#txtTrxTable8').val(response[0].TrxTable8);
                     $('#txtTrxTable9').val(response[0].TrxTable9);
                     $('#txtTrxTable10').val(response[0].TrxTable10);
                 }
             }
         });
    });

    //Delete Button  Click
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
            url: "/FormSetup/DeleteData",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
            },
            success: function (data) {
                if (data.length > 0) {
                    swal(data['msg'], '', 'success');
                }
            }
        });
    });

    //Tab 3 Grid
    $('#btnaddSection').click(function (e) {
        addRow();
    });

    $("table").delegate('.btnDeleteSection', 'click', function () {
        var control = $(this);
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false
        },
        function () {
            var msg = 'Your data has been deleted.';
            if (control.hasClass('in-editmode')) {
                var srno;
                if (control.parent().parent().children(':eq(2)').find('input').val().trim() != '') {
                    srno = control.parent().parent().children(':eq(2)').find('input').val();
                }
                else {
                    srno = 0;
                }
                $.ajax({
                    type: "POST",
                    url: "/FormSetup/Base_Form_Section_Master",
                    async: false,
                    data: {
                        "srno": srno, "Type": "Delete"
                    },
                    dataType: 'json',
                    success: function (response) {
                        if (response != null && response.success) {
                            msg = response.responseText;
                            flag = 1
                        }
                    }
                });
            }
            swal(
              'Deleted!',
              msg,
              'success'
            );
            control.parent().parent().remove();
            RearrangeSection();
        });
    });

    //save Section 
    $('.btnsavesection').on('click', function (e) {
        e.preventDefault();
        if (!validateForm($(this).closest('form'))) {  // Pass form control in parameter
            swal(
               'Invalid data found!',
               '',
               'error'
             )
            return false;
        }
        var flagsection = 0;
        var CorporateId = $('#hdfCorporate').val()
        var TabCode = FrmtabCode;
        var FormCode = $('#txtSrNo1').val();
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
        $("#tblModalSection tbody tr").each(function () {
            var SectionName = '';
            var SectionName = $(this).children(':eq(1)').find('input').val();
            //console.log($(this).children(':eq(2)').find('input').val().trim());
            var srno;
            if ($(this).children(':eq(2)').find('input').val().trim() != '') {
                srno = $(this).children(':eq(2)').find('input').val();
            }
            else {
                srno = 0;
            }
            $.ajax({
                type: "POST",
                url: "/FormSetup/InsertData_SectionMaster",
                async: false,
                data: {
                    "srno": srno, "CorporateId": CorporateId, "TabCode": TabCode, "FormCode": FormCode, "SectionName": SectionName,
                    "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                    "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
                },
                dataType: 'json',
                success: function (response) {
                    if (response["responseText"] != "") {
                        flagsection = 1
                    }
                }
            });
        });
        if (flagsection == 1) {
            $("#myModalSection").modal('hide');
            //swal('Good job!', 'Record Save Sucessfully', 'success');
            swal('Record Save Sucessfully', '', 'success');
        }
    });

    $('#btnCustomsection').on('click', function () {
        addRowCustom();
    });

    $("table").delegate('.btnCloseCustomsection', 'click', function () {
        var control = $(this);
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false
        },
        function () {
            var msg = 'Your data has been deleted.';
            if (control.hasClass('in-editmode')) {
                var srno;
                if (control.parent().parent().children(':eq(6)').find('input').val().trim() != '') {
                    srno = control.parent().parent().children(':eq(6)').find('input').val();
                }
                else {
                    srno = 0;
                }

                $.ajax({
                    type: "POST",
                    url: "/FormSetup/Base_Form_Custom_Button",
                    async: false,
                    data: {
                        "srno": srno, "Type": "Delete"
                    },
                    dataType: 'json',
                    success: function (response) {
                        if (response != null && response.success) {
                            msg = response.responseText;
                            flag = 1
                        }
                    }
                });
            }

            swal(
              'Deleted!',
              msg,
              'success'
            );
            control.parent().parent().remove();
            addRowRearrange();
        });
    });

    //save Custom  Button
    $('.btnsaveCustomButton').on('click', function (e) {
        e.preventDefault();
        if (!validateForm($(this).closest('form'))) {  // Pass form control in parameter
            swal(
               'Invalid data found!',
               '',
               'error'
             )
            return false;
        }
        var flag = 0;
        var srno
        var Corporate = $('#hdfCorporate').val()
        var TabCode = FrmtabCode;
        var FormCode = $('#txtSrNo1').val();
        $("#tblModalIconCustom tbody tr").each(function () {
            var CustomName = '';
            var CustomClass = '';
            var CustomVisibility = false;
            var CustomNotification = false;
            var CustomTask = false;
            CustomName = $(this).children(':eq(1)').find('input').val();
            CustomClass = $(this).children(':eq(2)').find('input').val();
            if ($(this).children(':eq(3)').find('input').parent().hasClass('checked')) {
                CustomVisibility = true;
            }
            if ($(this).children(':eq(4)').find('input').parent().hasClass('checked')) {
                CustomNotification = true;
                CustomTask = true;
            }
            if ($(this).children(':eq(5)').find('input').parent().hasClass('checked')) {
                CustomNotification = true;
                CustomTask = true;
            }
            var srno;
            if ($(this).children(':eq(6)').find('input').val().trim() != '') {
                srno = $(this).children(':eq(6)').find('input').val();
            }
            else {
                srno = 0;
            }
            $.ajax({
                type: "POST",
                url: "/FormSetup/InsertData_CustomMaster",
                async: false,
                data: {
                    "srno": srno, "Corporate": Corporate, "TabCode": TabCode, "FormCode": FormCode, "CustomName": CustomName,
                    "CustomClass": CustomClass, "CustomVisibility": CustomVisibility, "CustomNotification": CustomNotification, "CustomTask": CustomTask
                },
                dataType: 'json',
                success: function (response) {
                    if (response != null && response.success) {
                        flag = 1
                    }
                }
            });
        });
        if (flag == 1) {
            $("#myModalIcon").modal('hide');
            swal('Record Save Sucessfully', '', 'success');
        }
    });

    //Utility Save Button  
    $('.Utilitysavedata').on('click', function (e) {
        e.preventDefault();
        var Corporate = $('#drpCorporate1 option:selected').val();
        var TabCode = FrmtabCode;
        var FormCode = $('#txtSrNo1').val();
        var Utilities = '';
        $("#UtilityFrom").find('.checker').each(function () {
            if ($(this).children().hasClass('checked')) {
                if (Utilities == '') {
                    Utilities = $(this).children().children().attr('id');
                } else {
                    Utilities += ',' + $(this).children().children().attr('id');
                }
            }
        });
        if (Utilities == '') {
            swal(
              'Please Select Atleast One Checkbox !',
              '',
              'warning'
            )
            return false;
        }
        var srno;
        if ($('#txtutilitysrno').val() != '') {
            srno = $('#txtutilitysrno').val();
        } else {
            srno = 0;
        }
        $.ajax({
            type: "POST",
            url: "/FormSetup/InsertData_Utility",
            async: false,
            data: {
                "srno": srno, "CorporateId": Corporate, "TabCode": TabCode, "FormCode": FormCode,
                "Utilities": Utilities
            },
            dataType: 'json',
            success: function (response) {
                if (response != null && response.success) {
                    swal(response.responseText, '', 'success');
                }
            }
        }).done(function () {
            $('#btnutilitySave').hide();
            $("#myModalIcon").modal('hide');
        });
    });

    /*Quit Button*/
    $('.QuitForm').on('click', function () {
        clearValidations($(this).closest('form'));
        clearForm();
        clearFormTAB();
        Quitform();
        $('.tab3section1').hide();
        $('.tab3Formname').text('');
        $('#btnUpdateFS').hide();
        $('#btnSavefs').show();
    });

    $('#btnquittab').on('click', function (e) {
        duplicate = '';
        clearValidations($(this).closest('form'));
        clearFormTAB();
        $('#btnUpdatetab').hide();
        $('#btnSaveformtab').show();
        $("#tab3").removeClass("active");
        $("#tab4").removeClass("active");
        $("#tab5").addClass("active");
        $("#tab1").removeClass("active");
        $("#Frmcreate").removeClass("active");
        $("#frmtab").removeClass("active");
        $("#frmsection").addClass("active");
        $("#Searchfrom").removeClass("active");
        getdatatab();
        e.preventDefault();
    });

    /*Clear */
    $('#btnClearFS').click(function (e) {
        e.preventDefault();
        clearValidations($(this).closest('form'));
        $('#btnUpdateFS').hide();
        $('#btnSavefs').show();
        $('.tab3section1').hide();
        $('.tab3Formname').text('');
        clearForm();
    });

    $('#btncleartab').click(function (e) {
        duplicate = '';
        e.preventDefault();
        clearValidations($(this).closest('form'));
        $('#btnUpdatetab').hide();
        $('#btnSaveformtab').show();
        clearFormTAB();
    });

    $("table").delegate(".checker", "click", function () {
        if ($(this).children().hasClass('checked')) {
            $(this).children().removeClass('checked');
            $(this).children().children().removeAttr('checked');
        } else {
            $(this).children().addClass('checked');
            $(this).children().children().attr('checked', true);
        }
    });

    $("#UtilityFrom").delegate(".checker", "click", function () {
        if ($(this).children().hasClass('checked')) {
            $(this).children().removeClass('checked');
            $(this).children().children().removeAttr('checked');
        } else {
            $(this).children().addClass('checked');
            $(this).children().children().attr('checked', true);
        }
    });

    $("#txtTabNumber").change(function () {
        duplicate = '';
        TabDuplication($('#drpCorporate1 option:selected').val(), '', $("#txtTabNumber").val())
        //console.log(duplicate);
        if (duplicate != "") {
            //  $("#txtTabNumber").val('');
            swal(
                'Same Record Already Exits',
                '',
                'error'
              )
        }
    });
    $("#txtTabHeader").change(function () {
        duplicate = '';
        TabDuplication($('#drpCorporate1 option:selected').val(), $("#txtTabHeader").val(), '')
        //console.log(duplicate);
        if (duplicate != "") {
            //  $("#txtTabHeader").val('');
            swal(
                'Same Record Already Exits',
                '',
                'error'
              )
        }
    });

});

function TabDuplication(Corporate, Field1, Field2) {
    var Module = '';
    var screen = '';
    var FormCode = $('#txtSrNo1').val();
    var TabCode = '';
    var Corporate = Corporate;
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;
    var field2 = Field2;
    var field3 = $('#txtSrNo').val();//TAbSRno
    var field4 = '';
    var field5 = '';
    var Control = '';
    var Language = '';
    var Type = 'BaseDuplicate';
    var Srno = '';
    $.ajax({
        url: "/FormSetup/Base_Form_Tab_Master",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (data) {
            if (data['Duplicate'] == "1") {
                duplicate = "Done";
            }
            else {
                duplicate = '';
            }
            console.log(duplicate);
        }
    });
}

function tabsrno_Header() {

}

function addRowCustom() {
    customID = $('#tblModalIconCustom').find('tbody tr').length + 1;
    var html = '<tr>' +
                '<td class="tdrearrenage">' + customID + '</td>' +
                '<td><div class="form-group"><input type="text" placeholder="Custom Name"  class="form-control req" /></div></td>' +
                '<td><div class="form-group"> <input type="text" placeholder="Custom Class"  class="form-control" /></div></td>' +
                '<td> <div class="checker"> <span><input type="Checkbox" class="form-control" /></span></div></td>' +
                '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                '<td style="display: none"> <input type="text" placeholder="Custom Class" class="form-control"  /></td>' +
                '<td><a id="btnCloseCustomsection" class="text-danger btnCloseCustomsection" href="javascript:void(0);" style="padding: 0px 6px;"><i class="fa fa-times"></i></a></td>' +
                '</tr>'
    $(html).appendTo($("#tblModalIconCustom"))
    //  customID++;

}

function addRowRearrange() {
    $('#tblModalIconCustom').find('tbody tr').each(function (index) {
        $(this).children(':eq(0)').text(index + 1);
    });
}

function addRow() {
    ID = $('#tblModalSection').find('tbody tr').length + 1;
    var html = '<tr>' +
                '<td>' + ID + '</td>' +
                '<td> <div class="form-group"><input type="text" placeholder="Section Name" class="form-control req" id="txtsection' + ID + '"/></div></td>' +
                '<td style="display: none"> <div class="form-group"><input type="text"  class="form-control " /></div></td>' +
                '<td><a id="btnDeleteSection" class="text-danger btnDeleteSection" href="javascript:void(0);" style="padding: 0px 6px;"><i class="fa fa-times"></i></a></td>' +
                '</tr>'
    $(html).appendTo($("#tblModalSection"))
    // ID++;
}

function RearrangeSection() {
    $('#tblModalSection').find('tbody tr').each(function (index) {
        $(this).children(':eq(0)').text(index + 1);
    });
}

function getdatatab() {
    var tablename = 'dbo._Form_Tab_Master';
    var Corporate = $('#hdfCorporate').val();
    var unit = '';
    var userid = '';
    var WhereClause = '';
    var Branch = '';
    var PageNo = '1';
    var RecordsPerPage = '10';
    var Formcode = $('#txtSrNo1').val();
    var Formtabcode = '0';
    var type = 'Grid';
    var Segment = '';
    $('#Gridsectab').dataTable({
        "ServerSide": true,
        "destroy": true,
        "autoWidth": false,
        "ajax": {
            "url": "/FormSetup/BindGridViewFormsetup",
            "Type": "GET",
            "dataType": 'json',
            "contentType": "application/json; charset=utf-8",
            "dataSrc": function (json) {
                return json;
            },
            "data": {
                "tablename": tablename,
                "Corporate": Corporate,
                "unit": unit,
                "userid": userid,
                "WhereClause": WhereClause,
                "Branch": Branch,
                "PageNo": PageNo,
                "RecordsPerPage": RecordsPerPage,
                "Formcode": Formcode,
                "Formtabcode": Formtabcode,
                "type": type,
                "Segment": Segment
            }
        },
        "columns": [
            { "data": "RowNumber" },
            { "data": "FormCode", className: "hide_cell" },
            { "data": "TabSrNo", className: "hide_cell" },
            { "data": "Formname" },
            { "data": "TabHeader" },
            { "data": "TabClass", className: "hide_cell" },
            {
                data: null,
                className: "center",
                defaultContent: ' <a href="#" data-toggle="modal" data-target="#myModalIcon" rel="tooltip" title="Standand Button" class="SectiontabButtonclass"><i class="fa fa-cloud-upload"></i></a>&nbsp;&nbsp;<a href="#" data-toggle="modal" data-target="#myModalSection" class="TabSection" rel="tooltip" title="Add Section"><i class="fa fa-list-alt"></i></a> &nbsp;&nbsp;<a href="javascript:void(0);" class="EditTabData" rel="tooltip" title="Edit Data"><i class="fa fa-pencil-square-o"></i></a>'
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
        url: "/FormSetup/BindDropDown",
        type: "POST",
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
            unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
        },
        success: function (response) {
            if (response['GTCorporate'].length > 0) {
                $('.formcorporate').html('');
                for (var i = 0; i < response['GTCorporate'].length; i++) {
                    var opt = new Option(response['GTCorporate'][i]['Text'], response['GTCorporate'][i]['Value']);
                    $('.formcorporate').append(opt);
                }
                setSelect2Value($('#drpCorporate1'), '0');
                if ($('#hdfCorporate').val() != '0') {
                    setSelect2Value($('.formcorporate'), $('#hdfCorporate').val());
                    $("#drpCorporate1").trigger('change');
                }
            }
        }
    });
}

function DropDownFormcode() {
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
        url: "/FormSetup/BindDropDown",
        type: "POST",
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
            unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
        },
        success: function (response) {
            if (response['GTFrom'].length > 0) {
                $('#drpFormCode').html('');
                for (var i = 0; i < response['GTFrom'].length; i++) {
                    var opt = new Option(response['GTFrom'][i]['Text'], response['GTFrom'][i]['Value']);
                    $('#drpFormCode').append(opt);
                }
                setSelect2Value($('#drpFormCode'), '0');
            }
        }
    });
}

function getdata() {
    var tablename = 'dbo._Form_Master';
    var Corporate = $('#hdfCorporate').val();
    var unit = '';
    var userid = '';
    var WhereClause = '';
    var Branch = '';
    var PageNo = '1';
    var RecordsPerPage = '10';
    var Formcode = '0';
    var Formtabcode = '0';
    var type = 'Grid';
    $('#example1').dataTable({
        "ServerSide": true,
        "destroy": true,
        "autoWidth": false,
        "ajax": {
            "url": "/FormSetup/BindGridView",
            "Type": "GET",
            "dataType": 'json',
            "contentType": "application/json; charset=utf-8",
            "dataSrc": function (json) {
                return json;
            },
            "data": {
                "tablename": tablename,
                "Corporate": Corporate,
                "unit": unit,
                "userid": userid,
                "WhereClause": WhereClause,
                "Branch": Branch,
                "PageNo": PageNo,
                "RecordsPerPage": RecordsPerPage,
                "Formcode": Formcode,
                "Formtabcode": Formtabcode,
                "type": type
            }
        },
        "columns": [
            { "data": "RowNumber" },
            { "data": "srno", className: "hide_cell" },
            { "data": "Corporate" },
            { "data": "FeatureGroup" },
            { "data": "Module" },
            { "data": "FormName" },
            {
                data: null,
                className: "center",
                defaultContent: '<a href="javascript:void(0);" class="editor_edit" rel="tooltip" title="Edit Data" ><i class="fa fa-pencil-square-o"></i></a> ' +
                    //'&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Delte" data-toggle="modal" data-target="#DeleteModel" rel="tooltip" title="Delete Data"><i class="fa fa-trash-o"></i></a> '+
                    '&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Control"  rel="tooltip" title="Add Form Control"><i class="fa fa-anchor"></i></a>'
            }]
    });
}

function getUtility() {
    htmlutility = '';
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = $('#hdfCorporate').val();
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var Type = 'ChkBox';
    $.ajax({
        url: "/FormSetup/BindUtility",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
            unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
        },
        success: function (response) {
            if (response['GTUtility'].length > 0) {
                $("#UtilityFrom").html('');
                for (var i = 0; i < response['GTUtility'].length; i++) {
                    if (htmlutility == '') {
                        htmlutility = '<div class="col-md-4">    <div class="form-group">  ' +
                               '<div class="checker"> <span><input type="Checkbox"   id="' + response['GTUtility'][i]['Value'] + '"/></span></div>' +
                               ' <label data-toggle="tooltip" data-placement="right" >' + response['GTUtility'][i]['Text'] + ' <span></span></label>' +
                               '</div></div>'
                    }
                    else {
                        htmlutility += '<div class="col-md-4">    <div class="form-group"> ' +
                               '<div class="checker"> <span><input type="Checkbox"  id="' + response['GTUtility'][i]['Value'] + '" /></span></div>' +
                               ' <label data-toggle="tooltip" data-placement="right" >' + response['GTUtility'][i]['Text'] + '<span></span> </label>' +
                               '</div> </div>'
                    }
                }

                $(htmlutility).appendTo($("#UtilityFrom"))
                if (htmlutility == '') {
                    $('#btnutilitySave').hide();
                }
                else {
                    $('#btnutilitySave').show();
                }
            }

        }
    })
}

function Quitform() {
    $("#tab1").addClass("active");
    $("#tab3").removeClass("active");
    $("#tab4").removeClass("active");
    $("#tab5").removeClass("active");

    $("#Searchfrom").addClass("active");
    $("#Frmcreate").removeClass("active");
    $("#frmtab").removeClass("active");
    $("#frmsection").removeClass("active");
    $("#Searchfrom").trigger('click');
    $("#tab1").focus();
}

function clearForm() {
    $('.inputform').val('');
    $('.Dropdown').each(function () {
        setSelect2Value($(this), '0');
    });
    var thisForm = $('input').closest('form');
    thisForm.find('input').removeAttr('disabled');
    thisForm.find('input').val('');
    thisForm.find('select').removeAttr('disabled');
    standardButton = '';
}

function clearFormTAB() {
    $('.inputformTab').val('');
    $('.DropdownTab').each(function () {
        setSelect2Value($(this), '0');
    });
    standardButton = '';
}

function clearButtonclass() {
    $('.ButtonClassTab').val('');
    standardButton = '';
}

function clearCustomButtonTab() {
    $("#tblModalIconCustom tbody").html('');
    standardButton = '';
}

function clearSectionNameTab() {
    $("#tblModalSection tbody").html('');
    standardButton = '';
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
    var field2 = '';
    var field3 = '';
    var field4 = '';
    var field5 = '';
    var Control = controlId;
    var Language = '';
    var Type = 'ConditionalDropdown';
    var Srno = '';
    $.ajax({
        url: "/FormSetup/BindDropDownbase",
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
                var opt = new Option(data[i]['Text'], data[i]['Value']);
                $('#' + controlId + '').append(opt);
            }
            setSelect2Value($('#' + controlId + ''), '0');
        }
    });
}

function clearcheckbocstandardbutton() {
    $('#chkSaveVisibility').attr('checked', false);
    $('#chkSaveVisibility').parent().removeClass('checked');

    $('#chkNotification').attr('checked', false);
    $('#chkNotification').parent().removeClass('checked');

    $('#chkTask').attr('checked', false);
    $('#chkTask').parent().removeClass('checked');

    $('#chkUpdateVisibility').attr('checked', false);
    $('#chkUpdateVisibility').parent().removeClass('checked');

    $('#chkNotification1').attr('checked', false);
    $('#chkNotification1').parent().removeClass('checked');

    $('#chkTask1').attr('checked', false);
    $('#chkTask1').parent().removeClass('checked');

    $('#chkDeleteVisibility').attr('checked', false);
    $('#chkDeleteVisibility').parent().removeClass('checked');

    $('#chkNotification2').attr('checked', false);
    $('#chkNotification2').parent().removeClass('checked');

    $('#chkTask2').attr('checked', false);
    $('#chkTask2').parent().removeClass('checked');

    $('#chkClearVisibility').attr('checked', false);
    $('#chkClearVisibility').parent().removeClass('checked');

    $('#chkFormQuitVisibility').attr('checked', false);
    $('#chkFormQuitVisibility').parent().removeClass('checked');
}

function ClearDataoncorporate() {
    $('#drpScreen').each(function () {
        setSelect2Value($(this), '0');
    });
    $('.inputform').val('');
    standardButton = '';
}

function claerdataonScreen() {
    $('.inputform').val('');
}

function Modeltabactive() {
    $("#Standanbutton").addClass("active");
    $("#CustomButton").removeClass("active");
    $("#Utility").removeClass("active");
    $("#tabs1").addClass("active");
    $("#tabs2").removeClass("active");
    $("#tabs3Utility").removeClass("active");
}
