var BackgroundImg = '';
$(document).ready(function () {
    Load_data();
    //BackgroundImg = $('#myHiddenVar').val();
    //alert(BackgroundImg)
    //$('.page-content.login-body').css('background', '#000 url(' + $('#myHiddenVar').val() + ') no-repeat scroll center top');
    $('.page-content.login-body').css('background', '#000 url(@Session["BackgroundImg"].ToString()) no-repeat scroll center top');
    $('#btnLogin').click(function (e) {
        var Type = 'Password';
        var Email = $('#txtUserName').val();
        var url = 'http://tu.techpure.co.uk';
        var PassWord = $('#txtPassword').val();
        $.ajax({
            type: "POST",
            url: "/Home/LoginUser",
            data: { "Type": Type, "Email": Email, "url": url, "Password": PassWord },
            success: function (result) {
                if (result == "1") {
                    var urls = "/Dashboard";
                    //window.location.href = urls;
                    window.location.href = $('#hdfUrl').val()
                } else {
                    swal('Invalid email or password.', '', 'error');
                }
            }
        });
        e.preventDefault();
    });
});

function Load_data() {
    var Type = 'PageLoad';
    var url = 'http://tu.techpure.co.uk';
    $.ajax({
        type: "POST",
        url: "/Home/PageLoad",
        data: { "Type": Type, "url": url },
        success: function (result) {
            if (result.length > 0) {
                $('.page-content.login-body').css('background', '#000 url("' + result[0]['BackgroundImg'] + '") no-repeat scroll center top');
                var img = '<img height="45" width="200" src="' + result[0]['Logo'] + '">';
                $('.logo-name').html(img);
            }
        }
    });
}
