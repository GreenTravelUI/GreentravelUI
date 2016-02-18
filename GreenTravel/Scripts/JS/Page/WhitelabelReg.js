$(window).unload(function () {

    $('select option').remove();

});

$(document).ready(function () {

  
    BindGrid();
       
    $('.btnSave').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent())) {
            swal('Invalid data found!')
            return false;
        }
        if ($('#txtsrno').val() != "") {
            var srno = $('#txtsrno').val();
        }
        else {
            var srno = '';
        }
        var Corporate = '0';
        var CorpCoOfficialName = $('#txtCmpOfficeName').val();
        var CorpCompanyIndust = $('#drpcompanyIndustry option:selected').val();
        var CompanyType = $('#drpcompanyType option:selected').val();
        var Services = $('#drpServices option:selected').val();
        var BusinessMode = $('#drpBusinessMode option:selected').val();
        var AdminUserName = $('#txtUsername').val();
        var Password = $('#txtConfirmPassword').val();
        var ApplicationTheme = $('#DrpApplicationTheme option:selected').val();
        var ApplicationUrl = $('#txtApplicationURL').val();
        var WebTheme = $('#DrpWebtheme option:selected').val();
        var WebUrl = $('#txtWebURL').val();
        var BaseCurrency = $('#drpBaseCurrency option:selected').val();
        var BaseLanguage = $('#drpBaseLanguage option:selected').val();
        var OtherLanguage = $('#drpOtherLanguage option:selected').val();
        if ($('#txtLogo').val() != null) {
            var Logo = $('#txtLogo').val();
        }
        else {
            var Logo = '';
        }
        var Favicon = $('#txtFavicon').val();
        var OfficialEmail = $('#txtOfficialEmail').val();
        var OfficialPhone = $('#txtOfficialPhone').val();

        var FullSemiWhiteLblcheck = $("#rdoFullWhiteLabel").is(":checked");
        if (FullSemiWhiteLblcheck == true) {
            var FullSemiWhiteLbl = 'monthly';
        }
        else {
            var FullSemiWhiteLbl = 'yearly';
        }
        var CopyrightNote = $('#txtCopyRights').val();
        var CopyrightNoteFlag = $("#chkCopyrightNote").is(":checked");

        var LoginFrmCaption = '';
        var DefaultLogo = '';

        var RefCorpCompany = $('#drpRefferenceCorporateCompany option:selected').val();
        var OtherReference1 = $('#txtOtherRefference1').val();
        var OtherReference2 = $('#txtOtherRefference2').val();
        var Commision = $('#txtCommision').val();
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
               url: "/WhitelabelStep1/insert_Data",
               data: {
                   srno: srno, Corporate: Corporate, CorpCoOfficialName: CorpCoOfficialName, CorpCompanyIndust: CorpCompanyIndust, CompanyType: CompanyType,
                   Services: Services, BusinessMode: BusinessMode, AdminUserName: AdminUserName, Password: Password, ApplicationTheme: ApplicationTheme, ApplicationUrl: ApplicationUrl,
                   WebTheme: WebTheme, WebUrl: WebUrl, BaseCurrency: BaseCurrency, BaseLanguage: BaseLanguage, OtherLanguage: OtherLanguage, Logo: Logo, Favicon: Favicon, OfficialEmail: OfficialEmail,
                   OfficialPhone: OfficialPhone, FullSemiWhiteLbl: FullSemiWhiteLbl, CopyrightNote: CopyrightNote, CopyrightNoteFlag: CopyrightNoteFlag, LoginFrmCaption: LoginFrmCaption,
                   DefaultLogo: DefaultLogo, RefCorpCompany: RefCorpCompany, OtherReference1: OtherReference1, OtherReference2: OtherReference2, Commision: Commision, Attribute1: Attribute1,
                   Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                   Attribute9: Attribute9, Attribute10: Attribute10, EntryDatetime: EntryDatetime, CretedBy: CretedBy, EditedBy: EditedBy, EditDatetime: EditDatetime, CorpcentreBy: CorpcentreBy,
                   UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {
                       console.log(response);
                       if (response['responseText'] == "Record Already Exist!") {
                           swal('Record Already Exist!')
                           $("#btnsavebasic").show();
                           $("#btnupdatebasic").hide();
                       }
                       else {
                           swal('Good job!', 'Record Save Sucessfully!', 'success')
                           $("#btnupdatebasic").show();
                           $("#btnsavebasic").hide();
                       }


                       $("#hdfsrno").val(response['srno']);
                       // alert($("#hdfsrno").val());
                       $("#tab2").addClass("active");
                       $("#tab1").removeClass("active");
                       $("#CreateMaster").addClass("active");
                       $("#Search").removeClass("active");
                       BindGrid();
                   }
               }
           });

    });
    $('#Search').click(function (e) {
        BindGrid();
    });
    $('#CreateCorporate').click(function (e) {
        Dropdown_Bind_Tab1();
    });

    $('.btnclearbasicclass').click(function (e) {
        clearValidations($(this).parent());
        $('input[type="text"]').val('');
        $('input[type="password"]').val('');
        $('.chkCopyrightNotecs').removeAttr('checked');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $("#tab2").addClass("active");
        $("#tab1").removeClass("active");
        $("#CreateMaster").addClass("active");
        $("#Search").removeClass("active");
        $('#btnupdatebasic').hide();
        $('#btndeltebasic').hide();
        $('#btnsavebasic').show();

    });

    $('#btnQuitbasic').click(function (e) {
        $('input[type="text"]').val('');
        $('.chkCopyrightNotecs').removeAttr('checked');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $("#Search").addClass("active");
        $("#tab1").addClass("active");
        $("#tab2").removeClass("active");
        $("#CreateCorporate").removeClass("active");

    });

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
            url: "/WhitelabelStep1/BindDropDown",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {
                if (response['GTINDUTRYS'].length > 0) {
                    $('#drpcompanyIndustry').html('');
                    for (var i = 0; i < response['GTINDUTRYS'].length; i++) {
                        var opt = new Option(response['GTINDUTRYS'][i]['Text'], response['GTINDUTRYS'][i]['Value']);
                        $('#drpcompanyIndustry').append(opt);
                    }
                    $('#drpcompanyIndustry option:first').attr('selected', 'selected').change();
                }
                if (response['GTIndutry'].length > 0) {
                    $('#drpcompanyType').html('');
                    for (var i = 0; i < response['GTIndutry'].length; i++) {
                        var opt = new Option(response['GTIndutry'][i]['Text'], response['GTIndutry'][i]['Value']);
                        $('#drpcompanyType').append(opt);
                    }
                    $('#drpcompanyType option:first').attr('selected', 'selected').change();
                }
                if (response['GTservice'].length > 0) {
                    $('#drpServices').html('');
                    for (var i = 0; i < response['GTservice'].length; i++) {
                        var opt = new Option(response['GTservice'][i]['Text'], response['GTservice'][i]['Value']);
                        $('#drpServices').append(opt);
                    }
                    $('#drpServices option:first').attr('selected', 'selected').change();
                }
                if (response['GTBmode'].length > 0) {
                    $('#drpBusinessMode').html('');
                    for (var i = 0; i < response['GTBmode'].length; i++) {
                        var opt = new Option(response['GTBmode'][i]['Text'], response['GTBmode'][i]['Value']);
                        $('#drpBusinessMode').append(opt);
                    }
                    $('#drpBusinessMode option:first').attr('selected', 'selected').change();
                }
                if (response['GTcurrency'].length > 0) {
                    $('#drpBaseCurrency').html('');
                    for (var i = 0; i < response['GTcurrency'].length; i++) {
                        var opt = new Option(response['GTcurrency'][i]['Text'], response['GTcurrency'][i]['Value']);
                        $('#drpBaseCurrency').append(opt);
                    }
                    $('#drpBaseCurrency option:first').attr('selected', 'selected').change();
                }
                if (response['GTlanguage'].length > 0) {
                    $('.Language').html('');
                    for (var i = 0; i < response['GTlanguage'].length; i++) {
                        var opt = new Option(response['GTlanguage'][i]['Text'], response['GTlanguage'][i]['Value']);
                        $('.Language').append(opt);
                    }
                    $('#drpBaseLanguage option:first').attr('selected', 'selected').change();
                    $('#drpOtherLanguage option:first').attr('selected', 'selected').change();
                }
                if (response['GTCorporate'].length > 0) {
                    $('#drpRefferenceCorporateCompany').html('');
                    for (var i = 0; i < response['GTCorporate'].length; i++) {
                        var opt = new Option(response['GTCorporate'][i]['Text'], response['GTCorporate'][i]['Value']);
                        $('#drpRefferenceCorporateCompany').append(opt);
                    }
                    $('#drpRefferenceCorporateCompany option:first').attr('selected', 'selected').change();
                }
            }
        });
    }
    function BindGrid() {
        var tablename = 'dbo._White_Register_Basic';
        var Corporate = '0';
        var Segment = '';
        var PageNo = '1';
        var type = 'Grid';
        var Formcode = '0';
        var Formtabcode = '0';
        $('#example1').dataTable({
            "ServerSide": true,
            destroy: true,
            "ajax": {
                "url": "/WhitelabelStep1/BindGridView",
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
                 { "data": "Srno", className: "hide_cell" },
                { "data": "CompanyName" },
                { "data": "CompanyIndustry" },
                { "data": "ApplicationURL" },
                { "data": "RefferenceCompany" },
                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_feature"><i class="text-primary fa fa-cubes"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_accessright"><i class="fa fa-key"></i></a>'
                }
            ]
        });
    }

    $("table").delegate(".editor_Step", "click", function () {
        Dropdown_Bind_Tab1();
        $("#SearchMaster").removeClass("active");
        $("#CreateMaster").addClass("active");

        $("#tab1").removeClass("active");
        $("#tab2").addClass("active");
        $('#btnupdatebasic').show();
        $('#btndeltebasic').hide();
        $('#btnsavebasic').hide();
        var tablename = 'dbo._White_Register_Basic';
        var Corporate = '0';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var srno = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax(
         {
             type: "POST",
             url: "/WhitelabelStep1/Edit_data",
             data: {
                 tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
             },
             dataType: 'json',
             success: function (response) {
                 if (response['Whiteregjs'].length > 0) {
                     $("#hdfsrno").val(response['Whiteregjs'][0]['srno']);
                     $('#txtsrnouserpref').val(response['Whiteregjs'][0]['srno']);
                     $('#txtsrnotab4').val(response['Whiteregjs'][0]['srno']);
                     $('#txtsrno').val(response['Whiteregjs'][0]['srno']);
                     $('#txtCmpOfficeName').val(response['Whiteregjs'][0]['CorpCoOfficialName']);
                     $('#drpcompanyIndustry').find('option[value="' + response['Whiteregjs'][0]['CorpCompanyIndust'] + '"]').attr('selected', true).change();
                     //setSelect2Value($('#drpcompanyIndustry'), response['Whiteregjs'][0]['CorpCompanyIndust']);
                     $('#drpcompanyType').find('option[value="' + response['Whiteregjs'][0]['CompanyType'] + '"]').attr('selected', true).change();
                     // setSelect2Value($('#drpcompanyType'), response['Whiteregjs'][0]['CompanyType']);
                     $('#drpServices').find('option[value="' + response['Whiteregjs'][0]['Services'] + '"]').attr('selected', true).change();
                     $('#drpBusinessMode').find('option[value="' + response['Whiteregjs'][0]['BusinessMode'] + '"]').attr('selected', true).change();
                     $('#txtUsername').val(response['Whiteregjs'][0]['AdminUserName']);
                     $('#txtPassword').val(response['Whiteregjs'][0]['Password']);
                     $('#txtConfirmPassword').val(response['Whiteregjs'][0]['Password']);
                     $('#txtOfficialEmail').val(response['Whiteregjs'][0]['OfficialEmail']);
                     $('#txtOfficialPhone').val(response['Whiteregjs'][0]['OfficialPhone']);
                     $('#DrpApplicationTheme').find('option[value="' + response['Whiteregjs'][0]['ApplicationTheme'] + '"]').attr('selected', true).change();
                     $('#txtApplicationURL').val(response['Whiteregjs'][0]['ApplicationUrl']);
                     $('#drpBaseCurrency').find('option[value="' + response['Whiteregjs'][0]['BaseCurrency'] + '"]').attr('selected', true).change();
                     $('#drpBaseLanguage').find('option[value="' + response['Whiteregjs'][0]['BaseLanguage'] + '"]').attr('selected', true).change();
                     $('#txtLogo').val(response['Whiteregjs'][0]['Logo']);
                     $('#DrpWebtheme').find('option[value="' + response['Whiteregjs'][0]['WebTheme'] + '"]').attr('selected', true).change();
                     $('#txtWebURL').val(response['Whiteregjs'][0]['WebUrl']);
                     // $('#drpOtherLanguage').find('option[value="' + response['Whiteregjs'][0]['OtherLanguage'] + '"]').attr('selected', true).change();

                     setSelect2Value($('#drpOtherLanguage'), response['Whiteregjs'][0]['OtherLanguage']);
                     $('#txtFavicon').val(response['Whiteregjs'][0]['Favicon']);
                     var fulllabelwhite = response['Whiteregjs'][0]['FullSemiWhiteLbl'];
                     if (fulllabelwhite == "monthly") {
                         $('#rdoFullWhiteLabel').prop('checked', true);
                     }
                     else {
                         $('#rdoSemiWhiteLabel').prop('checked', true);
                     }
                     var chkCopyrightNotecheck = response['Whiteregjs'][0]['CopyrightNoteFlag'];
                     if (chkCopyrightNotecheck == "True") {

                         document.getElementById("chkCopyrightNote").checked = true;
                     }
                     else {

                         document.getElementById("chkCopyrightNote").checked = false;
                     }

                     $('#txtCopyRights').val(response['Whiteregjs'][0]['CopyrightNote']);
                     $('#drpRefferenceCorporateCompany').find('option[value="' + response['Whiteregjs'][0]['RefCorpCompany'] + '"]').attr('selected', true).change();
                     $('#txtOtherRefference1').val(response['Whiteregjs'][0]['OtherReference1']);
                     $('#txtOtherRefference2').val(response['Whiteregjs'][0]['OtherReference2']);
                     $('#txtCommision').val(response['Whiteregjs'][0]['Commision']);
                     $("#SearchMaster").removeClass("active");
                     $("#CreateMaster").addClass("active");
                     $("#Search").removeClass("active");
                     $("#CreateCorporate").addClass("active");
                 }
             }
         });
    });

    $("table").delegate(".editor_feature", "click", function () {
        var Corporate = $(this).parent().parent().children(':eq(1)').text();
        var srno = '';
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/Encry",
            data: {
                srno: srno, Corporate: Corporate
            },
            dataType: 'json',
            success: function (response) {
                window.location.href = '/WhitelabelStep2/Index/?id=' + response;
            }
        });
    });

    $("table").delegate(".editor_accessright", "click", function () {
        var Corporate = $(this).parent().parent().children(':eq(1)').text();
        window.location.href = '/WhitelabelAccessRights/Index/?id=' + Corporate;

    });

    $('.btnSavemain').click(function (e) {
        e.preventDefault();
        if ($('#txtsrnotab4').val() != "") {
            var srno = $('#txtsrnotab4').val();
        }
        else {
            var srno = '';
        }
        var Corporate = '0';
        var BillingName = $('#txtBillingName').val();
        var BillingContactPerson = $('#txtBillingContactPerson').val();
        var BillingAddress1 = $('#txtBillingAddressLine1').val();
        var BillingAddress2 = $('#txtBillingAddressLine2').val();
        var BillingCity = $('#txtBillingCity').val();
        var BillingState = $('#txtBillingState').val();
        var BillingCountry = $('#txtBillingCountry').val();
        var BillingArea = "0";
        var BillingZipCode = $('#txtBillingZipCode').val();
        var BillingEmail = $('#txtBillingEmail').val();
        var BillingPhone = $('#txtBillingTelephone').val();
        var BillingContactMobile = $('#txtBillingCellPhone').val();
        var Currency = $('#drpmaINCurrency option:selected').val();
        var SupportMode = $('#drpSupportMode').val();
        var FreeSupportPeriod = $('#txtFreeSupportPeriod').val();
        var SupportCostPM = $('#txtSupportCostPerMonth').val();
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
        var EntryDatetime = '';
        var CreatedBy = '';
        var EditedBy = '';
        var EditDatetime = '';
        var CorpcentreBy = '';
        var UnitCorpBy = '';
        var TerminalBy = '';
        var BranchBy = '';

        $.ajax(
           {
               type: "POST",
               url: "/WhitelabelStep1/insert_data_main",
               data: {
                   srno: srno, Corporate: Corporate, BillingName: BillingName, BillingContactPerson: BillingContactPerson, BillingAddress1: BillingAddress1, BillingAddress2: BillingAddress2, BillingCity: BillingCity,
                   BillingState: BillingState, BillingCountry: BillingCountry, BillingArea: BillingArea, BillingZipCode: BillingZipCode, BillingEmail: BillingEmail, BillingPhone: BillingPhone,
                   BillingContactMobile: BillingContactMobile, Currency: Currency, SupportMode: SupportMode, FreeSupportPeriod: FreeSupportPeriod, SupportCostPM: SupportCostPM, Attribute1: Attribute1,
                   Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                   Attribute9: Attribute9, Attribute10: Attribute10, EntryDatetime: EntryDatetime, CreatedBy: CreatedBy, EditedBy: EditedBy, EditDatetime: EditDatetime, CorpcentreBy: CorpcentreBy,
                   UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {
                       swal('Good job!', 'Record Save Sucessfully', 'success')
                       $("#tab1").addClass("active");
                       $("#tab4").removeClass("active");
                   }
               }
           });

    });

    $('#tabuserpreferance').click(function (e) {

        $('#btnUpdateuserpref').hide();
        $('#btnCanceluserpref').hide();

        Dropdown_Bind_Userpreferance_Checkbox();
        Dropdown_Bind_user_preferance();

        if ($('#txtsrnouserpref').val() != "") {
            var srno = $('#txtsrnouserpref').val();
            $('#btnUpdateuserpref').show();
            $('#btnCanceluserpref').show();
            $('#btnSaveuserpref').hide();
            var tablename = 'dbo._White_Register_UserPreferences';
            var Corporate = '0';
            var unit = '0';
            var Formcode = '0';
            var Formtabcode = '0';
            var Type = 'EditMode';
            $.ajax(
             {
                 type: "POST",
                 url: "/WhitelabelStep1/Edit_data_user_preferance",
                 data: {
                     tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
                 },
                 dataType: 'json',
                 success: function (response) {
                     if (response['UserPreferancestep1js'].length > 0) {
                         $('#txtsrnouserpref').val(response['UserPreferancestep1js'][0]['srno']);
                         $('#drpDashboardGadgetPosition').find('option[value="' + response['UserPreferancestep1js'][0]['GadgetPosition'] + '"]').attr('selected', true).change();
                         var chkloop = response['UserPreferancestep1js'][0]['OtherPreferences'].toString().split(",");
                         $.each(chkloop, function () {
                             $("input[value='" + this + "']").prop('checked', true);
                         });
                     }
                 }
             });
        }
    });

    function Dropdown_Bind_Userpreferance_Checkbox() {

        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '0';
        var Branch = '0';
        var userid = '0';
        var Ip = '';
        var Type = 'ChkBox';
        var html = "";
        $.ajax({
            url: "/WhitelabelStep1/BindDropDownUserpreferanceCheckbox",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {

                $("#userperferancechk").html('');
                if (response['WRcheckbox'].length > 0) {
                    for (var i = 0; i < response['WRcheckbox'].length; i++) {
                        html = html + '<div class="col-md-6 form-marings">' +
                                '<span><input type="checkbox" value="' + response['WRcheckbox'][i]['Value'] + '"/></span>' + response['WRcheckbox'][i]['Text'] +
                               '</div>'
                    }
                    $(html).appendTo($("#userperferancechk"))
                }


            }
        });
    }
    function Dropdown_Bind_user_preferance() {

        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '0';
        var Branch = '0';
        var userid = '0';
        var Ip = '';
        var Type = 'DropDown';
        var html = "";
        $.ajax({
            url: "/WhitelabelStep1/BindDropDownUserpreferancedropdown",
            type: "POST",
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {

                if (response['UPdrp'].length > 0) {

                    $('#drpDashboardGadgetPosition').html('');
                    for (var i = 0; i < response['UPdrp'].length; i++) {
                        var opt = new Option(response['UPdrp'][i]['Text'], response['UPdrp'][i]['Value']);

                        $('#drpDashboardGadgetPosition').append(opt);
                    }
                    $('#drpDashboardGadgetPosition option:first').attr('selected', 'selected').change();
                }


            }
        });

    }
    $('.btnSaveuserpref').click(function (e) {
        e.preventDefault();
        if ($('#txtsrnouserpref').val() != "") {
            var srno = $('#txtsrnouserpref').val();
        }
        else {
            var srno = '';
        }
        var Corporate = $("#hdfsrno").val();
        var UserId = '0';
        var GadgetPosition = $('#drpDashboardGadgetPosition option:selected').val();
        var pagerow = '10';
        var OtherPreferences = '';
        var index = 0;
        $("#userperferancechk input").each(function () {
            if ($(this).prop('checked') == true) {
                if (index != 0) {
                    OtherPreferences = OtherPreferences + ',';

                }


                OtherPreferences += $(this).val().trim();
                index = 1;
            }
        });
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
        var EntryDatetime = '';
        var CreatedBy = '0';
        var EditedBy = '0';
        var EditDatetime = '';
        var CorpcentreBy = '0';
        var UnitCorpBy = '0';
        var TerminalBy = '0';
        var BranchBy = '0';
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/insert_Data_user_preferance",
            data: {
                srno: srno, Corporate: Corporate, UserId: UserId, GadgetPosition: GadgetPosition, OtherPreferences: OtherPreferences,
                pagerow: pagerow, Attribute1: Attribute1, Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                Attribute9: Attribute9, Attribute10: Attribute10, EntryDatetime: EntryDatetime, CreatedBy: CreatedBy, EditedBy: EditedBy, EditDatetime: EditDatetime, CorpcentreBy: CorpcentreBy,
                UnitCorpBy: UnitCorpBy, TerminalBy: TerminalBy, BranchBy: BranchBy
            },
            dataType: 'json',
            success: function (response) {
                if (response != null && response.success) {
                    swal('Good job!', 'Record Save Sucessfully', 'success')
                    $("#btnUpdateuserpref").show();
                    $("#btnSaveuserpref").hide();
                }
            }
        });
    });
    $('#btnclearuserpref').click(function (e) {
        $('input:checkbox').removeAttr('checked');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
    });

    $("#btnquituserpref").click(function (e) {

        $("#tab1").addClass("active");
        $("#tabuserpreferance").removeClass("active");
        $("#tab5").removeClass("active");
        $("#Search").addClass("active");

    });
    $(".btnSavebillingmain").click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).parent())) {
            swal('Invalid data found!')
            return false;
        }
        if ($('#txtsrnotab4').val() != "") {
            var srno = $('#txtsrnotab4').val();
        }
        else {
            var srno = '';
        }

        var Corporate = $("#hdfsrno").val();
        var BillingName = $('#txtBillingName').val();
        var BillingContactPerson = $('#txtBillingContactPerson').val();
        var BillingAddress1 = $('#txtBillingAddressLine1').val();
        var BillingAddress2 = $('#txtBillingAddressLine2').val();
        var BillingCity = $('#drpbillingCity option:selected').val();
        var BillingState = $('#drpbillingState option:selected').val();
        var BillingCountry = $('#drpbillingcountry option:selected').val();
        var BillingArea = '';
        var BillingZipCode = $('#txtBillingZipCode').val();
        var BillingEmail = $('#txtBillingEmail').val();
        var BillingPhone = $('#txtBillingTelephone').val();
        var BillingContactMobile = $('#txtBillingCellPhone').val();
        var Currency = $('#drpmaINCurrency option:selected').val();
        //var SupportMode = $('#drpSupportMode option:selected').val();
        var SupportMode = getMultiselectValue($('#drpSupportMode'));
        var FreeSupportPeriod = $('#txtFreeSupportPeriod').val();
        var SupportCostPM = $('#txtSupportCostPerMonth').val();
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
               url: "/WhitelabelStep1/insert_BillingMaintencae",
               data: {
                   "srno": srno, "Corporate": Corporate, "BillingName": BillingName, "BillingContactPerson": BillingContactPerson, "BillingAddress1": BillingAddress1,
                   "BillingAddress2": BillingAddress2, "BillingCity": BillingCity, "BillingState": BillingState, "BillingCountry": BillingCountry, "BillingArea": BillingArea,
                   "BillingZipCode": BillingZipCode, "BillingEmail": BillingEmail, "BillingPhone": BillingPhone, "BillingContactMobile": BillingContactMobile, "Currency": Currency,
                   "SupportMode": SupportMode, "FreeSupportPeriod": FreeSupportPeriod, "SupportCostPM": SupportCostPM,
                   "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                   "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {
                       swal('Good job!', 'Record Save Sucessfully!', 'success')
                       $("#btnUpdateBilling").show();
                       $("#btnSavebilling").hide();
                   }
               }
           });
    });


    $("#Tab4").click(function (e) {
        Bindtab4dropdown();
       

        if ($('#txtsrno').val() != "") {
            $("#btnUpdateBilling").show();
            $("#btnSavebilling").hide();

            var tablename = 'dbo._White_Register_MaintanenceSupport';
            var Corporate = $("#hdfsrno").val();
            var unit = '0';
            var Formcode = '0';
            var Formtabcode = '0';
            var srno = $('#txtsrnotab4').val();
            var Type = 'EditMode';
            $.ajax(
             {
                 type: "POST",
                 url: "/WhitelabelStep1/Edit_data_billing",

                 data: {
                     tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
                 },
                 dataType: 'json',
                 success: function (response) {
                     if (response['Whiteregjs'].length > 0) {
                         console.log(response['Whiteregjs']);
                         $('#txtsrnotab4').val(response['Whiteregjs'][0]['srno']);
                         $('#txtBillingName').val(response['Whiteregjs'][0]['BillingName']);
                         $('#txtBillingContactPerson').val(response['Whiteregjs'][0]['BillingContactPerson']);
                         $('#txtBillingAddressLine1').val(response['Whiteregjs'][0]['BillingAddress1']);
                         $('#txtBillingAddressLine2').val(response['Whiteregjs'][0]['BillingAddress2']);
                         $('#drpbillingcountry').find('option[value="' + response['Whiteregjs'][0]['BillingCountry'] + '"]').attr('selected', true).change();
                         $('#drpbillingState').find('option[value="' + response['Whiteregjs'][0]['BillingState'] + '"]').attr('selected', true).change();
                         setSelect2Value($('#drpbillingCity'), response['Whiteregjs'][0]['BillingCity']);
                         $('#txtBillingZipCode').val(response['Whiteregjs'][0]['BillingZipCode']);
                         $('#txtBillingEmail').val(response['Whiteregjs'][0]['BillingEmail']);
                         $('#txtBillingTelephone').val(response['Whiteregjs'][0]['BillingPhone']);
                         $('#txtBillingCellPhone').val(response['Whiteregjs'][0]['BillingContactMobile']);
                         // setSelect2Value($('#drpSupportMode'), response['Whiteregjs'][0]['SupportMode']);
                         var dataarray = response['Whiteregjs'][0]['SupportMode'].split(",");
                         console.log(dataarray);
                         // $("#drpSupportMode").val(dataarray);
                         console.log(dataarray.length);

                         //var values = dataarray;
                         //$.each(values.split(","), function (i, e) {
                         //    $("#drpSupportMode option[value='" + e + "']").prop("selected", true);
                         //});

                         $('#txtFreeSupportPeriod').val(response['Whiteregjs'][0]['FreeSupportPeriod']);
                         $('#txtSupportCostPerMonth').val(response['Whiteregjs'][0]['SupportCostPM']);
                         setSelect2Value($('#drpmaINCurrency'), response['Whiteregjs'][0]['Currency']);

                     }
                 }
             });


        }
        else {
            $("#btnUpdateBilling").hide();
            $("#btnSavebilling").show();
        }


    });

    $("#drpbillingcountry").change(function (e) {
        Bindbillingcountry();

    });

    $("#drpbillingState").change(function (e) {
        Bindbillingstate();
    });
    function Bindtab4dropdown() {

        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '0';
        var Branch = '0';
        var userid = '0';
        var Ip = '';
        var Type = 'DropDown';
        var html = "";
        $.ajax({
            url: "/WhitelabelStep1/Bindtab4dropdown",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {

                if (response['UPdrp'].length > 0) {

                    $('#drpSupportMode').html('');
                    for (var i = 0; i < response['UPdrp'].length; i++) {
                        var opt = new Option(response['UPdrp'][i]['Text'], response['UPdrp'][i]['Value']);

                        $('#drpSupportMode').append(opt);
                    }
                    $('#drpSupportMode option:first').attr('selected', 'selected').change();
                }
                if (response['UPdrpc'].length > 0) {

                    $('#drpmaINCurrency').html('');
                    for (var i = 0; i < response['UPdrpc'].length; i++) {
                        var opt = new Option(response['UPdrpc'][i]['Text'], response['UPdrpc'][i]['Value']);

                        $('#drpmaINCurrency').append(opt);
                    }
                    $('#drpmaINCurrency option:first').attr('selected', 'selected').change();
                }

                if (response['Ucountry'].length > 0) {

                    $('#drpbillingcountry').html('');
                    for (var i = 0; i < response['Ucountry'].length; i++) {
                        var opt = new Option(response['Ucountry'][i]['Text'], response['Ucountry'][i]['Value']);

                        $('#drpbillingcountry').append(opt);
                    }
                    $('#drpbillingcountry option:first').attr('selected', 'selected').change();
                }



            }
        });


    }
    function Bindbillingcountry() {
        var srno = '0';
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '0';
        var Branch = '0';
        var userid = '0';
        var Ip = '';
        var Type = 'ConditionalDropdown';
        var field1 = $('#drpbillingcountry option:selected').val();
        var field2 = '';
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = 'drpState';
        $.ajax({
            url: "/WhitelabelStep1/Bindbillingcountry",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type, srno: srno, Field1: field1,
                Field2: field2, Field3: field3, Field4: field4, Field5: field5, Control: Control
            },
            success: function (response) {

                if (response['UPdrp'].length > 0) {

                    $('#drpbillingState').html('');
                    for (var i = 0; i < response['UPdrp'].length; i++) {
                        var opt = new Option(response['UPdrp'][i]['Text'], response['UPdrp'][i]['Value']);

                        $('#drpbillingState').append(opt);
                    }
                    $('#drpbillingState option:first').attr('selected', 'selected').change();
                }



            }
        });

    }
    function Bindbillingstate() {
        var srno = '0';
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '0';
        var Branch = '0';
        var userid = '0';
        var Ip = '';
        var Type = 'ConditionalDropdown';
        var field1 = '';
        var field2 = $('#drpbillingState option:selected').val();
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = 'drpModule';
        $.ajax({
            url: "/WhitelabelStep1/Bindbillingstate",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type, srno: srno, Field1: field1,
                Field2: field2, Field3: field3, Field4: field4, Field5: field5, Control: Control
            },
            success: function (response) {

                if (response['UPdrp'].length > 0) {

                    $('#drpbillingCity').html('');
                    for (var i = 0; i < response['UPdrp'].length; i++) {
                        var opt = new Option(response['UPdrp'][i]['Text'], response['UPdrp'][i]['Value']);

                        $('#drpbillingCity').append(opt);
                    }
                    $('#drpbillingCity option:first').attr('selected', 'selected').change();
                }



            }
        });

    }


    $('.btnbillingclear').click(function (e) {

        clearValidations($(this).parent());
        $('input[type="text"]').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();

        });

        $("#btnUpdateBilling").hide();
        $("#btnSavebilling").show();

    });

    $('.btnbillingquit').click(function (e) {

        $("#Tab4").removeClass("active");
        $("#tab4").removeClass("active");
        $("#tab1").addClass("active");
        $("#Search").addClass("active");
    });

    $("#Tab3").click(function (e) {
        Binddropdowntab3();
    });

    function Binddropdowntab3() {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = '2';
        var unit = '0';
        var Branch = '0';
        var userid = '0';
        var Ip = '';
        var Type = 'DropDown';
        var html = "";
        $.ajax({
            url: "/WhitelabelStep1/Binddropdowntab3",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {

                if (response['UPdrp'].length > 0) {

                    $('#drpCloudProvider').html('');
                    for (var i = 0; i < response['UPdrp'].length; i++) {
                        var opt = new Option(response['UPdrp'][i]['Text'], response['UPdrp'][i]['Value']);

                        $('#drpCloudProvider').append(opt);
                    }
                    $('#drpCloudProvider option:first').attr('selected', 'selected').change();
                }
                if (response['UPdrpc'].length > 0) {

                    $('#drpCloudServerIP').html('');
                    for (var i = 0; i < response['UPdrpc'].length; i++) {
                        var opt = new Option(response['UPdrpc'][i]['Text'], response['UPdrpc'][i]['Value']);

                        $('#drpCloudServerIP').append(opt);
                    }
                    $('#drpCloudServerIP option:first').attr('selected', 'selected').change();
                }

                if (response['Ucountry'].length > 0) {

                    $('#drpCDNProvider').html('');
                    for (var i = 0; i < response['Ucountry'].length; i++) {
                        var opt = new Option(response['Ucountry'][i]['Text'], response['Ucountry'][i]['Value']);

                        $('#drpCDNProvider').append(opt);
                    }
                    $('#drpCDNProvider option:first').attr('selected', 'selected').change();
                }

                if (response['Ucurrency'].length > 0) {

                    $('#drpCurrencytab3').html('');
                    for (var i = 0; i < response['Ucurrency'].length; i++) {
                        var opt = new Option(response['Ucurrency'][i]['Text'], response['Ucurrency'][i]['Value']);

                        $('#drpCurrencytab3').append(opt);
                    }
                    $('#drpCurrencytab3 option:first').attr('selected', 'selected').change();
                }


                if (response['UPdrpc4'].length > 0) {

                    $('#drpPaymentCurrency').html('');
                    for (var i = 0; i < response['UPdrpc4'].length; i++) {
                        var opt = new Option(response['UPdrpc4'][i]['Text'], response['UPdrpc4'][i]['Value']);

                        $('#drpPaymentCurrency').append(opt);
                    }
                    $('#drpPaymentCurrency option:first').attr('selected', 'selected').change();
                }
                if (response['UPdrp5'].length > 0) {

                    $('#drpPaymentMode').html('');
                    for (var i = 0; i < response['UPdrp5'].length; i++) {
                        var opt = new Option(response['UPdrp5'][i]['Text'], response['UPdrp5'][i]['Value']);

                        $('#drpPaymentMode').append(opt);
                    }
                    $('#drpPaymentMode option:first').attr('selected', 'selected').change();
                }

                if (response['Ucountry6'].length > 0) {

                    $('#drpBillingCycle').html('');
                    for (var i = 0; i < response['Ucountry6'].length; i++) {
                        var opt = new Option(response['Ucountry6'][i]['Text'], response['Ucountry6'][i]['Value']);

                        $('#drpBillingCycle').append(opt);
                    }
                    $('#drpBillingCycle option:first').attr('selected', 'selected').change();
                }

                if (response['Ucurrency7'].length > 0) {

                    $('#drpBillingFromCompany').html('');
                    for (var i = 0; i < response['Ucurrency7'].length; i++) {
                        var opt = new Option(response['Ucurrency7'][i]['Text'], response['Ucurrency7'][i]['Value']);

                        $('#drpBillingFromCompany').append(opt);
                    }
                    $('#drpBillingFromCompany option:first').attr('selected', 'selected').change();
                }


            }
        });


    }

});
