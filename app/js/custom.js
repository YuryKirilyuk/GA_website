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


    $('.sections-navigation a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        //$(this).parent().siblings().removeClass('current');
        //$(this).parent().addClass('current');
        $('html, body').animate(
            {scrollTop: $(target).offset().top -120}, 500
        );
        //console.log(target);
        return false;
    });


	$('header .actions').click(function(){
		$(this).find('.navigation-button').toggleClass('active'),
		$('header').toggleClass('active');
		$('.site-menu a').toggleClass('fadeInDown fadeOutUp');
		$('.socials').toggleClass('fadeInDown fadeOutUp');
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
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
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
        animate: "slow",
        range: "min",
        value: 1500,
        min: 0,
        max: 10000,
        step: 500,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $( ".value" ).text( ui.value + "$" );
        }
    });
    $('#slider .ui-slider-handle').append('<div class="value"></div>');
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
    $( ".value" ).text( $( "#slider" ).slider( "value" ) + "$");


    $( "#sliderOnPage" ).slider({
        animate: "slow",
        range: "min",
        value: 1500,
        min: 0,
        max: 10000,
        step: 500,
        slide: function( event, ui ) {
            $( "#amountOnPage" ).val( ui.value );
            $( ".valueOnPage" ).text( ui.value + "$" );
        }
    });
    $('#sliderOnPage .ui-slider-handle').append('<div class="valueOnPage"></div>');
    $( "#amountOnPage" ).val( $( "#sliderOnPage" ).slider( "value" ) );
    $( ".valueOnPage" ).text( $( "#sliderOnPage" ).slider( "value" ) + "$");





    var $grid = $('.grid').isotope({
        itemSelector: '.project',
        //layoutMode: 'fitRows',
        masonry: {
            //columnWidth: 390,
            fitWidth: true,
            horizontalOrder: true,
            gutter: 30
        }
    });

    /*var $grid_masonry = $('.grid').masonry({
        itemSelector: '.project',
        fitWidth: true,
        gutter: 30
    });*/

    $('.filter').on( 'click', 'button', function() {
        var $button = $(this);

        var filterValue = $(this).attr('data-filter');
        if($button.hasClass('active')) {$grid.isotope({ filter: '*' });}
        else {$grid.isotope({ filter: filterValue });}

        $(this).toggleClass('active');
        $(this).parent().siblings().find('button').removeClass('active');

    });

});


$(".button-file input").change(function() {

    var getPath = $(this).val();

    function getName (str){
        if (str.lastIndexOf('\\')){var i = str.lastIndexOf('\\')+1;}
        else{var i = str.lastIndexOf('/')+1;}
        var filename = str.slice(i);
        $("#fileformlabel").text(filename);
    }
    getName(getPath);
});

function headerColor() {
    var headerOffset = $('header').offset().top;
    //console.log(headerOffset);
    if (headerOffset >= 50) $('.home header').removeClass('transparent');
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