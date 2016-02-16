$(window).unload(function () {
    $('select option').remove();
});

$(document).ready(function () {
    var Message;
    Dropdown_Bind_Tab1();
    Dropdown_Bind_Tab2();
    getdata();
    //Module
    FillDropdown($('#drpCorporate option:selected').val(), '', '', '', '', 'drpFeatures');
    //screen
    $("#drpFeatures").change(function () {
        FillDropdown($('#drpCorporate option:selected').val(), $('#drpFeatures option:selected').val(), '', '', '', 'drpModuleCreateView');
    });
    //Form 
    $("#drpModuleCreateView").change(function () {
        clearValidations($(this).closest('form'));
        FillDropdown($('#drpCorporate option:selected').val(), '', $('#drpModuleCreateView option:selected').val(), '', '', 'drpScreenCreateView');
    });
    //tab
    $("#drpScreenCreateView").change(function () {
        clearValidations($(this).closest('form'));
        FillDropdown($('#drpCorporate option:selected').val(), '', '', $('#drpScreenCreateView option:selected').val(), '', 'drpTabCreateView');
    });

    //Save Click Event Create View 
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
        var srno;
        if ($('#txtsrno').val() == '') {
            var srno = 0;
        }
        else {
            var srno = $('#txtsrno').val();
        }
        var Corporate = $('#drpCorporate option:selected').val();
        var Module = $('#drpFeatures option:selected').val();
        var Screen = $('#drpModuleCreateView option:selected').val();
        var FormCode = $('#drpScreenCreateView option:selected').val();
        var TabCode = $('#drpTabCreateView option:selected').val();
        var ViewName = $('#txtviewname').val();
        var RecordCountQuery = $('#txtRecordCountQuery').val();
        var ColumnQuery = $('#txtcolumnquery').val();
        var WhereQuery = $('#txtwherequery').val();
        var GroupQuery = $('#txtgropQuery').val();
        var IsMasterView = $('#ismasterView').is(":checked");
        var MasterTable = $('#drpMasterCreateView option:selected').val();
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
               url: "/ViewsSetup/InsertData",
               data: {
                   "srno": srno, "Corporate": Corporate, "Module": Module, "Screen": Screen, "FormCode": FormCode, "TabCode": TabCode, "ViewName": ViewName,
                   "RecordCountQuery": RecordCountQuery, "ColumnQuery": ColumnQuery, "WhereQuery": WhereQuery, "GroupQuery": GroupQuery, "IsMasterView": IsMasterView,
                   "MasterTable": MasterTable, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute3": Attribute4, "Attribute5": Attribute5,
                   "Attribute6": Attribute6, "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
               },
               dataType: 'json',
               success: function (data) {
                   $('#txtsrno').val(data.srno)
                   Message = data.responseText;
                   $('#btnUpdateCreateView').show();
                   $('#btnSaveCreateView').hide();
                   swal('Good job!', Message, 'success');
               }
           });
    });

    //Clear Create View
    $('#btnclearCreateview').click(function (e) {
        clearValidations($(this).closest('form'));
        cleartab1();
        $('#btnUpdateCreateView').hide();
        $('#btnSaveCreateView').show();
    });
    //Quit  Create View
    $('#btnQuitCreateview').click(function (e) {
        clearValidations($(this).closest('form'));
        cleartab1();
        $("#SearchView").addClass("active");
        $("#CreateView").removeClass("active");
        $("#tab1").addClass("active");
        $("#tab3").removeClass("active");
        $('#btnUpdateCreateView').hide();
        $('#btnSaveCreateView').show();
        getdata();
    });
    //Edit Form  
    $("table").delegate(".editor_edit", "click", function () {
        cleartab1();
        var tablename = 'dbo._ViewSetup';
        var Corporate = '1';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/ViewsSetup/Edit_Data",
             data: {
                 "tablename": tablename, "Corporate": Corporate, "unit": unit, "Formcode": Formcode, "Formtabcode": Formtabcode, "Xmaster": Xmaster, "Type": Type
             },
             dataType: 'json',
             success: function (response) {
                 if (response.length > 0) {
                     $('#txtsrno').val(response[0].srno);
                     setSelect2Value($('#drpCorporate'), response[0].Corporate);
                     setSelect2Value($('#drpFeatures'), response[0].Module);
                     FillDropdown($('#drpCorporate option:selected').val(), $('#drpFeatures option:selected').val(), '', '', '', 'drpModuleCreateView');
                     setSelect2Value($('#drpModuleCreateView'), response[0].Screen);
                     FillDropdown($('#drpCorporate option:selected').val(), '', $('#drpModuleCreateView option:selected').val(), '', '', 'drpScreenCreateView');
                     setSelect2Value($('#drpScreenCreateView'), response[0].FormCode);
                     FillDropdown($('#drpCorporate option:selected').val(), '', '', $('#drpScreenCreateView option:selected').val(), '', 'drpTabCreateView');
                     setSelect2Value($('#drpTabCreateView'), response[0].TabCode);
                     $('#txtviewname').val(response[0].ViewName);
                     $('#txtRecordCountQuery').val(response[0].RecordCountQuery);
                     $('#txtcolumnquery').val(response[0].ColumnQuery);
                     $('#txtwherequery').val(response[0].WhereQuery);
                     $('#txtgropQuery').val(response[0].GroupQuery);
                     if (response[0].IsMasterView.toLowerCase() == 'true') {
                         $('#ismasterView').attr('checked', true);
                         $('#ismasterView').parent().addClass('checked');
                         $('#divMaster').show();
                     } else {
                         $('#ismasterView').attr('checked', false);
                         $('#ismasterView').parent().removeClass('checked');
                         $('#divMaster').hide();
                     }
                     setSelect2Value($('#drpMasterCreateView'), response[0].MasterTable);
                 }
             }
         }).done(function () {
             $("#SearchView").removeClass("active");
             $("#CreateView").addClass("active");
             $("#tab1").removeClass("active");
             $("#tab3").addClass("active");
             $('#btnUpdateCreateView').show();
             $('#btnSaveCreateView').hide();
         });
        //  getdataColumn();
    });

    $('#ismasterView').click(function (e) {
        if ($(this).prop("checked") == true) {
            $('#divMaster').show();
        }
        else if ($(this).prop("checked") == false) {
            $('#divMaster').hide();
        }
    });

    //**************************************************************Column  Tab 2***************************************************************************************

    //Tab Click Event
    $('#Column').click(function (e) {
    });
    //Tab ColumnSearch Click Event
    $('#ColumnGrid').click(function (e) {
        getdataColumn();
    });
    //Clear Column Tab
    $('#btnClearColumn').click(function (e) {
        Claertab2();
        clearValidations($(this).closest('form'));
        $('#btnUpdateColumn').hide();
        $('#btnsaveColumn').show();
    });
    //Quit  Column Tab
    $('#btnQuitFormColumn').click(function (e) {
        Claertab2();
        clearValidations($(this).closest('form'));
        $("#ColumnGrid").addClass("active");
        $("#Column").removeClass("active");
        $("#tab5").addClass("active");
        $("#tab4").removeClass("active");
        $('#btnUpdateColumn').hide();
        $('#btnsaveColumn').show();
        getdataColumn();
        //getdata();
    });

    //Save Click Event Column
    $('.btnSaveColumns').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
            swal(
               'Invalid data found!',
               '',
               'error'
             )
            return false;
        }
        var srno;
        if ($('#txtsrnoColumn').val() == '') {
            var srno = 0;
        }
        else {
            var srno = $('#txtsrnoColumn').val();
        }
        var ViewCode = $('#txtsrno').val();
        var Corporate = $('#drpCorporate option:selected').val();
        var ColumnCaption = $('#txtColumncaption').val();
        var ColumnName = $('#txtColumn').val();
        var FixedOrder = $('#FixedOrder').is(":checked");;
        var Visibility = $('#Visibility').is(":checked");;
        var ColumnUpdate = $('#ColumnUpdate').is(":checked");
        var UpdateControl = $('#drpUpdateControl option:selected').val();
        var UpdateQuery1 = $('#txtUPdateQuery1').val();
        var UpdateQuery2 = $('#txtUPdateQuery2').val();
        var UpdateQuery3 = $('#txtUPdateQuery3').val();
        var UpdateQuery4 = $('#txtUPdateQuery4').val();
        var UpdateQuery5 = $('#txtUPdateQuery5').val();
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
               url: "/ViewsSetup/InsertDataColumn",
               data: {
                   "srno": srno, "Corporate": Corporate, "ViewCode": ViewCode, "ColumnCaption": ColumnCaption, "ColumnName": ColumnName, "FixedOrder": FixedOrder, "Visibility": Visibility,
                   "ColumnUpdate": ColumnUpdate, "UpdateControl": UpdateControl, "UpdateQuery1": UpdateQuery1, "UpdateQuery2": UpdateQuery2, "UpdateQuery3": UpdateQuery3,
                   "UpdateQuery4": UpdateQuery4, "UpdateQuery5": UpdateQuery5, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute3": Attribute4, "Attribute5": Attribute5,
                   "Attribute6": Attribute6, "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
               },
               dataType: 'json',
               success: function (data) {
                   $('#txtsrnoColumn').val(data.srno)
                   Message = data.responseText;
                   $('#btnUpdateColumn').show();
                   $('#btnsaveColumn').hide();
                   swal('Good job!', Message, 'success');
               }
           });
    });
    //Edit  Data 
    $("table").delegate(".editor_editColumn", "click", function () {
        Claertab2();
        var tablename = 'dbo._ViewSetup_Fields';
        var Corporate = '1';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/ViewsSetup/Edit_DataColumn",
             data: {
                 "tablename": tablename, "Corporate": Corporate, "unit": unit, "Formcode": Formcode, "Formtabcode": Formtabcode, "Xmaster": Xmaster, "Type": Type
             },
             dataType: 'json',
             success: function (response) {
                 if (response.length > 0) {
                     $('#txtsrnoColumn').val(response[0].srno);
                     $('#txtColumncaption').val(response[0].ColumnCaption);
                     $('#txtColumn').val(response[0].ColumnName);
                     // alert(response[0].FixedOrder);
                     // if (response[0].RequiredField.toLowerCase() == 'true')
                     if (response[0].FixedOrder.toLowerCase() == 'true') {
                         $('#FixedOrder').attr('checked', true);
                         $('#FixedOrder').parent().addClass('checked');
                     } else {
                         $('#FixedOrder').attr('checked', false);
                         $('#FixedOrder').parent().removeClass('checked');
                     }
                     if (response[0].Visibility.toLowerCase() == 'true') {
                         $('#Visibility').attr('checked', true);
                         $('#Visibility').parent().addClass('checked');
                     } else {
                         $('#Visibility').attr('checked', false);
                         $('#Visibility').parent().removeClass('checked');
                     }
                     if (response[0].ColumnUpdate.toLowerCase() == 'true') {
                         $('#ColumnUpdate').attr('checked', true);
                         $('#ColumnUpdate').parent().addClass('checked');
                     } else {
                         $('#ColumnUpdate').attr('checked', false);
                         $('#ColumnUpdate').parent().removeClass('checked');
                     }
                     setSelect2Value($('#drpUpdateControl'), response[0].UpdateControl);
                     $('#txtUPdateQuery1').val(response[0].UpdateQuery1);
                     $('#txtUPdateQuery2').val(response[0].UpdateQuery2);
                     $('#txtUPdateQuery3').val(response[0].UpdateQuery3);
                     $('#txtUPdateQuery4').val(response[0].UpdateQuery4);
                     $('#txtUPdateQuery5').val(response[0].UpdateQuery5);
                 }
             }
         }).done(function () {
             $("#ColumnGrid").removeClass("active");
             $("#Column").addClass("active");
             $("#tab5").removeClass("active");
             $("#tab4").addClass("active");
             $('#btnUpdateColumn').show();
             $('#btnsaveColumn').hide();
         });
        //  getdataColumn();
    });


});

