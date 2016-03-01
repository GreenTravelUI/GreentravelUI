var Message;
var EventClass;
var duplicate = '';
var abc = 0;
$(window).unload(function () {
    $('select option').remove();
});

$(document).ready(function () {

    BindGrid();

    Dropdown_Bind_Tab1();

    //Basic Information save Button
    $('.btnSave').click(function (e) {
       
        e.preventDefault();
        if (duplicate != "") {
           swal(
                'Same Record Already Exits',
                '',
                'error'
              )
            return false;
        }


        if (!validateForm($(this).closest("form"))) {
            swal(
                'Invalid data found!',
                '',
                'error'
              )
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
        var CopyrightNoteFlag = false;
        if ($("#chkCopyrightNote").parent().hasClass('checked')) {
            CopyrightNoteFlag = true;
        }
        var LoginFrmCaption = $('#txtLoginFrmCaption').val();
        var DefaultLogo = '';
        var RefCorpCompany = $('#drpRefferenceCorporateCompany option:selected').val();
        var OtherReference1 = $('#txtOtherRefference1').val();
        var OtherReference2 = $('#txtOtherRefference2').val();
        var Commision = $('#txtCommision').val();
        var Facebook = $('#txtfacebook').val();
        var Twitter = $('#txttwitter').val();
        var GooglePlus = $('#txtgoogleplus').val();
        var WebPortal = $('#txtwebportal').val();
        var BackgroundImg = $('#txtbackgroundimg').val();
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
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/insert_Data",
            data: {
                srno: srno, Corporate: Corporate, CorpCoOfficialName: CorpCoOfficialName, CorpCompanyIndust: CorpCompanyIndust, CompanyType: CompanyType,
                Services: Services, BusinessMode: BusinessMode, AdminUserName: AdminUserName, Password: Password, ApplicationTheme: ApplicationTheme, ApplicationUrl: ApplicationUrl,
                WebTheme: WebTheme, WebUrl: WebUrl, BaseCurrency: BaseCurrency, BaseLanguage: BaseLanguage, OtherLanguage: OtherLanguage, Logo: Logo, Favicon: Favicon, OfficialEmail: OfficialEmail,
                OfficialPhone: OfficialPhone, FullSemiWhiteLbl: FullSemiWhiteLbl, CopyrightNote: CopyrightNote, CopyrightNoteFlag: CopyrightNoteFlag, LoginFrmCaption: LoginFrmCaption,
                DefaultLogo: DefaultLogo, RefCorpCompany: RefCorpCompany, OtherReference1: OtherReference1, OtherReference2: OtherReference2, Commision: Commision,
                Facebook: Facebook, Twitter: Twitter, GooglePlus: GooglePlus, WebPortal: WebPortal, BackgroundImg: BackgroundImg, Attribute1: Attribute1,
                Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                Attribute9: Attribute9, Attribute10: Attribute10
            },
            dataType: 'json',
            success: function (response) {
                $("#hdfsrno").val(response['srno']);
                $('#txtsrno').val(response['srno']);
                
                $('#txtsrnouserpref').val(response['srno']);
                $('#txtsrnotab4').val(response['srno']);
                $('#txtsrnotab3').val(response['srno']);
                $('#txtsrnotab6').val(response['srno']);
                Message = response.responseText;
                EventClass = response.Event;
                if (EventClass != 'error') {
                    $('#btnupdatebasic').show();
                    $('#btnsavebasic').hide();
                }
                $('.tab3Formname').show();
                $('.tab3Formname').text('-' + $('#txtCmpOfficeName').val());
                swal(Message,'', EventClass);

            }
        }).done(function () {
            $("#tab2").addClass("active");
            $("#tab1").removeClass("active");
            $("#CreateMaster").addClass("active");
            $("#Search").removeClass("active");
            BindGrid();
          //  Dropdown_Bind_Tab1();
        });
    });

    //User Preference
    $('.btnSaveuserpref').click(function (e) {
        e.preventDefault();
      
        if (!validateForm($(this).closest("form"))) {
            swal(
                'Invalid data found!',
                '',
                'error'
              )
            return false;
        }
        if ($('#txtsrnouserpref').val() != "") {
            var srno = $('#txtsrnouserpref').val();
        }
        else {
            var srno = $("#hdfsrno").val();;
        }
        var Corporate = $("#hdfsrno").val();
        var UserId = '0';
        var GadgetPosition = $('#drpDashboardGadgetPosition option:selected').val();
        var pagerow = '10';
        var OtherPreferences = '';
        var index = 0;
        $("#userperferancechk").find('.checker').each(function () {
            if ($(this).children().hasClass('checked')) {
                if (OtherPreferences == '') {
                    OtherPreferences = $(this).children().children().attr('id');
                } else {
                    OtherPreferences += ',' + $(this).children().children().attr('id');
                }
                if (index != 0) {
                    OtherPreferences = OtherPreferences + ',';
                }
            }
        });
        if (OtherPreferences == '') {
            swal(
              'Please Select Atleast One Checkbox',
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
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/insert_Data_user_preferance",
            data: {
                srno: srno, Corporate: Corporate, UserId: UserId, GadgetPosition: GadgetPosition, OtherPreferences: OtherPreferences,
                pagerow: pagerow, Attribute1: Attribute1, Attribute2: Attribute2, Attribute3: Attribute3, Attribute4: Attribute4, Attribute5: Attribute5, Attribute6: Attribute6, Attribute7: Attribute7, Attribute8: Attribute8,
                Attribute9: Attribute9, Attribute10: Attribute10
            },
            dataType: 'json',
            success: function (response) {
                Message = response.responseText;
                EventClass = response.Event;
                if (EventClass != 'error') {
                    $("#btnUpdateuserpref").show();
                    $("#btnSaveuserpref").hide();
                }
                swal( Message,'', EventClass);
            }
        });
    });

    //Billing/Maintanence
    $(".btnSavebillingmain").click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).closest("form"))) {
            swal(
                'Invalid data found!',
                '',
                'error'
              )
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
        $.ajax({
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
                Message = response.responseText;
                EventClass = response.Event;
                if (EventClass != 'error') {
                    $("#btnUpdateBilling").show();
                    $("#btnSavebilling").hide();
                }
                swal(Message,'', EventClass);
            }
        });
    });

    // Password Authentication 
    $('.btnsavepasswordauth').click(function (e) {
        e.preventDefault();
        if (!validateForm($(this).closest("form"))) {
            swal(
                'Invalid data found!',
                '',
                'error'
              )
            return false;
        }
        if ($('#txtsrnotab6').val() != "") {
            var srno = $('#txtsrnotab6').val();
        }
        else {
            var srno = '';
        }
        var Corporate = $("#hdfsrno").val();
        var CapitalCharNumber = $('#txtrequiredcapitalcharacters').val();
        var RequiredNumeric = $('#txtrequirednumeric').val();
        var SpecialCharNumber = $('#txtrequiredspecialcharacter').val();
        var EncriptionKey = $('#drpencryptkey option:selected').val();
        var PasswordMinLength = $('#txtpasswordminimumlength').val();
        var PasswordExpiryDays = $('#txtpasswordexpirydays').val();
        var UserLoginDay = ''; // remove
        var NumberOfAttempts = $('#txtnumberofattemptslock').val();
        var NumberOfAttemptsTime = ''; //remove
        var OTPExpiryTime = $('#txtotpexpirytime').val();
        var LastSamePassword = $('#txtlastsamepassword').val();
        var UnableCaptcha = $('#txtcaptchaenableattempt').val();
        var AutoLockScreen = ''; // remove
        var UserUnlockMinut = $('#txtuserlockunlockminuts').val();
        var Continuenumber = $('#txtcontinuenumber').val();
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
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/insert_PasswordAuth",
            data: {
                "srno": srno, "Corporate": Corporate,
                "CapitalCharNumber": CapitalCharNumber, "RequiredNumeric": RequiredNumeric, "SpecialCharNumber": SpecialCharNumber,
                "EncriptionKey": EncriptionKey, "PasswordMinLength": PasswordMinLength, "PasswordExpiryDays": PasswordExpiryDays,
                "UserLoginDay": UserLoginDay, "NumberOfAttempts": NumberOfAttempts, "NumberOfAttemptsTime": NumberOfAttemptsTime,
                "OTPExpiryTime": OTPExpiryTime, "LastSamePassword": LastSamePassword, "UnableCaptcha": UnableCaptcha,
                "AutoLockScreen": AutoLockScreen, "UserUnlockMinut": UserUnlockMinut, "Continuenumber": Continuenumber,
                "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
            },
            dataType: 'json',
            success: function (response) {
                Message = response.responseText;
                EventClass = response.Event;
                if (EventClass != 'error') {
                    $("#btnUpdatepassword").show();
                    $("#btnSavepassword").hide();
                }
                swal(Message,'', EventClass);
            }
        });


    });

    //Hosting / Subscription
    $(".btnsavetab3class").click(function (e) {
        e.preventDefault();
             
        if (!validateForm($(this).closest("form"))) {
            swal(
                'Invalid data found!',
                '',
                'error'
              )
            return false;
        }
        if ($('#txtsrnotab3').val() != "") {
            var srno = $('#txtsrnotab3').val();
        }
        else {
            var srno = '';
        }
        var Corporate = $("#hdfsrno").val();
        var CloudProvider = $('#drpCloudProvider option:selected').val();
        var CloudServerIp = $('#drpCloudServerIP option:selected').val();
        var CloudDiskSpace = $('#txtCloudDiskSpace').val();
        var TransactionCount = $('#txtTrasactionCount').val();
        var IpRestrictedAccess = $('#txtipristrictedaccess').val();
        var CdnProvider = $('#drpCDNProvider option:selected').val();
        var CdnSpace = $('#txtCDNSpace').val();
        var HostingCost = $('#txtHostingCostPerMonth').val();
        var CostPerMonth = false;
        if ($("#chkhostingcostnotincluded").parent().hasClass('checked')) {
            CostPerMonth = true;
        }
        var Currency = $('#drpCurrencytab3 option:selected').val();
        var PlanName = $('#txtPlanName').val();
        var HostingCostPM = $('#txtCostPerMonth').val();
        var SubscriptionType = '';
        // var FreeFlag = $('#chkfreeflag').val();
        var FreeFlag = false;
        if ($("#chkfreeflag").parent().hasClass('checked')) {
            FreeFlag = true;
        }
        var NumberOfUsers = $('#txtNumberofUsers').val();
        var SubscriptionFromDate = $('#txtSubscriptionFromDate').val();
        var SubscriptionToDate = $('#txtSubscriptionToDate').val();
        var BillingCycle = $('#drpBillingCycle option:selected').val();
        var BillingFromCompany = $('#drpBillingFromCompany option:selected').val();
        var PaymentCurrency = $('#drpPaymentCurrency option:selected').val();
        var AmountPUPM = $('#txtAmountPerUserPerMonth').val();
        var PaymentMode = $('#drpPaymentMode option:selected').val();
        var FirstPayDate = $('#txtFirstPaymentDate').val();
        var GracePeriod = $('#txtGracePeriod').val();
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
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/insert_Hosting",
            data: {
                "srno": srno, "Corporate": Corporate,
                "CloudProvider": CloudProvider, "CloudServerIp": CloudServerIp, "CloudDiskSpace": CloudDiskSpace,
                "TransactionCount": TransactionCount, "IpRestrictedAccess": IpRestrictedAccess, "CdnProvider": CdnProvider,
                "CdnSpace": CdnSpace, "HostingCost": HostingCost, "CostPerMonth": CostPerMonth, "HostingCostPM": HostingCostPM, "Currency": Currency,
                "PlanName": PlanName, "SubscriptionType": SubscriptionType, "FreeFlag": FreeFlag, "NumberOfUsers": NumberOfUsers,
                "SubscriptionFromDate": SubscriptionFromDate, "SubscriptionToDate": SubscriptionToDate, "BillingCycle": BillingCycle,
                "BillingFromCompany": BillingFromCompany, "PaymentCurrency": PaymentCurrency, "AmountPUPM": AmountPUPM,
                "PaymentMode": PaymentMode, "FirstPayDate": FirstPayDate, "GracePeriod": GracePeriod, "Attribute1": Attribute1, "Attribute2": Attribute2, "Attribute3": Attribute3, "Attribute4": Attribute4, "Attribute5": Attribute5, "Attribute6": Attribute6,
                "Attribute7": Attribute7, "Attribute8": Attribute8, "Attribute9": Attribute9, "Attribute10": Attribute10
            },
            dataType: 'json',
            success: function (response) {
                
                if (response != null) {
                   
                    Message = response.responseText;
                    EventClass = response.Event;
                    if (EventClass != 'error') {
                        $("#btnUpdatetab3").show();
                        $("#btnSavetab3").hide();
                    
                    }
                    swal(Message,'', EventClass);

                }
            }
        });
    });

    //Tab  Click
    $('#Search').click(function (e) {
        clearalltab();
        BindGrid();
    });

    $('#CreateCorporate').click(function (e) {
    });

    $('#tabuserpreferance').click(function (e) {
        if ($('#txtsrnouserpref').val() != '') {
            Dropdown_Bind_user_preferance();
            Userprefedit();
        }
        else {
            e.preventDefault();
            swal('Please Edit Data');
            Quitform();
            return false;
        }
    });

    $("#Tab3").click(function (e) {
        if ($('#txtsrnotab3').val() != '') {
            Binddropdowntab3();
            hostingedit();
            subcribedit();
        }
        else {
            e.preventDefault();
            swal('Please Edit Data');
            Quitform();
            return false;
        }
    });

    $("#Tab4").click(function (e) {
        if ($('#txtsrnotab4').val() != '') {
            Bindtab4dropdown();
            billingedit();
        }
        else {
            e.preventDefault();
            swal('Please Edit Data');
            Quitform();
            return false;
        }
    });

    $("#Tab6").click(function (e) {
        if ($('#txtsrnotab6').val() != '') {
            Binddropdowntab6();
            PasswordEdit();
        }
        else {
            e.preventDefault();
            swal('Please Edit Data');
            Quitform();
            return false;
        }
    });

    //Clear  Button 
    $('.btnclearbasicclass').click(function (e) {
        clearValidations($(this).closest("form"));
        $('input[type="text"]').val('');
        $('input[type="password"]').val('');
        //$('.chkCopyrightNotecs').removeAttr('checked');
        $('.chkCopyrightNotecs').parent().removeClass("checked");
        $('.chkCopyrightNotecs').removeProp("checked");
        $('.Dropdown').each(function () {
            setSelect2Value($(this), "0");
        });
        //$("#tab2").addClass("active");
       // $("#tab1").removeClass("active");
       // $("#CreateMaster").addClass("active");
       // $("#Search").removeClass("active");
        $('#btnupdatebasic').hide();
        $('#btndeltebasic').hide();
        $('#btnsavebasic').show();
        $('.tab3Formname').hide();

    });

    $('#btnQuitbasic').click(function (e) {
        $('.btnclearbasicclass').trigger("click");
        $('input[type="text"]').val('');
        $('#btnupdatebasic').hide();
        $('#btnsavebasic').show();
        $('.chkCopyrightNotecs').removeAttr('checked');
        $('.Dropdown').each(function () {
            setSelect2Value($(this), "0");
        });
        BindGrid();
        $("#Search").addClass("active");
        $("#tab1").addClass("active");
        $("#tab2").removeClass("active");
        $("#CreateCorporate").removeClass("active");
        $('.tab3Formname').hide();

    });

    //User Prefernce Clear and Quit 
    $('#btnclearuserpref').click(function (e) {
        clearValidations($(this).closest("form"));
        $('#userperferancechk').children().children().children().removeClass('checked');
        $('.dropclear').each(function () {
            setSelect2Value($(this), '0');
        });
        $('.tab3Formname').hide();
    });

    $("#btnquituserpref").click(function (e) {
        clearValidations($(this).closest("form"));
        $('.btnclearbasicclass').trigger("click");
        $('#userperferancechk').children().children().children().removeClass('checked');
        $('.dropclear').each(function () {
            setSelect2Value($(this), '0');
        });

        $('input[type="text"]').val('');

        BindGrid();
        $('#btnUpdateuserpref').hide();
        $('#btnSaveuserpref').show();
        $("#tab1").addClass("active");
        $("#tabuserpreferance").removeClass("active");
        $("#tab5").removeClass("active");
        $("#Search").addClass("active");
        $('.tab3Formname').hide();
        $('#btnupdatebasic').hide();
        $('#btnsavebasic').show();
    });

    //Billing Clear and Quit
    $('.btnbillingclear').click(function (e) {
        clearValidations($(this).closest("form"));
        $('input[type="text"]').val('');
        $('.Dropdown').each(function () {
            var attr = $(this).attr('multiple');
            if (typeof attr !== typeof undefined && attr !== false) {
                resetMultiselectValues($(this));
            } else {
                setSelect2Value($(this), '0');
            }
        });
        $("#btnUpdateBilling").hide();
        $("#btnSavebilling").show();
        $('.tab3Formname').hide();
    });

    $('.btnbillingquit').click(function (e) {
        $('.btnbillingclear').trigger("click");
        $('.btnclearbasicclass').trigger("click");
        $("#Tab4").removeClass("active");
        $("#tab4").removeClass("active");
        $("#tab1").addClass("active");
        $("#Search").addClass("active");
        $('.tab3Formname').hide();
        $('input[type="text"]').val('');
        BindGrid();
        $('#btnupdatebasic').hide();
        $('#btnsavebasic').show();
    });
    //Hosting and  Subcri.
    $("#btnQuittab3").click(function (e) {
        clearValidations($(this).closest("form"));
        $('.btnclearbasicclass').trigger("click");
        $("#tab3").removeClass("active");
        $("#Tab3").removeClass("active");
        $('.tab3Formname').hide();
        $('input[type="text"]').val('');

        //$('#chkfreeflag').parent().removeClass("checked");
        //$('#chkfreeflag').removeProp("checked");
        //$('#chkhostingcostnotincluded').parent().removeClass("checked");
        //$('#chkhostingcostnotincluded').removeProp("checked");
        
        $('#chkfreeflag').attr('checked', false);

        BindGrid();
        $('#chkfreeflag').parent().removeClass('checked');
        $('#chkhostingcostnotincluded').attr('checked', false);
        $('#chkhostingcostnotincluded').parent().removeClass('checked');
        $('#txtipristrictedaccess').val('');

        $('#btnupdatebasic').hide();
        
        $("#Search").addClass("active");
        $('#btnsavebasic').show();
        $("#tab1").addClass("active");
        
    });

    $("#btnCleartab3").click(function (e) {
        clearValidations($(this).closest("form"));
        $('input[type="text"]').val('');
        $('#chkfreeflag').attr('checked', false);
        $('#chkfreeflag').parent().removeClass('checked');
        $('#chkhostingcostnotincluded').attr('checked', false);
        $('#chkhostingcostnotincluded').parent().removeClass('checked');

        $('#txtipristrictedaccess').val('');

        $('.Dropdownhost').each(function () {
            setSelect2Value($(this), '0');
        });
        $("#btnUpdatetab3").hide();
        $("#btnCanceltab3").hide();
        $("#btnSavetab3").show();
        $('.tab3Formname').hide();
    });

    //PassWord Clear and  Quit
    $("#btnclearpassword").click(function (e) {
        clearValidations($(this).closest("form"));
        $('input[type="text"]').val('');
        $('.Dropdownpass').each(function () {
            setSelect2Value($(this), '0');
        });
        $('.tab3Formname').hide();
    });

    $("#btnquitpassword").click(function (e) {
        $('.btnclearbasicclass').trigger("click");
        clearValidations($(this).closest("form"));
        $("#tab6").removeClass("active");
        $("#Tab6").removeClass("active");
        $("#Search").addClass("active");
        $("#tab1").addClass("active");
        $("#btnUpdatepassword").hide();
        $("#btnCancelpassword").hide();
        $("#btnSavepassword").show();
        $('.tab3Formname').hide();
        $('input[type="text"]').val('');
        $('.Dropdownpass').each(function () {
            setSelect2Value($(this), '0');
        });
        BindGrid();
        $('#btnupdatebasic').hide();
        $('#btnsavebasic').show();
    });

    //Edit Data  
    $("table").delegate(".editor_Step", "click", function () {
        duplicate = '';
        clearValidations($('#tab2'));
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
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/Edit_data",
            data: {
                "tablename": tablename, "Corporate": Corporate, "unit": unit, "Formcode": Formcode, "Formtabcode": Formtabcode, "srno": srno, "Type": Type
            },
            dataType: 'json',
            success: function (response) {
                if (response['Whiteregjs'].length > 0) {
                    $("#hdfsrno").val(response['Whiteregjs'][0]['srno']);
                    $('#drpRefferenceCorporateCompany option[value="' + response['Whiteregjs'][0]['srno'] + '"]').remove();
                    $('#txtsrnouserpref').val(response['Whiteregjs'][0]['srno']);
                    $('#txtsrnotab4').val(response['Whiteregjs'][0]['srno']);
                    $('#txtsrnotab3').val(response['Whiteregjs'][0]['srno']);
                    $('#txtsrnotab6').val(response['Whiteregjs'][0]['srno']);
                    $('#txtsrno').val(response['Whiteregjs'][0]['srno']);
                    $('#txtCmpOfficeName').val(response['Whiteregjs'][0]['CorpCoOfficialName']);
                    setSelect2Value($('#drpcompanyIndustry'), response['Whiteregjs'][0]['CorpCompanyIndust']);
                    setSelect2Value($('#drpcompanyType'), response['Whiteregjs'][0]['CompanyType']);
                    setSelect2Value($('#drpServices'), response['Whiteregjs'][0]['Services']);
                    setSelect2Value($('#drpBusinessMode'), response['Whiteregjs'][0]['BusinessMode']);
                    $('#txtUsername').val(response['Whiteregjs'][0]['AdminUserName']);
                    $('#txtPassword').val(response['Whiteregjs'][0]['Password']);
                    $('#txtConfirmPassword').val(response['Whiteregjs'][0]['Password']);
                    $('#txtOfficialEmail').val(response['Whiteregjs'][0]['OfficialEmail']);
                    $('#txtOfficialPhone').val(response['Whiteregjs'][0]['OfficialPhone']);
                    setSelect2Value($('#DrpApplicationTheme'), response['Whiteregjs'][0]['ApplicationTheme']);
                    $('#txtApplicationURL').val(response['Whiteregjs'][0]['ApplicationUrl']);
                    setSelect2Value($('#drpBaseCurrency'), response['Whiteregjs'][0]['BaseCurrency']);
                    setSelect2Value($('#drpBaseLanguage'), response['Whiteregjs'][0]['BaseLanguage']);
                    $('#txtLogo').val(response['Whiteregjs'][0]['Logo']);
                    setSelect2Value($('#DrpWebtheme'), response['Whiteregjs'][0]['WebTheme']);
                    $('#txtWebURL').val(response['Whiteregjs'][0]['WebUrl']);
                    setSelect2Value($('#drpOtherLanguage'), response['Whiteregjs'][0]['OtherLanguage']);
                    $('#txtFavicon').val(response['Whiteregjs'][0]['Favicon']);
                    var fulllabelwhite = response['Whiteregjs'][0]['FullSemiWhiteLbl'];
                    if (fulllabelwhite == "monthly") {
                        $('#rdoFullWhiteLabel').prop('checked', true);
                    }
                    else {
                        $('#rdoSemiWhiteLabel').prop('checked', true);
                    }
                    if (response['Whiteregjs'][0]['CopyrightNoteFlag'].toLowerCase() == 'true') {
                        $('#chkCopyrightNote').attr('checked', true);
                        $('#chkCopyrightNote').parent().addClass('checked');
                    } else {
                        $('#chkCopyrightNote').attr('checked', false);
                        $('#chkCopyrightNote').parent().removeClass('checked');
                    }
                    $('#txtCopyRights').val(response['Whiteregjs'][0]['CopyrightNote']);
                    setSelect2Value($('#drpRefferenceCorporateCompany'), response['Whiteregjs'][0]['RefCorpCompany']);
                    $('#txtOtherRefference1').val(response['Whiteregjs'][0]['OtherReference1']);
                    $('#txtOtherRefference2').val(response['Whiteregjs'][0]['OtherReference2']);
                    $('#txtCommision').val(response['Whiteregjs'][0]['Commision']);
                    $('#txtfacebook').val(response['Whiteregjs'][0]['Facebook']);
                    $('#txttwitter').val(response['Whiteregjs'][0]['Twitter']);
                    $('#txtgoogleplus').val(response['Whiteregjs'][0]['GooglePlus']);
                    $('#txtwebportal').val(response['Whiteregjs'][0]['WebPortal']);
                    $('#txtbackgroundimg').val(response['Whiteregjs'][0]['BackgroundImg']);
                    $('#txtLoginFrmCaption').val(response['Whiteregjs'][0]['LoginFrmCaption']);
                    $("#SearchMaster").removeClass("active");
                    $("#CreateMaster").addClass("active");
                    $("#Search").removeClass("active");
                    $("#CreateCorporate").addClass("active");
                    $('.tab3Formname').show();
                    //$('.tab3Formname').text($('#txtCmpOfficeName').val());
                    $('.tab3Formname').text('- ' + $('#txtCmpOfficeName').val());
                    // billingedit();
                    // hostingedit();
                    //subcribedit();
                    // Userprefedit();
                    // PasswordEdit();
                }
            }
        });
    });

    //White Label Step  2
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

    //Access Right  Rediret
    $("table").delegate(".editor_accessright", "click", function () {
        // var Corporate = $(this).parent().parent().children(':eq(1)').text();
        //window.location.href = '/WhitelabelAccessRights/Index/?id=' + Corporate;

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
                window.location.href = '/WhitelabelAccessRights/Index/?id=' + response;
            }
        });



    });

    $("#drpbillingcountry").change(function (e) {
        Bindbillingcountry();
    });

    $("#drpbillingState").change(function (e) {
        Bindbillingstate();
    });

    $("#txtAmountPerUserPerMonth").change(function (e) {
        if (($("#txtNumberofUsers").val() != null) && ($("#txtAmountPerUserPerMonth").val() != null)) {
            var t1 = (parseInt($("#txtNumberofUsers").val()) * parseInt($("#txtAmountPerUserPerMonth").val()));
            if (t1 != "Nan") {
                $("#txtTotalAmountPerMonth").val(t1);
            }
        }
    });

    $("#txtNumberofUsers").change(function (e) {
        if (($("#txtNumberofUsers").val() != null) && ($("#txtAmountPerUserPerMonth").val() != null)) {
            var t2 = (parseInt($("#txtNumberofUsers").val()) * parseInt($("#txtAmountPerUserPerMonth").val()));
            if (t2 != "Nan") {
                $("#txtTotalAmountPerMonth").val(t2)
            }
        }
    });

    $("#txtUsername").change(function (e) {
        duplicate = '';
        Email_URl($("#txtUsername").val(), '')
        console.log(duplicate);
        if (duplicate != "") {
            swal(
                'Same Record Already Exists',
                '',
                'error'
              )
            $("#txtUsername").val('');
        }
    });

    $("#txtApplicationURL").change(function (e) {
        duplicate = '';
        Email_URl('', $("#txtApplicationURL").val())
        console.log(duplicate);
        if (duplicate != "") {
            swal(
               'Same Record Already Exists',
               '',
               'error'
             )
            $("#txtApplicationURL").val('');

        }
    });

    $("#txtSubscriptionFromDate").focusout(function (e) {
        //  DateCheck();
    });

    $("#txtSubscriptionToDate").focusout(function (e) {
       // DateCheck();

    });

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
            "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "Corporate": Corporate,
            "unit": unit, "Branch": Branch, "userid": userid, "Ip": Ip, "Type": Type
        },
        success: function (response) {
            if (response['GTINDUTRYS'].length > 0) {
                $('#drpcompanyIndustry').html('');
                for (var i = 0; i < response['GTINDUTRYS'].length; i++) {
                    var opt = new Option(response['GTINDUTRYS'][i]['Text'], response['GTINDUTRYS'][i]['Value']);
                    $('#drpcompanyIndustry').append(opt);
                }
                setSelect2Value($('#drpcompanyIndustry'), '0');
            }
            if (response['GTIndutry'].length > 0) {
                $('#drpcompanyType').html('');
                for (var i = 0; i < response['GTIndutry'].length; i++) {
                    var opt = new Option(response['GTIndutry'][i]['Text'], response['GTIndutry'][i]['Value']);
                    $('#drpcompanyType').append(opt);
                }
                setSelect2Value($('#drpcompanyType'), '0');
            }
            if (response['GTservice'].length > 0) {
                $('#drpServices').html('');
                for (var i = 0; i < response['GTservice'].length; i++) {
                    var opt = new Option(response['GTservice'][i]['Text'], response['GTservice'][i]['Value']);
                    $('#drpServices').append(opt);
                }
                setSelect2Value($('#drpServices'), '0');
            }
            if (response['GTBmode'].length > 0) {
                $('#drpBusinessMode').html('');
                for (var i = 0; i < response['GTBmode'].length; i++) {
                    var opt = new Option(response['GTBmode'][i]['Text'], response['GTBmode'][i]['Value']);
                    $('#drpBusinessMode').append(opt);
                }
                setSelect2Value($('#drpBusinessMode'), '0');
            }
            if (response['GTcurrency'].length > 0) {
                $('#drpBaseCurrency').html('');
                for (var i = 0; i < response['GTcurrency'].length; i++) {
                    var opt = new Option(response['GTcurrency'][i]['Text'], response['GTcurrency'][i]['Value']);
                    $('#drpBaseCurrency').append(opt);
                }
                setSelect2Value($('#drpBaseCurrency'), '0');
            }
            if (response['GTlanguage'].length > 0) {
                $('.Language').html('');
                for (var i = 0; i < response['GTlanguage'].length; i++) {
                    var opt = new Option(response['GTlanguage'][i]['Text'], response['GTlanguage'][i]['Value']);
                    $('.Language').append(opt);
                }
                setSelect2Value($('#drpBaseLanguage'), '0');
                setSelect2Value($('#drpOtherLanguage'), '0');
            }
            if (response['GTCorporate'].length > 0) {
                $('#drpRefferenceCorporateCompany').html('');
                for (var i = 0; i < response['GTCorporate'].length; i++) {
                    var opt = new Option(response['GTCorporate'][i]['Text'], response['GTCorporate'][i]['Value']);
                    $('#drpRefferenceCorporateCompany').append(opt);
                }
                setSelect2Value($('#drpRefferenceCorporateCompany'), '0');
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
        "destroy": true,
        "autoWidth": false,
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
                defaultContent: '<a href="javascript:void(0);" class="editor_Step"  rel="tooltip" title="Edit Data" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_feature"  rel="tooltip" title="Add Feature"><i class="text-primary fa fa-cubes"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_accessright" rel="tooltip" title="Add AccessRight"><i class="fa fa-key"></i></a>'
            }
        ]
    });
}

