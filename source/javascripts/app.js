$(document).foundation();

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('header').fadeIn(1000);
  } else {
    $('header').fadeOut(600);
  }
});