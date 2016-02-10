$(document).ready(function () {
    FillDropDown_Category();
    getdata();
    hide_div();

    $("#drpCorporateTab").change(function () {
        FillDropdown('drpMasterTab3', 'ConditionalDropdown')
        if ($('#drpMasterTab3 option:first').is(':selected')) {
            hide_div();
        }
    });
    $("#drpSegmenttab3").change(function () {
        FillDropdown('drpMasterTab3', 'ConditionalDropdown')

    });




    $("#drpMasterTab3").change(function () {
        clearValidations($(this).parent());
        hide_Tooltip();
        PageLoad_FilledAll();
        $('#btnSave').text('CREATE');
        $('#btnSave').attr("class", "btn btn-success btnSave");
        //$('#btnDelete').hide();

    });

    $('#btnSave').click(function (e) {
        e.preventDefault();
        /* Form Validation */
        if (!validateForm($(this).parent())) {
            swal('Invalid data found!');
            return false;
        }
        var USrno = '0';
        //  alert($('#btnSave').text());
        if ($('#btnSave').text() != "Create") {
            var USrno = $('#txtSrNoTab3').val();
        }
        var Uxmaster = $('#drpMasterTab3 option:selected').val();
        var Uxcode = $('#drpMasterTab3 option:selected').val();
        var Uxname = $('#txtnameTab3').val();

        var UIsActive = $('#drpActiveTab3 option:selected').val();
        var URemark = $('#txtRemarsTab3').val();

        var Uxlink = $('#Dropdown1Tab3 option:selected').val();
        var Uxcross = $('#Dropdown2Tab3 option:selected').val();
        var Uxcross1 = $('#Dropdown3Tab3 option:selected').val();
        var Uxcross2 = $('#Dropdown4Tab3 option:selected').val();
        var Uxcross3 = $('#Dropdown5Tab3 option:selected').val();
        var Uxcross4 = $('#Dropdown6Tab3 option:selected').val();

        var Uxreference1 = $('#Textbox1Tab3').val();
        var Uxreference2 = $('#Textbox2Tab3').val();
        var Uxreference3 = $('#Textbox3Tab3').val();
        var Uxreference4 = $('#Textbox4Tab3').val();
        var Uxreference5 = $('#Textbox5Tab3').val();
        var Uxreference6 = $('#Textbox6Tab3').val();

        var Uxdetail = $('#txtRemarsTab3').val();

        var UAttribute1 = ''
        var UAttribute2 = ''
        var UAttribute3 = ''
        var UAttribute4 = ''
        var UAttribute5 = ''
        var UAttribute6 = ''
        var UAttribute7 = ''
        var UAttribute8 = ''
        var UAttribute9 = ''
        var UAttribute10 = '';

        var UUserId = '0';
        var UCreatedBy = '';
        var UEntryDatetime = '';
        var UEditedBy = '';
        var UEditDatetime = '';
        var UCorpcentreBy = '2';
        //var UCorpcentreBy = $('#drpCorporateTab option:selected').val();
        var UUnitCorpBy = '2';
        var UTerminalBy = '0';
        var UBranchBy = '0';

        var URating1 = $('#Rating1 option:selected').val();
        var URating2 = $('#Rating2 option:selected').val();
        var URating3 = $('#Rating3 option:selected').val();

        var UDate1 = $('#Date1').val();
        var UDate2 = $('#Date2').val();
        var UDate3 = $('#Date3').val();

        var UEmail1 = $('#Email1').val();
        var UEmail2 = $('#Email2').val();
        var UEmail3 = $('#Email3').val();

        var UAmount = $('#Amount1').val();
        var UAmount2 = $('#Amount2').val();
        var UAmount3 = $('#Amount3Tab3').val();

        var UTime1 = $('#time1').val();
        var UTime2 = $('#time2').val();

        var UHtml = $('#HTMlEditor1').val();
        var UUpload = $('#photoUpload').val();
        var UTextArea = $('#Textarea1').val();
        var Mul = '';
        var i = 0;
        var UMultiSelect1 = getMultiselectValue($("#Multiselect1"));
        var UMultiSelect2 = getMultiselectValue($("#Multiselect2"));
        var UMultiSelect3 = getMultiselectValue($("#Multiselect3"));
        var UMultiSelect4 = getMultiselectValue($("#Multiselect4"));
        var UMultiSelect5 = getMultiselectValue($("#Multiselect5"));

        $.ajax(
           {
               type: "POST",
               url: "/AllMaster/Insert_Data",
               data: {
                   USrno: USrno, Uxmaster: Uxmaster, Uxcode: Uxcode, Uxname: Uxname, UIsActive: UIsActive, URemark: URemark, Uxlink: Uxlink,
                   Uxcross: Uxcross, Uxcross1: Uxcross1, Uxcross2: Uxcross2, Uxcross3: Uxcross3, Uxcross4: Uxcross4,
                   Uxreference1: Uxreference1, Uxreference2: Uxreference2, Uxreference3: Uxreference3, Uxreference4: Uxreference4, Uxreference5: Uxreference5, Uxreference6: Uxreference6,
                   Uxdetail: Uxdetail, URating1: URating1, URating2: URating2, URating3: URating3, UDate1: UDate1, UDate2: UDate2, UDate3: UDate3, UEmail1: UEmail1, UEmail2: UEmail2, UEmail3: UEmail3,
                   UAmount: UAmount, UAmount2: UAmount2, UAmount3: UAmount3, UTime1: UTime1, UTime2: UTime2, UHtml: UHtml, UUpload: UUpload, UTextArea: UTextArea,
                   UMultiSelect1: UMultiSelect1, UMultiSelect2: UMultiSelect2, UMultiSelect3: UMultiSelect3, UMultiSelect4: UMultiSelect4, UMultiSelect5: UMultiSelect5,
                   UCreatedBy: UCreatedBy, UEntryDatetime: UEntryDatetime, UEditedBy: UEditedBy, UCorpcentreBy: UCorpcentreBy, UUnitCorpBy: UUnitCorpBy, UTerminalBy: UTerminalBy, UBranchBy: UBranchBy, UUserId: UUserId
               },
               dataType: 'json',
               success: function (response) {
                   if (response != null && response.success) {

                       swal('', response['success'], response['Event']);
                   }
               }
           });

    });

    $('#btnCancel').click(function (e) {
        e.preventDefault();
        clearValidations($(this).parent());
        $('input').val('');
        $('textarea').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });

        $('.drpdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });

        $('select').next().find('ul li.select2-selection__choice').remove();
    });


    //Quit  Button  Click 
    $('#btnQuit').click(function (e) {
        $("#MasterDataViews").addClass("active");
        $("#MastersRecord").removeClass("active");
        $("#tab3").removeClass("active");
        $("#tab4").addClass("active");
        clearValidations($(this).parent());
        $('input').val('');
        $('textarea').val('');
        $('.Dropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $('.drpdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $('select').next().find('ul li.select2-selection__choice').remove();
    });

    /*Tab Master Records*/

    function FillAllData() {
        FillDropdown('Dropdown1Tab3', 'xlink');
        FillDropdown('Dropdown2Tab3', 'xcross');
        FillDropdown('Dropdown3Tab3', 'xcross1');
        FillDropdown('Dropdown4Tab3', 'xcross2');
        FillDropdown('Dropdown5Tab3', 'xcross3');
        FillDropdown('Dropdown6Tab3', 'xcross4');
        FillDropdown('Multiselect1', 'MultiSelect1');
        FillDropdown('MultiSelect2', 'MultiSelect2');
        FillDropdown('MultiSelect3', 'MultiSelect3');
        FillDropdown('MultiSelect4', 'MultiSelect4');
        FillDropdown('MultiSelect5', 'MultiSelect5');
        PageLoad_Visibity_Caption();
        PageLoad_Placeholder();
        hide_Tooltip();
        PageLoad_HelpTip();
    }

    /*Drop Down  Fill*/
    function FillDropdown(controlId, type) {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = $('#drpCorporateTab option:selected').val();
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        //var field1 = '1';
        var field1 = $('#drpSegmenttab3 option:selected').val();
        var field2 = $('#drpMasterTab3 option:selected').val();
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = 'drpmaster';
        var Language = '';
        var Type = type;
        $.ajax({
            url: "/AllMaster/BindDropDownTab",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
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

    function FillDropdown_Multiselect(controlId, type) {
        var Module = '';
        var screen = '';
        var FormCode = '';
        var TabCode = '';
        var Corporate = $('#drpCorporateTab option:selected').val();
        var unit = '';
        var Branch = '';
        var userid = '';
        var Ip = '';
        //var field1 = '1';
        var field1 = $('#drpSegmenttab3 option:selected').val();
        var field2 = $('#drpMasterTab3 option:selected').val();
        var field3 = '';
        var field4 = '';
        var field5 = '';
        var Control = 'drpmaster';
        var Language = '';
        var Type = type;
        $.ajax({
            url: "/AllMaster/BindDropDown_Multiselect",
            type: "POST",
            async: false,
            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Type: Type, field1: field1, field2: field2, field3: field3, field4: field4, field5: field5, Control: Control, Language: Language
            },
            success: function (data) {
                if (type == 'MultiSelect1') {
                    $('#Multiselect1').html('');
                    for (var i = 0; i < data['AMul'].length; i++) {
                        $('#Multiselect1').append($('<option value="' + data['AMul'][i]['Value'] + '">' + data['AMul'][i]['Text'] + '</option>'));
                    }
                }
                if (type == 'MultiSelect2') {
                    $('#MultiSelect2').html('');
                    for (var i = 0; i < data['AMul'].length; i++) {
                        $('#Multiselect2').append($('<option value="' + data['AMul'][i]['Value'] + '">' + data['AMul'][i]['Text'] + '</option>'));
                    }
                }
                if (type == 'MultiSelect3') {
                    $('#MultiSelect3').html('');
                    for (var i = 0; i < data['AMul'].length; i++) {
                        $('#Multiselect3').append($('<option value="' + data['AMul'][i]['Value'] + '">' + data['AMul'][i]['Text'] + '</option>'));
                    }
                }
                if (type == 'MultiSelect4') {
                    $('#MultiSelect4').html('');
                    for (var i = 0; i < data['AMul'].length; i++) {
                        $('#Multiselect4').append($('<option value="' + data['AMul'][i]['Value'] + '">' + data['AMul'][i]['Text'] + '</option>'));
                    }
                }
                if (type == 'MultiSelect5') {
                    $('#MultiSelect5').html('');
                    for (var i = 0; i < data['AMul'].length; i++) {
                        $('#Multiselect5').append($('<option value="' + data['AMul'][i]['Value'] + '">' + data['AMul'][i]['Text'] + '</option>'));
                    }
                }

                //  DropdownSeletedValue(MultiSelect1);
            }
        });
    }

    function FillDropDown_Category() {


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
            url: "/AllMaster/BindDropDown",
            type: "POST",
            async: false,
            dataType: "json",

            data: {
                Module: Module, screen: screen, FormCode: FormCode, TabCode: TabCode, Corporate: Corporate, unit: unit, Branch: Branch, userid: userid,
                Ip: Ip, Language: Language, Type: Type
            },
            success: function (data) {
                if (data['Segment'].length > 0) {

                    for (var i = 0; i < data['Segment'].length; i++) {
                        var opt = new Option(data['Segment'][i]['Text'], data['Segment'][i]['Value']);
                        $('#drpSegmenttab3').append(opt);
                    }
                    // $("#drpSegmenttab3 option:first").attr('selected', 'selected').change();
                    DropdownSeletedValue(drpSegmenttab3);
                }

                if (data['Corporate'].length > 0) {

                    for (var i = 0; i < data['Corporate'].length; i++) {
                        var opt = new Option(data['Corporate'][i]['Text'], data['Corporate'][i]['Value']);
                        $('#drpCorporateTab').append(opt);
                    }

                    DropdownSeletedValue(drpCorporateTab);
                }
                if (data['Master'].length > 0) {

                    for (var i = 0; i < data['Master'].length; i++) {
                        var opt = new Option(data['Master'][i]['Text'], data['Master'][i]['Value']);
                        $('#drpMasterTab3').append(opt);
                    }

                    DropdownSeletedValue(drpCorporateTab);
                }




            },
            error: function (data) {
                alert("error found");
            }

        });

    }

    function DropdownSeletedValue(controlId) {
        var myDDL = $(controlId);
        myDDL[0].selectedIndex = 0;
    }

    function hide_div() {
        $('#divSrno').hide();
        $('#divCode').hide();
        $('#divName').hide();
        $('#divCheckbox').hide();
        $('#divRemarks').hide();
        $('#divDropdown1').hide();
        $('#divDropdown2').hide();
        $('#divDropdown3').hide();
        $('#divDropdown4').hide();
        $('#divDropdown5').hide();
        $('#divDropdown6').hide();
        $('#divTextbox1').hide();
        $('#divTextbox2').hide();
        $('#divTextbox3').hide();
        $('#divTextbox4').hide();
        $('#divTextbox5').hide();
        $('#divTextbox6').hide();
        $('#divRating1').hide();
        $('#divRating2').hide();
        $('#divRating3').hide();
        $('#divDate1').hide();
        $('#divDate2').hide();
        $('#divDate3').hide();
        $('#divTime1').hide();
        $('#divTime2').hide();
        $('#divEmail1').hide();
        $('#divEmail2').hide();
        $('#divEmail3').hide();
        $('#divAmount1').hide();
        $('#divAmount2').hide();
        $('#divAmount3').hide();
        $('#divHtmleditor1').hide();
        $('#divphotoUpload1').hide();
        $('#divTextarea1').hide();
        //$('#divActive').hide();
        $('#divRemarks').hide();

        $('#divMultiselect1').hide();
        $('#divMultiselect2').hide();
        $('#divMultiselect3').hide();
        $('#divMultiselect4').hide();
        $('#divMultiselect5').hide();
        $('#divDate3').hide();

    }
    /*Drop   Down  Fill*/

    function hide_Tooltip() {

        $('#field6').show();
        $('#field7').hide();
        $('field8').hide();
        $('field9').hide();
        $('field10').hide();
        $('field11').hide();
        $('field12').hide();
        $('field13').hide();
        $('field14').hide();
        $('field15').hide();
        $('field16').hide();
        $('field17').hide();
        $('field18').hide();
        $('field19').hide();
        $('field20').hide();
        $('field21').hide();
        $('field22').hide();
        $('field23').hide();
        $('field24').hide();
        $('field25').hide();
        $('field26').hide();
        $('field27').hide();
        $('field28').hide();
        $('field29').hide();
        $('field30').hide();
        $('field31').hide();
        $('field32').hide();
        $('field33').hide();
        $('field34').hide();
        $('field35').hide();
        $('field36').hide();
        $('field37').hide();
        $('field38').hide();
        $('field39').hide();
        $('field40').hide();
        $('field41').hide();
        $('field42').hide();
    }

    function getdata() {
        var tablename = 'dbo.usermaster';
        var Corporate = '2';
        var Segment = '1';
        var PageNo = '1';
        var type = 'Grid';
        var Formcode = '0';
        var Formtabcode = '0';
        var WhereClause = 'Country';
        $('#example1').dataTable({
            "ServerSide": true,
            "destroy": true,
            "ajax": {
                url: "/AllMaster/BindGridUser",
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
                    "WhereClause": WhereClause
                }
            },
            "columns": [
                { "data": "RowNumber" },
                { "data": "SrNo" },
                { "data": "xmaster" },
                { "data": "xname" },
                {
                    data: null,
                    className: "center",
                    defaultContent: '<a href="javascript:void(0);" class="editor_edit" ><i class="fa fa-pencil-square-o"></i></a> &nbsp;&nbsp;'
                }


            ]
        });
    }

    $("table").delegate(".editor_edit", "click", function () {
        $("#MasterDataViews").removeClass("active");
        $("#MastersRecord").addClass("active");
        $(".tab-pane").removeClass("active");
        $("#tab3").addClass("active");
        var tablename = 'dbo.UserMaster';
        var Corporate = '2';
        var unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var Xmaster = $(this).parent().parent().children(':eq(2)').text();
        var Type = 'EditMode';
        var SrNo = $(this).parent().parent().children(':eq(1)').text();
        $.ajax(
         {
             type: "POST",
             url: "/AllMaster/Edit_DataUser",
             data: {
                 tablename: tablename, Corporate: Corporate, unit: unit, Formcode: Formcode, Formtabcode: Formtabcode, Xmaster: Xmaster, Type: Type, SrNo: SrNo
             },
             dataType: 'json',
             success: function (response) {
                 //Master
                 if (response['AMaster'].length > 0) {

                     hide_div();
                     $('#drpSegmenttab3').find('option[value="' + response['AMaster'][0]['SEGMENT'] + '"]').attr('selected', true).change();
                     $('#drpCorporateTab').find('option[value="' + response['AMaster'][0]['Corporate'] + '"]').attr('selected', true).change();
                     $('#drpMasterTab3').find('option[value="' + response['AMaster'][0]['xmaster'] + '"]').attr('selected', true).change();

                 }
                 if (response['AUserMasterData'].length > 0) {

                     $('#txtnameTab3').val(response['AUserMasterData'][0]['Uxname']);
                     //$('#drpActiveTab3').find('option[value="' + response['AUserMasterData'][0]['UIsActive'] + '"]').attr('selected', true).change();
                     $('#txtRemarsTab3').val(response['AUserMasterData'][0]['URemark']);

                     setSelect2Value($('#drpActiveTab3'), response['AUserMasterData'][0]['UIsActive']);

                     setSelect2Value($('#Dropdown1Tab3'), response['AUserMasterData'][0]['Uxlink']);
                     setSelect2Value($('#Dropdown2Tab3'), response['AUserMasterData'][0]['Uxcross']);
                     setSelect2Value($('#Dropdown3Tab3'), response['AUserMasterData'][0]['Uxcross1']);
                     setSelect2Value($('#Dropdown4Tab3'), response['AUserMasterData'][0]['Uxcross2']);
                     setSelect2Value($('#Dropdown5Tab3'), response['AUserMasterData'][0]['Uxcross3']);
                     setSelect2Value($('#Dropdown6Tab3'), response['AUserMasterData'][0]['Uxcross4']);

                     //hide_Tooltip();
                     //PageLoad_FilledAll();

                     $('#txtSrNoTab3').val(response['AUserMasterData'][0]['USrno']);
                     $('#Textbox1Tab3').val(response['AUserMasterData'][0]['Uxreference1']);
                     $('#Textbox2Tab3').val(response['AUserMasterData'][0]['Uxreference2']);
                     $('#Textbox3Tab3').val(response['AUserMasterData'][0]['Uxreference3']);
                     $('#Textbox4Tab3').val(response['AUserMasterData'][0]['Uxreference4']);
                     $('#Textbox5Tab3').val(response['AUserMasterData'][0]['Uxreference5']);
                     $('#Textbox6Tab3').val(response['AUserMasterData'][0]['Uxreference6']);
                     $('#txtRemarsTab3').val(response['AUserMasterData'][0]['Uxdetail']);

                     $('#Rating1').val(response['AUserMasterData'][0]['URating1']);
                     $('#Rating2').val(response['AUserMasterData'][0]['URating2']);
                     $('#Rating3').val(response['AUserMasterData'][0]['URating3']);

                     $('#Date1').val(response['AUserMasterData'][0]['UDate1']);
                     $('#Date2').val(response['AUserMasterData'][0]['UDate2']);
                     $('#Date3').val(response['AUserMasterData'][0]['UDate3']);

                     $('#Amount1').val(response['AUserMasterData'][0]['UAmount']);
                     $('#Amount2').val(response['AUserMasterData'][0]['UAmount2']);
                     $('#Amount3Tab3').val(response['AUserMasterData'][0]['UAmount3']);
                     $('#time1').val(response['AUserMasterData'][0]['UTime1']);
                     $('#time2').val(response['AUserMasterData'][0]['UTime2']);
                     $('#HTMlEditor1').val(response['AUserMasterData'][0]['UHtml']);
                     $('#photoUpload').val(response['AUserMasterData'][0]['UUpload']);
                     $('#Textarea1').val(response['AUserMasterData'][0]['UTextArea']);

                     $('#Multiselect1').find('option[value="' + response['AUserMasterData'][0]['UMultiSelect1'] + '"]').attr('selected', true).change();
                     $('#Multiselect2').find('option[value="' + response['AUserMasterData'][0]['UMultiSelect2'] + '"]').attr('selected', true).change();
                     $('#Multiselect3').find('option[value="' + response['AUserMasterData'][0]['UMultiSelect3'] + '"]').attr('selected', true).change();
                     $('#Multiselect4').find('option[value="' + response['AUserMasterData'][0]['UMultiSelect4'] + '"]').attr('selected', true).change();
                     $('#Multiselect5').find('option[value="' + response['AUserMasterData'][0]['UMultiSelect5'] + '"]').attr('selected', true).change();

                     $('#btnSave').text('UPDATE');
                     $('#btnSave').attr("class", "btn btn-primary btnSave");
                 }
             }
         })
    });

    $("table").delegate(".editor_Delte", "click", function () {

    });

    function PageLoad_FilledAll() {
        masterchangehide();
        hide_div();
        //  var field1 = 1;
        var field1 = $('#drpSegmenttab3 option:selected').val();
        var field2 = $('#drpMasterTab3 option:selected').val();
        $.ajax({
            url: "/AllMaster/ALL_Data_Field",
            data: { Type: 'Caption', field1: field1, field2: field2 },
            type: "POST",
            dataType: "json",
            async: false,
            success: function (response) {
                //Caption
                if (response['ACaption'].length > 0) {
                    if (response['ACaption'][0]['Field3caption'] != "--None--" && response['ACaption'][0]['Field3caption'] != "" && response['ACaption'][0]['Field3caption'] != null) {

                        $('#LbName').text(response['ACaption'][0]['Field3caption']);
                        $('#divName').show();
                    }
                    if (response['ACaption'][0]['Field4caption'] != "--None--" && response['ACaption'][0]['Field4caption'] != "" && response['ACaption'][0]['Field4caption'] != null) {

                        $('#LbActive').text(response['ACaption'][0]['Field4caption']);
                        $('#divActive').show();
                    }
                    if (response['ACaption'][0]['Field5caption'] != "--None--" && response['ACaption'][0]['Field5caption'] != "" && response['ACaption'][0]['Field5caption'] != null) {
                        $('#LbRemarks').text(response['ACaption'][0]['Field5caption']);
                        $('#divRemarks').show();
                    }
                    if (response['ACaption'][0]['Field6caption'] != "--None--" && response['ACaption'][0]['Field6caption'] != "" && response['ACaption'][0]['Field6caption'] != null) {
                        $('#LbDropdown1').text(response['ACaption'][0]['Field6caption']);
                        $('#divDropdown1').show();
                    }
                    if (response['ACaption'][0]['Field7caption'] != "--None--" && response['ACaption'][0]['Field7caption'] != "" && response['ACaption'][0]['Field7caption'] != null) {
                        $('#LbDropdown2').text(response['ACaption'][0]['Field7caption']);
                        $('#divDropdown2').show();
                    }
                    if (response['ACaption'][0]['Field8caption'] != "--None--" && response['ACaption'][0]['Field8caption'] != "" && response['ACaption'][0]['Field8caption'] != null) {
                        $('#LbDropdown3').text(response['ACaption'][0]['Field8caption']);
                        $('#divDropdown3').show();
                    }
                    if (response['ACaption'][0]['Field9caption'] != "--None--" && response['ACaption'][0]['Field9caption'] != "" && response['ACaption'][0]['Field9caption'] != null) {
                        $('#LbDropdown4').text(response['ACaption'][0]['Field9caption']);
                        $('#divDropdown4').show();
                    }
                    if (response['ACaption'][0]['Field10caption'] != "--None--" && response['ACaption'][0]['Field10caption'] != "" && response['ACaption'][0]['Field10caption'] != null) {
                        $('#LbDropdown5').text(response['ACaption'][0]['Field10caption']);
                        $('#divDropdown5').show();
                    }
                    if (response['ACaption'][0]['Field11caption'] != "--None--" && response['ACaption'][0]['Field11caption'] != "" && response['ACaption'][0]['Field11caption'] != null) {
                        $('#LbDropdown6').text(response['ACaption'][0]['Field11caption']);
                        $('#divDropdown6').show();
                    }
                    if (response['ACaption'][0]['Field12caption'] != "--None--" && response['ACaption'][0]['Field12caption'] != "" && response['ACaption'][0]['Field12caption'] != null) {
                        $('#LbTextbox1').text(response['ACaption'][0]['Field12caption']);
                        $('#divTextbox1').show();
                    }
                    if (response['ACaption'][0]['Field13caption'] != "--None--" && response['ACaption'][0]['Field13caption'] != "" && response['ACaption'][0]['Field13caption'] != null) {
                        $('#LbTextbox2').text(response['ACaption'][0]['Field13caption']);
                        $('#divTextbox2').show();
                    }
                    if (response['ACaption'][0]['Field14caption'] != "--None--" && response['ACaption'][0]['Field14caption'] != "" && response['ACaption'][0]['Field14caption'] != null) {
                        $('#LbTextbox3').text(response['ACaption'][0]['Field14caption']);
                        $('#divTextbox3').show();
                    }
                    if (response['ACaption'][0]['Field15caption'] != "--None--" && response['ACaption'][0]['Field15caption'] != "" && response['ACaption'][0]['Field15caption'] != null) {
                        $('#LbTextbox4').text(response['ACaption'][0]['Field15caption']);
                        $('#divTextbox4').show();
                    }
                    if (response['ACaption'][0]['Field16caption'] != "--None--" && response['ACaption'][0]['Field16caption'] != "" && response['ACaption'][0]['Field16caption'] != null) {
                        $('#LbTextbox5').text(response['ACaption'][0]['Field16caption']);
                        $('#divTextbox5').show();
                    }
                    if (response['ACaption'][0]['Field17caption'] != "--None--" && response['ACaption'][0]['Field17caption'] != "" && response['ACaption'][0]['Field17caption'] != null) {

                        $('#LbTextbox6').text(response['ACaption'][0]['Field17caption']);
                        $('#divTextbox6').show();
                    }
                    if (response['ACaption'][0]['Rating1caption'] != "--None--" && response['ACaption'][0]['Rating1caption'] != "" && response['ACaption'][0]['Rating1caption'] != null) {

                        $('#LbRating1').text(response['ACaption'][0]['Rating1caption']);
                        $('#divRating1').show();
                    }
                    if (response['ACaption'][0]['Rating2caption'] != "--None--" && response['ACaption'][0]['Rating2caption'] != "" && response['ACaption'][0]['Rating2caption'] != null) {

                        $('#LbRating2').text(response['ACaption'][0]['Rating2caption']);
                        $('#divRating2').show();
                    }
                    if (response['ACaption'][0]['Rating3caption'] != "--None--" && response['ACaption'][0]['Rating3caption'] != "" && response['ACaption'][0]['Rating3caption'] != null) {

                        $('#LbRating3').text(response['ACaption'][0]['Rating3caption']);
                        $('#divRating3').show();
                    }
                    if (response['ACaption'][0]['Date1caption'] != "--None--" && response['ACaption'][0]['Date1caption'] != "" && response['ACaption'][0]['Date1caption'] != null) {

                        $('#LbDate1').text(response['ACaption'][0]['Date1caption']);
                        $('#divDate1').show();
                    }
                    if (response['ACaption'][0]['Date2caption'] != "--None--" && response['ACaption'][0]['Date2caption'] != "" && response['ACaption'][0]['Date2caption'] != null) {

                        $('#LbDate2').text(response['ACaption'][0]['Date2caption']);
                        $('#divDate2').show();
                    }
                    if (response['ACaption'][0]['Date3caption'] != "--None--" && response['ACaption'][0]['Date3caption'] != "" && response['ACaption'][0]['Date3caption'] != null) {

                        $('#LbDate3').text(response['ACaption'][0]['Date3caption']);
                        $('#divDate3').show();
                    }
                    if (response['ACaption'][0]['Email1caption'] != "--None--" && response['ACaption'][0]['Email1caption'] != "" && response['ACaption'][0]['Email1caption'] != null) {

                        $('#LbEmail1').text(response['ACaption'][0]['Email1caption']);
                        $('#divEmail1').show();
                    }
                    if (response['ACaption'][0]['Email2caption'] != "--None--" && response['ACaption'][0]['Email2caption'] != "" && response['ACaption'][0]['Email2caption'] != null) {

                        $('#LbEmail2').text(response['ACaption'][0]['Email2caption']);
                        $('#divEmail2').show();
                    }
                    if (response['ACaption'][0]['Email3caption'] != "--None--" && response['ACaption'][0]['Email3caption'] != "" && response['ACaption'][0]['Email3caption'] != null) {

                        $('#LbEmail3').text(response['ACaption'][0]['Email3caption']);
                        $('#divEmail3').show();
                    }
                    if (response['ACaption'][0]['Amountcaption'] != "--None--" && response['ACaption'][0]['Amountcaption'] != "" && response['ACaption'][0]['Amountcaption'] != null) {

                        $('#LbAmount1').text(response['ACaption'][0]['Amountcaption']);
                        $('#divAmount1').show();
                    }
                    if (response['ACaption'][0]['Amount2caption'] != "--None--" && response['ACaption'][0]['Amount2caption'] != "" && response['ACaption'][0]['Amount2caption'] != null) {

                        $('#LbAmount2').text(response['ACaption'][0]['Amount2caption']);
                        $('#divAmount2').show();
                    }
                    if (response['ACaption'][0]['Amount3caption'] != "--None--" && response['ACaption'][0]['Amount3caption'] != "" && response['ACaption'][0]['Amount3caption'] != null) {

                        $('#LbAmount3').text(response['ACaption'][0]['Amount3caption']);
                        $('#divAmount3').show();
                    }
                    if (response['ACaption'][0]['Time1caption'] != "--None--" && response['ACaption'][0]['Time1caption'] != "" && response['ACaption'][0]['Time1caption'] != null) {

                        $('#LbTime1').text(response['ACaption'][0]['Time1caption']);
                        $('#divTime1').show();
                    }
                    if (response['ACaption'][0]['Time2caption'] != "--None--" && response['ACaption'][0]['Time2caption'] != "" && response['ACaption'][0]['Time2caption'] != null) {

                        $('#LbTime2').text(response['ACaption'][0]['Time2caption']);
                        $('#divTime2').show();
                    }
                    if (response['ACaption'][0]['Htmlcaption'] != "--None--" && response['ACaption'][0]['Htmlcaption'] != "" && response['ACaption'][0]['Htmlcaption'] != null) {

                        $('#LbHTML').text(response['ACaption'][0]['Htmlcaption']);
                        $('#divHtmleditor1').show();
                    }
                    if (response['ACaption'][0]['Uploadcaption'] != "--None--" && response['ACaption'][0]['Uploadcaption'] != "" && response['ACaption'][0]['Uploadcaption'] != null) {

                        $('#LbPHOTOUPLOAD').text(response['ACaption'][0]['Uploadcaption']);
                        $('#divphotoUpload1').show();
                    }
                    if (response['ACaption'][0]['TextAreacaption'] != "--None--" && response['ACaption'][0]['TextAreacaption'] != "" && response['ACaption'][0]['TextAreacaption'] != null) {

                        $('#LbTextarea').text(response['ACaption'][0]['TextAreacaption']);
                        $('#divTextarea1').show();
                    }
                    if (response['ACaption'][0]['MultiSelect1caption'] != "--None--" && response['ACaption'][0]['MultiSelect1caption'] != "" && response['ACaption'][0]['MultiSelect1caption'] != null) {

                        $('#LbMultiselect1').text(response['ACaption'][0]['MultiSelect1caption']);
                        $('#divMultiselect1').show();
                    }
                    if (response['ACaption'][0]['MultiSelect2caption'] != "--None--" && response['ACaption'][0]['MultiSelect2caption'] != "" && response['ACaption'][0]['MultiSelect2caption'] != null) {

                        $('#LbMultiselect2').text(response['ACaption'][0]['MultiSelect2caption']);
                        $('#divMultiselect2').show();
                    }
                    if (response['ACaption'][0]['MultiSelect3caption'] != "--None--" && response['ACaption'][0]['MultiSelect3caption'] != "" && response['ACaption'][0]['MultiSelect3caption'] != null) {

                        $('#LbMultiselect3').text(response['ACaption'][0]['MultiSelect3caption']);
                        $('#divMultiselect3').show();
                    }
                    if (response['ACaption'][0]['MultiSelect4caption'] != "--None--" && response['ACaption'][0]['MultiSelect4caption'] != "" && response['ACaption'][0]['MultiSelect4caption'] != null) {

                        $('#LbMultiselect4').text(response['ACaption'][0]['MultiSelect4caption']);
                        $('#divMultiselect4').show();
                    }
                    if (response['ACaption'][0]['MultiSelect5caption'] != "--None--" && response['ACaption'][0]['MultiSelect5caption'] != "" && response['ACaption'][0]['MultiSelect5caption'] != null) {

                        $('#LbMultiselect5').text(response['ACaption'][0]['MultiSelect5caption']);
                        $('#divMultiselect5').show();
                    }
                }
                //Placeholder
                if (response['Aplaceholder'].length > 0) {
                    //  alert(response['Aplaceholder'][0]['field12']);
                    if (response['Aplaceholder'][0]['Field3'] != "--None--" && response['Aplaceholder'][0]['Field3'] != "" && response['Aplaceholder'][0]['Field3'] != null) {
                        $('#txtnameTab3').attr("placeholder", (response['Aplaceholder'][0]['Field3']));
                    }

                    if (response['Aplaceholder'][0]['Field5'] != "--None--" && response['Aplaceholder'][0]['Field5'] != "" && response['Aplaceholder'][0]['Field5'] != null) {
                        $('#txtRemarsTab3').attr("placeholder", (response['Aplaceholder'][0]['Field5']));
                    }

                    if (response['Aplaceholder'][0]['Field12'] != "--None--" && response['Aplaceholder'][0]['Field12'] != "" && response['Aplaceholder'][0]['Field12'] != null) {

                        $('#Textbox1Tab3').attr("placeholder", (response['Aplaceholder'][0]['Field12']));
                    }
                    if (response['Aplaceholder'][0]['Field13'] != "--None--" && response['Aplaceholder'][0]['Field13'] != "" && response['Aplaceholder'][0]['Field13'] != null) {
                        $('#Textbox2Tab3').attr("placeholder", (response['Aplaceholder'][0]['Field13']));
                    }
                    if (response['Aplaceholder'][0]['Field14'] != "--None--" && response['Aplaceholder'][0]['Field14'] != "" && response['Aplaceholder'][0]['Field14'] != null) {
                        $('#Textbox3Tab3').attr("placeholder", (response['Aplaceholder'][0]['Field14']));
                    }
                    if (response['Aplaceholder'][0]['Field15'] != "--None--" && response['Aplaceholder'][0]['Field15'] != "" && response['Aplaceholder'][0]['Field15'] != null) {


                        $('#Textbox4Tab3').attr("placeholder", (response['Aplaceholder'][0]['Field15']));
                    }
                    if (response['Aplaceholder'][0]['Field16'] != "--None--" && response['Aplaceholder'][0]['Field16'] != "" && response['Aplaceholder'][0]['Field16'] != null) {
                        $('#Textbox5Tab3').attr("placeholder", (response['Aplaceholder'][0]['Field16']));
                    }
                    if (response['Aplaceholder'][0]['Field17'] != "--None--" && response['Aplaceholder'][0]['Field17'] != "" && response['Aplaceholder'][0]['Field17'] != null) {
                        $('#Textbox6Tab3').attr("placeholder", (response['Aplaceholder'][0]['Field17']));
                    }
                    if (response['Aplaceholder'][0]['Date1'] != "--None--" && response['Aplaceholder'][0]['Date1'] != "" && response['Aplaceholder'][0]['Date1'] != null) {
                        $('#Date1').attr("placeholder", (response['Aplaceholder'][0]['Date1']));
                    }
                    if (response['Aplaceholder'][0]['Date2'] != "--None--" && response['Aplaceholder'][0]['Date2'] != "" && response['Aplaceholder'][0]['Date2'] != null) {
                        $('#Date2').attr("placeholder", (response['Aplaceholder'][0]['Date2']));
                    }
                    if (response['Aplaceholder'][0]['Date3'] != "--None--" && response['Aplaceholder'][0]['Date3'] != "" && response['Aplaceholder'][0]['Date3'] != null) {
                        $('#Date3').attr("placeholder", (response['Aplaceholder'][0]['Date3']));
                    }
                    if (response['Aplaceholder'][0]['Time1'] != "--None--" && response['Aplaceholder'][0]['Time1'] != "" && response['Aplaceholder'][0]['Time1'] != null) {
                        $('#time1').attr("placeholder", (response['Aplaceholder'][0]['Time1']));
                    }
                    if (response['Aplaceholder'][0]['Time2'] != "--None--" && response['Aplaceholder'][0]['Time2'] != "" && response['Aplaceholder'][0]['Time2'] != null) {
                        $('#time2').attr("placeholder", (response['Aplaceholder'][0]['Time2']));
                    }
                    if (response['Aplaceholder'][0]['Email1'] != "--None--" && response['Aplaceholder'][0]['Email1'] != "" && response['Aplaceholder'][0]['Email1'] != null) {
                        $('#Email1').attr("placeholder", (response['Aplaceholder'][0]['Email1']));
                    }
                    if (response['Aplaceholder'][0]['Email2'] != "--None--" && response['Aplaceholder'][0]['Email2'] != "" && response['Aplaceholder'][0]['Email2'] != null) {
                        $('#Email2').attr("placeholder", (response['Aplaceholder'][0]['Email2']));
                    }
                    if (response['Aplaceholder'][0]['Email3'] != "--None--" && response['Aplaceholder'][0]['Email3'] != "" && response['Aplaceholder'][0]['Email3'] != null) {
                        $('#Email3').attr("placeholder", (response['Aplaceholder'][0]['Email3']));
                    }
                    if (response['Aplaceholder'][0]['Amount'] != "--None--" && response['Aplaceholder'][0]['Amount'] != "" && response['Aplaceholder'][0]['Amount'] != null) {
                        $('#Amount1').attr("placeholder", (response['Aplaceholder'][0]['Amount']));
                    }
                    if (response['Aplaceholder'][0]['Amount2'] != "--None--" && response['Aplaceholder'][0]['Amount2'] != "" && response['Aplaceholder'][0]['Amount2'] != null) {
                        $('#Amount2').attr("placeholder", (response['Aplaceholder'][0]['Amount2']));
                    }
                    if (response['Aplaceholder'][0]['Amount3'] != "--None--" && response['Aplaceholder'][0]['Amount3'] != "" && response['Aplaceholder'][0]['Amount3'] != null) {


                        $('#Amount3Tab3').attr("placeholder", (response['Aplaceholder'][0]['Amount3']));
                    }
                    if (response['Aplaceholder'][0]['TextArea'] != "--None--" && response['Aplaceholder'][0]['TextArea'] != "" && response['Aplaceholder'][0]['TextArea'] != null) {

                        $('#Textarea1').attr("placeholder", (response['Aplaceholder'][0]['TextArea']));
                    }
                    if (response['Aplaceholder'][0]['Html'] != "--None--" && response['Aplaceholder'][0]['Html'] != "" && response['Aplaceholder'][0]['Html'] != null) {

                        $('#HTMlEditor1').attr("placeholder", (response['Aplaceholder'][0]['Html']));
                    }
                    if (response['Aplaceholder'][0]['Upload'] != "--None--" && response['Aplaceholder'][0]['Upload'] != "" && response['Aplaceholder'][0]['Upload'] != null) {
                        $('#photoUpload').attr("placeholder", (response['Aplaceholder'][0]['Upload']));
                    }

                }
                //validation
                if (response['AValidation'].length > 0) {

                    if (response['AValidation'][0]['Field3'] != '' && response['AValidation'][0]['Field3'] != '--None--' && response['AValidation'][0]['Field3'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field3'], $('#txtnameTab3'));
                    }

                    if (response['AValidation'][0]['Field5'] != '' && response['AValidation'][0]['Field5'] != '--None--' && response['AValidation'][0]['Field5'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field5'], $('#txtRemarsTab3'));
                    }

                    if (response['AValidation'][0]['Field12'] != '' && response['AValidation'][0]['Field12'] != '--None--' && response['AValidation'][0]['Field12'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field12'], $('#Textbox1Tab3'));
                    }
                    if (response['AValidation'][0]['Field13'] != '' && response['AValidation'][0]['Field13'] != '--None--' && response['AValidation'][0]['Field13'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field13'], $('#Textbox2Tab3'));
                    }

                    if (response['AValidation'][0]['Field14'] != '' && response['AValidation'][0]['Field14'] != '--None--' && response['AValidation'][0]['Field14'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field14'], $('#Textbox3Tab3'));
                    }

                    if (response['AValidation'][0]['Field15'] != '' && response['AValidation'][0]['Field15'] != '--None--' && response['AValidation'][0]['Field15'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field15'], $('#Textbox4Tab3'));
                    }
                    if (response['AValidation'][0]['Field16'] != '' && response['AValidation'][0]['Field16'] != '--None--' && response['AValidation'][0]['Field16'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field16'], $('#Textbox5Tab3'));
                    }
                    if (response['AValidation'][0]['Field17'] != '' && response['AValidation'][0]['Field17'] != '--None--' && response['AValidation'][0]['Field17'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field17'], $('#Textbox6Tab3'));
                    }
                    if (response['AValidation'][0]['Date1'] != '' && response['AValidation'][0]['Date1'] != '--None--' && response['AValidation'][0]['Date1'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Date1'], $('#Date1'));
                    }
                    if (response['AValidation'][0]['Date2'] != '' && response['AValidation'][0]['Date2'] != '--None--' && response['AValidation'][0]['Date2'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Date2'], $('#Date2'));
                    }
                    if (response['AValidation'][0]['Date3'] != '' && response['AValidation'][0]['Date3'] != '--None--' && response['AValidation'][0]['Date3'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Date3'], $('#Date3'));
                    }
                    if (response['AValidation'][0]['Time1'] != '' && response['AValidation'][0]['Time1'] != '--None--' && response['AValidation'][0]['Time1'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Time1'], $('#time1'));
                    }
                    if (response['AValidation'][0]['Time2'] != '' && response['AValidation'][0]['Time2'] != '--None--' && response['AValidation'][0]['Time2'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Time2'], $('#time2'));
                    }
                    if (response['AValidation'][0]['Email1'] != '' && response['AValidation'][0]['Email1'] != '--None--' && response['AValidation'][0]['Email1'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Email1'], $('#Email1'));
                    }
                    if (response['AValidation'][0]['Email2'] != '' && response['AValidation'][0]['Email2'] != '--None--' && response['AValidation'][0]['Email2'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Email2'], $('#Email2'));
                    }
                    if (response['AValidation'][0]['Email3'] != '' && response['AValidation'][0]['Email3'] != '--None--' && response['AValidation'][0]['Email3'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Email3'], $('#Email3'));
                    }
                    if (response['AValidation'][0]['Amount'] != '' && response['AValidation'][0]['Amount'] != '--None--' && response['AValidation'][0]['Amount'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Amount'], $('#Amount1'));
                    }
                    if (response['AValidation'][0]['Amount2'] != '' && response['AValidation'][0]['Amount2'] != '--None--' && response['AValidation'][0]['Amount2'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Amount2'], $('#Amount2'));
                    }
                    if (response['AValidation'][0]['Amount3'] != '' && response['AValidation'][0]['Amount3'] != '--None--' && response['AValidation'][0]['Amount3'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Amount3'], $('#Amount3Tab3'));
                    }
                    if (response['AValidation'][0]['TextArea'] != '' && response['AValidation'][0]['TextArea'] != '--None--' && response['AValidation'][0]['TextArea'] != null) {
                        CheckFormValidations(response['AValidation'][0]['TextArea'], $('#Textarea1'));
                    }

                    if (response['AValidation'][0]['Html'] != '' && response['AValidation'][0]['Html'] != '--None--' && response['AValidation'][0]['Html'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Html'], $('#HTMlEditor1'));
                    }

                    if (response['AValidation'][0]['Upload'] != '' && response['AValidation'][0]['Upload'] != '--None--' && response['Aplaceholder'][0]['Upload'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Upload'], $('#photoUpload'));
                    }

                    //if (response['AValidation'][0]['Upload'] != '' && response['AValidation'][0]['Upload'] != '--None--' && response['AValidation'][0]['Upload'] != null) {
                    //    CheckFormValidations(response['AValidation'][0]['Upload'], $('#photoUpload'));
                    //}
                    //if (response['AValidation'][0]['Upload'] != '' && response['AValidation'][0]['Upload'] != '--None--' && response['AValidation'][0]['Upload'] != null) {
                    //    CheckFormValidations(response['AValidation'][0]['Upload'], $('#photoUpload'));
                    //}
                    if (response['AValidation'][0]['Field6'] != '' && response['AValidation'][0]['Field6'] != '--None--' && response['AValidation'][0]['Field6'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field6'], $('#Dropdown1Tab3'));
                    }
                    if (response['AValidation'][0]['Field7'] != '' && response['AValidation'][0]['Field7'] != '--None--' && response['AValidation'][0]['Field7'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field7'], $('#Dropdown2Tab3'));
                    }
                    if (response['AValidation'][0]['Field8'] != '' && response['AValidation'][0]['Field8'] != '--None--' && response['AValidation'][0]['Field8'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field8'], $('#Dropdown3Tab3'));
                    }
                    if (response['AValidation'][0]['Field9'] != '' && response['AValidation'][0]['Field9'] != '--None--' && response['AValidation'][0]['Field9'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field9'], $('#Dropdown4Tab3'));
                    }
                    if (response['AValidation'][0]['Field10'] != '' && response['AValidation'][0]['Field10'] != '--None--' && response['AValidation'][0]['Field10'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field10'], $('#Dropdown5Tab3'));
                    }
                    if (response['AValidation'][0]['Field11'] != '' && response['AValidation'][0]['Field11'] != '--None--' && response['AValidation'][0]['Field11'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Field11'], $('#Dropdown6Tab3'));
                    }

                    if (response['AValidation'][0]['MultiSelect1'] != '' && response['AValidation'][0]['MultiSelect1'] != '--None--' && response['AValidation'][0]['MultiSelect1'] != null) {
                        CheckFormValidations(response['AValidation'][0]['MultiSelect1'], $('#Multiselect1'));
                    }
                    if (response['AValidation'][0]['MultiSelect2'] != '' && response['AValidation'][0]['MultiSelect2'] != '--None--' && response['AValidation'][0]['MultiSelect2'] != null) {
                        CheckFormValidations(response['AValidation'][0]['MultiSelect2'], $('#Multiselect2'));
                    }
                    if (response['AValidation'][0]['MultiSelect3'] != '' && response['AValidation'][0]['MultiSelect3'] != '--None--' && response['AValidation'][0]['MultiSelect3'] != null) {
                        CheckFormValidations(response['AValidation'][0]['MultiSelect3'], $('#Multiselect3'));
                    }
                    if (response['AValidation'][0]['MultiSelect4'] != '' && response['AValidation'][0]['MultiSelect4'] != '--None--' && response['AValidation'][0]['MultiSelect4'] != null) {
                        CheckFormValidations(response['AValidation'][0]['MultiSelect4'], $('#Multiselect4'));
                    }
                    if (response['AValidation'][0]['MultiSelect5'] != '' && response['AValidation'][0]['MultiSelect5'] != '--None--' && response['AValidation'][0]['MultiSelect5'] != null) {
                        CheckFormValidations(response['AValidation'][0]['MultiSelect5'], $('#Multiselect5'));
                    }

                    if (response['AValidation'][0]['Rating1'] != '' && response['AValidation'][0]['Rating1'] != '--None--' && response['AValidation'][0]['Rating1'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Rating1'], $('#Rating1'));
                    }
                    if (response['AValidation'][0]['Rating2'] != '' && response['AValidation'][0]['Rating2'] != '--None--' && response['AValidation'][0]['Rating2'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Rating2'], $('#Rating2'));
                    }
                    if (response['AValidation'][0]['Rating3'] != '' && response['AValidation'][0]['Rating3'] != '--None--' && response['AValidation'][0]['Rating3'] != null) {
                        CheckFormValidations(response['AValidation'][0]['Rating3'], $('#Rating3'));
                    }

                    //$('#txtValidationCode2').val(response['AValidation'][0]['Field4']);
                    //$('#txtValidationCode3').val(response['AValidation'][0]['Field5']);
                    //$('#txtValidationCode4').val(response['AValidation'][0]['Field6']);
                    //$('#txtValidationCode5').val(response['AValidation'][0]['Field7']);
                    //$('#txtValidationCode6').val(response['AValidation'][0]['Field8']);
                    //$('#txtValidationCode7').val(response['AValidation'][0]['Field9']);
                    //$('#txtValidationCode8').val(response['AValidation'][0]['Field10']);
                    //$('#txtValidationCode9').val(response['AValidation'][0]['Field11']);
                    //$('#txtValidationCode10').val(response['AValidation'][0]['Field12']);
                    //$('#txtValidationCode11').val(response['AValidation'][0]['Field13']);
                    //$('#txtValidationCode12').val(response['AValidation'][0]['Field14']);
                    //$('#txtValidationCode13').val(response['AValidation'][0]['Field15']);
                    //$('#txtValidationCode14').val(response['AValidation'][0]['Field16']);
                    //$('#txtValidationCode15').val(response['AValidation'][0]['Field17']);
                    //$('#txtValidationCode16').val(response['AValidation'][0]['Rating1']);
                    //$('#txtValidationCode17').val(response['AValidation'][0]['Rating2']);
                    //$('#txtValidationCode18').val(response['AValidation'][0]['Rating3']);
                    //$('#txtValidationCode19').val(response['AValidation'][0]['Date1']);
                    //$('#txtValidationCode20').val(response['AValidation'][0]['Date2']);
                    //$('#txtValidationCode21').val(response['AValidation'][0]['Date3']);
                    //$('#txtValidationCode24').val(response['AValidation'][0]['Email1']);
                    //$('#txtValidationCode25').val(response['AValidation'][0]['Email2']);
                    //$('#txtValidationCode26').val(response['AValidation'][0]['Email3']);
                    //$('#txtValidationCode27').val(response['AValidation'][0]['Amount']);
                    //$('#txtValidationCode28').val(response['AValidation'][0]['Amount2']);
                    //$('#txtValidationCode29').val(response['AValidation'][0]['Amount3']);
                    //$('#txtValidationCode22').val(response['AValidation'][0]['Time1']);
                    //$('#txtValidationCode23').val(response['AValidation'][0]['Time2']);
                    //$('#txtValidationCode31').val(response['AValidation'][0]['Html']);
                    //$('#txtValidationCode32').val(response['AValidation'][0]['Upload']);
                    //$('#txtValidationCode30').val(response['AValidation'][0]['TextArea']);
                    //$('#txtValidationCode33').val(response['AValidation'][0]['MultiSelect1']);
                    //$('#txtValidationCode34').val(response['AValidation'][0]['MultiSelect2']);
                    //$('#txtValidationCode35').val(response['AValidation'][0]['MultiSelect3']);
                    //$('#txtValidationCode36').val(response['AValidation'][0]['MultiSelect4']);
                    //$('#txtValidationCode37').val(response['AValidation'][0]['MultiSelect5']);
                }

                //tooltip
                if (response['Atooltip'].length > 0) {
                    //$('#txtHelp1').val(response['Atooltip'][0]['Field3']);
                    if (response['Atooltip'][0]['Field3'] != "--None--" && response['Atooltip'][0]['Field3'] != "" && response['Atooltip'][0]['Field3'] != null) {

                        //$('#LbName').attr("data-original-title", (response['Atooltip'][0]['Field3']));
                        $('#field6').attr("data-original-title", (response['Atooltip'][0]['Field3']));
                        $('#field6').show();
                    }
                    if (response['Atooltip'][0]['Field4'] != "--None--" && response['Atooltip'][0]['Field4'] != "" && response['Atooltip'][0]['Field4'] != null) {

                        // $('#LbActive').attr("data-original-title", (response['Atooltip'][0]['Field4']));
                        $('#field7').attr("data-original-title", (response['Atooltip'][0]['Field4']));
                        $('#field7').show();
                    }
                    if (response['Atooltip'][0]['Field5'] != "--None--" && response['Atooltip'][0]['Field5'] != "" && response['Atooltip'][0]['Field5'] != null) {
                        //$('#LbRemarks').attr("data-original-title", (response['Atooltip'][0]['Field5']));
                        $('#field8').attr("data-original-title", (response['Atooltip'][0]['Field5']));
                        $('#field8').show();
                    }
                    if (response['Atooltip'][0]['Field6'] != "--None--" && response['Atooltip'][0]['Field6'] != "" && response['Atooltip'][0]['Field6'] != null) {
                        //$('#LbDropdown1').attr("data-original-title", (response['Atooltip'][0]['Field6']));
                        $('#field9').attr("data-original-title", (response['Atooltip'][0]['Field6']));
                        $('#field9').show();
                    }
                    if (response['Atooltip'][0]['Field7'] != "--None--" && response['Atooltip'][0]['Field7'] != "" && response['Atooltip'][0]['Field7'] != null) {
                        // $('#LbDropdown2').attr("data-original-title", (response['Atooltip'][0]['Field7']));
                        $('#field10').attr("data-original-title", (response['Atooltip'][0]['Field7']));
                        $('#field10').show();
                    }
                    if (response['Atooltip'][0]['Field8'] != "--None--" && response['Atooltip'][0]['Field8'] != "" && response['Atooltip'][0]['Field8'] != null) {
                        // $('#LbDropdown3').attr("data-original-title", (response['Atooltip'][0]['Field8']));
                        $('#field11').attr("data-original-title", (response['Atooltip'][0]['Field8']));
                        $('#field11').show();
                    }
                    if (response['Atooltip'][0]['Field9'] != "--None--" && response['Atooltip'][0]['Field9'] != "" && response['Atooltip'][0]['Field9'] != null) {
                        //  $('#LbDropdown4').attr("data-original-title", (response['Atooltip'][0]['Field9']));
                        $('#field12').attr("data-original-title", (response['Atooltip'][0]['Field9']));
                        $('#field12').show();
                    }
                    if (response['Atooltip'][0]['Field10'] != "--None--" && response['Atooltip'][0]['Field10'] != "" && response['Atooltip'][0]['Field10'] != null) {
                        // $('#LbDropdown5').attr("data-original-title", (response['Atooltip'][0]['Field10']));
                        $('#field13').attr("data-original-title", (response['Atooltip'][0]['Field10']));
                        $('#field13').show();
                    }
                    if (response['Atooltip'][0]['Field11'] != "--None--" && response['Atooltip'][0]['Field11'] != "" && response['Atooltip'][0]['Field11'] != null) {
                        // $('#LbDropdown6').attr("data-original-title", (response['Atooltip'][0]['Field11']));
                        $('#field14').attr("data-original-title", (response['Atooltip'][0]['Field11']));
                        $('#field14').show();
                    }
                    if (response['Atooltip'][0]['Field12'] != "--None--" && response['Atooltip'][0]['Field12'] != "" && response['Atooltip'][0]['Field12'] != null) {
                        // $('#LbTextbox1').attr("data-original-title", (response['Atooltip'][0]['Field12']));
                        $('#field15').attr("data-original-title", (response['Atooltip'][0]['Field12']));
                        $('#field15').show();
                    }
                    if (response['Atooltip'][0]['Field13'] != "--None--" && response['Atooltip'][0]['Field13'] != "" && response['Atooltip'][0]['Field13'] != null) {
                        // $('#LbTextbox2').attr("data-original-title", (response['Atooltip'][0]['Field13']));
                        $('#field16').attr("data-original-title", (response['Atooltip'][0]['Field13']));
                        $('#field16').show();
                    }
                    if (response['Atooltip'][0]['Field14'] != "--None--" && response['Atooltip'][0]['Field14'] != "" && response['Atooltip'][0]['Field14'] != null) {
                        $('#field17').attr("data-original-title", (response['Atooltip'][0]['Field14']));
                        $('#field17').show();
                    }
                    if (response['Atooltip'][0]['Field15'] != "--None--" && response['Atooltip'][0]['Field15'] != "" && response['Atooltip'][0]['Field15'] != null) {
                        $('#field18').attr("data-original-title", (response['Atooltip'][0]['Field15']));
                        $('#field18').show();
                    }
                    if (response['Atooltip'][0]['Field16'] != "--None--" && response['Atooltip'][0]['Field16'] != "" && response['Atooltip'][0]['Field16'] != null) {
                        $('#field19').attr("data-original-title", (response['Atooltip'][0]['Field16']));
                        $('#field19').show();
                    }
                    if (response['Atooltip'][0]['Field17'] != "--None--" && response['Atooltip'][0]['Field17'] != "" && response['Atooltip'][0]['Field17'] != null) {

                        $('#field20').attr("data-original-title", (response['Atooltip'][0]['Field17']));
                        $('#field20').show();
                    }
                    if (response['Atooltip'][0]['Rating1'] != "--None--" && response['Atooltip'][0]['Rating1'] != "" && response['Atooltip'][0]['Rating1'] != null) {

                        $('#field21').attr("data-original-title", (response['Atooltip'][0]['Rating1']));
                        $('field21').show();
                    }
                    if (response['Atooltip'][0]['Rating2'] != "--None--" && response['Atooltip'][0]['Rating2'] != "" && response['Atooltip'][0]['Rating2'] != null) {

                        $('#field22').attr("data-original-title", (response['Atooltip'][0]['Rating2']));
                        $('field22').show();
                    }
                    if (response['Atooltip'][0]['Rating3'] != "--None--" && response['Atooltip'][0]['Rating3'] != "" && response['Atooltip'][0]['Rating3'] != null) {

                        $('#field23').attr("data-original-title", (response['Atooltip'][0]['Rating3']));
                        $('#field23').show();
                    }
                    if (response['Atooltip'][0]['Date1'] != "--None--" && response['Atooltip'][0]['Date1'] != "" && response['Atooltip'][0]['Date1'] != null) {

                        $('#field24').attr("data-original-title", (response['Atooltip'][0]['Date1']));
                        $('#field24').show();
                    }
                    if (response['Atooltip'][0]['Date2'] != "--None--" && response['Atooltip'][0]['Date2'] != "" && response['Atooltip'][0]['Date2'] != null) {

                        $('#field25').attr("data-original-title", (response['Atooltip'][0]['Date2']));
                        $('#field25').show();
                    }
                    if (response['Atooltip'][0]['Date3'] != "--None--" && response['Atooltip'][0]['Date3'] != "" && response['Atooltip'][0]['Date3'] != null) {

                        $('#field26').attr("data-original-title", (response['Atooltip'][0]['Date3']));
                        $('#field26').show();
                    }
                    if (response['Atooltip'][0]['Email1'] != "--None--" && response['Atooltip'][0]['Email1'] != "" && response['Atooltip'][0]['Email1'] != null) {

                        $('#field29').attr("data-original-title", (response['Atooltip'][0]['Email1']));
                        $('#field29').show();
                    }
                    if (response['Atooltip'][0]['Email2'] != "--None--" && response['Atooltip'][0]['Email2'] != "" && response['Atooltip'][0]['Email2'] != null) {

                        $('#field30').attr("data-original-title", (response['Atooltip'][0]['Email2']));
                        $('#field30').show();
                    }
                    if (response['Atooltip'][0]['Email3'] != "--None--" && response['Atooltip'][0]['Email3'] != "" && response['Atooltip'][0]['Email3'] != null) {

                        $('#field31').attr("data-original-title", (response['Atooltip'][0]['Email3']));
                        $('#field31').show();
                    }
                    if (response['Atooltip'][0]['Amount'] != "--None--" && response['Atooltip'][0]['Amount'] != "" && response['Atooltip'][0]['Amount'] != null) {

                        $('#field32').attr("data-original-title", (response['Atooltip'][0]['Amount']));
                        $('#field32').show();
                    }
                    if (response['Atooltip'][0]['Amount2'] != "--None--" && response['Atooltip'][0]['Amount2'] != "" && response['Atooltip'][0]['Amount2'] != null) {

                        $('#field33').attr("data-original-title", (response['Atooltip'][0]['Amount2']));
                        $('#field33').show();
                    }
                    if (response['Atooltip'][0]['Amount3'] != "--None--" && response['Atooltip'][0]['Amount3'] != "" && response['Atooltip'][0]['Amount3'] != null) {

                        $('#field34').attr("data-original-title", (response['Atooltip'][0]['Amount3']));
                        $('#field34').show();
                    }
                    if (response['Atooltip'][0]['Time1'] != "--None--" && response['Atooltip'][0]['Time1'] != "" && response['Atooltip'][0]['Time1'] != null) {

                        $('#field27').attr("data-original-title", (response['Atooltip'][0]['Time1']));
                        $('#field27').show();
                    }
                    if (response['Atooltip'][0]['Time2'] != "--None--" && response['Atooltip'][0]['Time2'] != "" && response['Atooltip'][0]['Time2'] != null) {

                        $('#field28').attr("data-original-title", (response['Atooltip'][0]['Time2']));
                        $('#field28').show();
                    }
                    if (response['Atooltip'][0]['Html'] != "--None--" && response['Atooltip'][0]['Html'] != "" && response['Atooltip'][0]['Html'] != null) {

                        $('#field36').attr("data-original-title", (response['Atooltip'][0]['Html']));
                        $('#field36').show();
                    }
                    if (response['Atooltip'][0]['Upload'] != "--None--" && response['Atooltip'][0]['Upload'] != "" && response['Atooltip'][0]['Upload'] != null) {

                        $('#field37').attr("data-original-title", (response['Atooltip'][0]['Upload']));
                        $('#field37').show();
                    }
                    if (response['Atooltip'][0]['TextArea'] != "--None--" && response['Atooltip'][0]['TextArea'] != "" && response['Atooltip'][0]['TextArea'] != null) {

                        $('#field35').attr("data-original-title", (response['Atooltip'][0]['TextArea']));
                        $('#field35').show();
                    }
                    if (response['Atooltip'][0]['MultiSelect1'] != "--None--" && response['Atooltip'][0]['MultiSelect1'] != "" && response['Atooltip'][0]['MultiSelect1'] != null) {

                        $('#field38').attr("data-original-title", (response['Atooltip'][0]['MultiSelect1']));
                        $('#field38').show();
                    }
                    if (response['Atooltip'][0]['MultiSelect2'] != "--None--" && response['Atooltip'][0]['MultiSelect2'] != "" && response['Atooltip'][0]['MultiSelect2'] != null) {

                        $('#field39').attr("data-original-title", (response['Atooltip'][0]['MultiSelect2']));
                        $('#field39').show();
                    }
                    if (response['Atooltip'][0]['MultiSelect3'] != "--None--" && response['Atooltip'][0]['MultiSelect3'] != "" && response['Atooltip'][0]['MultiSelect3'] != null) {

                        $('#field40').attr("data-original-title", (response['Atooltip'][0]['MultiSelect3']));
                        $('#field40').show();
                    }
                    if (response['Atooltip'][0]['MultiSelect4'] != "--None--" && response['Atooltip'][0]['MultiSelect4'] != "" && response['Atooltip'][0]['MultiSelect4'] != null) {

                        $('#field41').attr("data-original-title", (response['Atooltip'][0]['MultiSelect4']));
                        $('#field41').show();
                    }
                    if (response['Atooltip'][0]['MultiSelect5'] != "--None--" && response['Atooltip'][0]['MultiSelect5'] != "" && response['Atooltip'][0]['MultiSelect5'] != null) {

                        $('#field42').attr("data-original-title", (response['Atooltip'][0]['MultiSelect5']));
                        $('#field42').show();
                    }
                }

            }
        }).done(function () {
            if ($('#Dropdown1Tab3').parent().is(':visible')) {
                FillDropdown('Dropdown1Tab3', 'xlink');
            }
            if ($('#Dropdown2Tab3').parent().is(':visible')) {
                FillDropdown('Dropdown2Tab3', 'xcross');
            }
            if ($('#Dropdown3Tab3').parent().is(':visible')) {
                FillDropdown('Dropdown3Tab3', 'xcross1');
            }
            if ($('#Dropdown4Tab3').parent().is(':visible')) {
                FillDropdown('Dropdown4Tab3', 'xcross2');
            }
            if ($('#Dropdown5Tab3').parent().is(':visible')) {
                FillDropdown('Dropdown5Tab3', 'xcross3');
            }
            if ($('#Dropdown6Tab3').parent().is(':visible')) {
                FillDropdown('Dropdown6Tab3', 'xcross4');
            }

            if ($('#Multiselect1').parent().is(':visible')) {
                FillDropdown_Multiselect('Multiselect1', 'MultiSelect1');
            }
            if ($('#Multiselect2').parent().is(':visible')) {
                FillDropdown_Multiselect('Multiselect2', 'MultiSelect2');
            }
            if ($('#Multiselect3').parent().is(':visible')) {
                FillDropdown_Multiselect('Multiselect3', 'MultiSelect3');
            }
            if ($('#Multiselect4').parent().is(':visible')) {
                FillDropdown_Multiselect('Multiselect4', 'MultiSelect4');
            }
            if ($('#Multiselect5').parent().is(':visible')) {
                FillDropdown_Multiselect('Multiselect5', 'MultiSelect5');
            }
        });


    }

    function masterchangehide() {
        $('.Master').val('');
        $('.MDropdown').each(function () {
            $(this).val($(this).find('option:first').val()).change();
        });
        $('textarea').val('');
        $('select').next().find('ul li.select2-selection__choice').remove();
    }

});