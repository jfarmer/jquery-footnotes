;(function($){
  $.fn.extend({
    footnotes: function(options) {
      this.defaultOptions = {
        footnoteClass: '.footnote',
        footnoteElement: '<li>'
      };

      var settings = $.extend({}, this.defaultOptions, options);

      var footnoteLinkFormat = function(href, class, html) {
        return '<a href="#' + href + '" class="' + class + '">' + html + '</a>';
      }

      return this.each(function() {
          var $this = $(this);
          
          $(settings['footnoteClass']).each(function(index, elt) {
            var foonote_name = "footnote_" + index;
            var anchor_name  = "anchor_" + index;
            
            var footnote = elt.html() + ' [' + footnoteLinkFormat(anchor_name, 'footnote_return_link', '&#8617;') + ']';

            elt.replaceWith(footnoteLinkFormat(footnote_name, 'footnote_link', index));
            
            $(settings['footnoteElement']).html(footnote).appendTo($this);     
          });
      });
    }
  });
})(jQuery);