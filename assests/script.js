

// HTML Script effects
var sideNav = document.querySelector('.sidenav');
// Side nav needs to be capitalized for some reason..
M.Sidenav.init(sideNav, {})

// slider script for materialize
var slider = document.querySelector('.slider')
M.Slider.init(slider, {
    indicators: true,
    fullWidth: true,
    height: 600,
    transition: 500,
    interval: 6000

});

// zoom for 
// var gallery = document.querySelectorAll('.materialboxed')
// M.Materialbox.init(gallery, {});

// parallax init
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});


// carousel init
var elems = document.querySelectorAll('.carousel');
M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    height: 500
});

// img box init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

// collapsible
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

