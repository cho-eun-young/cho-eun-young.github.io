    // 모달버튼
$(function() {
    var $modal_btn = $("#modal_btn");
    var $new_left = $("#new_left");

    $new_left.mouseenter(function() {
        $modal_btn.stop().css({display:"block"})
    });

    $new_left.mouseleave(function() {
        $modal_btn.stop().css({display:"none"})
    });


    //모달 block처리
    var $modal_btn = $("#modal_btn");
    var $modal = $("#modal");
    var target = $(this).attr("href");

    $modal_btn.on("click",function(e) {
        e.preventDefault();
        $modal.css('display','block');
    });
    $(document).mouseup(function (e){
        if($modal.has(e.target).length === 0){
            $modal.css('display','none');
        }
    });
    
});