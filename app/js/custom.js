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




$(function(){


    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $(this).parent().siblings().removeClass('current');
        $(this).parent().addClass('current');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        console.log(target);
        return false;
    });

	$('header .actions').click(function(){
		$(this).find('.navigation-button').toggleClass('active'),
		$('.main-nav-list').slideToggle(); 
		return false;
	});


    /* components */


    $('.slick-slider').slick({
		arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 769,
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