function FillDropdown(Corporate, Field1, Field2, Field3, Field4, controlId) {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = Corporate;
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;//Module
    var field2 = Field2;//Screen
    var field3 = Field3;//Form
    var field4 = Field4;//Corporate
    var field5 = '';
    var Control = controlId;
    var Language = '';
    var Type = 'ConditionalDropdown';
    var Srno = '';
    $.ajax({
        url: "/ViewsSetup/BindDropDownbase",
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
        url: "/ViewsSetup/BindDropDownLoad",
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
                setSelect2Value($('#drpCorporate'), '0');
            }
            if (response['GTMaster'].length > 0) {
                $('#drpMasterCreateView').html('');
                for (var i = 0; i < response['GTMaster'].length; i++) {
                    var opt = new Option(response['GTMaster'][i]['Text'], response['GTMaster'][i]['Value']);
                    $('#drpMasterCreateView').append(opt);
                }
                setSelect2Value($('#drpMasterCreateView'), '0');
            }
        }
    });
}

function Dropdown_Bind_Tab2() {
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
        url: "/ViewsSetup/BindDropDownLoadColumn",
        type: "POST",
        data: {
            "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate,
            "unit": unit, "Branch": Branch, "userid": userid, "Ip": Ip, "Type": Type
        },
        success: function (response) {
            if (response['GTCorporate'].length > 0) {
                $('#drpUpdateControl').html('');
                for (var i = 0; i < response['GTCorporate'].length; i++) {
                    var opt = new Option(response['GTCorporate'][i]['Text'], response['GTCorporate'][i]['Value']);
                    $('#drpUpdateControl').append(opt);
                }
                setSelect2Value($('#drpUpdateControl'), '0');
            }
        }
    });
}

