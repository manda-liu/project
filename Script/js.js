(function ($) {

  $('document').ready(function () {
    var maxHeight = '';
    var mediaWidth = $(window).width();
    if (mediaWidth > 576) {
      $('html, body').animate({ scrollTop: $("body").offset().top }, 600);
      
      $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 600);
      });
  
      $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        $('.scrollTop').each(function () {
          var target = $(this).attr('href');
          var targetPos = $(target).offset().top;
          var targetHeight = $(target).outerHeight();
          if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
            $('.scrollTop').removeClass('active');
            $(this).addClass('active');
          } else {
            $(this).removeClass('active')
          }
        });
      });
  
    }
  
    if (mediaWidth < 576) {
      $(".navToggle").click(function () {
        $("nav").slideToggle();
        return false;
      });
  
      $('html, body').animate({ scrollTop: $("body").offset().top }, 600);
      $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 600);
        $("nav").slideToggle();
      });
  
      $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        $('.scrollTop').each(function () {
          var target = $(this).attr('href');
          var targetPos = $(target).offset().top;
          var targetHeight = $(target).outerHeight();
          if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
            $('.scrollTop').removeClass('active');
            $(this).addClass('active');
          } else {
            $(this).removeClass('active')
          }
        });
      });
  
    }
  
    // 專案經歷輪播
    $('.jQerySlick').not('.slick-initialized').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
  
    });
  
    // go back top
    $(window).scroll(function () {
      if ($(window).scrollTop() > 60) {
          $(".backtop").fadeIn(200);
      }
      else {
          $(".backtop").fadeOut(200);
      }
  });
  
      $(".backtop").click(function () {
          $("html, body").animate({ scrollTop: 0 }, 1000);
      });
  
  });
  
  }(jQuery));