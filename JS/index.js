$(document).ready(function () {
    $("#color-range").on('input', function () {
        $("body").css("background-color", $(this).val());
    });
});