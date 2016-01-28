$(document).ready(function () {
    $('.btnSave').click(function (e) {
        e.preventDefault();

        var srno = '';
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
        var OtherLanguage = '';
        var Logo = $('#txtLogo').val();
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
        var CretedBy = '';
        var EditedBy = '';
        var EditDatetime = '';
        var CorpcentreBy = '';
        var UnitCorpBy = '';
        var TerminalBy = '';
        var BranchBy = '';



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
                       alert("Record Save Sucessfully!");
                   }
               }
           });

    });
});
