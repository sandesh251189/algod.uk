(function($) {

  'use strict';
  $(document).ready(function() {

    initcarousel();
    var flag = true;
    var mouse = {
      x: undefined,
      y: undefined
    }
    var rsi = $('#full-width-slider').royalSlider({
      autoHeight: false,
      arrowsNav: false,
      fadeinLoadedSlide: false,
      controlNavigationSpacing: 0,
      controlNavigation: 'bullets',
      navigateByClick: false,
      imageScaleMode: 'fill',
      imageAlignCenter: true,
      loop: false,
      loopRewind: false,
      numImagesToPreload: 6,
      keyboardNavEnabled: true,
      autoScaleSlider: true,
			slidesSpacing:0,
    loop:true
    }).data('royalSlider');
    var rsipage = $('.full-width-slider-page').royalSlider({
      autoHeight: false,
      arrowsNav: false,
      autoScaleSliderHeight:443,
      imageScaleMode: 'fill',
      keyboardNavEnabled: false,
      sliderDrag:false,
      sliderTouch:false,
      navigateByClick:false,
        controlNavigationSpacing: 0,

    }).data('royalSlider');
    $(".sliderContainer").bind("click", function() {
      var box = $(".cursor").position();
      if (flag === true) {
        rsi.next();
        console.log(mouse.x + " " + mouse.y)
        console.log(box.left, box.top)
      } else {
        console.log(mouse.x + " " + mouse.y)
        console.log(box.left, box.top)
        rsi.prev();
      }

    })
    $(".sliderContainer").mousemove(function(event) {

      var cursor = $(".cursor");
      var sliderWidth = $(".sliderContainer").width();
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      // console.log(sliderWidth)
      cursor.css({
        'left': mouse.x,
        'top': mouse.y
      });
      if ($(this).width() / 2 < mouse.x) {
        cursor.css('transform', ' rotate(180deg)');
        flag = true;

      } else {
        flag = false;
        cursor.css('transform', ' rotate(0deg)');


      }



      //console.log($(this).width());
    })
		$(".sliderContainer").mouseenter(function(){
			$(".cursor").show();
		})
		$(".sliderContainer").mouseleave(function(){
			$(".cursor").hide();
		})
    $('#full-width-slider').append("<div class='cursor'><div class='cursorIcon'></div></div>");
  })

  function initcarousel() {
    $('.client-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      dots: false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 7
        },
        1000: {
          items: 7
        }
      }
    });
    $('.work-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: true,
      dots: false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 7
        },
        1000: {
          items: 3
        }
      }
    });
    $('.case-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      dots: false,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  }
})(jQuery)
