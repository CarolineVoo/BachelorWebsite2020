$(document).ready(function(){
    console.log("HelloWorl3d")

    $('.header-text').css('opacity', 0);

    $('.section-header').waypoint(function(direction) {
            $('.js-fadeIn').addClass("animated fadeIn")
    
      }, { offset: '100%' })

});