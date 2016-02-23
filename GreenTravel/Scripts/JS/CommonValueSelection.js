function getMultiselectValue(control) {
    var selectValue = '';
    var multiselectValue = control.next().find('ul li').text();
    var splitMultiselectValue = multiselectValue.split('×');
    var i = 0;
    $.each(splitMultiselectValue, function (index, value) {
        if (value.toString().trim() != '') {
            if (i != 0) {
                selectValue += ',';
            }
            control.find('option').each(function () {
                if ($(this).text() == value) {
                    selectValue += $(this).val();
                }
            });
            i += 1;
        }
    })
    return selectValue;
}

function setSelect2Value(control, value) {
    control.find('option').removeProp('selected');
    control.find('option[value="' + value + '"]').prop('selected', true);
    var text = control.find(':selected').text();
    $('#select2-' + control.attr('id') + '-container').text(text).attr('title', text);
}

function setSelect2ValueHide(control, value) {
    control.find('option').removeProp('selected');
    control.find('option[value="' + value + '"]').prop('selected', true);
    var text = control.find(':selected').text();
    $('#select2-' + control.attr('id') + '-container').text(text).attr('title', text);
    control.parent().hide();
}

function setSelect2ValueDisable(control, value) {
    control.find('option').removeProp('selected');
    control.find('option[value="' + value + '"]').prop('selected', true);
    var text = control.find(':selected').text();
    $('#select2-' + control.attr('id') + '-container').text(text).attr('title', text);
    control.select2('destroy');
    control.prop('disabled', true);
    control.select2();
    //control.attr('disabled', 'disabled');
    //control.select2('disable');
}

function setValueAndDisable(control, value) {
    if (control.is('select')) {
        control.find('option').removeProp('selected');
        control.find('option[value="' + value + '"]').prop('selected', true);
        var text = control.find(':selected').text();
        $('#select2-' + control.attr('id') + '-container').text(text).attr('title', text);
    } else if (control.is('input')) {
        control.val(value);
    }
    if (value != '0' && value != '' && value != '--None--') {
        control.attr('disabled', 'disabled');
    } else {
        control.removeAttr('disabled');
    }
}
