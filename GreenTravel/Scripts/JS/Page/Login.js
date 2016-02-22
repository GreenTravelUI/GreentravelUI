var backgroundImage = '';
$(document).ready(function () {
    Load_data();
    //backgroundImage = $('#myHiddenVar').val();
    //alert(backgroundImage)
    $('.page-content.login-body').css('background', '#000 url(' + $('#myHiddenVar').val() + ') no-repeat scroll center top');
    //$('.page-content.login-body').css('background', '#000 url(@Session["backgroundImage"].ToString()) no-repeat scroll center top');
    $('#btnLogin').click(function () {
        var Type = 'Password';
        var Email = $('#txtUserName').val();
        var url = 'http://gt.techpure.co.uk';
        var PassWord = $('#txtPassword').val();
        $.ajax({
            type: "POST",
            url: "/Home/LoginUser",
            data: { "Type": Type, "Email": Email, "url": url, "Password": PassWord },
            success: function (result) {
                if (result == "1") {
                    var urls = "/Dashboard";
                    window.location.href = urls;
                } else {
                    swal(
                      'Invalid user id and password.',
                       '',
                       'error'
                        )
                }
            }
        });
    });
});

function Load_data() {
    var Type = 'PageLoad';
    var url = 'http://gt.techpure.co.uk';
    $.ajax({
        type: "POST",
        url: "/Home/PageLoad",
        data: { "Type": Type, "url": url },
        success: function (result) {
            console.log(result[0]['BackgroundImg']);
            $('.page-content.login-body').css('background', '#000 url("' + result[0]['BackgroundImg'] + '") no-repeat scroll center top');
            var img = '<img height="45" width="200" src="' + result[0]['Logo'] + '">';
            $('.logo-name').html(img);
        }
    });
}
