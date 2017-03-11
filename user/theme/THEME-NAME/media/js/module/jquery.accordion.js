(function($){
  $.fn.accordion = function(options) {
    var defaults = {
      otherClose: false,
      addClass: 'active',
      open: [],
      speed: 300
    };
    var setting = $.extend(defaults, options);
    var element = $(this);
    $(this).next().hide();
    $(defaults.open).each(function (index, val) {
      $($(element)[Number(val)]).addClass(defaults.addClass).next().show();
    });
    $(this).click(function () {
      if (defaults.otherClose == true && !($(this).hasClass('active'))) {
        $(element.selector + '.' + defaults.addClass).removeClass(defaults.addClass).next().slideToggle(defaults.speed);
      }
      $(this).toggleClass('active').next().slideToggle(defaults.speed);
    });
    return(this);
  };
})(jQuery);
