function CheckFormValidations(validationCode, control) {
    var code = validationCode.split('||');
    $.each(code, function (key, value) {
        SetValidation(value, control);
    });
}

function SetValidation(valCode, control) {
    var values = valCode.split(':');
    control.addClass(values[0].toLowerCase());
    if (values[0].toLowerCase() == 'max') {
        control.attr('data-max', values[1].toString());
    } else if (values[0].toLowerCase() == 'min') {
        control.attr('data-min', values[1].toString());
    } else if (values[0].toLowerCase() == 'reg') {
        control.attr('data-reg', values[1].toString());
    } else if (values[0].toLowerCase() == 'req') {
        if (control.parent().hasClass('bootstrap-timepicker')) {
            var lblControl = control.parent().parent().find('label');
            lblControl.html(lblControl.text() + ' <span>*</span>');
        } else {
            var lblControl = control.parent().find('label');
            lblControl.html(lblControl.text() + ' <span>*</span>');
        }
    }
}

$(document).ready(function () {
    $('body').on('blur', 'input.form-control', function () {
        controlInputValidations($(this));
    });
    $('body').on('blur', 'textarea', function () {
        controlTextareaValidations($(this));
    });
    $('body').on('select2:close', 'select.req', function () {
        controlSelectValidations($(this));
    });
});