function Dropdown_Bind_Userpreferance_Checkbox() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = '0';
    var unit = '0';
    var Branch = '0';
    var userid = '0';
    var Ip = '';
    var Type = 'ChkBox';
    var html = "";
    $.ajax({
        url: "/WhitelabelStep1/BindDropDownUserpreferanceCheckbox",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
            unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
        },
        success: function (response) {
            if (response['WRcheckbox'].length > 0) {
                $("#userperferancechk").html('');
                for (var i = 0; i < response['WRcheckbox'].length; i++) {
                    if (html == '') {
                        html = ' <div class="form-group"> <div class="col-md-7 form-marings">' +
                                '<div class=""><span><input type="checkbox" id=="' + response['WRcheckbox'][i]['Value'] + '" value="' + response['WRcheckbox'][i]['Value'] + '"/></span>&nbsp;&nbsp;' + response['WRcheckbox'][i]['Text'] + '</div></div></div>'
                    }
                    else {
                        html = html + ' <div class="form-group"> <div class="col-md-7 form-marings">' +
                                '<div class=""><span><input type="checkbox" id=="' + response['WRcheckbox'][i]['Value'] + '" value="' + response['WRcheckbox'][i]['Value'] + '"/></span>&nbsp;&nbsp;' + response['WRcheckbox'][i]['Text'] + '</div></div></div>'
                    }
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
    var Corporate = '0';
    var unit = '0';
    var Branch = '0';
    var userid = '0';
    var Ip = '';
    var Type = 'DropDown';
    var html = "";
    $.ajax({
        url: "/WhitelabelStep1/BindDropDownUserpreferancedropdown",
        type: "POST",
        async: false,
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
                   setSelect2Value($('#drpDashboardGadgetPosition'), '0');
            }
        }
    });

}

function Bindtab4dropdown() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = $("#hdfsrno").val();
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
                //setSelect2Value($('#drpSupportMode'), '0');
            }
            if (response['UPdrpc'].length > 0) {
                $('#drpmaINCurrency').html('');
                for (var i = 0; i < response['UPdrpc'].length; i++) {
                    var opt = new Option(response['UPdrpc'][i]['Text'], response['UPdrpc'][i]['Value']);
                    $('#drpmaINCurrency').append(opt);
                }
                setSelect2Value($('#drpmaINCurrency'), '0');
            }
            if (response['Ucountry'].length > 0) {
                $('#drpbillingcountry').html('');
                for (var i = 0; i < response['Ucountry'].length; i++) {
                    var opt = new Option(response['Ucountry'][i]['Text'], response['Ucountry'][i]['Value']);
                    $('#drpbillingcountry').append(opt);
                }
                setSelect2Value($('#drpbillingcountry'), '0');
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
    var Corporate = '0';
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
                setSelect2Value($('#drpbillingState'), '0');
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
    var Corporate = '0';
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
    var Control = 'drpCity';
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
                setSelect2Value($('#drpbillingCity'), '0');
            }
        }
    });
}

