$('p').click(function(){
   $(this).css('color','red'); 
});

$('button').mouseenter(function(){
   $(this).removeClass('makeRed').addClass('makeBlue'); 
});

$('button').mouseleave(function(){
   $(this).removeClass('makeBlue').addClass('makeRed'); 
});