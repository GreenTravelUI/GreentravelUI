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
    }
}

$(document).ready(function () {
    $('.form-group').on('blur', 'input', function () {
        controlInputValidations($(this));
    });
    $('.form-group').on('blur', 'textarea', function () {
        controlInputValidations($(this));
    });
    $('.form-group').on('select2:close', 'select.req', function () {
        controlSelectValidations($(this));
    });
});

function controlInputValidations(control) {
    control.removeClass('red-input');
    control.parent().find('p.red-error').remove();
    if (control.hasClass('req')) {
        if (control.val().trim().length == 0) {
            control.after('<p class="red-error">This field is required.</p>');
            control.addClass('red-input');
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
    if (control.hasClass('alphbet')) {
        if (!control.val().match(/^[a-zA-Z]*$/)) {
            control.after('<p class="red-error">Only Alphabets are allowed.</p>');
            control.addClass('red-input');
            return false;
        }
    }
    if (control.hasClass('alphnum')) {
        if (!control.val().match(/^[a-zA-Z0-9]*$/)) {
            control.after('<p class="red-error">Only AlphaNumeric value is allowed.</p>');
            control.addClass('red-input');
            return false;
        }
    }
    if (control.hasClass('num')) {
        if (!control.val().match(/^([0-9]*)$/)) {
            control.after('<p class="red-error">Only Numeric value is allowed.</p>');
            control.addClass('red-input');
            return false;
        }
    }
    if (control.hasClass('email')) {
        if (control.val().trim().length > 0) {
            if (!control.val().match(/^[+a-zA-Z0-9._-]+@@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                control.after('<p class="red-error">Invalid Email Format.</p>');
                control.addClass('red-input');
                return false;
            }
        }
    }
    if (control.hasClass('reg')) {
        var str = control.data('reg');
        if (!control.val().match(str)) {
            control.after('<p class="red-error">Invalid Data.</p>');
            control.addClass('red-input');
            return false;
        }
    }
}
function controlSelectValidations(control) {
    control.next().removeClass('red-input');
    control.parent().find('p.red-error').remove();
    if (control.hasClass('req')) {
        if (control.find('option:selected').val() == '0') {
            control.next().after('<p class="red-error">This field is required.</p>');
            control.next().addClass('red-input');
            return false;
        }
    }
}
function controlTextareaValidations(control) {
    control.parent().find('p.red-error').remove();
    control.removeClass('red-input');
    if (control.hasClass('req')) {
        if (control.val().trim().length == 0) {
            control.after('<p class="red-error">This field is required.</p>');
            control.addClass('red-input');
            control.focus();
            return false;
        }
    }
}
function formInputValidations(frm) {
    var inputFlag = true;
    frm.find('input').each(function () {
        if ($(this).parent().is(':visible')) {
            if (!controlInputValidations($(this))) {
                inputFlag = false;
            }
        }
    });
    return inputFlag;
}
function formTextareaValidations(frm) {
    var textareaFlag = true;
    frm.find('textarea.req').each(function () {
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
            if (!controlSelectValidations($(this))) {
                selectFlag = false;
                $(this).focus();
            }
        }
    });
    return selectFlag;
}
function validateForm(frm) {
    var flag = true;
    if (!formInputValidations(frm)) {
        flag = false;
    }
    if (!formTextareaValidations(frm)) {
        flag = false;
    }
    if (!formSelectValidations(frm)) {
        flag = false;
    }
    return flag;
}