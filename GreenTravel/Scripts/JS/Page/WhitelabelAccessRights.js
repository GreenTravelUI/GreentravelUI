﻿
$(window).unload(function () {
    $('select option').remove();
});

$(document).ready(function () {
    FillDropDown_Corporate();
    setSelect2Value($('#DrpLocationTab2'), '0');
    BindGrid();//Bind Grid
    FillDropDown_RightsCorporate();
    $("#drpCorporate").change(function () {
        $('#DrpLocationTab2').html('');
        setSelect2Value($('#DrpLocationTab2'), '0');
        FillConditional_Base($('#drpCorporate option:selected').val(), 0, 0, 0, 'DrpUnitTab2');

    }); //--- tab-2 Corporate Drop-down Change
    $("#DrpUnitTab2").change(function () {

        FillConditional_Base($('#drpCorporate option:selected').val(), $('#DrpUnitTab2 option:selected').val(), 0, 0, 'DrpLocationTab2');

    }); //---- tab-2 Unit Drop-down Change
    $('.usertab1gridclass').click(function (e) {

        $("#tab2").removeClass("active");
        $("#userlitab2").removeClass("active");
        $("#tab3").removeClass("active");
        $("#userlitab3").removeClass("active");
        $("#tab4").removeClass("active");
        $("#userlitab4").removeClass("active");
        $("#tab1").addClass("active");
        $("#userlitab1").addClass("active");
        BindGrid();

    });
    $('.Usertab2').click(function (e) {

        $("#userlitab1").addClass("active");
        $("#tab1").removeClass("active");
        $("#userlitab3").addClass("active");
        $("#tab3").removeClass("active");
        $("#userlitab4").addClass("active");
        $("#tab4").removeClass("active");
        $("#userlitab2").addClass("active");
        $("#tab2").removeClass("active");

    });
    $('.btnclearuser').click(function (e) {

        e.preventDefault();
        $("#txtEmail").prop('disabled', false);
        $(".Editdisable").show();
        clearValidations($(this).closest('form'));
        $('input[type="text"]').val('');
        $('input[type="password"]').val('');
        $('#btnSaveUser').show();
        $('#btnUpdateUser').hide();
        $('#btnCancelUser').hide();
        $('.inputform').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $('.drpdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $('select').next().find('ul li.select2-selection__choice').remove();

    });
    $('.btnSaveuserclass').click(function (e) {

        e.preventDefault();

        if (!validateForm($(this).parent())) {
            swal('Invalid data found!');
            return false;
            return false;
        }
        if ($('#txtsrno').val() != "") {
            var srno = $('#txtsrno').val();
        }
        else {
            var srno = '0';
        }
        var Corporate = $('#drpCorporate option:selected').val();;

        var Unit = $('#DrpUnitTab2 option:selected').val();;
        var Location = $('#DrpLocationTab2 option:selected').val();;
        var FirstName = $('#txtFirstName').val();
        var LastName = $('#txtLastName').val();
        var Email = $('#txtConfirmEmail').val();
        var Password = $('#txtConfirmPassword').val();
        var Branch = '';
        var Attribute1 = 'Client';
        var Attribute2 = '';
        var Attribute3 = '';
        var Attribute4 = '';
        var Attribute5 = '';
        var Attribute6 = '';
        var Attribute7 = '';
        var Attribute8 = '';
        var Attribute9 = '';
        var Attribute10 = '';
        var EntryDatetime = '';
        var CretedBy = '0';
        var EditedBy = '0';
        var EditDatetime = '';
        var CorpcentreBy = '0';
        var UnitCorpBy = '0';
        var TerminalBy = '0';
        var BranchBy = '0';

        $.ajax(
           {
               type: "POST",
               url: "/WhitelabelAccessRights/insert_Data",
               data: {
                   srno: srno, Corporate: Corporate, Unit: Unit, Location: Location, Branch: Branch, FirstName: FirstName,
                   LastName: LastName, Email: Email, Password: Password, Attribute1: Attribute1,
                   Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                   Attribute9: Attribute9, Attribute10: Attribute10, EntryDatetime: EntryDatetime, CretedBy: CretedBy, EditedBy: EditedBy, EditDatetime: EditDatetime, CorpcentreBy: CorpcentreBy,
                   UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {
                       swal('', response['success'], response['Event']);
                       $("#tab1").removeClass("active");
                       $("#userlitab1").removeClass("active");
                       $("#tab2").addClass("active");
                       $("#userlitab2").addClass("active");

                       // For Srno  Fill in the edit Mode
                       if (response['Event'] != 'error') {
                           $('#txtsrno').val(response['Srno']);
                           $('#btnSaveUser').hide();
                           $('#btnUpdateUser').show();
                           $('#btnCancelUser').hide();
                       }
                   }
               }
           });

    });
    $('#txtConfirmEmail').on('change', function () {
        var result = CompareValidation($('#txtEmail').val(), $('#txtConfirmEmail').val());
        if (result == true) {
        }
        else {
            $('#txtConfirmEmail').focus();
        }
    });
    $('#txtConfirmPassword').on('change', function () {
        var result = CompareValidation($('#txtPassword').val(), $('#txtConfirmPassword').val());
        if (result == true) {
        }
        else {
            $('#txtConfirmPassword').focus();
        }
    });
    $("table").delegate(".editor_Step", "click", function () {

        var tablename = 'dbo._user_details_master';
        var Corporate = '2';
        var Unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var srno = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/WhitelabelAccessRights/Edit_data",
             data: {
                 tablename: tablename, Corporate: Corporate, Unit: Unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
             },
             dataType: 'json',
             success: function (response) {
                 if (response['UserMasterresjs'].length > 0) {
                     $('#txtsrno').val(response['UserMasterresjs'][0]['srno']);
                     $('#txtFirstName').val(response['UserMasterresjs'][0]['FirstName']);
                     $('#txtLastName').val(response['UserMasterresjs'][0]['LastName']);
                     $('#txtEmail').val(response['UserMasterresjs'][0]['Email']);
                     $('#txtConfirmEmail').val(response['UserMasterresjs'][0]['Email']);
                     setSelect2Value($('#drpCorporate'), response['UserMasterresjs'][0]['Corporate']);
                     FillConditional_Base($('#drpCorporate option:selected').val(), 0, 0, 0, 'DrpUnitTab2');
                     setSelect2Value($('#DrpUnitTab2'), response['UserMasterresjs'][0]['Unit']);
                     FillConditional_Base($('#drpCorporate option:selected').val(), $('#DrpUnitTab2 option:selected').val(), 0, 0, 'DrpLocationTab2');
                     setSelect2Value($('#DrpLocationTab2'), response['UserMasterresjs'][0]['Location']);
                 }
                 Clear_tab_4();
                 if (response['UserWiseRights'].length > 0) {
                     setSelect2Value($('#drpRightsCorporate'), response['UserWiseRights'][0]['Corporate']);
                     Load_screen_module();
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), 0, 0, 'drpRightsUnit');
                     setSelect2Value($('#drpRightsUnit'), response['UserWiseRights'][0]['Unit']);
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsLocation');
                     setSelect2Value($('#drpRightsLocation'), response['UserWiseRights'][0]['Location']);
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsRole');
                     setSelect2Value($('#drpRightsRole'), response['UserWiseRights'][0]['Role']);
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsUser');
                     setSelect2Value($('#drpRightsUser'), response['UserWiseRights'][0]['UserId']);
                     Fill_Screen_Module_On_Edit();
                 }




             }
         }).done(function () {
             clearValidations($('#tab2').find('form'));
             $("#txtEmail").prop('disabled', true);
             $(".Editdisable").hide();
             $("#userlitab1").removeClass("active");
             $("#tab1").removeClass("active");
             $("#userlitab2").removeClass("active");
             $("#tab2").removeClass("active");
             $("#userlitab3").removeClass("active");
             $("#tab3").removeClass("active");
             $("#userlitab4").removeClass("active");
             $("#tab4").removeClass("active");
             $("#userlitab2").addClass("active");
             $("#tab2").addClass("active");
             $('#btnUpdateUser').show();
             $('#btnCancelUser').hide();
             $('#btnSaveUser').hide();
         });


    });
    $("table").delegate(".editor_accessright", "click", function () {

        var tablename = 'dbo._user_details_master';
        var Corporate = '2';
        var Unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var srno = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/WhitelabelAccessRights/Edit_data",
             async: false,
             data: {
                 tablename: tablename, Corporate: Corporate, Unit: Unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
             },
             dataType: 'json',
             success: function (response) {
                 if (response['UserWiseRights'].length > 0) {
                     setSelect2Value($('#drpRightsCorporate'), response['UserWiseRights'][0]['Corporate']);
                     Load_screen_module();
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), 0, 0, 'drpRightsUnit');
                     setSelect2Value($('#drpRightsUnit'), response['UserWiseRights'][0]['Unit']);
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsLocation');
                     setSelect2Value($('#drpRightsLocation'), response['UserWiseRights'][0]['Location']);
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsRole');
                     setSelect2Value($('#drpRightsRole'), response['UserWiseRights'][0]['Role']);
                     FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsUser');
                     setSelect2Value($('#drpRightsUser'), response['UserWiseRights'][0]['UserId']);
                     Fill_Screen_Module_On_Edit();
                 }
             }
         }).done(function () {
             clearValidations($('#tab4').find('form'));

             $("#txtEmail").prop('disabled', true);
             $(".Editdisable").hide();

             $("#userlitab1").removeClass("active");
             $("#tab1").removeClass("active");
             $("#userlitab2").removeClass("active");
             $("#tab2").removeClass("active");
             $("#userlitab3").removeClass("active");
             $("#tab3").removeClass("active");
             $("#userlitab4").addClass("active");
             $("#tab4").addClass("active");
         });
    });



    $('.quituserbtn').click(function (e) {
        $(".btnclearuser").click();
        $(".usertab1gridclass").click();
    });
    function clearForm_TabWise() {
        $('.inputformTab').val('');
        $('.DropdownTab').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    }

    // -------------------------------------------------------------------------        ( Tab-4)       -----------------------------------------------------------------------------------//

    $('.userlitab4class').click(function (e) {
        e.preventDefault();
        FillDropDown_RightsCorporate();
    });
    $("#drpRightsCorporate").change(function () {
        // e.preventDefault();
        $('#drpRightsUnit').html('');// To Clear dropdown Unit
        setSelect2Value($('#drpRightsUnit'), '0');

        $('#drpRightsLocation').html('');// To Clear dropdown Location
        setSelect2Value($('#drpRightsLocation'), '0');

        $('#drpRightsRole').html('');// To Clear dropdown Role
        setSelect2Value($('#drpRightsRole'), '0');

        $('#drpRightsUser').html('');// To Clear dropdown User
        setSelect2Value($('#drpRightsUser'), '0');

        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), 0, 0, 'drpRightsUnit');
        Load_screen_module();
    });
    $("#drpRightsUnit").change(function () {
        // e.preventDefault();
        $('#drpRightsLocation').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsLocation'), '0');


        $('#drpRightsRole').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsRole'), '0');

        $('#drpRightsUser').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsUser'), '0');

        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsLocation');
    });
    $("#drpRightsLocation").change(function () {
        // e.preventDefault();
        $('#drpRightsRole').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsRole'), '0');

        $('#drpRightsUser').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsUser'), '0');

        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsRole');
    });
    $("#drpRightsRole").change(function () {
        // e.preventDefault();
        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsUser');
    });
    $("#drpRightsUser").change(function () {
        // e.preventDefault();
        Fill_Screen_Module_On_Edit();
    });
    $("#partial").delegate(".checker", "click", function () {
        if ($(this).children().hasClass('checked')) {
            $(this).children().removeClass('checked');
            $(this).children().children().removeAttr('checked');
        } else {
            $(this).children().addClass('checked');
            $(this).children().children().attr('checked', true);
        }
    });
    $("#partial").delegate(".checker.delete", "click", function () {
        if ($(this).parent().parent().find('.checker.delete').children().hasClass('checked')) {
            $(this).parent().parent().find('.checker.view').attr('checked', true);
            $(this).parent().parent().find('.checker.view').children().addClass('checked');
            $(this).parent().parent().find('.checker.create').attr('checked', true);
            $(this).parent().parent().find('.checker.create').children().addClass('checked');
            $(this).parent().parent().find('.checker.update').attr('checked', true);
            $(this).parent().parent().find('.checker.update').children().addClass('checked');
        }


    });
    $("#partial").delegate(".checker.update", "click", function () {
        // console.log($(this).parent().parent().find('.checker.update').children().hasClass('checked'));
        if ($(this).parent().parent().find('.checker.update').children().hasClass('checked')) {
            $(this).parent().parent().find('.checker.view').attr('checked', true);
            $(this).parent().parent().find('.checker.view').children().addClass('checked');
            $(this).parent().parent().find('.checker.create').attr('checked', true);
            $(this).parent().parent().find('.checker.create').children().addClass('checked');
        }
        else {
            $(this).parent().parent().find('.checker.delete').attr('checked', false);
            $(this).parent().parent().find('.checker.delete').children().removeClass('checked');
        }

    });
    $("#partial").delegate(".checker.create", "click", function () {
        // console.log($(this).parent().parent().find('.checker.create').children().hasClass('checked'));
        if ($(this).parent().parent().find('.checker.create').children().hasClass('checked')) {
            $(this).parent().parent().find('.checker.view').attr('checked', true);
            $(this).parent().parent().find('.checker.view').children().addClass('checked');
        }
        else {
            $(this).parent().parent().find('.checker.update').attr('checked', false);
            $(this).parent().parent().find('.checker.update').children().removeClass('checked');
            $(this).parent().parent().find('.checker.delete').attr('checked', false);
            $(this).parent().parent().find('.checker.delete').children().removeClass('checked');
        }

    });
    $("#partial").delegate(".checker.view", "click", function () {
        // console.log($(this).parent().parent().find('.checker.create').children().hasClass('checked'));
        if ($(this).parent().parent().find('.checker.view').children().hasClass('checked')) {

        }
        else {
            $(this).parent().parent().find('.checker.update').attr('checked', false);
            $(this).parent().parent().find('.checker.update').children().removeClass('checked');
            $(this).parent().parent().find('.checker.delete').attr('checked', false);
            $(this).parent().parent().find('.checker.delete').children().removeClass('checked');
            $(this).parent().parent().find('.checker.create').attr('checked', false);
            $(this).parent().parent().find('.checker.create').children().removeClass('checked');
        }

    });
    $("#partial").delegate(".checker.All", "click", function () {
        console.log($(this).parent().parent().find('.checker.All').children().html());
        if ($(this).parent().parent().find('.checker.All').children().hasClass('checked')) {
            $(this).parent().parent().find('tr').each(function () {
                $(this).find('.checker').attr('checked', true);
                $(this).find('.checker').children().addClass('checked');
            });

        }
        else {
            $(this).parent().parent().find('tr').each(function () {
                $(this).find('.checker').attr('checked', false);
                $(this).find('.checker').children().removeClass('checked');
            });
        }

    });
    $('.btnSaveTab4').click(function (e) {
        {
            var a = 0;
            e.preventDefault();
            if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
                swal('Invalid data found!');
                return false;
            }
            var ModuleAry = [];
            var ScreenAry = [];
            if ($('#lbSrnoTab4').val() == '') {
                var srno = 0;
            }
            else {
                var srno = $('#lbSrnoTab4').val();
            }
            var UserId = $('#drpRightsUser option:selected').val();
            var Corporate = $('#drpRightsCorporate option:selected').val();
            var Unit = $('#drpRightsUnit option:selected').val();
            var Location = $('#drpRightsLocation option:selected').val();
            var Branch = '0';
            var Role = $('#drpRightsRole option:selected').val();
            var RoleType = '0';
            var EffectiveDate = $('#Date1').val();;
            var IsActive = $('#drpRightsStatus option:selected').val();
            // var IsDefault = $("#chkdefault").is(":checked");

            var IsDefault = false;
            if ($("#chkdefault").parent().hasClass('checked')) {
                IsDefault = true;
            }


            var Status = '';
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
            $('ul.grid div').find('li').each(function () {
                var module = '';
                module = ($(this).find('.lbmodulesrno').text().trim());
                checkedInput = '';
                var Feature = '';
                $(this).find('table tbody tr').each(function () {
                    var view = '';
                    var create = '';
                    var deletee = '';
                    var update = '';
                    var screen = '';
                    //screen = ($(this).find('label:eq(1)').attr("id"));
                    // screen = ($(this).find('.checker').attr("id"));
                    screen = (($(this).find('.checker').attr("id")));
                    view = ($(this).find('.checker.view').children().hasClass('checked'));
                    create = ($(this).find('.checker.create').children().hasClass('checked'));
                    update = ($(this).find('.checker.update').children().hasClass('checked'));
                    deletee = ($(this).find('.checker.delete').children().hasClass('checked'));
                    ModuleAry.push({ 'Module': module, 'SCR': screen, 'view': view, 'create': create, 'update': update, 'deletee': deletee });
                });
            });
            console.log(ModuleAry);

            var theIds1 = JSON.stringify(ModuleAry);

            $.ajax({
                type: "POST",
                url: "/WhitelabelAccessRights/Insert",
                async: false,
                data: {
                    srno: srno, UserId: UserId, Corporate: Corporate, Unit: Unit, Location: Location, Branch: Branch, Role: Role, RoleType: RoleType, EffectiveDate: EffectiveDate,
                    IsActive: IsActive, IsDefault: IsDefault, Status: Status, Attribute1: Attribute1, CreatedBy: CreatedBy,
                    Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                    Attribute9: Attribute9, Attribute10: Attribute10, GridAry: theIds1
                },
                dataType: 'json',
                success: function (response) {
                    if (response != null) {
                        flagsection = 1;
                        msg = response['success'];
                        event = response['Event'];
                        $('#lbSrnoTab4').text(response['SrNo']);
                    }
                }
            });
            if (flagsection == 1) {
                swal('', msg, event);
                $('#btnSavetab4').hide();
                $('#btnupdatetab4').show();
            }
        }
    });
    $('#btnQuittab4').click(function (e) {
        $(".usertab1gridclass").click();
        $('.inputControl').val('');
        $('.Dropdown').each(function () {
            setSelect2Value($(this), '0');
        });
        $("#partial").html('');
        clearValidations($(this).closest('form'));
        $('#Date1').val('');
        $('#chkdefault').attr('checked', false);
        $('#chkdefault').parent().removeClass('checked');
        $('#btnSavetab4').hide();
        $('#btnupdatetab4').hide();

    });
    $('#btnCleartab4').click(function (e) {
        e.preventDefault();
        Clear_tab_4();
    });
})
// -------------------------------------------------------------------------        ( Tab-1   &  Tab-2 --> Functions)       -----------------------------------------------------------------------------------//

