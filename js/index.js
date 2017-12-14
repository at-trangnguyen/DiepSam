$(document).ready(function() {
  $('.projects-list').isotope({
    // options
    itemSelector: '.project-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
});

$('.menu-mobile').click(function(e) {
  e.preventDefault();
  $('.menu-list').slideToggle();
});