function fillSummeryBox(control) {
    var parentTab = control.closest('form').closest('.tab-pane.active');
    parentTab.find('.summery-detail ul.wrapper li.utilities').find('.next').trigger('click');
    parentTab.find('.summery-detail ul.wrapper li.summery').find('ul.summery-list.slimscroll ').html('');

    control.closest('form').find('p.red-error').each(function () {
        var txtControl = $(this).prev();
        var lblControl = $(this).prev().prev();
        var length = lblControl.text().indexOf('*');
        var nameControl = lblControl.text().substring(0, length > 0 ? length - 1 : lblControl.text().length);
        var newLi = '<li>' + nameControl + '<br/><a class="invalid-red"><label for="' + txtControl.attr('id') + '">' + (txtControl.val().trim() != '' ? txtControl.val() : '(Required)') + '</label><i class=""></i></a></li>';

        parentTab.find('.summery-detail ul.wrapper li.summery').find('ul.summery-list.slimscroll ').append(newLi);
        //<li>Hotel Name :<br /><a href="javascript:void(0);" class="invalid-red"><label id="lblHotelName" for="txtHotelName">Hotel Name</label><i>&nbsp;</i></a></li>
    });
}
/* For Master Records */
function controlInputValidations(control) {
    control.removeClass('red-input');
    control.parent().find('p.red-error').remove();
    if (control.hasClass('req')) {

        if (control.val().trim().length == 0) {
            var attr = $(this).attr('data-reqmsg');
            var msg = 'This field is required.';
            if (typeof attr !== typeof undefined && attr !== false) {
                if (attr.trim() != '') {
                    msg = attr;
                }
            }

            fillSummeryBox(control);

            control.after('<p class="red-error">' + msg + '</p>');
            control.addClass('red-input');

            return false;
        }
    }
    if (control.hasClass('max')) {
        if (control.val().length > parseInt(control.data('max'))) {
            control.after('<p class="red-error">Maximum ' + control.data('max') + ' characters are required.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }
    if (control.hasClass('min')) {
        if (control.val().length < parseInt(control.data('min'))) {
            control.after('<p class="red-error">Minimum ' + control.data('min') + ' characters are required.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }
    if (control.hasClass('alphbet')) {
        if (!control.val().match(/^[a-zA-Z ]*$/)) {
            control.after('<p class="red-error">Only Alphabets are allowed.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }
    if (control.hasClass('alphnum')) {
        if (!control.val().match(/^[a-zA-Z0-9 ]*$/)) {
            control.after('<p class="red-error">Only AlphaNumeric value is allowed.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }
    if (control.hasClass('passwordcrite')) {
        if (!control.val().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$|^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$|^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*#?&])[a-zA-Z$@$!%*#?&]{8,}$|^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)) {
            control.after('<p class="red-error">Password Should contain Mininum Requierment</p>');
            control.addClass('red-input');
            return false;
        }
    }
    if (control.hasClass('num')) {
        if (!control.val().match(/^([0-9]*)$/)) {
            control.after('<p class="red-error">Only Numeric value is allowed.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }
    if (control.hasClass('email')) {
        if (control.val().trim().length > 0) {
            //if (!control.val().match(/^[+a-zA-Z0-9._-]+@@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            if (!control.val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                control.after('<p class="red-error">Invalid Email Format.</p>');
                control.addClass('red-input');
                fillSummeryBox(control)
                return false;
            }
        }
    }
    if (control.hasClass('emailpassword')) {
        if (control.val().trim().length > 0) {
            //if (!control.val().match(/^[+a-zA-Z0-9._-]+@@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            if (control.val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                control.after('<p class="red-error">Invalid Password Format.</p>');
                control.addClass('red-input');
                fillSummeryBox(control)
                return false;
            }
        }
    }
    if (control.hasClass('url')) {
        if (control.val().trim().length > 0) {
            if (!control.val().match(/^(?:https?:\/\/(?:www\.)?|www\.)[a-z0-9]+(?:[-.][a-z0-9]+)*\.[a-z]{2,5}(?::[0-9]{1,5})?(?:\/\S*)?$/)) {
                //if (!control.val().match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
                //if (!control.val().match(/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)) {
                control.after('<p class="red-error">Invalid Url Format.</p>');
                control.addClass('red-input');
                fillSummeryBox(control)
                return false;
            }
        }
    }
    if (control.hasClass('amt')) {
        if (control.val().trim().length > 0) {
            if (!control.val().match(/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) {
                control.after('<p class="red-error">Invalid Amount Format.</p>');
                control.addClass('red-input');
                fillSummeryBox(control)
                return false;
            }
        }
    }
    if (control.hasClass('confirm')) {
        var mainControl = $('#' + control.data('confirm'));
        if (mainControl.val() != control.val()) {
            var length = mainControl.prev().text().indexOf('*')
            var nameControl = mainControl.prev().text().substring(0, length > 0 ? length - 1 : mainControl.prev().text().length);
            control.after('<p class="red-error">' + nameControl + 's not matched. Try again.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }

    if (control.hasClass('reg')) {
        var str = control.data('reg');
        if (!control.val().match(str)) {
            control.after('<p class="red-error">Invalid Data.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }

    if (control.hasClass('datecompair')) {
        var frmdt = $('#' + control.data('datecom')).val();
        var todt = control.val();
       
        var d1 = frmdt.substr(0, 2);
        var m1 = frmdt.substr(3, 2);
        var y1 = frmdt.substr(6, 4);
        var StrDate = m1 + "/" + d1 + "/" + y1;
        
        var d2 = todt.substr(0, 2);
        var m2 = todt.substr(3, 2);
        var y2 = todt.substr(6, 4);
        var EndDate = m2 + "/" + d2 + "/" + y2;

        var startDate = new Date(StrDate);
        var endDate = new Date(EndDate);
        if (startDate > endDate) {
            
            control.after('<p class="red-error">Must be greater than Subscription From date.</p>');
            control.addClass('red-input');
            return false;

        }


    }

    if (control.hasClass('negnum')) {
        var nn = control.data('negnum');
        if (control.val().match('-')) {
            control.after('<p class="red-error">Invalid Data.</p>');
            control.addClass('red-input');
            fillSummeryBox(control)
            return false;
        }
    }




    fillSummeryBox(control)
    return true;
}

function controlSelectValidations(control) {
    control.next().removeClass('red-input');
    control.parent().find('p.red-error').remove();
    //console.log('req::' + control.hasClass('req'));
    if (control.hasClass('req')) {
        //console.log(control.attr('id') + ' :: ' + control.find('option:selected').val() + ' || ' + control.find('option').length);
        if (control.find('option:selected').val() == '0' || control.find('option').length == 0) {
            var attr = control.attr('data-reqmsg');
            var msg = 'This field is required.';
            if (typeof attr !== typeof undefined && attr !== false) {
                if (attr.trim() != '') {
                    msg = attr;
                }
            }
            control.next().after('<p class="red-error">' + msg + '</p>');
            control.next().addClass('red-input');
            return false;
        }
    }
    return true;
}

function controlMultiSelectValidations(control) {
    //console.log(control.attr('id'));
    control.next().removeClass('red-input');
    control.parent().find('p.red-error').remove();
    if (control.hasClass('req')) {
        var isSelected = false;
        control.find('option').each(function () {
            if ($(this).is(':selected')) {
                isSelected = true;
            }
        });
        if (!isSelected) {
            control.next().after('<p class="red-error">This field is required.</p>');
            control.next().addClass('red-input');
            return false;
        }
    }
    return true;
}

function controlTextareaValidations(control) {
    control.parent().find('p.red-error').remove();
    control.removeClass('red-input');
    if (control.hasClass('req')) {
        if (control.val().trim().length == 0) {
            control.after('<p class="red-error">This field is required.</p>');
            control.addClass('red-input');
            //control.focus();
            return false;
        }
    }
    if (control.hasClass('max')) {
        if (control.val().length > parseInt(control.data('max'))) {
            control.after('<p class="red-error">Maximum ' + control.data('max') + ' characters are required.</p>');
            control.addClass('red-input');
            return false;
        }
    }
    if (control.hasClass('min')) {
        if (control.val().length < parseInt(control.data('min'))) {
            control.after('<p class="red-error">Minimum ' + control.data('min') + ' characters are required.</p>');
            control.addClass('red-input');
            return false;
        }
    }


    return true;
}

function formInputValidations(frm) {
    var inputFlag = true;
    frm.find('input').each(function () {
        if ($(this).parent().is(':visible')) {
            if (!controlInputValidations($(this))) {
                console.log('txt: #' + $(this).attr('id'));
                console.log($(this).parent().html());
                inputFlag = false;
            }
        }
    });
    return inputFlag;
}

function formTextareaValidations(frm) {
    var textareaFlag = true;
    frm.find('textarea').each(function () {
        if ($(this).parent().is(':visible')) {
            if (!controlTextareaValidations($(this))) {
                textareaFlag = false;
                $(this).focus();
            }
        }
    });
    return textareaFlag;
}

function formSelectValidations(frm) {
    var selectFlag = true;
    frm.find('select.req').each(function () {
        if ($(this).parent().is(':visible')) {
            var attr = $(this).attr('multiple');
            if (typeof attr !== typeof undefined && attr !== false) {
                if (!controlMultiSelectValidations($(this))) {
                    //console.log('controlMultiSelectValidations:-> #' + $(this).attr('id'));
                    selectFlag = false;
                    $(this).focus();
                }
            } else {
                if (!controlSelectValidations($(this))) {
                    //console.log('controlSelectValidations: #' + $(this).attr('id'));
                    selectFlag = false;
                    $(this).focus();
                }
            }
        }
    });
    return selectFlag;
}

/* Validate Given Form Controls */
function validateForm(frm) {
    var flag = true;
    if (!formInputValidations(frm)) {
        //console.log('formInputValidations');
        flag = false;
    }
    if (!formTextareaValidations(frm)) {
        //console.log('formTextareaValidations');
        flag = false;
    }
    if (!formSelectValidations(frm)) {
        //console.log('formSelectValidations');
        flag = false;
    }
    return flag;
}

/* Clear All Validation Messages From Given Form */
function clearValidations(frm) {
    frm.find('input').each(function () {
        $(this).removeClass('red-input');
        $(this).parent().find('p.red-error').remove();
    });
    frm.find('textarea').each(function () {
        $(this).removeClass('red-input');
        $(this).parent().find('p.red-error').remove();
    });
    frm.find('select').each(function () {
        $(this).next().removeClass('red-input');
        $(this).parent().find('p.red-error').remove();
    });
}

/* Clear All Validation Code From Given Form */
function clearCodes(frm) {
    frm.find('input').each(function () {
        clearControlCode($(this));
    });
    frm.find('textarea').each(function () {
        clearControlCode($(this));
    });
    frm.find('select').each(function () {
        clearControlCode($(this));
    });
}

function clearControlCode(control) {
    control.removeClass('req');
    control.removeClass('max');
    control.removeAttr('data-max');
    control.removeClass('min');
    control.removeAttr('data-min');
    control.removeClass('alphbet');
    control.removeClass('alphnum');
    control.removeClass('passwordcrite');
    control.removeClass('num');
    control.removeClass('email');
    control.removeClass('emailpassword');
    control.removeClass('url');
    control.removeClass('amt');
    control.removeClass('confirm');
    control.removeAttr('data-confirm');
    control.removeClass('reg');
    control.removeAttr('data-reg');
    control.removeClass('datecompair');
    control.removeAttr('data-datecom');
    control.removeClass('negnum');
   
}