function Binddropdowntab3() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = '0';
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
                setSelect2Value($('#drpCloudProvider'), '0');
            }
            if (response['UPdrpc'].length > 0) {
                $('#drpCloudServerIP').html('');
                for (var i = 0; i < response['UPdrpc'].length; i++) {
                    var opt = new Option(response['UPdrpc'][i]['Text'], response['UPdrpc'][i]['Value']);
                    $('#drpCloudServerIP').append(opt);
                }
                setSelect2Value($('#drpCloudServerIP'), '0');
            }
            if (response['Ucountry'].length > 0) {
                $('#drpCDNProvider').html('');
                for (var i = 0; i < response['Ucountry'].length; i++) {
                    var opt = new Option(response['Ucountry'][i]['Text'], response['Ucountry'][i]['Value']);
                    $('#drpCDNProvider').append(opt);
                }
                setSelect2Value($('#drpCDNProvider'), '0');
            }

            if (response['Ucurrency'].length > 0) {
                $('#drpCurrencytab3').html('');
                for (var i = 0; i < response['Ucurrency'].length; i++) {
                    var opt = new Option(response['Ucurrency'][i]['Text'], response['Ucurrency'][i]['Value']);
                    $('#drpCurrencytab3').append(opt);
                }
                setSelect2Value($('#drpCurrencytab3'), '0');
            }
            if (response['UPdrpc4'].length > 0) {
                $('#drpPaymentCurrency').html('');
                for (var i = 0; i < response['UPdrpc4'].length; i++) {
                    var opt = new Option(response['UPdrpc4'][i]['Text'], response['UPdrpc4'][i]['Value']);
                    $('#drpPaymentCurrency').append(opt);
                }
                setSelect2Value($('#drpPaymentCurrency'), '0');
            }
            if (response['UPdrp5'].length > 0) {
                $('#drpPaymentMode').html('');
                for (var i = 0; i < response['UPdrp5'].length; i++) {
                    var opt = new Option(response['UPdrp5'][i]['Text'], response['UPdrp5'][i]['Value']);
                    $('#drpPaymentMode').append(opt);
                }
                setSelect2Value($('#drpPaymentMode'), '0');
            }
            if (response['Ucountry6'].length > 0) {
                $('#drpBillingCycle').html('');
                for (var i = 0; i < response['Ucountry6'].length; i++) {
                    var opt = new Option(response['Ucountry6'][i]['Text'], response['Ucountry6'][i]['Value']);
                    $('#drpBillingCycle').append(opt);
                }
                setSelect2Value($('#drpBillingCycle'), '0');
            }
            if (response['Ucurrency7'].length > 0) {
                $('#drpBillingFromCompany').html('');
                for (var i = 0; i < response['Ucurrency7'].length; i++) {
                    var opt = new Option(response['Ucurrency7'][i]['Text'], response['Ucurrency7'][i]['Value']);
                    $('#drpBillingFromCompany').append(opt);
                }
                setSelect2Value($('#drpBillingFromCompany'), '0');
            }
        }
    });
}

