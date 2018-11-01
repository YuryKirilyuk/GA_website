var isMobile = false;

$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');

    headerColor();
    sectionsNavigation();

});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   
	$(window).scroll(function() {

        scrollSections();

        headerColor();

        sectionsNavigation();

	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
   
	$(window).resize(function() {
		
		
	});




$(function() {

    if ($('body').width() <= 768) {
        isMobile = true;
    }



    $('header .actions').click(function(){
        $(this).find('.navigation-button').toggleClass('active'),
            $('header').toggleClass('active');
        $('.site-menu a').toggleClass('fadeInDown fadeOutUp');
        $('.socials').toggleClass('fadeInDown fadeOutUp');
        return false;
    });


    if (!isMobile) {

        $(".service-icon").each(function(index){
            var vivus = [];
            index += 1;
            vivus[index] = new Vivus('icon_' + index + '', {
                    duration: 80,
                    file: "img/serviceIcon_"  + index + ".svg"},
                function() {
                    $("[id='icon_" + index + "']").addClass('done');
                });
            $(this).mouseenter(function(){
                $(this).removeClass('done');
                vivus[index].setFrameProgress(0).play(2);
            });
        });

    }



    $('.sections-navigation a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        $('html, body').animate(
            {scrollTop: $(target).offset().top -120}, 500
        );
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
        masonry: {
            fitWidth: true,
            horizontalOrder: true,
            gutter: 30
        }
    });

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
    if (headerOffset >= 50) $('.home header').removeClass('transparent');
    else $('header').addClass('transparent');
}

function sectionsNavigation() {
    if($('.sections-navigation').length) {
        var sectionsNavigation = $('.sections-navigation').offset().top;
        if (sectionsNavigation <= 650) $('.sections-navigation').addClass('white');
        else $('.sections-navigation').removeClass('white');
    }
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


function getSections() {
    var sections = [];

    $('main section').each(function(index){
        var section = $(this),
            sectionOffTop = $(this).offset().top,
            sectionId = section.attr('id');

        sections[index] = {
            'el': section,
            'sectionId': sectionId,
            'sectionOffTop': sectionOffTop
        }
    });

    return sections;
}


function scrollSections() {
    var offset = getSections();

    for( var i=0; i < offset.length; i++) {
        if(window.pageYOffset >= offset[i].sectionOffTop - 120) {
            $('.sections-navigation a[data-section=' + offset[i].sectionId + ']').addClass('current').siblings().removeClass('current');
        } else {
            $('.sections-navigation a[data-section=' + offset[i].sectionId + ']').removeClass('current');
        }

    }
}