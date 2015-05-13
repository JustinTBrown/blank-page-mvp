$(document).foundation();

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('header').fadeIn(1000);
  } else {
    $('header').fadeOut(600);
  }
});