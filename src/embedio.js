/*
 * embedio
 *
 *
 * Copyright (c) 2013 Mike Horn
 * Licensed under the MIT license.
 */

(function ($) {

  var SERVICE = {
    youtube: {
      regex: /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,
      html: '<iframe src="http://www.youtube.com/embed/{{id}}?feature=oembed" frameborder="0" allowfullscreen></iframe>'
    },
    vimeo: {
      regex: /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|)(\d+)(?:$|\/|\?)/,
      html: '<iframe src="http://player.vimeo.com/video/{{id}}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    }
  };

  window.embedio = function (url) {

    for (var service in SERVICE) {
      var match = url.match(SERVICE[service].regex);
      if (match) {
        return {
          id: match[1],
          html: SERVICE[service].html.replace('{{id}}', match[1])
        };
      }
    }

    return {};
  };

  // Collection method.
  $.fn.embedio = function () {
    return this.each(function (i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.embedio = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.awesome.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.embedio.options = {
    punctuation: '.'
  };

}(jQuery));
