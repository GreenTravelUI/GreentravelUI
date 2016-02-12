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
    console.log(control.val() + ' ||| ' + control.find('option[value="' + value + '"]').text() + ' ||| ' + value);
    $('#select2-' + control.attr('id') + '-container').text(text).attr('title', text);
}

function setValueAndDisable(control, value) {
    if (control.is('select')) {
        control.find('option[value="' + value + '"]').attr('selected', true);
        control.next();
        $('#select2-' + control.attr('id') + '-container').text(control.find('option:selected').text()).attr('title', control.find('option:selected').text());
    } else if (control.is('input')) {
        control.val(value);
    }
    //alert(value);
    if (value != '0' && value != '' && value != '--None--') {
        control.attr('disabled', 'disabled');
    } else {
        control.removeAttr('disabled');
    }
}