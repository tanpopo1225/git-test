(function($){
  $.fn.latestClass = function(options) {
    var defaults = {
      daySelector : ".date",
      addClass : "new",
      diff_num : 7,
      separator : ".",
      month: false
    };
    var setting = $.extend(defaults, options);
    
    var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0);
    this.children().each(function(){
      var date = $(this).find(setting.daySelector).text().split(setting.separator);
      var pubdate = new Date(date[0], date[1] - 1, date[2], 0, 0, 0);
      var diff = 0;
      
      if (!setting.month) {
        diff = (today - pubdate)/1000/60/60/24;
        diff = Math.floor(diff);
      }
      else {
        var month = (today.getMonth() - pubdate.getMonth());
        var year = (today.getFullYear() - pubdate.getFullYear());
        diff = month + year * 12;
      }
      
      if (diff >= 0 && diff <= setting.diff_num) {
        $(this).addClass(setting.addClass);
      }
    });
    return(this);
  };
})(jQuery);
