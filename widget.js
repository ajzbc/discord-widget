(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();
}

/******** Our main function ********/
function main() {
    jQuery(document).ready(function($) {

    var css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "http://hexicle.com/discord-widget/widget.css"
    });
    css_link.appendTo('head');

    function loadScript(url, callback)
    {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
    }

    document.getElementById('discord-widget').innerHTML = "</script><a href='http://hexicle.com/discord-widget' id='widget-link'><img src='http://hexicle.com/discord-widget/left.png' height='52.06' width='46.37' /><div id='box' class='box'>Discord Widget</div><img src='http://hexicle.com/discord-widget/right.png' height='52.06' width='12.19'/></a>";

    var linkID = document.querySelector('script[link]');
    var textID = document.querySelector('script[text]');
    var colorID = document.querySelector('script[color]');
    var link = linkID.getAttribute('link');
    var text = textID.getAttribute('text');
    var color = colorID.getAttribute('color');
    document.getElementById('widget-link').href = link;
    document.getElementById('box').innerHTML = text;
    document.getElementById('box').style.color = color;

    });
}
})(); // We call our anonymous function immediately