function getdata() {
    var tablename = 'dbo._ViewSetup';
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
    $('#CreateViewGrid').dataTable({
        "ServerSide": true,
        destroy: true,
        "ajax": {
            "url": "/ViewsSetup/BindGridView",
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
            { "data": "Module" },
            { "data": "Screen" },
            { "data": "FormName" },
            { "data": "Tab" },
            { "data": "View" },
            {
                data: null,
                className: "center",
                defaultContent: '<a href="javascript:void(0);" class="editor_edit" ><i class="fa fa-pencil-square-o"></i></a>'
            }]
    });
}
//&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_Delte" data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o"></i></a> 
function cleartab1() {
    clearValidations($(this).closest('form'));
    $('.inputform').val('');
    $('.Dropdown').each(function () {
        $(this).val($(this).find('option:first').val()).change();
    });
}

function Claertab2() {
    clearValidations($(this).closest('form'));
    $('.DropdownColumn').each(function () {
        $(this).val($(this).find('option:first').val()).change();
    });
    $('.inputformColumn').val('');

    $('#FixedOrder').attr('checked', false);
    $('#FixedOrder').parent().removeClass('checked');
    $('#ColumnUpdate').attr('checked', false);
    $('#ColumnUpdate').parent().removeClass('checked');
    $('#FixedOrder').attr('checked', false);
    $('#FixedOrder').parent().removeClass('checked');

}

function getdataColumn() {
    var tablename = 'dbo._ViewSetup_Fields';
    var Corporate = '2';
    var unit = '';
    var userid = '';
    var WhereClause = '';
    var Branch = '';
    var PageNo = '1';
    var RecordsPerPage = '10';
    var Formcode = $('#txtsrno').val();
    var Formtabcode = '0';
    var type = 'Grid';
    $('#ColumngridView').dataTable({
        "ServerSide": true,
        destroy: true,
        "ajax": {
            "url": "/ViewsSetup/BindGridViewColumn",
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
            { "data": "ColumnCaption" },
            { "data": "ColumnName" },
            { "data": "UpdateControl" },
            {
                data: null,
                className: "center",
                defaultContent: '<a href="javascript:void(0);" class="editor_editColumn" ><i class="fa fa-pencil-square-o"></i></a>'
            }]
    });
}