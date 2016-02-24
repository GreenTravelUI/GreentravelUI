$(window).unload(function () {
    $('select option').remove();
});

var corp = $('#myHiddenVar').val();

$(document).ready(function () {
    BindGrid();
    FillDropDown_RightsCorporate();
    $("#drpRightsCorporate").prop('disabled', true);
    $("#drpRightsCorporate").change(function () {
        $('#drpRightsUnit').html('');// To Clear dropdown Unit
        setSelect2Value($('#drpRightsUnit'), '0');
        $('#drpRightsLocation').html('');// To Clear dropdown Location
        setSelect2Value($('#drpRightsLocation'), '0');
        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), 0, 0, 'drpRightsUnit');

    });//---tab-4 corporate selected index change event
    $("#drpRightsUnit").change(function () {
        // e.preventDefault();
        $('#drpRightsLocation').html('');// To Clear dropdown
        $("#partial").html('');
        setSelect2Value($('#drpRightsLocation'), '0');


        $('#drpRightsRole').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsRole'), '0');

        $('#drpRightsUser').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsUser'), '0');
        $('#btnSavetab4').hide();
        $('#btnupdatetab4').hide();

        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsLocation');
    });//---tab-4 unit selected index change event
    $("#drpRightsLocation").change(function () {
        // e.preventDefault();
        $("#partial").html('');
        $('#drpRightsRole').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsRole'), '0');
        $('#drpRightsUser').html('');// To Clear dropdown
        setSelect2Value($('#drpRightsUser'), '0');
        FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), $('#drpRightsUnit option:selected').val(), 0, 'drpRightsRole');
        var location = $('#drpRightsLocation option:selected').val();
        $('#btnSavetab4').hide();
        $('#btnupdatetab4').hide();
        if (location != '0') {
            Load_screen_module();
        }


    });//---tab-4 location selected index change event
    $("#partial").delegate(".checker", "click", function () {
        if ($(this).children().hasClass('checked')) {
            $(this).children().removeClass('checked');
            $(this).children().children().removeAttr('checked');
        } else {
            $(this).children().addClass('checked');
            $(this).children().children().attr('checked', true);
        }
    });//tab-4 checkbox - (check All)
    $("#partial").delegate(".checker.delete", "click", function () {
        if ($(this).parent().parent().find('.checker.delete').children().hasClass('checked')) {
            $(this).parent().parent().find('.checker.view').attr('checked', true);
            $(this).parent().parent().find('.checker.view').children().addClass('checked');
            $(this).parent().parent().find('.checker.create').attr('checked', true);
            $(this).parent().parent().find('.checker.create').children().addClass('checked');
            $(this).parent().parent().find('.checker.update').attr('checked', true);
            $(this).parent().parent().find('.checker.update').children().addClass('checked');
        }
        var control = $(this).parent().parent().parent();
        Checked_All(control);

    });//---tab-4 checkbox - (checker click)
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
        var control = $(this).parent().parent().parent();
        Checked_All(control);
    });//---tab-4 checkbox - (check update)
    $("#partial").delegate(".checker.create", "click", function () {

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
        var control = $(this).parent().parent().parent();
        Checked_All(control);
    });//---tab-4 checkbox - (check create)
    $("#partial").delegate(".checker.view", "click", function () {

        if ($(this).parent().parent().find('.checker.view').children().hasClass('checked')) {
        }
        else {
            $(this).parent().parent().find('.checker.update').attr('checked', false);
            $(this).parent().parent().find('.checker.update').children().removeClass('checked');
            $(this).parent().parent().find('.checker.delete').attr('checked', false);
            $(this).parent().parent().find('.checker.delete').children().removeClass('checked');
            $(this).parent().parent().find('.checker.create').attr('checked', false);
            $(this).parent().parent().find('.checker.create').children().removeClass('checked');

            $(this).parent().parent().parent().parent().parent().find('.checker.All').attr('checked', false);
            $(this).parent().parent().parent().parent().parent().find('.checker.All').children().removeClass('checked');
        }

    });//---tab-4 checkbox - (check view)
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

    });//---tab-4 checkbox - (check All)
    $('.btnSaveTab4').click(function (e) {
        {
            var a = 0;
            e.preventDefault();
            if (!validateForm($(this).parent().parent())) {  // Pass form control in parameter
                //  swal('', 'Invalid data found!', 'error');
                swal('Invalid data found!', '', 'error');
                return false;
            }
            $('ul.grid div').find('li').each(function () {
                $(this).find('table tbody tr').each(function () {
                    if ($(this).find('.checker').children().hasClass('checked')) {
                        a = 1;
                    }
                });
            });

            if (a == 0) {
                swal('', 'Please select atleast 1 records ', 'warning');
                return false;
            }
            var ModuleAry = [];
            var ScreenAry = [];
            if ($('#lbSrnoTab4').val() == '') {
                var srno = '0';
            }
            else {
                var srno = $('#lbSrnoTab4').val();
            }
            var UserId = $('#drpRightsUser option:selected').val();
            var Corporate = $('#drpRightsCorporate option:selected').val();
            var Unit = $('#drpRightsUnit option:selected').val();
            var Location = $('#drpRightsLocation option:selected').val();
            var Branch = '0';
            var Role = $('#txtRole').val();
            var RoleType = '0';
            var EffectiveDate = $('#Date1').val();;
            var IsActive = $('#drpRightsStatus option:selected').val();
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
                url: "/RoleRights/Insert",
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
                        if (event != 'error') {
                            var sr = response['SrNo'];
                            $('#lbSrnoTab4').val(sr);
                            $('#btnSavetab4').hide();
                            $('#btnupdatetab4').show();
                            BindGrid();
                            flagsection = 0;
                        }
                    }
                }
            });
            if (flagsection == 0) {
                swal('Good Job!', msg, event);
            }
            else if (flagsection == 1) {
                swal('', msg, event);
            }

        }
    });//---tab-2 save button click
    $('#btnQuittab4').click(function (e) {
        Clear_tab_4();
        $("#userlitab1").addClass("active");
        $("#tab1").addClass("active");

        $("#userlitab4").removeClass("active");
        $("#tab4").removeClass("active");
        $('input[type="search"]').val('');
        BindGrid();
    });//---tab-2 quit button click
    $('#btnCleartab4').click(function (e) {
        e.preventDefault();
        Clear_tab_4();
    });//---tab-2 clear button click
    $("table").delegate(".editor_Step", "click", function () {

        var tablename = 'dbo._RoleTrx';
        var Corporate = '0';
        var Unit = '0';
        var Formcode = '0';
        var Formtabcode = '0';
        var srno = $(this).parent().parent().children(':eq(1)').text();
        var Type = 'EditMode';
        $.ajax({
            type: "POST",
            url: "/RoleRights/Edit_AccessRights",
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

                    $('#txtRole').val(response['UserWiseRights'][0]['Role']);
                    $('#lbSrnoTab4').val(srno);
                }

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
                                        if (tempupdate == 'True') {
                                            $(this).find('.checker.update').attr('checked', true);
                                            $(this).find('.checker.update').children().addClass('checked');
                                        }
                                        if (tempdeletee == 'True') {
                                            $(this).find('.checker.delete').attr('checked', true);
                                            $(this).find('.checker.delete').children().addClass('checked');
                                        }
                                    }
                                });

                                var control = $(this).children().children().find('table').children();

                                Checked_All(control);
                            }
                        });
                    });
                    $('#btnSavetab4').hide();
                    $('#btnupdatetab4').show();
                }


            }
        }).done(function () {
            clearValidations($('#tab4').find('form'));
            $("#txtEmail").prop('disabled', true);
            $(".Editdisable").hide();
            $("#userlitab1").removeClass("active");
            $("#tab1").removeClass("active");

            $("#userlitab4").addClass("active");
            $("#tab4").addClass("active");

            $('#btnUpdateUser').show();
            $('#btnCancelUser').hide();
            $('#btnSaveUser').hide();
        });
    });//---tab-1 edit users button click
});

