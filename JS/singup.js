$(".txta input").on("focus", function () {
    $(this).addClass("focus");
});

$(".txta input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("focus");
});