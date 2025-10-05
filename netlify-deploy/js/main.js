/* Main INIT Function */
function initializeSite() {
  "use strict";
  // OUTLINE DIMENSION AND CENTER
  (function () {
    function centerInit() {
      var mainTitle = $('.main-title');
      mainTitle.css({"margin-top" : (($(window).height() - mainTitle.height()) / 2) + "px"});
    }
    $(document).ready(centerInit);
    $(window).resize(centerInit);
  })();

  // Initialization effect
  $('#scene').parallax();
};

$(window).load(function () {
  $('.preloader').fadeOut(1500);
  initializeSite();
  (function () {
    setTimeout(function () {
      window.scrollTo(0,0);
    }, 0);
  })();
});

// Fallback: Hide preloader after 5 seconds regardless
setTimeout(function() {
  $('.preloader').fadeOut(1000);
  initializeSite();
}, 5000);

// Additional fallback: If page is already loaded, hide preloader immediately
$(document).ready(function() {
  if (document.readyState === 'complete') {
    setTimeout(function() {
      $('.preloader').fadeOut(1000);
      initializeSite();
    }, 1000);
  }
});