function BindGrid() {
    var tablename = 'dbo._RoleMaster';
    var Corporate = corp;
    var Segment = '';
    var PageNo = '1';
    var type = 'Grid';
    var Formcode = '0';
    var Formtabcode = '0';
    var field1 = ''
    $('#gridUser').dataTable({
        "ServerSide": true,
        "destroy": true,
        "autoWidth": false,
        destroy: true,
        "ajax": {
            "url": "/RoleRights/BindGrid",
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
             { "data": "Role" },

            {
                data: null,
                className: "center",
                //defaultContent: '<a href="javascript:void(0);" class="editor_Step" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_feature"><i class="text-primary fa fa-trash-o"></i></a>&nbsp;&nbsp;<a href="javascript:void(0);" class="editor_accessright"><i class="fa fa-key"></i></a>'
                defaultContent: '<a href="javascript:void(0);" class="editor_Step" rel="tooltip" title="Edit Data" ><i class="fa fa-pencil-square-o"></i></a>&nbsp;&nbsp;'
            }
        ]
    });
}
function FillDropDown_RightsCorporate() {
    corp = $('#myHiddenVar').val();
    var Module = '';
    var screen = '';
    var FormCode = '';
    var TabCode = '';
    var Corporate = corp;
    var unit = '';
    var Branch = '';
    var userid = '';
    var Ip = '';
    var Language = '';
    var Type = 'DropDown';
    $.ajax({
        url: "/RoleRights/BindDropdown_FormLoadAccessRights",
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
                    corp = $('#myHiddenVar').val();
                    setSelect2Value($('#drpRightsCorporate'), corp);

                    $('#drpRightsUnit').html('');// To Clear dropdown Unit
                    setSelect2Value($('#drpRightsUnit'), '0');
                    $('#drpRightsLocation').html('');// To Clear dropdown Location
                    setSelect2Value($('#drpRightsLocation'), '0');
                    FillConditional_RightsBase($('#drpRightsCorporate option:selected').val(), $('#drpRightsCorporate option:selected').val(), 0, 0, 'drpRightsUnit');


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
        url: "/RoleRights/BindDropdown_BaseAccessRights",
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
        url: "/RoleRights/FillAll",
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
function Checked_All(control) {
    var thisid = control;
    var Count = '0';
    (thisid).find('tr').each(function () {
        if ($(this).find('.checker.view').children().hasClass('checked') == false) {
            Count = '1';
        }
        if ($(this).find('.checker.create').children().hasClass('checked') == false) {
            Count = '1';
        }
        if ($(this).find('.checker.update').children().hasClass('checked') == false) {
            Count = '1';
        }
        if ($(this).find('.checker.delete').children().hasClass('checked') == false) {
            Count = '1';
        }
    });
    if (Count == '0') {
        thisid.parent().prev().children().find('input').attr('checked', true);
        thisid.parent().prev().children().children().addClass('checked');
    }
    else {
        thisid.parent().prev().children().find('input').attr('checked', false);
        thisid.parent().prev().children().children().removeClass('checked');
    }
}
function Clear_tab_4() {
    $("#partial").html('');
    $('#drpRightsLocation').html('');// To Clear dropdown
    $('.inputControl').val('');
    $('input[type="text"]').val('');
    $('#lbSrnoTab4').val('0');
    $("#tab4").find('.Dropdown').each(function () {
        setSelect2Value($(this), '0');
    });
    clearValidations($('#tab4').find('form'));
    $('#Date1').val('');
    $('#chkdefault').attr('checked', false);
    $('#chkdefault').parent().removeClass('checked');
    $('#btnSavetab4').hide();
    $('#btnupdatetab4').hide();
    corp = $('#myHiddenVar').val();
    setSelect2Value($('#drpRightsCorporate'), corp);

}