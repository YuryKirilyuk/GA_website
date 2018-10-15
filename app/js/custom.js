$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');

    headerColor();

});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   
	$(window).scroll(function() {

        headerColor();

	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
   
	$(window).resize(function() {
		
		
	});




$(function(){


    /*$('nav a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $(this).parent().siblings().removeClass('current');
        $(this).parent().addClass('current');
        $('html, body').animate(
            {scrollTop: $(target).offset().top -100}, 500
        );
        //console.log(target);
        return false;
    });*/


	$('header .actions').click(function(){
		$(this).find('.navigation-button').toggleClass('active'),
		$('header').toggleClass('active');
		return false;
	});


    videoInPopup();


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
                    slidesToShow: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: false
                }
            }
        ]
    });
    $('.arrow-left').click(function() {
        $('.slick-slider').slick('slickPrev');
    });
    $('.arrow-right').click(function() {
        $('.slick-slider').slick('slickNext');
    });


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



function headerColor() {
    var headerOffset = $('.home header').offset().top;
    console.log(headerOffset);
    if (headerOffset >= 400) $('header').removeClass('transparent');
    else $('header').addClass('transparent');
}

function videoInPopup() {

    var videoSrc = $("#modalVideo iframe").attr("src");

    $('#modalVideo').on('shown.bs.modal', function () {
        var $iframe = $('iframe', jQuery(this));
        $iframe.prop('src', '').prop('src', videoSrc + '&autoplay=1');
    })
    $('#modalVideo').on('hidden.bs.modal', function () {
        $("#modalVideo iframe").prop("src", videoSrc);
    })

}