/**
 * jquery.fitfont.js
 *
 * Copyright 2015, ichi5 https://github.com/ichi5/
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
(function($) {
  $.fn.fitFont = function(options) {

    var settings = $.extend({
      'minFontSize' : 10,
      'maxFontSize' : 15
    }, options);
    settings.minFontSize = parseInt(settings.minFontSize, 10);
    settings.maxFontSize = parseInt(settings.maxFontSize, 10);

    return this.each(function(){
      var $this = $(this);

      var $clone = $this.clone().css({
        'width'       : 'auto',
        'display'     : 'none',
        'visibility'  : 'hidden',
        'position'    : 'absolute',
        'white-space' : 'nowrap'
      });
      $this.after($clone);

      for (var i=settings.maxFontSize; i>=settings.minFontSize; i--) {
        $clone.css('fontSize', i+'px');
        if ($clone.width() <= $this.width()) {
          break;
        }
      }

      $this.css('fontSize', $clone.css('fontSize'));

      $clone.remove();
    });
  };
})(jQuery);
