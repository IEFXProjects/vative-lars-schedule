$(document).ready(function(){
   $('.button').mouseenter(function() {
       $(this).animate({
           height: '+=8px',
           width:'+=8px'
       }, 100);
   });
   $('.button').mouseleave(function() {
       $(this).animate({
           height: '-=8px',
           width:'-=8px'
       }, 100); 
   });
  
  
  
   $('#logHeader').click(function() {
       $('#signup').hide();
       $('#login').animate({
           height: '410px',
           width: '400px',
           margin: '10px 200px -=0px 35%'
       });
       $('form').toggleClass('hidden');
   });
  
  $('input').focus(function(){
    $(this).css('outline-color', 'red');
  });
  
   $('#signHeader').click(function() {
       $('#login').hide();
       $('#signup').animate({
           height: '410px',
           width: '400px',
           margin: '10px 200px -=0px 35%'
       });
       $('form').toggleClass('hidden');
   });
  
  
});