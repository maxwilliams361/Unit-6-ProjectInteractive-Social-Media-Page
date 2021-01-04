$(".about-me-button").click(function() {
    $(".about-me-click").fadeToggle();
});


$(".headerItem4").click(function() {
    $(".status1").slideToggle();
    $(".status-img1").slideToggle();

});

$(".headerItem5").click(function() {
    $(".status2").slideToggle();
    $(".status-img2").slideToggle();

});

$(".photo-button").mouseenter(function() {
    $(".stewie-pic1_border").show();
    $(".stewie-pic1").show();
    $(".stewie-pic2_border").show();
    $(".stewie-pic2").show();
});

$(".photo-button").mouseleave(function() {
    $(".stewie-pic1_border").hide();
    $(".stewie-pic1").hide();
    $(".stewie-pic2_border").hide();
    $(".stewie-pic2").hide();
});

$(".treat-button").hover(function() {
    $(".treat-button").text("Bones, Ice cream, Chicken");
});

$(".treat-button").mouseleave(function() {
    $(".treat-button").text("Favorite Treats");
});