function Quitform() {
    $("#tab1").addClass("active");
    $("#CreateCorporate").removeClass("active");
    $("#Tab3").removeClass("active");
    $("#Tab4").removeClass("active");
    $("#tabuserpreferance").removeClass("active");
    $("#Tab6").removeClass("active");
    $("#Search").addClass("active");
    $("#tab2").removeClass("active");
    $("#tab3").removeClass("active");
    $("#tab4").removeClass("active");
    $("#tab5").removeClass("active");
    $("#tab6").removeClass("active");
    $("#Search").focus();
    $("#Tab3").focusout();
    BindGrid();
}

function Binddropdowntab6() {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = '0';
    var unit = '0';
    var Branch = '0';
    var userid = '0';
    var Ip = '';
    var Type = 'DropDown';
    var html = "";
    $.ajax({
        url: "/WhitelabelStep1/Binddropdowntab6",
        type: "POST",
        async: false,
        data: {
            Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
            unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
        },
        success: function (response) {
            if (response['UPdrp'].length > 0) {
                $('#drpencryptkey').html('');
                for (var i = 0; i < response['UPdrp'].length; i++) {
                    var opt = new Option(response['UPdrp'][i]['Text'], response['UPdrp'][i]['Value']);
                    $('#drpencryptkey').append(opt);
                }
                setSelect2Value($('#drpencryptkey'), '0');
            }
        }
    });
}

