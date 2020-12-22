//show and hide menu
$('.hide').css("display", "none");
$('section').css("display", "none");
$('footer').css("display", "none");

$('.show').click(function () {
    $('section').stop().slideDown(500);
    $(this).css("display", "none")
    $('.hide').css("display", "block")
    $('footer').css("display", "none");
});

$('.hide').click(function () {
    $('section').stop().slideUp(500);
    $(this).css("display", "none")
    $('.show').css("display", "block")
    $('footer').css("display", "none");

});
// btn success
let successStatus = 0;

$('.success').click(function () {

    if (successStatus == 0) {
        successStatus = 1;
        $('footer').css("display", "block");

    } else if (successStatus == 1) {
        successStatus = 0;
        $('footer').css("display", "none");

    }
});

