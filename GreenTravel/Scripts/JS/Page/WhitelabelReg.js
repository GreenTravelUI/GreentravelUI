$(document).ready(function () {
    BindGrid();
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
    $('#Search').click(function (e) {
        // BindGrid();
    });
    $('#CreateCorporate').click(function (e) {
        Dropdown_Bind_Tab1();
    });

    $('#btnclearbasic').click(function (e) {
        $('input[type="text"]').val('');
    });

    $('#btnQuitbasic').click(function (e) {
        $('input[type="text"]').val('');
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
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate,
                unit: unit, Branch: Branch, userid: userid, Ip: Ip, Type: Type
            },
            success: function (response) {
                if (response['GTIndutry'].length > 0) {
                    $('.Industry').html('');
                    for (var i = 0; i < response['GTIndutry'].length; i++) {
                        var opt = new Option(response['GTIndutry'][i]['Text'], response['GTIndutry'][i]['Value']);
                        $('.Industry').append(opt);
                    }
                    $('#drpcompanyIndustry option:first').attr('selected', 'selected').change();
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

                //console.log(response['GTIndutry'][0]);
                //console.log(response['GTservice'][0]);
                //console.log(response['GTBmode'][0]);

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
        console.log($(this).parent().parent().children(':eq(0)').text());
        console.log($(this).parent().parent().children(':eq(1)').text());
        //console.log($(this).parent().parent().children(':eq(2)').text());
        //$("#SearchMaster").removeClass("active");
        //$("#CreateMaster").addClass("active");
        //$("#tab1").removeClass("active");
        //$("#tab2").addClass("active");
        //$('#btnsUpdate').show();
        //$('#btnDelete').show();
        //$('#btnSaveMastersetup').hide();

        //var tablename = 'dbo.ADMINMASTER';
        //var Corporate = '2';
        //var unit = '0';
        //var Formcode = '0';
        //var Formtabcode = '0';
        //var Xmaster = $(this).parent().parent().children(':eq(1)').text();
        //var Type = 'EditMode';
        //$.ajax(
        // {
        //     type: "POST",
        //     url: "/Masters/Edit_data",
        //     data: {
        //         tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type
        //     },
        //     dataType: 'json',
        //     success: function (response) {
        //         console.log(response);
        //         console.log(response['AMaster'].length)
        //         //Master
        //         if (response['AMaster'].length > 0) {
        //             $('#txtMasterCode').val(response['AMaster'][0]['xmaster']);
        //             $('#txtMasterName').val(response['AMaster'][0]['xname']);
        //             $('#txtdrpCaption').val(response['AMaster'][0]['drpCaption']);
        //             $('#drpEntrylevel').find('option[value="' + response['AMaster'][0]['ENTRYCONTROL'] + '"]').attr('selected', true).change();
        //             $('#drpSegment').find('option[value="' + response['AMaster'][0]['SEGMENT'] + '"]').attr('selected', true).change();
        //             $('#drpCorporate').find('option[value="' + response['AMaster'][0]['Corporate'] + '"]').attr('selected', true).change();
        //             $('#drpDropdownMastersetup1').find('option[value="' + response['AMaster'][0]['xlink'] + '"]').attr('selected', true).change();
        //             $('#drpMastersetup2').find('option[value="' + response['AMaster'][0]['xcross'] + '"]').attr('selected', true).change();
        //             $('#drpMastersetup3').find('option[value="' + response['AMaster'][0]['xcross1'] + '"]').attr('selected', true).change();
        //             $('#drpMastersetup4').find('option[value="' + response['AMaster'][0]['xcross2'] + '"]').attr('selected', true).change();
        //             $('#drpMastersetup5').find('option[value="' + response['AMaster'][0]['xcross3'] + '"]').attr('selected', true).change();
        //             $('#drpMastersetup6').find('option[value="' + response['AMaster'][0]['xcross4'] + '"]').attr('selected', true).change();
        //             $('#drpMultiselectsetup1').find('option[value="' + response['AMaster'][0]['MultiSelect1'] + '"]').attr('selected', true).change();
        //             $('#drpMultiselectsetup2').find('option[value="' + response['AMaster'][0]['MultiSelect2'] + '"]').attr('selected', true).change();
        //             $('#drpMultiselectsetup3').find('option[value="' + response['AMaster'][0]['MultiSelect3'] + '"]').attr('selected', true).change();
        //             $('#drpMultiselectsetup4').find('option[value="' + response['AMaster'][0]['MultiSelect4'] + '"]').attr('selected', true).change();
        //             $('#drpMultiselectsetup5').find('option[value="' + response['AMaster'][0]['MultiSelect5'] + '"]').attr('selected', true).change();
        //         }
        //  }
    });

    $("table").delegate(".editor_feature", "click", function () {
        alert('Feature');
    });

    $("table").delegate(".editor_accessright", "click", function () {
        alert('AccessRight');
    });

});
