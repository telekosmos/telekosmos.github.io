/*!
 * Collapsible.js 1.0.0
 * https://github.com/jordnkr/collapsible
 *
 * Copyright 2013, Jordan Ruedy
 * This content is released under the MIT license
 * http://opensource.org/licenses/MIT
 */

(function($, undefined) {
  $.fn.collapsible = function(effect, options) {

    var defaults = {
      accordionUpSpeed: 400,
      accordionDownSpeed: 400,
      collapseSpeed: 400,
      contentOpen: 0,
      arrowRclass: 'arrow-r',
      arrowDclass: 'arrow-d',
      animate: true
    };

    if (typeof effect === "object") {
      var settings = $.extend(defaults, effect);
    } else {
      var settings = $.extend(defaults, options);
    }

    return this.each(function() {
      if (settings.animate === false) {
        settings.accordionUpSpeed = 0;
        settings.accordionDownSpeed = 0;
        settings.collapseSpeed = 0;
      }

      var $thisEven = $(this).children(':even');
      var $thisOdd = $(this).children(':odd');
      var accord = 'accordion-active';

      switch (effect) {
        case 'accordion-open':
        /* FALLTHROUGH */
        case 'accordion':
          if (effect === 'accordion-open') {
            $($thisEven[settings.contentOpen]).children(':first-child').toggleClass(settings.arrowRclass + ' ' + settings.arrowDclass);
            $($thisOdd[settings.contentOpen]).show().addClass(accord);
          }
          $($thisEven).click(function() {
            // if ($(this).next().attr('class') === accord) {
            if ($(this).attr('class').indexOf(accord) != -1) {
              // $(this).next().slideUp(settings.accordionUpSpeed).removeClass(accord);
              if (settings.animate)
                $(this).next().slideUp(settings.accordionUpSpeed);
              else
                $(this).next().hide();
              $(this).removeClass(accord);
              // $(this).children(':first-child').toggleClass(settings.arrowRclass + ' ' + settings.arrowDclass);
            } else {
              $thisEven.removeClass(accord); // only one can be deployed at once
              $($thisEven).children().removeClass(settings.arrowDclass).addClass(settings.arrowRclass);
              if (settings.animate) {
                $($thisOdd).slideUp(settings.accordionUpSpeed).removeClass(accord);
                // $($thisOdd).animUp(settings.accordionUpSpeed).removeClass(accord);
                // $(this).next().slideDown(settings.accordionDownSpeed).addClass(accord);
                $(this).next().slideDown(settings.accordionDownSpeed);
              }
              else {
                $($thisOdd).hide();
                $(this).next().show();
              }
              $(this).addClass(accord);
              // $(this).children(':first-child').toggleClass(settings.arrowRclass + ' ' + settings.arrowDclass);
            }
          });
          break;
        case 'default-open':
        /* FALLTHROUGH */
        default:
          if (effect === 'default-open') {
            $($thisEven[settings.contentOpen]).children(':first-child').toggleClass(settings.arrowRclass + ' ' + settings.arrowDclass);
            $($thisOdd[settings.contentOpen]).show();
          }
          $($thisEven).click(function() {
            $(this).children(':first-child').toggleClass(settings.arrowRclass + ' ' + settings.arrowDclass);
            $(this).next().slideToggle(settings.collapseSpeed);
          });
          break;
      }
    });
  };
})(jQuery);
