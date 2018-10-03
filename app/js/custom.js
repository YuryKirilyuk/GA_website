$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   
	$(window).scroll(function() {		
	
		
	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
   
	$(window).resize(function() {
		
		
	});




/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

$(function(){


	$('header nav').click(function(){
		$(this).find('.navigation-button').toggleClass('active'),
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */



    $('.slick-slider').slick({
		arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: false
                }
            },
            {
                breakpoint: 600,
                settings: "unslick"
            }
        ]
    });
    $('.arrow-left').click(function() {
        $('.slick-slider').slick('slickPrev');
    });
    $('.arrow-right').click(function() {
        $('.slick-slider').slick('slickNext');
    });

	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */


    $( "#slider" ).slider({
        range: "min",
        value: 1500,
        min: 0,
        max: 10000,
        step: 500,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $( "#value" ).text( ui.value + "$" );
        }
    });
    $('.ui-slider-handle').append('<div id="value"></div>');
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
    $( "#value" ).text( $( "#slider" ).slider( "value" ) + "$");

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



