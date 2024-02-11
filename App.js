$('.toggle-side').click(function () {
    $(".side-menu").toggleClass("show")
})

$('.close-side').click(function () {
    $(".side-menu").toggleClass("show"); })
function myFunction(x) {
    x.classList.toggle("fa-align-justify");
}

$(document).ready(function(){
$("#show").click(function(){
$(".dropdown-content").toggle();
});
});

// $(document).ready(function(){
// $("#hide").click(function(){
// $("this").toggleClass("white");
// });
// });
// $(document).ready(function() {
//     $("#hide").click(function() {
//         $(".Main__navbar").css("background-color", "white");
//     });
// });
$("#hide").click(function() {
    if ($('#hide').hasClass("active")) {
      // If the toggle button has the "active" class, set the background color to grey
      $(".Main__navbar").css("background-color", "white");
    } else {
      // If the toggle button does not have the "active" class, set the background color to white
      $(".Main__navbar").css("background-color", "transparent");
    }
    // Toggle the "active" class on the toggle button
    $(this).toggleClass("active");
  });

$(document).ready(function(){
    $("#hide1").click(function(){
    $(".hat1").toggleClass("pink1");
    });
    });

$(document).ready(function(){
    $("#hide2").click(function(){
    $(".hat2").toggleClass("pink2");
    });
    });


$(document).ready(function(){
    $("#hide4").click(function(){
    $(".hat4").toggleClass("pink4");
    });
    });
   //

  
  $(document).ready(function () {
  if ( $('.product__slider-main').length ) {
    var $slider = $('.product__slider-main')
        .on('init', function(slick) {
            $('.product__slider-main').fadeIn(1000);
        })
        
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            lazyLoad: 'ondemand',
            autoplaySpeed: 3000,
            asNavFor: '.product__slider-thmb'
        });

var $slider2 = $('.product__slider-thmb')
        .on('init', function(slick) {
            $('.product__slider-thmb').fadeIn(1000);
        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            asNavFor: '.product__slider-main',
            dots: false,
            // arrows:true,
            centerMode: false,
            focusOnSelect: true
        });

//remove active class from all thumbnail slides
$('.product__slider-thmb .slick-slide').removeClass('slick-active');

//set active class to first thumbnail slides
$('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.product__slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 var mySlideNumber = nextSlide;
 $('.product__slider-thmb .slick-slide').removeClass('slick-active');
 $('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
});
// init slider
require(['js-sliderWithProgressbar'], function(slider) {

$('.product__slider-main').each(function() {

    me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);

    // stop slider
    //me.slider.stop();

    // start slider
    //me.slider.start(index);

    // get reference to slick slider
    //me.slider.getSlick();
});
});
var options = {
progressbarSelector    : '.bJS_progressbar'
, slideSelector        : '.bJS_slider'
, previewSlideSelector : '.bJS_previewSlider'
, progressInterval     : ''
    // add your own progressbar animation function to sync it i.e. with a video
    // function will be called if the current preview slider item (".b_previewItem") has the data-customprogressbar="true" property set
, onCustomProgressbar : function($slide, $progressbar) {}
}
// slick slider options
// see: https://kenwheeler.github.io/slick/
var sliderOptions = {
slidesToShow   : 1,
slidesToScroll : 1,
arrows         : false,
fade           : true,
autoplay       : true
}
// slick slider options
// see: https://kenwheeler.github.io/slick/
var previewSliderOptions = {
slidesToShow   : 3,
slidesToScroll : 1,
dots           : false,
focusOnSelect  : true,
centerMode     : true
}
}
});

//second slider


$(document).ready(function () {
$('.second__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})});
$(document).ready(function () {
  $('.slider3').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  })});
  $(document).ready(function () {
    $('.map').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    })});