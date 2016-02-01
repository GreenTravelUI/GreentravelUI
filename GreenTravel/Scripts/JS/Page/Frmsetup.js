$(document).ready(function () {
    var deletesrno;
    var ID = 2;
    getdata();
//    getdatatab();


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
                    $('#drpCorporate').html('');
                    for (var i = 0; i < response['GTCorporate'].length; i++) {
                        var opt = new Option(response['GTCorporate'][i]['Text'], response['GTCorporate'][i]['Value']);
                        $('#drpCorporate').append(opt);
                    }
                    $('#drpCorporate option:first').attr('selected', 'selected').change();
                }
                if (response['GTFrom'].length > 0) {
                    $('#drpFormCode').html('');
                    for (var i = 0; i < response['GTFrom'].length; i++) {
                        var opt = new Option(response['GTFrom'][i]['Text'], response['GTFrom'][i]['Value']);
                        $('#drpFormCode').append(opt);
                    }
                    $('#drpFormCode option:first').attr('selected', 'selected').change();
                }
            }
        });
    }

    $('#frmtab').click(function (e) {
        Dropdown_Bind_Tab1();
    });

    $('#frmsection').click(function (e) {
        getdatatab();
    });

    $('.btnSave').click(function (e) {
        e.preventDefault();
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
                   console.log(data);
                   console.log(data.srno);
                   console.log(data.success);
                   $('#txtSrNo1').val(data.srno)
                   alert("Record Save Sucessfully");
               }
           });
    });

    $('#btnSaveformtab').click(function (e) {
        e.preventDefault();

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
        if ($('#txtSrNo').val() != "") {
            var SrNo = 0;
        }
        else {
            var SrNo = $('#txtSrNo').val();
        }



        var Corporate = $('#drpCorporate option:selected').val();
        var FormCode = $('#drpFormCode option:selected').val();
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
                   alert("Record Save Sucessfully");
               }
           });

    });



    $('#btnstandardbutton').click(function (e) {
        e.preventDefault();
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


        var srno = '1';
        var CorporateId = '1';
        var TabCode = '1';
        var FormCode = '1';
        var SaveName = $('#txtSaveName').val();
        var SaveClass = $('#txtSaveClass').val();
        var SaveVisibility = $("#chkCopyrightNote").is(":checked");
        var SaveNotification = '';
        var SaveTask = '';
        var UpdateName = $('#txtUpdateName').val();
        var UpdateClass = $('#txtUpdateClass').val();
        var UpdateVisibility = '';
        var UpdateNotification = '';
        var UpdateTask = '';
        var DeleteName = $('#txtDeleteName').val();
        var DeleteClass = $('#txtDeleteClass').val();
        var DeleteVisibility = '';
        var DeleteNotification = '';
        var DeleteTask = '';
        var ClearName = $('#txtClearName').val();
        var ClearClass = $('#txtClearClass').val();
        var ClearVisibility = '';
        var ClearNotification = '';
        var ClearTask = '';
        var FormQuitClass = $('#txtFormQuitClass').val();
        var FormQuitVisibility = '';
        var FormQuitNotification = '';
        var FormQuitTask = '';

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
                   "FormQuitClass": FormQuitClass, "FormQuitVisibility": FormQuitVisibility, "FormQuitNotification": FormQuitNotification, "FormQuitTask": FormQuitTask,
                   "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                   "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10,
                   "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy,
                   "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchBy": BranchBy


               },
               dataType: 'json',
               success: function (response) {
                   alert("Record Save Sucessfully");
                   // $('#lblmsg').html("Record Save Sucessfully");
                   //if (response != null && response.success) {
                   //    alert("Record Save Sucessfully!");
                   //} 

               }
           });

    });

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
                    defaultContent: '<a href="javascript:void(0);" class="editor_edit" ><i class="fa fa-pencil-square-o"></i></a> &nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Delte" data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o"></i></a>'
                }]
        });
    }

    $("table").delegate(".editor_edit", "click", function () {
        console.log($(this).parent().parent().children(':eq(0)').text());
        console.log($(this).parent().parent().children(':eq(1)').text());
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
                 console.log(response[0])
                 if (response.length > 0) {
                     $('#txtSrNo1').val(response[0].SrNo);
                     $('#txtFormName').val(response[0].FormName);
                     $('#txtFormPreFix').val(response[0].FormPrefixCode);
                     $('#drpCorporate1').find('option[value="' + response[0].Corporate + '"]').attr('selected', true).change();
                     $('#drpModule').find('option[value="' + response[0].Module + '"]').attr('selected', true).change();
                     $('#drpScreen').find('option[value="' + response[0].Screen + '"]').attr('selected', true).change();
                     $('#drpFeatures').find('option[value="' + response[0].FeatureGroup + '"]').attr('selected', true).change();
                     $('#txtHeader').val(response[0].Header);
                     $('#txtSubHeader').val(response[0].SubHeader);
                 }
             }
         });
    });
    $("table").delegate(".editor_Delte", "click", function () {
        console.log(($(this).parent().parent().children(':eq(1)').text()));
        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(1)').text()
        $("#lbldelete").text("Are You Sure Do You Want to Delete This Record ?");
    });

    $("table").delegate(".SectiontabButtonclass", "click", function () {
        alert('button class');
        console.log(($(this).parent().parent().children(':eq(1)').text()));
        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(1)').text()
     
    });
    $("table").delegate(".TabSection", "click", function () {
        alert('Section');
        console.log(($(this).parent().parent().children(':eq(1)').text()));
        deletesrno = '';
        deletesrno = $(this).parent().parent().children(':eq(1)').text()

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

    function getdatatab() {
        var tablename = 'dbo._Form_Tab_Master';
        var Corporate = '1';
        var unit = '';
        var userid = '';
        var WhereClause = '';
        var Branch = '';
        var PageNo = '1';
        var RecordsPerPage = '10';
        var Formcode = '0';
        var Formtabcode = '0';
        var type = 'Grid';
        var Segment = '';
        $('#Gridsectab').dataTable({
            "ServerSide": true,
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
                { "data": "SummeryLabel" },
                {
                    data: null,
                    className: "center",
                    defaultContent: ' <a href="#" data-toggle="modal" data-target="#myModalIcon" class="SectiontabButtonclass"><i class="fa fa-cloud-upload"></i></a>&nbsp;&nbsp;<a href="#" data-toggle="modal" data-target="#myModalSection" class="TabSection"><i class="fa fa-list-alt"></i></a>'
                }
            ]
        });
    }

    $('#btnClearFS').click(function (e) {
        e.preventDefault();
        $('#btnUpdateFS').hide();
        $('#btnSavefs').show();
        $('input[type="text"]').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    });

    $('#btnaddSection').click(function (e) {
        addRow();
    });

    function addRow() {
        var html = '<tr>' +
                    '<td>'+ ID +'</td>'+
                    '<td> <input type="text" id="txtsection' + ID + '"></td>' +
                    '</tr>'
        $(html).appendTo($("#exampleeditable"))
        ID++;
      //  alert(ID);
    };
});