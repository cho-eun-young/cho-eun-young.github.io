$(function() {
    var cont = $("#content > .con");
    // animation
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        for(var i=0; i<5; i++){
            if(wScroll >= cont.eq(i).offset().top - $(window).height()/3){
            cont.eq(i).addClass('animate');
            }
        }	
    });
});