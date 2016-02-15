
$(window).unload(function () {
    $('select option').remove();
});

$(document).ready(function () {

    // To Fill Corporate drop - Down
    FillDropDown_Corporate();
    setSelect2Value($('#DrpLocationTab2'), '0');
    // Drop-down  Corporate selected Index change event
    $("#drpCorporate").change(function () {
        // To Clear dropdown
        $('#DrpLocationTab2').html('');
        setSelect2Value($('#DrpLocationTab2'), '0');
        FillConditional_Base($('#drpCorporate option:selected').val(), 0, 0, 0, 'DrpUnitTab2');

    });

    // Drop-down Unit  selected Index change event
    $("#DrpUnitTab2").change(function () {
        FillConditional_Base($('#drpCorporate option:selected').val(), $('#DrpUnitTab2 option:selected').val(), 0, 0, 'DrpLocationTab2');
    });

    $('.usertab1gridclass').click(function (e) {
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


})


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


