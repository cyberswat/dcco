(function ($) {
  $(document).ready(function(){

      // Add icons to specific links in the main menu
      var $mainMenu = $('#block-system-main-menu');
      $mainMenu.find('.sessions a').addClass('icon-calendar');
      $mainMenu.find('.updates a').addClass('icon-comment');
      $mainMenu.find('.sponsors a').addClass('icon-heart');
      $mainMenu.find('.travel a').addClass('icon-plane');

      // Activate Slick carousel on landing page promo.
      $('.promos__wrapper').slick({
          slide: 'li',
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000
      });
  });

  // Fire events after images load.
  $(window).load(function() {
    // Set equal heights to sponsor image containers so that we can vertically center them in the stylesheet.
    var maxHeight = 0;
    $('.views-field-field-sponsor-logo').each(function() {
      maxHeight = Math.max(maxHeight, $(this).height());
    }).height(maxHeight);
  });
})(jQuery);
