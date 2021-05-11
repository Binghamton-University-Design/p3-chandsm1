/* javascript */

$(document).ready(function() {

console.log('hello there');

$('#slider-inner').slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

});