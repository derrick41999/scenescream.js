Setup
=====
SceneScream.js should be pretty easy to set up. It can take a matter of seconds to get the plugin  up and working on your web page.
Step 1: Include the scenescream.js Javascript file.
------------------------------------------------------------------------------
You can download the SceneScream.js source and host it on your own servers, or use the free  hosted version. It's often recommended now to put JavaScript before the end body tag (&lt;/body>) instead of the head (&lt;head>)
> ```html
////add html content here
```
### HOSTED Version ###
```html
<script src="http://www.derrickdouglassdesigns.com/scenescream/scenescream.js"></script>
```
### SELF HOSTED Version ###
With the self hosted option you'll also want to update the location of the video-js.swf file.
Step 2: Add an HTML5 video tag to your page.
--------------------------------------------
With SceneScream.js you just use an HTML5 video tag to embed a video. SceneScream.js will then read the tag and make it work in all browsers, not just ones that support HTML5 video. Beyond the basic markup, SceneScream.js needs a few extra pieces.

  1. The 'data-setup' Attribute tells SceneScream.js to automatically set up the video when the page is ready, and read any options (in JSON format) from the attribute (see [options](options.md)). There are other methods for initializing the player, but this is the easiest.

  2. The 'id' Attribute: Should be used and unique for every video on the same page.

  3. The 'class' attribute contains two classes:
    - `video-js` applies styles that are required for SceneScream.js functionality, like fullscreen and subtitles.
    - `vjs-default-skin` applies the default skin to the HTML controls, and can be removed or overridden to create your own controls design.

Otherwise include/exclude attributes, settings, sources, and tracks exactly as you would for HTML5 video.*
```html
<video id="example_video_1" class="video-js vjs-default-skin"
  controls preload="auto" width="640" height="264"
  poster="http://video-js.zencoder.com/oceans-clip.png"
  data-setup='{"example_option":true}'>
 <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
 <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
 <source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
 <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
</video>
```

By default, the big play button is located in the upper left hand corner so it doesn't cover up the interesting parts of the poster. If you'd prefer to center the big play button, you can add an additional `vjs-big-play-centered` class to your video element. For example:

```html
<video id="example_video_1" class="video-js vjs-default-skin vjs-big-play-centered"
  controls preload="auto" width="640" height="264"
  poster="http://video-js.zencoder.com/oceans-clip.png"
  data-setup='{"example_option":true}'>
  ...
</video>
```

Alternative Setup for Dynamically Loaded HTML
---------------------------------------------
If your web page or application loads the video tag dynamically (ajax, appendChild, etc.), so that it may not exist when the page loads, you'll want to manually set up the player instead of relying on the data-setup attribute. To do this, first remove the data-setup attribute from the tag so there's no confusion around when the player is initialized. Next, run the following javascript some time after the SceneScream.js javascript library has loaded, and after the video tag has been loaded into the DOM.
```js
videojs("example_video_1", {}, function(){
  // Player (this) is initialized and ready.
});
```

The first argument in the `videojs` function is the ID of your video tag. Replace it with your own.

The second argument is an options object. It allows you to set additional options like you can with the data-setup attribute.

The third argument is a 'ready' callback. Once SceneScream.js has initialized it will call this function.

Instead of using an element ID, you can also pass a reference to the element itself.

```js
videojs(document.getElementById('example_video_1'), {}, function() {
  // This is functionally the same as the previous example.
});
```

```js
videojs(document.getElementsByClassName('awesome_video_class')[0], {}, function() {
  // You can grab an element by class if you'd like, just make sure
  // if it's an array that you pick one (here we chose the first).
});
```

\* If you have trouble playing back content you know is in the [correct format](http://blog.zencoder.com/2013/09/13/what-formats-do-i-need-for-html5-video/), your HTTP server might not be delivering the content with the correct [MIME type](http://en.wikipedia.org/wiki/Internet_media_type#Type_video). Please double check your content's headers before opening an [issue](https://github.com/videojs/SceneScream.js/blob/master/CONTRIBUTING.md).