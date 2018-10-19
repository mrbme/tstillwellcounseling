$(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            	$('nav').removeClass('bg-transparent'),
                $('nav').addClass('changeColorWhite')
            }
            if ($(this).scrollTop() < 100) {
                $('nav').removeClass('changeColorWhite')
            }
        });
    });