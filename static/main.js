$(document).ready(function() {
    console.log("Hello");

    var go_href = function(evt) {
        var url = $(evt.target).attr("href");
        if (url == "") {
            return;
        } else {
            window.open(url, '_blank');
        }
    }

    $(document).on("click", "paper", go_href);
    $(document).on("click", "publisher", go_href);
    $(document).on("click", "place", go_href);
    $(document).on("click", "advisor", go_href);
    $(document).on("click", "arXiv", go_href);
    $(document).on("click", "pdf", go_href);
    $(document).on("click", "slides", go_href);
    $(document).on("click", "poster", go_href);
    $(document).on("click", "github", go_href);
    $(document).on("click", "department", go_href);
    $(document).on("click", "instructor", go_href);

});

$(document).ready(function() {
    console.log("YES");
    var modal = document.getElementById("myModal");

    var images = document.getElementsByClassName("figure-img img-fluid rounded")
    // Get the modal
    
    for(var i = 0;i < images.length; i++){
        var img = images[i];
        var modalImg = document.getElementById("img01");          
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
});

$(document).ready(function() {
    $('map').imageMapResize();
});

$(document).ready(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();