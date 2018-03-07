$(window).bind('load', function() {
    'use strict';
    setTimeout(function() {
        masonryHeight();
    
    });
});

$(window).resize(function() {

    'use strict';
    masonryHeight();

});


// MASONRY ITEM HEIGHT
function masonryHeight() {
    $('.masonry').each(function(){
        if (!$(this).hasClass('masonry-layout') && !$(this).hasClass('grid-1')) {
            $(this).find('.item').height('');
            //console.log($(this).find('.item').height(''))
            var imgHeight=$(this).find()
            var masonryHeight =  $(this).find('.item img').height();
            
           console.log(masonryHeight)
            if ($(this).hasClass('no-space')) {
                $(this).find('.item:not(.isotope-hidden)').each(function() {
                    $(this).height(masonryHeight);
                    if ($(this).hasClass('item-tall')) {
                        $(this).height(masonryHeight * 2);
                    }
                    if ($(this).hasClass('item-wide') && !$(this).hasClass('item-tall')) {
                        $(this).width(masonryHeight * 2);
                    }
                });
            } else {
                 $(this).find('.item:not(.isotope-hidden)').each(function() {
                   // console.log(masonryHeight-32)
                     
                    $(this).height(masonryHeight - 0);
                    if ($(this).hasClass('item-tall')) {
                        $(this).height(masonryHeight * 2 - 44);
                    }
                    if ($(this).hasClass('item-wide') && !$(this).hasClass('item-tall')) {
                        $(this).width(masonryHeight * 2 + 20);
                    }
                });
            }
        }
    });
}