// 메인 슬라이드
var index = 0;   //이미지에 접근하는 인덱스
    window.onload = function(){
        slideShow();
    }
    
    function slideShow() {
    var i;
    var slide = document.getElementsByClassName("slide");  //slide에 대한 dom 참조
    for (i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > slide.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }   
    slide[index-1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow, 4000);   //함수를 4초마다 호출
}

// 라인별 slide
$(function() {
    var $slide1 = $("#line_wrap");

    var interval = 4000;

    var timerId = window.setInterval(slideImage, interval);



    $("#line_slide").hover(
        function() {
            window.clearInterval(timerId);
        },
        function() {
            timerId = window.setInterval(slideImage, interval);
        }
    )

    $("#line_next").on("click",slideImage);

    $("#line_pre").on("click",function() {
        $slide1.prepend($slide1.children(":last")).css("margin-left", "-100%")
        .stop().animate({"margin-left" : 0});
    });

    function slideImage() {
        $slide1.stop().animate({"margin-left" : "-100%"},function() {
            $slide1.removeAttr("style").children(":first").appendTo($slide1);
        });
    }


    // #instagram 버튼
    var $slide2 = $("#insta_list");

    $("#insta_next").on("click",function() {
        $slide2.stop().animate({marginLeft: '-100%'})
    });
    $("#insta_pre").on("click",function() {
        $slide2.stop().animate({marginLeft: '0'})
    });


});







