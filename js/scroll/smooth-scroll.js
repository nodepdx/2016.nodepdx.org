// JavaScript Document
$(document).ready(function() {

  var device = navigator.userAgent.toLowerCase();
  var ios = device.match(/(iphone|ipod|ipad)/);
 //function that returns element's y position
    
    $("a[href*=#]").on('click', function(e) {
      var scrollTarget = $(this.hash).offset().top;
      if(scrollTarget) 
          e.preventDefault();
        if(parseInt(scrollTarget) !== parseInt($(window).scrollTop())) {
          var nav2 = $("nav");
        if (ios) nav2.hide();
          $('html,body').animate({scrollTop:scrollTarget}, 1500, "swing", function(evt) {
          if (ios) {
            if(scrollTarget == 0) 
                nav2.css({position:'absolute', top:$("#all").height()});
            else
                nav2.css({position:'absolute', top:scrollTarget});
            var nav2clone = $("nav")
            nav2clone.show();
          }
      });
    }
    });

    if (ios) {
        $(document).bind('touchmove',function(){
          var intro = $("#all"), nav2 = $("nav");
          console.log(nav2.position().top);
        if(intro.height() != nav2.position().top)
        {
            nav2.css({position:'fixed', top:'0px'});
            console.log(nav2.position().top);
        }
        else
        {
            nav2.css({position:'relative', top: ''});
        }
      });   
    }
});