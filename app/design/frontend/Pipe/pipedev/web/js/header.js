define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    // detect mobile or resize
    var widthSize = $(window).width();
    if(widthSize < 768){
        $('.header .navigation .ninjamenus').appendTo('.sections.nav-sections');
    }
    if(widthSize > 768){
        $('.sections.nav-sections .ninjamenus').appendTo('.page-header .navigation');
    }

    $( window ).resize(function() {
        var widthresize = $(this).width();
        if(widthresize < 768 && $('.ninjamenus').hasClass('ninjamenus-mobile')){
            $('.header .navigation .ninjamenus').appendTo('.sections.nav-sections');
        }
        if(widthresize > 768 && $('.ninjamenus').hasClass('ninjamenus-desktop')){
            $('.sections.nav-sections .ninjamenus').appendTo('.page-header .navigation');
        }
    });

    $('.sign-wrapper').click(function(){

        if($(this).hasClass('open')){
            $(this).find('.sign-container').hide();
            $(this).removeClass('open');
        }else{
            $(this).find('.sign-container').show();
            $(this).addClass('open');
        }

        $(document).mouseup(function(e) 
        {
            var container = $(".sign-container");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
                $('.sign-wrapper').removeClass('open');
            }
        });
    });

    $('.header .search-link').click(function(e) {
        e.preventDefault();
        $('.block-search').show();
        $('#search').trigger('focus').css({
            position:  'static'
        });

        $(document).mouseup(function(e) 
        {
            var container = $(".block-search");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
            }
        });
    })
});