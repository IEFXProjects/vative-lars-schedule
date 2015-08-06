$(document).ready(function() { 
  
    //Hide to fade in later
  $('#TransForm').hide();
  
    // Conversions for progress bar
    var hours = (1/168)*($('.progress').width());
    var mins = (1/10080)*($('.progress').width());
  
  $('.progress').append('<div class="progress-bar progress-bar-custom active" id = "bar1" style="width: 0%; background: rgba(135, 160, 80, 1);"><span class="sr-only">10% Complete</span></div>');
  
  $('input[name=Transportation]').change(function(){
    if ($(this).val() == 'yes')
      {
        $('#TransForm').fadeIn();
        if ($('#MH').val() == 'Minute(s)')
          {
            $('#bar1').animate({width: $('#time').val()*mins});
          }
        else
          {
            $('#bar1').animate({width: $('#time').val()*hours});
          }
      }
    else if ($(this).val() == 'no')
      {
        $('#TransForm').fadeOut();
        $('#bar1').animate({width: 0});
      }
  });
  
  $('input[name=time]').change(function(){
    if ($('#MH').val() == 'Minute(s)')
      {
        $('#bar1').animate({width: $('#time').val()*mins});
      }
    else
      {
        $('#bar1').animate({width: $('#time').val()*hours});
      }
  });
  
  $('#MH').change(function(){
    if ($('#MH').val() == 'Minute(s)')
      {
        $('#bar1').animate({width: $('#time').val()*mins});
      }
    else
      {
        $('#bar1').animate({width: $('#time').val()*hours});
      }
  });
});