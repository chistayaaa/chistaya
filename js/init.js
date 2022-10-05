
$(function(){

  // FitText Settings
  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });

    //Smooth Scrolling
    $('.smoothscroll').on('click', function (e) {

      e.preventDefault();
      let target = this.hash,
          $target = $(target);

      $("html, body").stop().animate(
          {'scrollTop': $target.offset().top},
          800, "swing",
          function () {window.location.hash = target;}
      );
    });
  } , 100);

  //Header-background-image height is equal to the browser height
  $('header').css({'height': $(window).height()});
  $(window).on('resize', function() {
      $('header').css({'height': $(window).height()});
      $('body').css({'width': $(window).width()})
    });


  // Fade In/Out Primary Navigation
  $(window).on('scroll', function () {
      let h = $('header').height();
      let y = $(window).scrollTop();
      let nav = $("#nav-wrap");

      if (y > h * 0.1 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut('fast');
      } else {
        if (y < h * 0.1) {
          nav.removeClass('opaque').fadeIn('fast');
        } else {
          nav.addClass('opaque').fadeIn('fast');
        }
      }
    });

});


