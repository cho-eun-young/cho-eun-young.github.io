$(function() {

    // #top
    var $top = $("#top");

    $top.on('click', function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });


    // #btn_menu
    var $btn_menu = $("#btn_menu");
    var $sub_menu = $(".sub_menu");
    var $nav = $("#nav");

    $btn_menu.click(function() {
        $sub_menu.toggleClass("visible");

        if($sub_menu.hasClass("visible")){
            $sub_menu.stop().slideDown('linear');
        }else{
            $sub_menu.stop().slideUp('linear');
        }
    });


    // #nav
    $nav .click( function() {
        $sub_menu.toggleClass("visible");

        if($sub_menu.hasClass("visible")){
            $sub_menu.stop().slideDown('linear');
        }else{
            $sub_menu.stop().slideUp('linear');
        }
    });

});