function FillDropDown_Corporate() {
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
        url: "/WhitelabelAccessRights/BindDropdown_Base",
        type: "POST",
        dataType: "json",
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Language: Language, Type: Type
        },
        success: function (response) {
            if (response['Corp'].length > 0) {
                $('.formcorporate').html('');
                for (var i = 0; i < response['Corp'].length; i++) {
                    var opt = new Option(response['Corp'][i]['Text'], response['Corp'][i]['Value']);
                    $('.formcorporate').append(opt);
                }
                setSelect2Value($('#drpCorporate'), '0');
            }
        },
    });

}
function FillConditional_Base(Corporate, Field1, Field2, Field3, controlId) {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = $('#drpCorporate option:selected').val();
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;
    var field2 = Field2;
    var field3 = Field3;
    var field4 = '';
    var field5 = '';
    var Control = controlId;
    var Language = '';
    var Type = 'ConditionalDropdown';
    var Srno = '';
    $.ajax({
        url: "/WhitelabelAccessRights/BindDropdown_FormLoad",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (data) {
            $('#' + controlId + '').html('');
            for (var i = 0; i < data['data'].length; i++) {
                var opt = new Option(data['data'][i]['Text'], data['data'][i]['Value']);
                $('#' + controlId + '').append(opt);
            }
            setSelect2Value($('#' + controlId + ''), '0');
        }
    });
}
function CompareValidation($attr1, $attr2) {

    if ($attr1 != $attr2) {
        return false;
    }
    else {
        return true;
    }
}
function BindGrid() {

    var tablename = 'dbo._User_Details_Master';
    var Corporate = '2';
    var Segment = '';
    var PageNo = '1';
    var type = 'Grid';
    var Formcode = '0';
    var Formtabcode = '0';
    var field1 = 'Client'

    $('#gridUser').dataTable({
        "ServerSide": true,
        "destroy": true,
        "autoWidth": false,


        destroy: true,
        "ajax": {
            "url": "/WhitelabelAccessRights/BindGrid",
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
                "Formtabcode": Formtabcode,
                "field1": field1,

            }
        },
        "columns": [
            { "data": "RowNumber" },
            { "data": "srno", className: "hide_cell" },
            { "data": "Corporate" },
            { "data": "Unit" },
            { "data": "Location" },
             { "data": "Name" },
            { "data": "Email" },

            {
                data: null,

                className: "center",
                //defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_feature"><i class="text-primary fa fa-trash-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_accessright"><i class="fa fa-key"></i></a>'
                defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_accessright"><i class="fa fa-key"></i></a>'
            }
        ]
    });
}
function validatePass(sender, args) {
    var user_email = $('#txtEmail').val();
    var pass = args.Value;
    var username = user_email.substring(0, user_email.indexOf("@"));
    var chk = 0;
    if (user_email != "") {

        if (pass.indexOf(username) > -1) {
            chk = 1;
        }
        if (chk == 0) {
            return args.IsValid = true;
        }
        else {
            return args.IsValid = false;
        }
    }
    else {
        return args.IsValid = false;
        ValidatorEnable(myVal, false);
    }
}
function validatenum(sender, args) {
    var num = ["123", "234", "345", "456", "567", "678", "789", "890", "321", "432", "543", "654", "765", "876", "987", "098"];
    var pass = args.Value;
    pass = pass.toLowerCase();
    var chk = 0;
    for (var i = 0; i < num.length; i++) {
        if ((pass.indexOf(num[i]) > -1)) {
            chk = 1;
        }
    }
    if (chk == 0) {
        return args.IsValid = true;
    }
    else {
        return args.IsValid = false;
    }
}
function validatechar(sender, args) {
    var num = ["qwer", "wert", "erty", "rtyu", "tyui", "yuio", "uiop", "asdf", "sdfg", "dfgh", "fghj", "ghjk", "hjkl", "zxcv", "xcvb", "cvbn", "vbnm", "mnbv", "nbvc", "bvcx", "vcxz", "lkjh", "kjhg", "jhgf", "hgfd", "gfds", "fdsa", "poiu", "oiuy", "iuyt", "uytr", "ytre", "trew", "rewq"];
    var pass = args.Value;
    pass = pass.toLowerCase();
    var chk = 0;
    for (var i = 0; i < num.length; i++) {
        var reversearray = pass.indexOf(num[i].split("").reverse().join(""));
        if ((pass.indexOf(num[i]) > -1)) {
            chk = 1;
        }
    }
    if (chk == 0) {
        return args.IsValid = true;
    }
    else {
        return args.IsValid = false;

    }
}

