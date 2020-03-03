$(function(){
  $('#about').click(function(){
    $('html,body').animate({scrollTop:$('.aboutContainer').offset().top},1000);
  });
  $('#ui').click(function(){
    $('html,body').animate({scrollTop:$('.UiContainer').offset().top},1000);
  });
  $('#web').click(function(){
    $('html,body').animate({scrollTop:$('.WebContainer').offset().top},1000);
  });
  $('#graphic').click(function(){
    $('html,body').animate({scrollTop:$('.GraphicContainer').offset().top},1000);
  });
});

$(function(){
var nav    = $('#fexidHeader'),
    offset = nav.offset();
  
$(window).scroll(function () {
  if($(window).scrollTop() > offset.top) {
    nav.removeClass('HeaderContent');
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
    nav.addClass('HeaderContent');
  }
});
});

jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 30) < offset) {    
        $animatable.removeClass('animatable').addClass('animated');
			}
    });
	};
  
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});