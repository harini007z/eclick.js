function closingConfirm() {
    return 'Are you sure you want to close this page?';
}

$(document).ready(function () {
    $('.click').click(function () {
        $.get("https://rnmy.app.link/lk4veT3HmW", function (data) {
            var obj = jQuery.parseJSON(data);
            window.onbeforeunload = null;
            window.location.href = obj.url;
        });
    });

    window.onbeforeunload = closingConfirm;
});
