(function ($) {
  $(document).ready(function(){

      // Add icons to specific links in the main menu
      var $mainMenu = $('#block-system-main-menu');
      $mainMenu.find('.sessions a').addClass('icon-calendar');
      $mainMenu.find('.updates a').addClass('icon-comment');
      $mainMenu.find('.sponsors a').addClass('icon-heart');
      $mainMenu.find('.travel a').addClass('icon-plane');
      
      stylePromoImage();

      // Activate Slick carousel on landing page promo.
      $('.promos__wrapper').slick({
          slide: 'li',
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000
      });

      /**
       * Add an inline style tag for the background promo image, based off of its
       * data-promo-background attribute because views disallows style tags on field
       * rewrites for security purposes.
       */
      function stylePromoImage() {
          var $promos = $('.promo__image a');
          $.each($promos, function () {
              var promoImage = $(this)[0].attributes;
              var promoBackground = $(this)[0].attributes[0].nodeValue;
              $(this).attr('style', 'background-image: url(' + promoBackground + ')');
          });
      }
  });
})(jQuery);
