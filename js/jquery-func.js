$(document).ready(function(){ 

   	//=================================== Slide ===================================//
	
	$('#da-slider').cslider({
 	   autoplay    : true,
	    interval    : 4000  	
	});

	//=================================== IMAGE HOVER  =================================//

	$('.img-preview').each(function() {

	    $(this).hover(
	    function() {
	        $(this).stop().animate({ opacity: 1.0 }, 400);
	    },
	    function() {
	    	$(this).stop().animate({ opacity: 0 }, 400);
	     })
	});
		
	//=================================== Accordion ===================================//

	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});
	
	//=================================== carousel ===================================//
	$(".carousel .testimonial-carousel").jcarousel({
		visible: 1,
		scroll: 1,
		auto: false,
		wrap: "both"
	});

	//=================================== Totop  ===================================//
	$().UItoTop({ 		
		scrollSpeed:500,
		easingType:'linear'
	});
	
	//=================================== Ligbox  ===================================//

	    jQuery("a[class*=fancybox]").fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true
	});
	
	jQuery("a[class*='et_video_lightbox']").click(function(){
		var et_video_href = jQuery(this).attr('href'),
			et_video_link;

		et_vimeo = et_video_href.match(/vimeo.com\/(.*)/i);
		if ( et_vimeo != null )	et_video_link = 'http://player.vimeo.com/video/' + et_vimeo[1];
		else {
			et_youtube = et_video_href.match(/watch\?v=([^&]*)/i);
			if ( et_youtube != null ) et_video_link = 'http://youtube.com/embed/' + et_youtube[1];
		}
		
		jQuery.fancybox({
			'overlayOpacity'	:	0.7,
			'overlayColor'		:	'#000000',
			'autoScale'		: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'easingIn'      : 'easeOutBack',
			'easingOut'     : 'easeInBack',
			'type'			: 'iframe',
			'centerOnScroll'	: true,
			'speedIn' 			: '700',
			'href'			: et_video_link
		});
		return false;
	});


	function scrollTo(target){
          var targetPosition = $(target).offset().top;
          $('html,body').animate({ scrollTop: targetPosition}, 'slow');
        }


});