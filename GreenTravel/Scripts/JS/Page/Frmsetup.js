$(document).ready(function () {
    var deletesrno;
    var Frmcode;
    var FrmtabCode
    var ID = 2;
    var customID = 2;
    Dropdown_Bind_Tab1();
    getdata();

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
                    // setSelect2Value($('#drpCorporatetab'), '0');

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
        var Corporate = '2';
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
            destroy: true,
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
                { "data": "srno" },
                { "data": "Corporate" },
                { "data": "FeatureGroup" },
                { "data": "Module" },
                { "data": "FormName" },
                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_edit" ><i class="fa fa-pencil-square-o"></i></a> &nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Delte" data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o"></i></a> &nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Control"><i class="fa fa-anchor"></i></a>'
                }]
        });
    }

    $('#frmsection').click(function (e) {
        getdatatab();
    });

    $('#serachfrom').click(function (e) {
        getdata();
    });

    //Tab2 Click  Event  
    $('#frmtab').click(function (e) {
        if ($('#txtSrNo1').val() == '') {
            swal('Please Edit Data');
            Quitform();
        }
        else {
            $('.tab3Formname').text($('#txtFormName').val())
        }

    });

    $("#drpCorporate1").change(function () {
        FillDropdown($('#drpCorporate1 option:selected').val(), '', '', 'drpFeatures');
    });

    $("#drpFeatures").change(function () {
        FillDropdown($('#drpCorporate1 option:selected').val(), $('#drpFeatures option:selected').val(), 0, 'drpModule');
    });

    $("#drpModule").change(function () {
        FillDropdown($('#drpCorporate1 option:selected').val(), $('#drpFeatures option:selected').val(), $('#drpModule option:selected').val(), 'drpScreen');
    });

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
    //save Form  Code --tab1
    $('.btnSave').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal('Invalid data found!');
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
        var Module = $('#drpModule option:selected').val();
        var Screen = $('#drpScreen option:selected').val();
        var FeatureGroup = $('#drpFeatures option:selected').val();
        var Header = $('#txtHeader').val();
        var SubHeader = $('#txtSubHeader').val();
        var CreatedBy = 0;
        var EntryDatetime = '';
        var EditedBy = 0;
        var EditDatetime = '';
        var CorpcentreBy = 0;
        var UnitCorpBy = 0;
        var TerminalBy = 0;
        var BranchId = 0;
        $.ajax(
           {
               type: "POST",
               url: "/FormSetup/InsertData",
               data: {
                   "SrNo": SrNo, "FormName": FormName, "FormPrefixCode": FormPrefixCode, "Corporate": Corporate, "Module": Module, "Screen": Screen, "FeatureGroup": FeatureGroup, "Header": Header, "SubHeader": SubHeader, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute3": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6, "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10, "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy, "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchId": BranchId
               },
               dataType: 'json',
               success: function (data) {
                   $('#txtSrNo1').val(data.srno)
                   swal('Good job!', 'Record Save Sucessfully', 'success');
               }
           });
    });
    //save Tab data --tab 2
    $('.btnSaveformtab').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal('Invalid data found!');
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
               url: "/FormSetup/InsertData_Formtab",
               data: {
                   "SrNo": SrNo, "Corporate": Corporate, "FormCode": FormCode, "TabNumber": TabNumber, "TabHeader": TabHeader,
                   "TabClass": TabClass, "TooltipHelpText": TooltipHelpText, "MasterTable": MasterTable, "MasterTablePrefix": MasterTablePrefix,
                   "TrxTable1": TrxTable1, "TrxTable2": TrxTable2, "TrxTable3": TrxTable3, "TrxTable4": TrxTable4, "TrxTable5": TrxTable5,
                   "TrxTable6": TrxTable6, "TrxTable7": TrxTable7, "TrxTable8": TrxTable8, "TrxTable9": TrxTable9, "TrxTable10": TrxTable10,
                   "SummeryLabel": SummeryLabel, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4,
                   "Attribute5": Attribute5, "Attribute6": Attribute6, "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9,
                   "Attribute10": Attribute10, "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime,
                   "CorpcentreBy": CorpcentreBy, "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchBy": BranchBy

               },
               dataType: 'json',
               success: function (response) {
                   swal('Good job!', 'Record Save Sucessfully', 'success');
               }
           });

    });
    //model  Button  
    $('.btnSaveStandard').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent().parent().parent())) {  // Pass form control in parameter
            swal('Invalid data found!');
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
        var CreatedBy = '0';
        var EntryDatetime = '';
        var EditedBy = '0';
        var EditDatetime = '';
        var CorpcentreBy = '0';
        var UnitCorpBy = '0';
        var TerminalBy = '0';
        var BranchBy = '0';
        var srno = '';
        var CorporateId = $('#drpCorporate1 option:selected').val();
        var FormCode = Frmcode;
        var TabCode = FrmtabCode;
        var SaveName = $('#txtSaveName').val();
        var SaveClass = $('#txtSaveClass').val();
        var SaveVisibility = $("#chkCopyrightNote").is(":checked");
        var SaveNotification = $("#chkNotification").is(":checked");
        var SaveTask = $("#chkTask").is(":checked");
        var UpdateName = $('#txtUpdateName').val();
        var UpdateClass = $('#txtUpdateClass').val();
        var UpdateVisibility = $("#chkUpdateVisibility").is(":checked");
        var UpdateNotification = $("#chkUpdateVisibility").is(":checked");
        var UpdateTask = $("#chkNotification1").is(":checked");
        var DeleteName = $('#txtDeleteName').val();
        var DeleteClass = $('#txtDeleteClass').val();
        var DeleteVisibility = $("#chkDeleteVisibility").is(":checked");
        var DeleteNotification = $("#chkNotification2").is(":checked");
        var DeleteTask = $("#chkTask2").is(":checked");
        var ClearName = $('#txtClearName').val();
        var ClearClass = $('#txtClearClass').val();
        var ClearVisibility = $("#chkClearVisibility").is(":checked");;
        var ClearNotification = false;
        var ClearTask = false;
        var FormQuitName = $('#txtFormQuitName').val();
        var FormQuitClass = $('#txtFormQuitClass').val();
        var FormQuitVisibility = $('#chkFormQuitVisibility').is(":checked");
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
                   "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10,
                   "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy,
                   "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchBy": BranchBy
               },
               dataType: 'json',
               success: function (response) {
                   $("#myModalIcon").modal('hide');
                   swal('Good job!', 'Record Save Sucessfully', 'success');
               }
           });

    });
    //Redirect Form Control
    $("table").delegate(".editor_Control", "click", function () {
        var FormCode = $(this).parent().parent().children(':eq(1)').text();
        window.location.href = '/FormControlSetup/Index/?id=' + FormCode;


    });
    //Edit Form  
    $("table").delegate(".editor_edit", "click", function () {
        $("#serachfrom").removeClass("active");
        $("#Frmcreate").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab3").addClass("active");
        $('#btnUpdateFS').show();
        $('#btnSavefs').hide();
        var tablename = 'dbo._Form_Master';
        var Corporate = '1';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
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
                     $('#txtFormPreFix').val(response[0].FormPrefixCode);
                     $('#drpCorporate1').find('option[value="' + response[0].Corporate + '"]').attr('selected', true).change();
                     $('#drpFeatures').find('option[value="' + response[0].FeatureGroup + '"]').attr('selected', true).change();
                     $('#drpModule').find('option[value="' + response[0].Module + '"]').attr('selected', true).change();
                     $('#drpScreen').find('option[value="' + response[0].Screen + '"]').attr('selected', true).change();
                     $('#txtHeader').val(response[0].Header);
                     $('#txtSubHeader').val(response[0].SubHeader);
                 }
             }
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
        Frmcode = 0;
        FrmtabCode = '';
        FrmtabCode = $(this).parent().parent().children(':eq(2)').text()
        var tablename = 'dbo._Form_Master';
        var Corporate = $('#drpCorporate1 option:selected').val();
        var unit = '0';
        var Formcode = Frmcode;
        var Formtabcode = FrmtabCode;
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        var html = '';
        $.ajax(
         {
             type: "POST",
             url: "/FormSetup/Edit_Data_icon",
             data: {
                 tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
             },
             dataType: 'json',
             success: function (response) {
                 clearButtonclass();
                 $("#tblModalIconCustom tbody").html('');
                 if (response['AFrmStandardbtn'].length > 0) {
                     $('#btnstandardbutton').hide();
                     //   $('#txtMasterCode').val(response['AFrmStandardbtn'][0]['xmaster']);
                     $('#txtSaveName').val(response['AFrmStandardbtn'][0]['SaveName']);
                     $('#txtSaveClass').val(response['AFrmStandardbtn'][0]['SaveClass']);
                     //  $("#chkCopyrightNote").is(":checked");
                     // $("#chkNotification").is(":checked");
                     // $("#chkTask").is(":checked");
                     $('#txtUpdateName').val(response['AFrmStandardbtn'][0]['UpdateName']);
                     $('#txtUpdateClass').val(response['AFrmStandardbtn'][0]['UpdateClass']);
                     //$("#chkUpdateVisibility").is(":checked");
                     // $("#chkUpdateVisibility").is(":checked");
                     // $("#chkNotification1").is(":checked");
                     $('#txtDeleteName').val(response['AFrmStandardbtn'][0]['DeleteName']);
                     $('#txtDeleteClass').val(response['AFrmStandardbtn'][0]['DeleteClass']);
                     //$("#chkDeleteVisibility").is(":checked");
                     //$("#chkNotification2").is(":checked");
                     //$("#chkTask2").is(":checked");
                     $('#txtClearName').val(response['AFrmStandardbtn'][0]['ClearName']);
                     $('#txtClearClass').val(response['AFrmStandardbtn'][0]['ClearClass']);
                     //$("#chkClearVisibility").is(":checked");;
                     //var ClearNotification = false;
                     //var ClearTask = false;
                     $('#txtFormQuitName').val(response['AFrmStandardbtn'][0]['FormQuitName']);
                     $('#txtFormQuitClass').val(response['AFrmStandardbtn'][0]['FormQuitClass']);
                     // $('#chkFormQuitVisibility').is(":checked");
                 }


                 if (response['ACustomMaster'].length > 0) {
                     html = '';
                     customID = response['ACustomMaster'].length + 1;
                     $("#btncustomsave").hide();
                     for (var i = 0; i < response['ACustomMaster'].length; i++) {

                         if (html == '') {
                             html = '<tr>' +
                                    '<td>' + response['ACustomMaster'][i]['Rownumber'] + '</td>' +
                                    '<td> <input type="text" class="form-control" value="' + response['ACustomMaster'][i]['CustomName'] + '" /></td>' +
                                    '<td> <input type="text" class="form-control"  value="' + response['ACustomMaster'][i]['CustomClass'] + '" /></td>' +
                                    '<td> <div class="checker"> <span><input type="Checkbox" class="form-control" /></span></div></td>' +
                                    '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                                    '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                                    '<td> <input type="text" placeholder="Custom Class" class="form-control" value="' + response['ACustomMaster'][i]['srno'] + '" /></td>' +
                                    '</tr>'
                         }
                         else {
                             html += '<tr>' +
                                    '<td>' + response['ACustomMaster'][i]['Rownumber'] + '</td>' +
                                    '<td> <input type="text" class="form-control" value="' + response['ACustomMaster'][i]['CustomName'] + '" /></td>' +
                                    '<td> <input type="text" class="form-control"  value="' + response['ACustomMaster'][i]['CustomClass'] + '" /></td>' +
                                    '<td> <div class="checker"> <span><input type="Checkbox" class="form-control" /></span></div></td>' +
                                    '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                                    '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                                    '<td> <input type="text" placeholder="Custom Class" class="form-control" value="' + response['ACustomMaster'][i]['srno'] + '" /></td>' +
                                    '</tr>'
                         }
                     }
                     $(html).appendTo($("#tblModalIconCustom"))
                 }
                 else {
                     customID = response['ACustomMaster'].length + 1;
                     var html = '<tr>' +
                                '<td>' + customID + '</td>' +
                                '<td><input type="text" placeholder="Custom Name"  class="form-control" /></td>' +
                                '<td> <input type="text" placeholder="Custom Class"  class="form-control" /></td>' +
                                '<td> <div class="checker"> <span><input type="Checkbox" class="form-control" /></span></div></td>' +
                                '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                                '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                                '<td> <input type="text" placeholder="Custom Class" class="form-control" /></td>' +
                                '</tr>'
                     $(html).appendTo($("#tblModalIconCustom"))
                 }
             }
         });
        getUtility();
    });
    //Section In Editmode  
    $("table").delegate(".TabSection", "click", function () {
        Frmcode = 0;
        FrmtabCode = '';
        FrmtabCode = $(this).parent().parent().children(':eq(2)').text()
        var tablename = 'dbo._Form_Master';
        var Corporate = '2';
        var unit = '0';
        var Formcode = Frmcode;
        var Formtabcode = FrmtabCode;
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        var html = '';
        $.ajax(
         {
             type: "POST",
             url: "/FormSetup/Edit_Data_Section",
             data: {
                 tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
             },
             dataType: 'json',
             success: function (response) {
                 html = '';
                 clearSectionNameTab();
                 if (response['ASectionMaster'].length > 0) {
                     $("#tblModalSection tbody").html('');
                     ID = response['ASectionMaster'].length + 1;
                     $("#btnModalSectionSave").hide();
                     for (var i = 0; i < response['ASectionMaster'].length; i++) {
                         if (typeof html === typeof undefined && html === false || html == '') {

                             html = '<tr>' +
                                    '<td>' + response['ASectionMaster'][i]['rownumber'] + '</td>' +
                                    '<td> <input type="text"  value="' + response['ASectionMaster'][i]['SectionName'] + '" /></td>' +
                                    '<td> <input type="text"  value="' + response['ASectionMaster'][i]['srno'] + '" /></td>' +
                                    '</tr>';
                         }
                         else {
                             html += '<tr>' +
                                 '<td>' + response['ASectionMaster'][i]['rownumber'] + '</td>' +
                                 '<td> <input type="text"  value="' + response['ASectionMaster'][i]['SectionName'] + '" /></td>' +
                                 '<td> <input type="text"  value="' + response['ASectionMaster'][i]['srno'] + '" /></td>' +
                                 '</tr>';
                         }
                     }
                     $(html).appendTo($("#tblModalSection"))
                 }
                 else {
                     ID = response['ASectionMaster'].length + 1;
                     var html = '<tr>' +
                                '<td>' + ID + '</td>' +
                                '<td> <input type="text" id="txtsection' + ID + '"/></td>' +
                                '<td> <input type="text" /></td>' +
                                '</tr>'
                     $(html).appendTo($("#tblModalSection"))
                     ID++;
                 }
             }
         });
    });
    //Edit tab Data 
    $("table").delegate(".EditTabData", "click", function () {
        $("#frmsection").removeClass("active");
        $("#frmtab").addClass("active");
        $("#tab5").removeClass("active");
        $("#tab4").addClass("active");
        $('#btnUpdatetab').show();
        $('#btnSaveformtab').hide();
        var tablename = 'dbo._Form_Tab_Master';
        var Corporate = '0';
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
                     //$('#drpCorporatetab').find('option[value="' + response[0].Corporate + '"]').attr('selected', true).change();
                     //$('#drpFormCode').find('option[value="' + response[0].FormCode + '"]').attr('selected', true).change();
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
            url: "/FormSetup/Delete_Data",
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
    //Tab 3 Grid
    function getdatatab() {
        if ($('#txtSrNo1').val() != '') {
            var tablename = 'dbo._Form_Tab_Master';
            var Corporate = '2';
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
                destroy: true,
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
                }
                ,
                "columns": [
                    { "data": "RowNumber" },
                    { "data": "FormCode" },
                    { "data": "TabSrNo" },
                    { "data": "Formname" },
                    { "data": "TabHeader" },
                    { "data": "TabClass" },
                    {
                        data: null,
                        className: "center",
                        defaultContent: ' <a href="#" data-toggle="modal" data-target="#myModalIcon" class="SectiontabButtonclass"><i class="fa fa-cloud-upload"></i></a>&nbsp;&nbsp;<a href="#" data-toggle="modal" data-target="#myModalSection" class="TabSection"><i class="fa fa-list-alt"></i></a> &nbsp;&nbsp;<a href="javascript:void(0);" class="EditTabData"><i class="fa fa-pencil-square-o"></i></a>'
                    }
                ]
            });
        }
        else {
            Quitform();
            swal('Please Edit Data');

        }
    }
    $('#btnaddSection').click(function (e) {
        addRow();
    });
    function addRow() {
        console.log(ID);
        var html = '<tr>' +
                    '<td>' + ID + '</td>' +
                    '<td> <input type="text" id="txtsection' + ID + '"/></td>' +
                    '<td> <input type="text" /></td>' +
                    '</tr>'
        $(html).appendTo($("#tblModalSection"))
        ID++;
    };
    //save Section 
    $('.btnsavesection').on('click', function () {
        var flagsection = 0;
        var CorporateId = $('#drpCorporate1 option:selected').val();
        var TabCode = FrmtabCode;
        var FormCode = Frmcode;
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
            $.ajax(
               {
                   type: "POST",
                   url: "/FormSetup/InsertData_SectionMaster",
                   async: false,
                   data: {
                       "srno": srno, "CorporateId": CorporateId, "TabCode": TabCode, "FormCode": FormCode, "SectionName": SectionName,
                       "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                       "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10,
                       "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy,
                       "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchBy": BranchBy
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
            swal('Good job!', 'Record Save Sucessfully', 'success');
        }
    });
    $('#btnCustomsection').on('click', function () {
        addRowCustom();
    });
    function addRowCustom() {
        var html = '<tr>' +
                    '<td>' + customID + '</td>' +
                    '<td><input type="text" placeholder="Custom Name"  class="form-control" /></td>' +
                    '<td> <input type="text" placeholder="Custom Class"  class="form-control" /></td>' +
                    '<td> <div class="checker"> <span><input type="Checkbox" class="form-control" /></span></div></td>' +
                    '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                    '<td><div class="checker"> <span> <input type="Checkbox" class="form-control" /></span></div></td>' +
                    '<td> <input type="text" placeholder="Custom Class" class="form-control" /></td>' +
                    '</tr>'
        $(html).appendTo($("#tblModalIconCustom"))
        customID++;
    };
    //save Custom  Button
    $('.btnsaveCustomButton').on('click', function (e) {
        e.preventDefault();
        var flag = 0;
        var srno
        var Corporate = $('#drpCorporate1 option:selected').val();
        var TabCode = FrmtabCode;
        var FormCode = Frmcode;
        var CreatedBy = 0;
        var EntryDatetime = '';
        var EditedBy = 0;
        var EditDatetime = '';
        var CorpcentreBy = 0;
        var UnitCorpBy = 0;
        var TerminalBy = 0;
        var BranchBy = 0;
        $("#tblModalIconCustom tbody tr").each(function () {
            var CustomName = '';
            var CustomClass = '';
            var CustomVisibility = '';
            var CustomNotification = '';
            var CustomTask = '';
            CustomName = $(this).children(':eq(1)').find('input').val();
            CustomClass = $(this).children(':eq(2)').find('input').val();
            CustomVisibility = false;
            CustomNotification = false;
            CustomTask = false;
            var srno;
            if ($(this).children(':eq(6)').find('input').val().trim() != '') {
                srno = $(this).children(':eq(6)').find('input').val();
            }
            else {
                srno = 0;
            }
            $.ajax(
               {
                   type: "POST",
                   url: "/FormSetup/InsertData_CustomMaster",
                   async: false,
                   data: {
                       "srno": srno, "Corporate": Corporate, "TabCode": TabCode, "FormCode": FormCode, "CustomName": CustomName,
                       "CustomClass": CustomClass, "CustomVisibility": CustomVisibility, "CustomNotification": CustomNotification, "CustomTask": CustomTask,
                       "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy,
                       "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchBy": BranchBy
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
            swal('Good job!', 'Record Save Sucessfully', 'success');
        }
    });
    function getUtility() {
        var htmlutility = '';
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = $('#drpCorporate1 option:selected').val();
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var Type = 'ChkBox';
        $.ajax({
            url: "/FormSetup/BindUtility",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {
                if (response['GTUtility'].length > 0) {
                    $("#UtilityFrom").html('');
                    for (var i = 0; i < response['GTUtility'].length; i++) {
                        if (htmlutility == '') {
                            htmlutility = '<div class="col-md-4">    <div class="form-group"> <div class="col-md-12"> ' +
                                   '<input type="Checkbox"  id="' + response['GTUtility'][i]['Value'] + '"/>' +
                                   ' <label data-toggle="tooltip" data-placement="right" >' + response['GTUtility'][i]['Text'] + ' <span></span></label>' +
                                   '</div> </div></div>'
                        }
                        else {
                            htmlutility += '<div class="col-md-4">    <div class="form-group"> <div class="col-md-12">' +
                                   '<input type="Checkbox"  id="' + response['GTUtility'][i]['Value'] + '" />' +
                                   ' <label data-toggle="tooltip" data-placement="right" >' + response['GTUtility'][i]['Text'] + '<span></span> </label>' +
                                   '</div> </div> </div>'
                        }
                    }
                    $(htmlutility).appendTo($("#UtilityFrom"))
                }

            }
        });
    }
    //Utility Save Button  
    $('.Utilitysavedata').on('click', function (e) {
        e.preventDefault();
        var Corporate = $('#drpCorporate1 option:selected').val();
        var TabCode = FrmtabCode;
        var FormCode = Frmcode;
        var CreatedBy = 0;
        var EntryDatetime = '';
        var EditedBy = 0;
        var EditDatetime = '';
        var CorpcentreBy = 0;
        var UnitCorpBy = 0;
        var TerminalBy = 0;
        var BranchBy = 0;
        var Utilities = '';
        var srno;
        if ($(this).children(':eq(6)').find('input').val().trim() != '') {
            srno = $(this).children(':eq(6)').find('input').val();
        }
        else {
            srno = 0;
        }
        $.ajax(
           {
               type: "POST",
               url: "/FormSetup/InsertData_Utility",
               async: false,
               data: {
                   "srno": srno, "Corporate": Corporate, "TabCode": TabCode, "FormCode": FormCode,
                   "Utilities": Utilities, "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy,
                   "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchBy": BranchBy
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {
                       swal('Good job!', 'Record Save Sucessfully', 'success')
                   }
               }
           });

        $("#myModalIcon").modal('hide');

    });
    /*Quit Button*/
    $('.QuitForm').on('click', function () {
        clearForm();
        clearFormTAB();
        Quitform();
    });
    $('#btnquittab').on('click', function () {
        clearFormTAB();
        $("#tab3").removeClass("active");
        $("#tab4").removeClass("active");
        $("#tab5").addClass("active");
        $("#tab1").removeClass("active");
        $("#Frmcreate").removeClass("active");
        $("#frmtab").removeClass("active");
        $("#frmsection").addClass("active");
        $("#serachfrom").removeClass("active");

    });

    /*Clear */
    $('#btnClearFS').click(function (e) {
        e.preventDefault();
        $('#btnUpdateFS').hide();
        $('#btnSavefs').show();
        clearForm();
    });
    $('#btncleartab').click(function (e) {
        e.preventDefault();
        $('#btnUpdatetab').hide();
        $('#btnSaveformtab').show();
        clearFormTAB();
    });
    function Quitform() {
        $("#tab3").removeClass("active");
        $("#tab4").removeClass("active");
        $("#tab5").removeClass("active");
        $("#Frmcreate").removeClass("active");
        $("#frmtab").removeClass("active");
        $("#frmsection").removeClass("active");

        $("#serachfrom").addClass("active");
        $("#tab1").addClass("active");
        $("#serachfrom").trigger('click');
    }
    function clearForm() {
        $('.inputform').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    }
    function clearFormTAB() {
        $('.inputformTab').val('');
        $('.DropdownTab').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    }
    function clearButtonclass() {
        $('.ButtonClassTab').val('');
    }
    function clearCustomButtonTab() {
        $("#tblModalIconCustom tbody").html('');
    }
    function clearSectionNameTab() {
        $("#tblModalSection tbody").html('');
    }
});