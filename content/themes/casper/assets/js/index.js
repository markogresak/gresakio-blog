/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  var $document = $(document);

  $document.ready(function () {

    var $postContent = $(".post-content");
    $postContent.fitVids();

    $(".scroll-down").arctic_scroll();

    $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("nav-opened nav-closed");
    });

    $('.subscribe-mail').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us11.list-manage.com","uuid":"3ebccb12100cb3c26d21b8c92","lid":"f825ff760b"}) });
      return false;
    });

  });

  // Arctic Scroll by Paul Adam Davis
  // https://github.com/PaulAdamDavis/Arctic-Scroll
  $.fn.arctic_scroll = function (options) {

    var defaults = {
        elem: $(this),
        speed: 500
      },

      allOptions = $.extend(defaults, options);

    allOptions.elem.click(function (event) {
      event.preventDefault();
      var $this = $(this),
        $htmlBody = $('html, body'),
        offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
        position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
        toMove;

      if (offset) {
        toMove = parseInt(offset);
        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top + toMove)
        }, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position);
        $htmlBody.stop(true, false).animate({
          scrollTop: toMove
        }, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top)
        }, allOptions.speed);
      }
    });

  };

  var postContent = $('.post-content');
  // If on post page.
  if (postContent.length === 1) {
    $('.read-time').html((Math.floor(postContent.text().trim().replace(/\r?\n/g,'').replace(/\s{2,}/g, ' ').split(' ').length / 200) || '< 1') + ' min read');
  }
})(jQuery);
