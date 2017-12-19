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

$('.toggle-menu').click(function(e) {
  e.preventDefault();
  $('.main-menu').slideToggle();
});
