<!--1. Insert both jQuery library and the jquery-background-slideshow.js script into the HTML document.-->

<script src="/path/to/cdn/jquery.min.js"></script>
<script src="/path/to/src/jquery-background-slideshow.js"></script>
<!--2. Define an array of images for the backgrounds.*/-->


var imgList = [
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg"
]
<!--3. Call the function to enable the background slideshow.-->

$("body").background<a href="https://www.jqueryscript.net/slideshow/">Slideshow</a>({
images: imgList
})
<!--4. Determine the transition delay. Default: 5 seconds.-->

$("body").backgroundSlideshow({
images: imgList
delay: 3000
})
<!--5. Determine the duration of the transition effect. Default: 3 seconds.-->
$("body").backgroundSlideshow({
images: imgList
transitionDuration: 5000
})
<!--6. Determine whether to apply the position: fixed property to the parent container. Default: position: absolute.-->

$("body").backgroundSlideshow({
images: imgList
fixed:true
})
<!--7. Callback functions which will be fired before/after transition.-->

view source
$("body").backgroundSlideshow({

images: imgList

onBeforeTransition:function (index) {

console.log("before transition", index)

},

onAfterTransition:function (index) {

console.log("after transition", index)

},
})