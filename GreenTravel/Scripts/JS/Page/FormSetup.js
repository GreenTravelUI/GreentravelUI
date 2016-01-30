$(document).ready(function () {
    getdata();
    getdatatab();
    //var Module = '';
    //var screen = '';
    //var FormCode = '';
    //var TabCode = '';
    //var Corporate = $('#drpCorporate1 option:selected').val();
    //var unit = '';
    //var Branch = '';
    //var userid = '';
    //var Ip = '';
    //var Type = 'DropDown';
    //$.ajax({
    //    url: "/FormSetup/BindDropDown",
    //    type: "POST",
    //    data: {
    //        "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate, "unit": unit, "Branch": Branch, "userid": userid, "Ip": Ip, "Type": Type
    //    },
    //    success: function (data) {
    //        $('#drpCorporate1').html('');
    //        for (var i = 0; i < data.length; i++) {
    //            var opt = new Option(data[i]['Text'], data[i]['Value']);
    //            $('#drpCorporate1').append(opt);
    //        }
    //    }
    //});

    $('#btnSavefs').click(function (e) {
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
        var SrNo = $('#txtSrNo1').val();
        var FormName = $('#txtFormName').val();


        var FormPrefixCode = $('#txtFormPreFix').val();
        var Corporate = $('#drpCorporate1 option:selected').text();
        var Module = $('#drpModule option:selected').text();
        var Screen = $('#drpScreen option:selected').text();
        var FeatureGroup = $('#drpFeatures option:selected').text();
        var Header = $('#txtHeader').val();
        var SubHeader = $('#txtSubHeader').val();
        var CreatedBy = '';
        var EntryDatetime = '';
        var EditedBy = '';
        var EditDatetime = '';
        var CorpcentreBy = '';
        var UnitCorpBy = '';
        var TerminalBy = '';
        var BranchId = '';
        $.ajax(
           {
               type: "POST",
               url: "/FormSetup/InsertData",
               data: {
                   "SrNo": SrNo, "FormName": FormName, "FormPrefixCode": FormPrefixCode, "Corporate": Corporate, "Module": Module, "Screen": Screen, "FeatureGroup": FeatureGroup, "Header": Header, "SubHeader": SubHeader, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute3": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6, "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10, "CreatedBy": CreatedBy, "EntryDatetime": EntryDatetime, "EditedBy": EditedBy, "EditDatetime": EditDatetime, "CorpcentreBy": CorpcentreBy, "UnitCorpBy": UnitCorpBy, "TerminalBy": TerminalBy, "BranchId": BranchId


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


    //var Module = '';
    //var screen = '';
    //var FormCode = '';
    //var TabCode = '';
    //var Corporate = $('#drpCorporate option:selected').val();
    //var unit = '';
    //var Branch = '';
    //var userid = '';
    //var Ip = '';
    //var Type = 'DropDown';
    //$.ajax({
    //    url: "/FormSetup/BindDropDown_Formtab",
    //    type: "GET",
    //    data: {
    //        "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate, "unit": unit, "Branch": Branch, "userid": userid, "Ip": Ip, "Type": Type
    //    },
    //    success: function (data) {
    //        $('#drpCorporate').html('');
    //        for (var i = 0; i < data.length; i++) {
    //            var opt = new Option(data[i]['Text'], data[i]['Value']);
    //            $('#drpCorporate').append(opt);
    //        }
    //    }
    //});


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
        var SummeryLabel = '';
        var SrNo = $('#txtSrNo').val();
        var Corporate = $('#drpCorporate option:selected').text();
        var FormCode = $('#drpFormCode option:selected').text();
        var TabNumber = $('#txtTabNumber').val();

        var TabHeader = $('#txtTabHeader').val();
        var TabClass = $('#txtTabClass').val();
        var TooltipHelpText = $('#txtTooltipHelpText').val();
        var MasterTable = $('#txtTabMainTable').val();
        var MasterTablePrefix = $('#txtTabMainTablePrefix').val();


        var CreatedBy = '';
        var EntryDatetime = '';
        var EditedBy = '';
        var EditDatetime = '';
        var CorpcentreBy = '';
        var UnitCorpBy = '';
        var TerminalBy = '';
        var BranchBy = '';
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
                   // $('#lblmsg').html("Record Save Sucessfully");
                   //if (response != null && response.success) {
                   //    alert("Record Save Sucessfully!");
                   //} 

               }
           });

    });

    //    $("#drpCorporate1").change(function () {
    //    var Module = '';
    //    var screen = '';
    //    var FormCode = '';
    //    var TabCode = '';
    //    var Corporate = $('#drpCorporate1 option:selected').val();
    //    var unit = '';
    //    var Branch = '';
    //    var userid = '';
    //    var Ip = '';
    //    var Type = 'ConditionalDropdown';
    //    var field1 = $('#drpFeatures option:selected').val();
    //    var field2 = $('#drpModule option:selected').val();
    //    var field3 = '';
    //    var field4 = '';
    //    var field5 = '';
    //    var Control = 'DrpFeaturegroup';
    //    var Srno = '';

    //    $.ajax({
    //        url: "/FormSetup/BindDropDownfeature",
    //        type: "POST",
    //        data: {
    //           "Module":Module,"screen":screen,"FormCode":FormCode,"TabCode":TabCode,"Corporate":Corporate,"unit":unit,"Branch":Branch,
    //            "userid":userid,"Ip":Ip,"Type":Type,"field1":field1,"field2":field2,"field3":field3,"field4":field4,"field5":field5,"Control":Control,"Srno":Srno


    //        },
    //        success: function (data) {
    //            $('#drpFeatures').html('');
    //            for (var i = 0; i < data.length; i++) {
    //                var opt = new Option(data[i]['Text'], data[i]['Value']);
    //                $('#drpFeatures').append(opt);
    //            }
    //        }
    //    });

    //});

    //$("#drpFeatures").change(function () {
    //    var Module = '';
    //    var screen = '';
    //    var FormCode = '';
    //    var TabCode = '';
    //    var Corporate = $('#drpCorporate1 option:selected').val();
    //    var unit = '';
    //    var Branch = '';
    //    var userid = '';
    //    var Ip = '';
    //    var Type = 'ConditionalDropdown';
    //    var field1 = $('#drpFeatures option:selected').val();
    //    var field2 = $('#drpModule option:selected').val();
    //    var field3 = '';
    //    var field4 = '';
    //    var field5 = '';
    //    var Control = 'DrpModule';
    //    var Srno = '';

    //    $.ajax({
    //        url: "/FormSetup/BindDropDownfeature",
    //        type: "POST",
    //        data: {
    //            "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate, "unit": unit, "Branch": Branch,
    //            "userid": userid, "Ip": Ip, "Type": Type, "field1": field1, "field2": field2, "field3": field3, "field4": field4, "field5": field5, "Control": Control, "Srno": Srno


    //        },
    //        success: function (data) {
    //            $('#drpModule').html('');
    //            for (var i = 0; i < data.length; i++) {
    //                var opt = new Option(data[i]['Text'], data[i]['Value']);
    //                $('#drpModule').append(opt);
    //            }
    //        }
    //    });

    //});
    //$("#drpModule").change(function () {
    //    var Module = '';
    //    var screen = '';
    //    var FormCode = '';
    //    var TabCode = '';
    //    var Corporate = $('#drpCorporate1 option:selected').val();
    //    var unit = '';
    //    var Branch = '';
    //    var userid = '';
    //    var Ip = '';
    //    var Type = 'ConditionalDropdown';
    //    var field1 = $('#drpFeatures option:selected').val();
    //    var field2 = $('#drpModule option:selected').val();
    //    var field3 = '';
    //    var field4 = '';
    //    var field5 = '';
    //    var Control = 'DrpScreen';
    //    var Srno = '';

    //    $.ajax({
    //        url: "/FormSetup/BindDropDownfeature",
    //        type: "POST",
    //        data: {
    //            "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate, "unit": unit, "Branch": Branch,
    //            "userid": userid, "Ip": Ip, "Type": Type, "field1": field1, "field2": field2, "field3": field3, "field4": field4, "field5": field5, "Control": Control, "Srno": Srno


    //        },
    //        success: function (data) {
    //            $('#drpScreen').html('');
    //            for (var i = 0; i < data.length; i++) {
    //                var opt = new Option(data[i]['Text'], data[i]['Value']);
    //                $('#drpScreen').append(opt);
    //            }
    //        }
    //    });

    //});

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
        $('#grdFormSet').dataTable({
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
                { "data": "Corporate" },
                { "data": "FeatureGroup" },
                { "data": "Module" },
                { "data": "FormName" },

                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_edit" ><i class="fa fa-pencil-square-o"></i></a> &nbsp;&nbsp;<a href="" class="editor_Delte"><i class="fa fa-trash-o"></i></a>'
                }


            ]
        });
    }

    function getdatatab() {
        var tablename = 'dbo._Form_Tab_Master';
        var Corporate = '0';
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
        $('#grdFormTab').dataTable({
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
            },
            "columns": [
                  { "data": "RowNumber" },
                { "data": "FormCode" },
                { "data": "TabHeader" },
                { "data": "TabClass" },
                { "data": "SummeryLabel" },

                {
                    data: null,
                    className: "center",
                    defaultContent: ' <a href="#" data-toggle="modal" data-target="#myModalIcon"><i class="fa fa-cloud-upload"></i></a>&nbsp;&nbsp;<a href="#" data-toggle="modal" data-target="#myModalSection"><i class="fa fa-list-alt"></i></a>'
                }


            ]
        });
    }
});
