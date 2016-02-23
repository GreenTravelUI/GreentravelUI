
$(window).unload(function () {
    $('select option').remove();
});
var corp = $('#txtCorporateID').val();

$(document).ready(function () {
    BindGrid();
    function BindGrid() {
        var tablename = 'dbo._User_Details_Master';
        var Corporate = corp;
        var Segment = '';
        var PageNo = '1';
        var type = 'Grid';
        var Formcode = '0';
        var Formtabcode = '0';
        $('#gridUser').dataTable({
            "ServerSide": true,
            "destroy": true,
            "autoWidth": false,
            destroy: true,
            "ajax": {
                "url": "/WhitelabelAccessRights/BindGridView",
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
                { "data": "srno", className: "hide_cell" },
                 { "data": "Name" },
                { "data": "Email" },
                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;'
                }
            ]
        });
    }
    $('.usertab1gridclass').click(function (e) {
        //$(this).parent().parent().find('li').removeClass('active');
        //$(this).parent().addClass('active');
        //$('.tab-pane').removeClass('active');
        //$('' + $(this).parent().attr('href')).addClass('active');

        $("#tab1").addClass("active");
        $("#tab2").removeClass("active");
        $("#userlitab1").addClass("active");
        $("#userlitab2").removeClass("active");
        $("#tab3").removeClass("active");
        $("#userlitab3").removeClass("active");

        BindGrid();

    });
    $('.Usertab2').click(function (e) {

        $("#userlitab2").addClass("active");
        $("#tab1").removeClass("active");
        $("#userlitab2").addClass("active");
        $("#tab1").removeClass("active");

    });
    $('.btnclearuser').click(function (e) {
        $('input[type="text"]').val('');
        $('input[type="password"]').val('');
        $('#btnSaveUser').show();
        $('#btnUpdateUser').hide();
        $('#btnCancelUser').hide();

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
        $('select').next().find('ul li.select2-selection__choice').remove();
    });
    $('.btnSaveuserclass').click(function (e) {
        e.preventDefault();

        /* Form Validation */
        if (!validateForm($(this).parent())) {
            alert('Invalid data found!');
            return false;
        }

        if ($('#txtsrno').val() != "") {
            var srno = $('#txtsrno').val();
        }
        else {
            var srno = '0';
        }

        var Corporate = '0';

        var Unit = '0';
        var Branch = '0';
        var FirstName = $('#txtFirstName').val();
        var LastName = $('#txtLastName').val();
        var Email = $('#txtConfirmEmail').val();
        var Password = $('#txtConfirmPassword').val();

        var Attribute1 = 'Customer';
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
                   srno: srno, Corporate: Corporate, Unit: Unit, Branch: Branch, FirstName: FirstName,
                   LastName: LastName, Email: Email, Password: Password, Attribute1: Attribute1,
                   Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                   Attribute9: Attribute9, Attribute10: Attribute10, EntryDatetime: EntryDatetime, CretedBy: CretedBy, EditedBy: EditedBy, EditDatetime: EditDatetime, CorpcentreBy: CorpcentreBy,
                   UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {
                       swal('Good job!', 'Record Save Sucessfully!', 'success')
                       $("#tab2").addClass("active");
                       $("#tab1").removeClass("active");
                       $("#userlitab2").addClass("active");
                       $("#userlitab1").removeClass("active");
                       $('input[type="text"]').val('');
                       $('input[type="password"]').val('');
                       $('#btnSaveUser').show();
                       $('#btnUpdateUser').hide();
                       $('#btnCancelUser').hide();

                   }
               }
           });

    });
    $('#txtConfirmEmail').on('change', function () {
        var result = CompareValidation($('#txtEmail').val(), $('#txtConfirmEmail').val());
        //  alert(result);
        if (result == true) {


        }
        else {
            $('#txtConfirmEmail').focus();

        }
    });
    $('#txtConfirmPassword').on('change', function () {
        // alert('ConFirm Password');
        var result = CompareValidation($('#txtPassword').val(), $('#txtConfirmPassword').val());
        //  alert(result);
        if (result == true) {

        }
        else {
            $('#txtConfirmPassword').focus();

        }
    });

    $('.quituserbtn').click(function (e) {
        $(".btnclearuser").click();
        $(".usertab1gridclass").click();
    });//---tab-2 quit button
    ////Comapare validation  
    function CompareValidation($attr1, $attr2) {
        // alert($attr1);
        //alert($attr2);
        if ($attr1 != $attr2) {
            return false;
        }
        else {
            return true;
        }
    }
    //email  validation
    function isEmail(email) {
        var regex = '/^([a-zA-Z0-9_.+-])+\@@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/';
        return regex.test(email);
    }
    $("table").delegate(".editor_Step", "click", function () {


        console.log($(this).parent().parent().children(':eq(1)').text());

        $("#userlitab1").removeClass("active");
        $("#userlitab2").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab2").addClass("active");
        $('#btnUpdateUser').show();
        $('#btnCancelUser').show();
        $('#btnSaveUser').hide();

        var tablename = 'dbo._user_details_master';
        var Corporate = '0';
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
                     $('#txtPassword').val(response['UserMasterresjs'][0]['Password']);
                     $('#txtConfirmPassword').val(response['UserMasterresjs'][0]['Password']);


                     $("#userlitab1").removeClass("active");
                     $("#userlitab2").addClass("active");
                     $("#tab1").removeClass("active");
                     $("#tab2").addClass("active");


                 }
             }
         });
    });
    $('.quituserbtn').click(function (e) {

        $(".usertab1gridclass").click();
        $("#tab1").addClass("active");
        $("#tab2").removeClass("active");
        $("#userlitab1").addClass("active");
        $("#userlitab2").removeClass("active");
        $("#tab3").removeClass("active");
        $("#userlitab3").removeClass("active");

    });
    $('.userlitab3class').click(function (e) {

        BindDropdownUnit();
        BindDropdownLocation();
        BindDropdownUserrole();
        BindAccessgrid();
    });
    function BindDropdownUnit() {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var Type = 'ConditionalDropdown';
        var Srno = '';
        $.ajax({
            url: "/WhitelabelAccessRights/BindDropdownUnit",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type, Srno: Srno
            },
            success: function (response) {
                if (response['UNITDRPJS'].length > 0) {
                    $('#drpUnitCompany').html('');
                    for (var i = 0; i < response['UNITDRPJS'].length; i++) {
                        var opt = new Option(response['UNITDRPJS'][i]['Text'], response['UNITDRPJS'][i]['Value']);
                        $('#drpUnitCompany').append(opt);
                    }
                    $('#drpUnitCompany option:first').attr('selected', 'selected').change();
                }



            }
        });

    }
    function BindDropdownLocation() {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var Type = 'ConditionalDropdown';
        var Srno = '';
        $.ajax({
            url: "/WhitelabelAccessRights/BindDropdownLocation",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type, Srno: Srno
            },
            success: function (response) {
                if (response['UNITDRPJS'].length > 0) {
                    $('#drpLocation').html('');
                    for (var i = 0; i < response['UNITDRPJS'].length; i++) {
                        var opt = new Option(response['UNITDRPJS'][i]['Text'], response['UNITDRPJS'][i]['Value']);
                        $('#drpLocation').append(opt);
                    }
                    $('#drpLocation option:first').attr('selected', 'selected').change();
                }



            }
        });

    }
    function BindDropdownUserrole() {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        var Type = 'DropDown';
        var Srno = '';
        $.ajax({
            url: "/WhitelabelAccessRights/BindDropdownUserrole",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type, Srno: Srno
            },
            success: function (response) {
                if (response['UNITDRPJS'].length > 0) {
                    $('#drpRole').html('');
                    for (var i = 0; i < response['UNITDRPJS'].length; i++) {
                        var opt = new Option(response['UNITDRPJS'][i]['Text'], response['UNITDRPJS'][i]['Value']);
                        $('#drpRole').append(opt);
                    }
                    $('#drpRole option:first').attr('selected', 'selected').change();
                }

                if (response['USERDRPJS'].length > 0) {
                    $('#drpUser').html('');
                    for (var i = 0; i < response['USERDRPJS'].length; i++) {
                        var opt = new Option(response['USERDRPJS'][i]['Text'], response['USERDRPJS'][i]['Value']);
                        $('#drpUser').append(opt);
                    }
                    $('#drpUser option:first').attr('selected', 'selected').change();
                }



            }
        });

    }
    function BindAccessgrid() {
        var tablename = 'dbo._UserRoleMaster';
        var Corporate = '2';
        var Segment = '';
        var PageNo = '1';
        var type = 'Grid';
        var Formcode = '0';
        var Formtabcode = '0';
        var Role = "";
        var Unit = "";
        var Branch = "";
        var Userid = "";

        $('.accessrightul').dataTable({
            "ServerSide": true,
            destroy: true,
            "ajax": {
                "url": "/WhitelabelAccessRights/BindAccessgrid",
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

                }
            },
            "columns": [

                { "data": "srno", className: "hide_cell" },


                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_feature"><i class="text-primary fa fa-cubes"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_accessright"><i class="fa fa-key"></i></a>'
                }
            ]
        });

    }

});
