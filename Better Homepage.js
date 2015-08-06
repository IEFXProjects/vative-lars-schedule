$(document).ready(function(){
   $('.button').mouseenter(function() {
       $(this).animate({
           height: '+=8px',
           width:'+=8px'
       });
   });
   $('.button').mouseleave(function() {
       $(this).animate({
           height: '-=8px',
           width:'-=8px'
       }); 
   });
  
  
  /*
   $('#login').click(function() {
       $('#signup').hide();
       $(this).animate({
           height: '+=350px',
           width: '+400px',
           margin: '15px -=200px -=0px -=125px'
       });
       $('form').toggleClass('hidden');
   });
  
   $('#signup').click(function() {
       $('#login').hide();
       $(this).animate({
           height: '+=350px',
           width: '+400px',
           margin: '15px -=200px -=0px -=125px'
       });
       $('form').toggleClass('hidden');
   });
   */
  
});