$(function() {

  // best menu slideDown
    $( '#left_list > a' ).click( function() {
      $( '#list_wrap' ).slideToggle(300, 'linear');
    });

    //  subpage right슬라이드
    var $slide = $("#right_list");

    var interval = 4000;

    var imageIndex = 0;

    var imageLength = $slide.children().length;

    var timerId = window.setInterval(slideImage, interval);

      $("#sub_right").hover(
      function() {
          window.clearInterval(timerId);
      },
      function() {
          timerId = window.setInterval(slideImage, interval);
      }
  );

    var $indicator = $("<ol></ol>").attr("id", "indicator")

    $slide.children().each(function(index) {
      $("<li></li>").append("<span>" + (index + 1) + "</span>")
        .appendTo($indicator);
    });

    $indicator.appendTo("#sub_right").children(":first").addClass("on");

    var $indicatorItems = $indicator.children();

    $indicatorItems.on("click",function() {
      if ($(this).is(".on")) return;

      var index = $indicatorItems.index(this);

      var step = index - imageIndex;

      if(step < 0) step += imageLength;

      imageIndex = index;

      $indicatorItems.removeAttr("class").eq(imageIndex).addClass("on");

      $slide.animate({ "margin-left" : step * -100 + "%"}, function() {
        $slide.removeAttr("style").children(":lt(" + step + ")").appendTo($slide);
      });
    });

    function slideImage() {
      imageIndex++;
      imageIndex %= imageLength;

      $indicatorItems.removeAttr("class").eq(imageIndex).addClass("on");

      $slide.animate({"margin-left" : "-100%"}, function() {
        $(this).removeAttr("style").children(":first").appendTo(this);
      });
    }

});