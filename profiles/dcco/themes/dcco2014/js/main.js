(function ($) {
  $(document).ready(function(){
    // Add icons to specific links in the main menu
    var $mainMenu = $('#block-system-main-menu');
    $mainMenu.find('.sessions a').addClass('icon-calendar');
    $mainMenu.find('.updates a').addClass('icon-comment');
    $mainMenu.find('.sponsors a').addClass('icon-heart');
    $mainMenu.find('.travel a').addClass('icon-plane');
  });
})(jQuery);
