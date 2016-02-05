function getMultiselectValue(control){
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