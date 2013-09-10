(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  $();

  module('Embedio');

  test('Invalid URL', function () {

    deepEqual(embedio("http://www.google.com"), {});

  });

  test('YouTube regex', function () {

    var video = {
      id: "NLqAF9hrVbY",
      html: '<iframe src="http://www.youtube.com/embed/NLqAF9hrVbY?feature=oembed" frameborder="0" allowfullscreen></iframe>'
    };

    deepEqual(embedio("http://youtu.be/NLqAF9hrVbY"), video);
    deepEqual(embedio("http://www.youtube.com/embed/NLqAF9hrVbY"), video);
    deepEqual(embedio("https://www.youtube.com/embed/NLqAF9hrVbY"), video);
    deepEqual(embedio("http://www.youtube.com/v/NLqAF9hrVbY?fs=1&hl=en_US"), video);
    deepEqual(embedio("http://www.youtube.com/watch?v=NLqAF9hrVbY"), video);
    deepEqual(embedio("http://www.youtube.com/ytscreeningroom?v=NLqAF9hrVbY"), video);
    deepEqual(embedio("http://www.youtube.com/watch?v=NLqAF9hrVbY&feature=featured"), video);

  });

  test('Vimeo regex', function () {

    var video = {
      id: "73704848",
      html: '<iframe src="http://player.vimeo.com/video/73704848" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    };

    deepEqual(embedio("https://vimeo.com/73704848"), video);
    deepEqual(embedio("http://vimeo.com/73704848"), video);
    deepEqual(embedio("https://www.vimeo.com/73704848"), video);
    deepEqual(embedio("http://www.vimeo.com/73704848"), video);
    deepEqual(embedio("https://vimeo.com/channels/73704848"), video);
    deepEqual(embedio("http://vimeo.com/channels/73704848"), video);
    deepEqual(embedio("https://vimeo.com/groups/name/videos/73704848"), video);
    deepEqual(embedio("http://vimeo.com/groups/name/videos/73704848"), video);
    deepEqual(embedio("https://vimeo.com/album/2222222/video/73704848"), video);
    deepEqual(embedio("http://vimeo.com/album/2222222/video/73704848"), video);
    deepEqual(embedio("https://vimeo.com/73704848?param=test"), video);
    deepEqual(embedio("http://vimeo.com/73704848?param=test"), video);

  });

}(jQuery));
