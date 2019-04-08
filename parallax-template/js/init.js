//import Typed from 'typed.js';

$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});


(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

window.onload = function () {
  Particles.init({
    selector: '.background'
  });
};

// Can also be included with a regular script tag


var options = {
  strings: ["Hello, World", "I am a ...", "Problem Solver", "Programmer", "I am passionate about code!"],
  typeSpeed: 50
}

var typed = new Typed(".element", options);
