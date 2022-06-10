$(function () {
    // #top
    var $top = $("#top");

    $("#top").on('click', function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });


    //#sidebar 
    var $sidebar = $("#sidebar");
    var $menu = $("#menu-button");
    var $duration = $("300")

    $menu.on("click", function() {

        $sidebar.toggleClass("open");

        if($sidebar.hasClass("open")){
            $sidebar.stop().animate({marginLeft:"0"}),$duration,'easeInOut'
        }else{
            $sidebar.stop().animate({marginLeft:"-355px"}),$duration,'easeInOut';
        }


    });


    // .submenu
    $sub1 = $(".sub1");

    $sub1.on("click", function() {
        $(this).find(".submenu").stop().slideToggle(500);
    });




});