//Edit  Function  
//Password Edit
function PasswordEdit() {
    // Dropdown_Bind_Userpreferance_Checkbox();
    Dropdown_Bind_user_preferance();
    clearValidations($('#tab6'));
    if ($('#txtsrnotab6').val() != "") {
        var srno = $('#txtsrnotab6').val();
        var tablename = 'dbo._PasswordConfiguration';
        var Corporate = $("#hdfsrno").val();
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Type = 'EditMode';
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/Edit_data_password_authenticate",
            data: {
                tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
            },
            dataType: 'json',
            success: function (response) {
                if (response['UserPreferancestep1js'].length > 0) {
                    $('#btnUpdatepassword').show();
                    $('#btnCancelpassword').hide();
                    $('#btnSavepassword').hide();
                    $('#txtsrnotab6').val(response['UserPreferancestep1js'][0]['srno']);
                    //$('#txtsrnouserpref').val(response['UserPreferancestep1js'][0]['Corporate']);
                    $('#txtrequiredcapitalcharacters').val(response['UserPreferancestep1js'][0]['CapitalCharNumber']);
                    $('#txtrequirednumeric').val(response['UserPreferancestep1js'][0]['RequiredNumeric']);
                    $('#txtrequiredspecialcharacter').val(response['UserPreferancestep1js'][0]['SpecialCharNumber']);
                    $('#txtpasswordminimumlength').val(response['UserPreferancestep1js'][0]['PasswordMinLength']);
                    $('#txtpasswordexpirydays').val(response['UserPreferancestep1js'][0]['PasswordExpiryDays']);
                    // $('#txtsrnouserpref').val(response['UserPreferancestep1js'][0]['UserLoginDay']);
                    $('#txtnumberofattemptslock').val(response['UserPreferancestep1js'][0]['NumberOfAttempts']);
                    $('#txtuserlockunlockminuts').val(response['UserPreferancestep1js'][0]['NumberOfAttemptsTime']);
                    $('#txtotpexpirytime').val(response['UserPreferancestep1js'][0]['OTPExpiryTime']);
                    $('#txtlastsamepassword').val(response['UserPreferancestep1js'][0]['LastSamePassword']);
                    // $('#txtsrnouserpref').val(response['UserPreferancestep1js'][0]['UnableCaptcha']);
                    // $('#txtsrnouserpref').val(response['UserPreferancestep1js'][0]['AutoLockScreen']);
                    setSelect2Value($('#drpencryptkey'), response['UserPreferancestep1js'][0]['EncriptionKey']);
                    $('#txtuserlockunlockminuts').val(response['UserPreferancestep1js'][0]['UserUnlockMinut']);
                    $('#txtcontinuenumber').val(response['UserPreferancestep1js'][0]['Continuenumber']);
                    $('#txtcaptchaenableattempt').val(response['UserPreferancestep1js'][0]['UnableCaptcha']);
                    
                }
            }
        });
    }
}
//Hosting Edit
function hostingedit() {
    // Binddropdowntab3();
    clearValidations($('#tab3'));
    var tablename = 'dbo._White_Register_Hosting';
    var Corporate = $("#hdfsrno").val();
    var unit = '0';
    var Formcode = '0';
    var Formtabcode = '0';
    var srno = $('#txtsrnotab3').val();
    var Type = 'EditMode';
    $.ajax({
        type: "POST",
        url: "/WhitelabelStep1/Edit_data_hosting",
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
        },
        dataType: 'json',
        success: function (response) {
            if (response['Whiteregjs'].length > 0) {
                $("#btnUpdatetab3").show();
                $("#btnSavetab3").hide();
                $('#txtsrnotab3').val(response['Whiteregjs'][0]['srno']);
                setSelect2Value($('#drpCloudProvider'), response['Whiteregjs'][0]['CloudProvider']);
                setSelect2Value($('#drpCloudServerIP'), response['Whiteregjs'][0]['CloudServerIp']);
                $('#txtCloudDiskSpace').val(response['Whiteregjs'][0]['CloudDiskSpace']);
                $('#txtTrasactionCount').val(response['Whiteregjs'][0]['TransactionCount']);
                $('#txtipristrictedaccess').val(response['Whiteregjs'][0]['IpRestrictedAccess']);
                setSelect2Value($('#drpCDNProvider'), response['Whiteregjs'][0]['CdnProvider']);
                $('#txtCDNSpace').val(response['Whiteregjs'][0]['CdnSpace']);
                $('#txtCostPerMonth').val(response['Whiteregjs'][0]['HostingCostPM']);
                setSelect2Value($('#drpCurrencytab3'), response['Whiteregjs'][0]['Currency']);
                if (response['Whiteregjs'][0]['CostPerMonth'].toLowerCase() == 'true') {
                    $('#chkhostingcostnotincluded').attr('checked', true);
                    $('#chkhostingcostnotincluded').parent().addClass('checked');
                } else {
                    $('#chkhostingcostnotincluded').attr('checked', false);
                    $('#chkhostingcostnotincluded').parent().removeClass('checked');
                }

                $('#txtHostingCostPerMonth').val(response['Whiteregjs'][0]['HostingCost']);
            }
        }
    });
}
//SubCri. Edit
function subcribedit() {
    //Binddropdowntab3();
    clearValidations($('#tab3'));
    var tablename = 'dbo._White_Register_Subscription';
    var Corporate = $("#hdfsrno").val();
    var unit = '0';
    var Formcode = '0';
    var Formtabcode = '0';
    var srno = $('#txtsrnotab3').val();
    var Type = 'EditMode';
    $.ajax({
        type: "POST",
        url: "/WhitelabelStep1/Edit_data_subcribe",
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
        },
        dataType: 'json',
        success: function (response) {
            if (response['Whiteregjs'].length > 0) {
                $('#txtsrnotab3').val(response['Whiteregjs'][0]['srno']);
                $('#txtPlanName').val(response['Whiteregjs'][0]['PlanName']);
                $('#txtNumberofUsers').val(response['Whiteregjs'][0]['NumberOfUsers']);
                $('#txtSubscriptionFromDate').val(response['Whiteregjs'][0]['SubscriptionFromDate']);
                $('#txtSubscriptionToDate').val(response['Whiteregjs'][0]['SubscriptionToDate']);
                setSelect2Value($('#drpBillingCycle'), response['Whiteregjs'][0]['BillingCycle']);
                setSelect2Value($('#drpBillingFromCompany'), response['Whiteregjs'][0]['BillingFromCompany']);
                // checkbox code remain
                if (response['Whiteregjs'][0]['FreeFlag'].toLowerCase() == 'true') {
                    $('#chkfreeflag').attr('checked', true);
                    $('#chkfreeflag').parent().addClass('checked');
                } else {
                    $('#chkfreeflag').attr('checked', false);
                    $('#chkfreeflag').parent().removeClass('checked');
                }
                setSelect2Value($('#drpPaymentCurrency'), response['Whiteregjs'][0]['PaymentCurrency']);
                $('#txtAmountPerUserPerMonth').val(response['Whiteregjs'][0]['AmountPUPM']);
                //enable false textbox
                setSelect2Value($('#drpPaymentMode'), response['Whiteregjs'][0]['PaymentMode']);
                $('#txtFirstPaymentDate').val(response['Whiteregjs'][0]['FirstPayDate']);
                $('#txtGracePeriod').val(response['Whiteregjs'][0]['GracePeriod']);

                if (($("#txtNumberofUsers").val() != null) && ($("#txtAmountPerUserPerMonth").val() != null)) {
                    var t2 = (parseInt($("#txtNumberofUsers").val()) * parseInt($("#txtAmountPerUserPerMonth").val()));
                    if (t2 != "Nan") {
                        $("#txtTotalAmountPerMonth").val(t2)
                    }
                }
            }
        }
    });
}
//User Preferance
function Userprefedit() {
    // Dropdown_Bind_Userpreferance_Checkbox();
    clearValidations($('#tab5'));
    Dropdown_Bind_user_preferance();
    if ($('#txtsrnouserpref').val() != "") {
        var srno = $('#txtsrnouserpref').val();

        var tablename = 'dbo._White_Register_UserPreferences';
        var Corporate = $("#hdfsrno").val();
        
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Type = 'EditMode';
        $.ajax({
            type: "POST",
            url: "/WhitelabelStep1/Edit_data_user_preferance",
            data: {
                tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
            },
            dataType: 'json',
            success: function (response) {
                if (response['UserPreferancestep1js'].length > 0) {
                    
                    $('#btnUpdateuserpref').show();
                    $('#btnCanceluserpref').hide();
                    $('#btnSaveuserpref').hide();
                    $('#txtsrnouserpref').val(response['UserPreferancestep1js'][0]['srno']);
                    setSelect2Value($('#drpDashboardGadgetPosition'), response['UserPreferancestep1js'][0]['GadgetPosition']);

                    // $("#userperferancechk").html('');
                    var chkloop = response['UserPreferancestep1js'][0]['OtherPreferences'].toString().split(",");
                    $.each(chkloop, function (i) {
                        $("#userprefform").find('.checker').each(function () {
                            if (chkloop[i] == $(this).children().children().attr('id')) {
                                $(this).children().addClass('checked');
                                $(this).children().children().attr('checked', true);
                                return;
                            }

                        });
                    });
                }
            }
        });
    }
}
//Billing Details
function billingedit() {
    clearValidations($('#tab4'));
    Bindtab4dropdown();

    var tablename = 'dbo._White_Register_MaintanenceSupport';
    var Corporate = $("#hdfsrno").val();
    var unit = '0';
    var Formcode = '0';
    var Formtabcode = '0';
    var srno = $('#txtsrnotab4').val();
    var Type = 'EditMode';
    $.ajax({
        type: "POST",
        url: "/WhitelabelStep1/Edit_data_billing",
        data: {
            tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, srno: srno, Type: Type
        },
        dataType: 'json',
        success: function (response) {
            if (response['Whiteregjs'].length > 0) {
                $("#btnUpdateBilling").show();
                $("#btnSavebilling").hide();
                $('#txtsrnotab4').val(response['Whiteregjs'][0]['srno']);
                $('#txtBillingName').val(response['Whiteregjs'][0]['BillingName']);
                $('#txtBillingContactPerson').val(response['Whiteregjs'][0]['BillingContactPerson']);
                $('#txtBillingAddressLine1').val(response['Whiteregjs'][0]['BillingAddress1']);
                $('#txtBillingAddressLine2').val(response['Whiteregjs'][0]['BillingAddress2']);
                
                setSelect2Value($('#drpbillingcountry'), response['Whiteregjs'][0]['BillingCountry']);
                Bindbillingcountry();
                
                setSelect2Value($('#drpbillingState'), response['Whiteregjs'][0]['BillingState']);
                Bindbillingstate();
                setSelect2Value($('#drpbillingCity'), response['Whiteregjs'][0]['BillingCity']);
                $('#txtBillingZipCode').val(response['Whiteregjs'][0]['BillingZipCode']);
                $('#txtBillingEmail').val(response['Whiteregjs'][0]['BillingEmail']);
                $('#txtBillingTelephone').val(response['Whiteregjs'][0]['BillingPhone']);
                $('#txtBillingCellPhone').val(response['Whiteregjs'][0]['BillingContactMobile']);
                // setSelect2Value($('#drpSupportMode'), response['Whiteregjs'][0]['SupportMode']);
                // var dataarray = response['Whiteregjs'][0]['SupportMode'].split(",");
                //alert(response['Whiteregjs'][0]['SupportMode']);
                setMultiselectValues($('#drpSupportMode'), response['Whiteregjs'][0]['SupportMode'])
                //$('#drpSupportMode').find('option[value="' + response['Whiteregjs'][0]['SupportMode'] + '"]').attr('selected', true).change();
                $('#txtFreeSupportPeriod').val(response['Whiteregjs'][0]['FreeSupportPeriod']);
                $('#txtSupportCostPerMonth').val(response['Whiteregjs'][0]['SupportCostPM']);
                setSelect2Value($('#drpmaINCurrency'), response['Whiteregjs'][0]['Currency']);
            }
        }
    });
}
//Duplicate Check  For Email and  URl
function Email_URl(Field1, Field2) {
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var field1 = Field1;
    var field2 = Field2;
    var Type = 'BaseDuplicate';
    var Srno = '';
    $.ajax({
        url: "/WhitelabelStep1/CorporateBasicbasesp",
        type: "POST",
        async: false,
        data: {
            "Module": Module, "screen": screen, "FormCode": FormCode, "TabCode": TabCode, "unit": unit, "Branch": Branch, "userid": userid,
            "Ip": Ip, "Type": Type, "field1": field1, "field2": field2, "Srno": Srno
        },
        success: function (response) {

            if (response['Duplicate'] == "1") {
                duplicate = "Done";
                                
            }
            else {
                duplicate = '';
               
            }
            //console.log('before');
        }
    });
}
//Date Compare
function DateCheck() {

    try {
        var d1 = this.txtSubscriptionFromDate.value.substr(0, 2);
        var m1 = this.txtSubscriptionFromDate.value.substr(3, 2);
        var y1 = this.txtSubscriptionFromDate.value.substr(6, 4);
        var StrDate = m1 + "/" + d1 + "/" + y1;

        var d2 = this.txtSubscriptionToDate.value.substr(0, 2);
        var m2 = this.txtSubscriptionToDate.value.substr(3, 2);
        var y2 = this.txtSubscriptionToDate.value.substr(6, 4);
        var EndDate = m2 + "/" + d2 + "/" + y2;

        var startDate = new Date(StrDate);
        var endDate = new Date(EndDate);
        if (startDate > endDate) {
            abc = 1;
         
           // return false;

        }
        else {
         
            abc = 0;
        }
        
    }
    catch (e) { }

    return true;
}
//Clear All Tab
function clearalltab()
{
    $('.btnclearbasicclass').trigger("click");
    $('#btnclearuserpref').trigger("click");
    $('.btnbillingclear').trigger("click");
    $("#btnCleartab3").trigger("click");
    $("#btnclearpassword").trigger("click");
    duplicate = '';
}