// -------------------------------------------------------------------------        ( Tab-4 --> Functions)       -----------------------------------------------------------------------------------//

function FillDropDown_RightsCorporate() {
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
        url: "/WhitelabelAccessRights/BindDropdown_FormLoadAccessRights",
        type: "POST",
        dataType: "json",
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Language: Language, Type: Type
        },
        success: function (data) {
            if (data['Corp'].length > 0) {

                if (data['Corp'].length > 0) {
                    $('#drpRightsCorporate').html('');
                    for (var i = 0; i < data['Corp'].length; i++) {
                        var opt = new Option(data['Corp'][i]['Text'], data['Corp'][i]['Value']);
                        $('#drpRightsCorporate').append(opt);
                    }
                    setSelect2Value($('#drpRightsCorporate'), '0');
                }

                if (data['Status'].length > 0) {
                    $('#drpRightsStatus').html('');
                    for (var i = 0; i < data['Status'].length; i++) {
                        var opt = new Option(data['Status'][i]['Text'], data['Status'][i]['Value']);
                        $('#drpRightsStatus').append(opt);
                    }
                    setSelect2Value($('#drpRightsStatus'), '0');
                }


            }
        },
    });

}
function FillConditional_RightsBase(Corporate, Field1, Field2, Field3, controlId) {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = $('#drpRightsCorporate option:selected').val();
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;
    var field2 = Field2;
    var field3 = Field3;
    var field4 = '';
    var field5 = '';
    var Control = controlId;
    var Language = '';
    var Type = 'ConditionalDropdown';
    var Srno = '';
    $.ajax({
        url: "/WhitelabelAccessRights/BindDropdown_BaseAccessRights",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (data) {
            $('#' + controlId + '').html('');
            for (var i = 0; i < data['data'].length; i++) {
                var opt = new Option(data['data'][i]['Text'], data['data'][i]['Value']);
                $('#' + controlId + '').append(opt);
            }
            setSelect2Value($('#' + controlId + ''), '0');
        }
    });
}
function Load_screen_module() {

    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = '';
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = '';
    var field2 = '';
    var field3 = '';
    var field4 = '';
    var field5 = '';
    var Control = '';
    var Language = '';
    var Type = 'ConditionalGrid';

    var Srno = '';
    $.ajax({
        url: "/WhitelabelAccessRights/FillAll",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
            Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5,
            Control: Control, Language: Language, Srno: Srno
        },
        success: function (data) {
            $("#partial").html('');

            var html = '';
            if (data['HeaderList'].length > 0) {

                for (var i = 0; i < data['HeaderList'].length; i++) {
                    if (html == '') {
                        html = '<li><figure><figcaption class="panel-body tab-itenaries">' +
                                '<label style="display: none" class="lbmodulesrno" id="lbheadingName" >  ' + data['HeaderList'][i]['SrNo'] + ' </label>' +
                                '<h3 style="margin-top: 0; text-align: center;" class="chk-heading"><div class="checker All"> <span><input id="' + data['HeaderList'][i]['SrNo'] + '"  class="Allcheck"   type="checkbox" > </span></div> ' +
                                '<label id="lbheading">  ' + data['HeaderList'][i]['xname'] + '</label></h3>' +
                                '<table class="table sampletable" style="margin-bottom: 0;">' +
                                '<tbody>' +
                                '[@Tbody]' +
                                '</tbody></table></figcaption></figure></li>';
                        var Column = '';
                        for (var col = 0; col < data['ColumnList'].length; col++) {

                            if (data['HeaderList'][i]['SrNo'] == data['ColumnList'][col]['xlink']) {
                                if (Column == '') {
                                    Column = ' <tr><td> <label style="float: left">' + data['ColumnList'][col]['xname'] + '</label>' +
                                    '<label style="display: none" text="' + data['ColumnList'][col]['SrNo'] + '" ></label>' +
                                    'V <div class="checker view" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'C <div class="checker create" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'U <div class="checker update" id="' + data['ColumnList'][col]['SrNo'] + '" > <span><input   type="checkbox" ></span></div>' +
                                    'D <div class="checker delete" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    '</td></tr>'
                                }
                                else {
                                    Column += ' <tr><td> <label style="float: left">' + data['ColumnList'][col]['xname'] + '</label>' +
                                    '<label style="display: none" id="lb">' + data['ColumnList'][col]['SrNo'] + '</label>' +
                                   'V <div class="checker view" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'C <div class="checker create" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'U <div class="checker update" id="' + data['ColumnList'][col]['SrNo'] + '" > <span><input   type="checkbox" ></span></div>' +
                                    'D <div class="checker delete" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    '</td></tr>';
                                }

                            }
                        }
                        html = html.replace("[@Tbody]", Column);
                    }

                    else {
                        html += '<li><figure><figcaption class="panel-body tab-itenaries">' +
                                '<label style="display: none" class="lbmodulesrno" id="lbheadingName" >  ' + data['HeaderList'][i]['SrNo'] + ' </label>' +
                                '<h3 style="margin-top: 0; text-align: center;" class="chk-heading"><div class="checker All"> <span><input id="' + data['HeaderList'][i]['SrNo'] + '"  class="Allcheck"   type="checkbox" > </span></div> ' +
                                '<label id="lbheading">  ' + data['HeaderList'][i]['xname'] + '</label></h3>' +
                                '<table class="table sampletable" style="margin-bottom: 0;">' +
                                '<tbody>' +
                                '[@Tbody]' +
                                '</tbody></table></figcaption></figure></li>';

                        var Column = '';
                        for (var col = 0; col < data['ColumnList'].length; col++) {
                            if (data['HeaderList'][i]['SrNo'] == data['ColumnList'][col]['xlink']) {
                                if (Column == '') {
                                    Column = ' <tr><td> <label style="float: left">' + data['ColumnList'][col]['xname'] + '</label>' +
                                    '<label style="display: none">' + data['ColumnList'][col]['SrNo'] + '</label>' +
                                    'V <div class="checker view" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'C <div class="checker create" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'U <div class="checker update" id="' + data['ColumnList'][col]['SrNo'] + '" > <span><input   type="checkbox" ></span></div>' +
                                    'D <div class="checker delete" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    '</td></tr>';
                                }
                                else {
                                    Column += ' <tr><td> <label style="float: left">' + data['ColumnList'][col]['xname'] + '</label>' +
                                    '<label style="float: left; display: none">' + data['ColumnList'][col]['SrNo'] + '</label>' +
                                   'V <div class="checker view" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'C <div class="checker create" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    'U <div class="checker update" id="' + data['ColumnList'][col]['SrNo'] + '" > <span><input   type="checkbox" ></span></div>' +
                                    'D <div class="checker delete" id="' + data['ColumnList'][col]['SrNo'] + '"> <span><input    type="checkbox" ></span></div>' +
                                    '</td></tr>';
                                }
                            }
                        }
                        html = html.replace("[@Tbody]", Column);
                    }
                }
                $(html).appendTo($("#partial"));
                $('#btnSavetab4').show();
                $('#btnupdatetab4').hide();
            }
        }
    });
}
function Fill_Screen_Module_On_Edit() {

    var tablename = '';
    var Corporate = $('#drpRightsCorporate option:selected').val();
    var unit = $('#drpRightsUnit option:selected').val();
    var Location = $('#drpRightsLocation option:selected').val();
    var Role = $('#drpRightsRole option:selected').val();
    var UserId = $('#drpRightsUser option:selected').val();;
    var Formcode = '';
    var Formtabcode = '';
    var srno = '';
    var Type = 'EditUserRole';

    $.ajax({
        url: "/WhitelabelAccessRights/Edit_AccessRights",
        type: "POST",
        async: false,
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Location: Location, Role: Role, UserId: UserId, Formcode: Formcode, Formtabcode: Formtabcode,
            srno: srno, Type: Type
        },
        success: function (response) {


            if (response['Grid'].length > 0) {
                $.each(response['Grid'], function () {
                    var tempModule = this['Module'].toString();
                    var tempSCR = this['SCR'].toString();
                    var tempview = this['view'].toString();
                    var tempupdate = this['update'].toString();
                    var tempdeletee = this['deletee'].toString();
                    var tempcreate = this['create'].toString();
                    $('ul.grid div').find('li').each(function () {
                        if ($(this).find('.lbmodulesrno').text().trim() == tempModule) {
                            $(this).find('table tbody tr').each(function () {
                                // console.log($(this).find('.checker').attr("id") + ' -- ' + tempSCR);
                                if ((($(this).find('.checker').attr("id"))) == tempSCR) {

                                    $(this).find('.checker.view').attr('checked', false);
                                    $(this).find('.checker.view').children().removeClass('checked');
                                    $(this).find('.checker.create').attr('checked', false);
                                    $(this).find('.checker.create').children().removeClass('checked');
                                    $(this).find('.checker.update').attr('checked', false);
                                    $(this).find('.checker.update').children().removeClass('checked');
                                    $(this).find('.checker.delete').attr('checked', false);
                                    $(this).find('.checker.delete').children().removeClass('checked');

                                    if (tempview == 'True') {
                                        $(this).find('.checker.view').attr('checked', true);
                                        $(this).find('.checker.view').children().addClass('checked');
                                    }

                                    if (tempcreate == 'True') {
                                        $(this).find('.checker.create').attr('checked', true);
                                        $(this).find('.checker.create').children().addClass('checked');
                                    }
                                    //} else {
                                    //    $(this).find('.checker.create').attr('checked', false);
                                    //    $(this).find('.checker.create').children().removeClass('checked');
                                    //}
                                    if (tempupdate == 'True') {
                                        $(this).find('.checker.update').attr('checked', true);
                                        $(this).find('.checker.update').children().addClass('checked');
                                    }
                                    //else {
                                    //    $(this).find('.checker.update').attr('checked', false);
                                    //    $(this).find('.checker.update').children().removeClass('checked');
                                    //}
                                    if (tempdeletee == 'True') {
                                        $(this).find('.checker.delete').attr('checked', true);
                                        $(this).find('.checker.delete').children().addClass('checked');
                                    }
                                    //} else {
                                    //    $(this).find('.checker.delete').attr('checked', false);
                                    //    $(this).find('.checker.delete').children().removeClass('checked');
                                    //}
                                }
                            });
                        }
                    });

                });

                $('#btnSavetab4').hide();
                $('#btnupdatetab4').show();
            }

            if (response['IsActive'] != null) {
                setSelect2Value($('#drpRightsStatus'), response['IsActive']);
            }
            if (response['EffectiveDate'] != null) {
                $('#Date1').val(response['EffectiveDate']);
            }
            if (response['Srno'] != null) {
                $('#lbSrnoTab4').val(response['Srno']);
            }

            if (response['Status'] != null) {

                if (response['Status'].toLowerCase() == 'true') {
                    $('#chkdefault').attr('checked', true);
                    $('#chkdefault').parent().addClass('checked');
                } else {
                    $('#chkdefault').attr('checked', false);
                    $('#chkdefault').parent().removeClass('checked');
                }
            }

        }
    });
}

function Clear_tab_4()
{
    $("#partial").html('');
    $('.inputControl').val('');
    $('.Dropdown').each(function () {
        setSelect2Value($(this), '0');
    });
    clearValidations($(this).closest('form'));
    $('#Date1').val('');
    $('#chkdefault').attr('checked', false);
    $('#chkdefault').parent().removeClass('checked');
    $('#btnSavetab4').hide();
    $('#btnupdatetab4').hide();
}