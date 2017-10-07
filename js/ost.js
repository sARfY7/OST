$(document).ready(function() {
  $('.card').on('mouseenter', function() {
         $('.overlay',this).addClass('open');
      });

  $('.card').on('mouseleave', function() {
         $('.overlay',this).removeClass('open');
      });
});
