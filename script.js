$(document).ready(function(){
    console.log("HelloWorl3d")

    $('.header-text').css('opacity', 0);

    $('.section-header').waypoint(function(direction) {
            $('.js-fadeIn').addClass("animated fadeIn")
    
      }, { offset: '100%' })

});


/* Scroll on buttons */
    $('.js--scroll-to-rapporter').click(function() {
        $('html, body').animate({scrollTop: $('.js--scroll-to-rapporter').offset().top}, 1000)
    });  


/* Navigation scroll */
    /* 
        source: 
        https://css-tricks.com/snippets/jquery/smooth-scrolling/
    */
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });