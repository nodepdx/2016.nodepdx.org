$(document).ready(function(){ 

	//=================================== Totop  ===================================//
	$().UItoTop({ 		
		scrollSpeed:500,
		easingType:'linear'
	});
	

	function scrollTo(target){
          var targetPosition = $(target).offset().top;
          $('html,body').animate({ scrollTop: targetPosition}, 'slow');
        }


});