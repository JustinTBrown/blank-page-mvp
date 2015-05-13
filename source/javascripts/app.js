$(document).foundation();

// $(document).load(function() {
//   $('.about').fadeTo(0, 0);
  
// });
// $('.about').hide(0, 0);
$(document).scroll(function() {
  var y = $(this).scrollTop();

  if (y > 200) {
    $('header').fadeIn(1000);
  } else {
    $('header').fadeOut(600);
  }

  // if (y > 100) {
  //   $('.about').fadeTo(1000, 1);
  // } else {
  //   $('.about').fadeTo(1000, 0);
  // }

  // if (y > 100) {
  //   $('.about').css( "visibility", "visible");
  //   $('.about').animate({ opacity: 1 });
  // } else {
  //   $('.about').animate({ opacity: 0 });
  // }
});