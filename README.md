# viewportSize

Allows you to get the width and height of the CSS viewport using JavaScript.


* Author: Tyson Matanich - http://matanich.com
* License: MIT


Demo: http://matanich.com/test/viewport-width/

More Info: http://www.matanich.com/2013/01/07/viewport-size/

Test: http://tysonmatanich.github.io/viewportSize/


## Why should I use it?

Most people rely on `window.innerWidth`, `document.documentElement.clientWidth`, or `$(window).width()` which do not always accurately report the viewport width used in CSS media queries. For example, WebKit browsers change the size of their CSS viewport when scroll bars are visible, while most other browsers do not. Since `window.innerWidth` remains constant regardless of the scroll bar state, it is not a good option for use with Chrome or Safari. Additionally, Internet Explorer 6, 7, and 8 do not support `window.innerWidth`. On the other hand, `document.documentElement.clientWidth` changes based on the scroll bar state and therefore is not a good option for Internet Explorer, Firefox, or Opera.


## Size and delivery

Currently, `viewportSize.js` compresses to around 609 bytes (~0.59 KB), after minify and gzip. See `viewportSize-min.js` or try one of these online tools: [Microsoft Ajax Minifier]:(http://ajaxmin.codeplex.com/), [Uglify]:(http://marijnhaverbeke.nl/uglifyjs), [Yahoo Compressor]:(http://refresh-sf.com/yui/), or [Closure Compiler](http://closure-compiler.appspot.com/home). Serve with gzip compression.

## Sample


```html
<script type="text/javascript">
	var width = viewportSize.getWidth();
	var height = viewportSize.getHeight();
</script>
```

## Support

viewportSize supports a broad range of browsers and devices (there are currently no known unsupported browsers).
