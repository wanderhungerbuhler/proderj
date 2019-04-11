$('.menu-mobile').click(function(){
  $('.menu-mobile').fadeOut(1);
  $('.list-menu').slideToggle("slow");
  $('.menu-mobile-close').css('display', 'block');
});

$('.menu-mobile-close').click(function(){
  $('.menu-mobile-close').fadeOut(1);
  $('.list-menu').slideToggle("slow");
  $('.menu-mobile').css('display', 'block');
});
