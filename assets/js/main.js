$(".show-more").click(function () {
    if($(".text").hasClass("show-more-height")) {
        $(this).text("Show Less");
    } else {
        $(this).text("Show More");
    }

    $(".text").toggleClass("show-more-height");
});