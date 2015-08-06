$(document).ready(function() {
   
   //Hide to fade in later
$('#snackSelect').hide();
$('#snackInputs').hide();

  //Creates Snacks option
    $('#snackSelect').append('<h3>Snacks</h3> How many Snacks will you list? <select name="chooseSnacknum" class="nums" id = "Snacknums"><option selected="selected">1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select> <br><br> <form>Snack 1: <input type = "text" name= "snack1" class = "snacks"><br>       Time: <input type = "text" name= "time" id = "s1Time"> <select name="chooseMH" class="MH" id = "MHs1"> <option selected="selected">Minute(s)</option><option>Hour(s)</option></select></form>');
  
  for (var i= 2; i<=10; i++)
    {
      $('#snackInputs').append('<br> <form class = s' +i+ '>Snack ' +i+ ': <input type = "text" name= "snack' +i+ '" class = "snacks"><br>  Time: <input type = "text" name= "time" id = "s'+i+'Time"> <select name="chooseMH" class="MH'+i+ '" id = "MHs'+i+'"> <option selected="selected">Minute(s)</option><option>Hour(s)</option></select></form>');
    }
  
  for (var r= 1; r<=10; r++)
    {
      $('.progress').append('<div class="progress-bar progress-bar" id = "sbar'+r+'" style="width: 0%"><span class="sr-only">10% Complete</span></div>');
    }
  
  (function(){
    // Conversions for progress bar
    var hours = (1/24)*($('.progress').width());
    var mins = (1/1440)*($('.progress').width());
    
    
  /*              ---
  Fading out specific options, changing bar
                  ---                    */

 //Breakfast
 $('input[name=Breakfast]').on('change', function(){
    var input = $('input[id=breakfastInput]').val();
    var yesOrNo = $('input[name=Breakfast]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#breakfastForm').fadeOut();
      $("#bar1").animate({width: 0});
    }
    else if (yesOrNo == 'yes')
      {
        $('#breakfastForm').fadeIn();
        if($("#MHb").val() == 'Hour(s)')
        {
          $("#bar1").animate({width: input * hours});
        }
        else if ($("#MHb").val() == 'Minute(s)')
          {
            $("#bar1").animate({width: input * mins});
          }
      }
  });
  
  
 //Lunch
  $('input[name=Lunch]').on('change', function(){
    var input = $('input[id=lunchInput]').val();
    var yesOrNo = $('input[name=Lunch]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#lunchForm').fadeOut();
      $("#bar2").animate({width: 0});
    }
    else if (yesOrNo == 'yes')
      {
        $('#lunchForm').fadeIn();
        if($("#MHl").val() == 'Hour(s)')
        {
          $("#bar2").animate({width: input * hours});
        }
        else if ($("#MHl").val() == 'Minute(s)')
          {
            $("#bar2").animate({width: input * mins});
          }
      }
  });
  
 //Dinner
  $('input[name=Dinner]').on('change', function(){
    var input = $('input[id=dinnerInput]').val();
    var yesOrNo = $('input[name=Dinner]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#dinnerForm').fadeOut();
      $("#bar3").animate({width: 0});
    }
    else if (yesOrNo == 'yes')
      {
        $('#dinnerForm').fadeIn();
        if($("#MHd").val() == 'Hour(s)')
        {
          $("#bar3").animate({width: input * hours});
        }
        else if ($("#MHd").val() == 'Minute(s)')
          {
            $("#bar3").animate({width: input * mins});
          }
      }
  });
    
  //Snacks
  $('input[name=Snacks]').on('change', function(){
    
    var yesOrNo = $('input[name=Snacks]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#snackSelect').fadeOut();
      $('#snackInputs').fadeOut();
      for (var p = 1; p<=10; p++)
        {
         $("#sbar"+p).animate({width: 0});
        }
    }
    else if (yesOrNo == 'yes')
     {
        $('#snackSelect').fadeIn();
        $('#snackInputs').fadeIn();
       
       var num = $('#Snacknums').val(); 
       for(var e = 10; e>num; e--)
         {
          $('.s'+e).hide();
         }
        
      for(var k = 1; k<=10; k++)
      {
        if($("#MHs"+k).val() == 'Hour(s)')
        {
          $("#sbar"+k).animate({width: $('input[id=s'+k+'Time]').val() * hours});
        }
        else if ($("#MHs"+k).val() == 'Minute(s)')
          {
            $("#sbar"+k).animate({width: $('input[id=s'+k+'Time]').val() * mins});
          }
      }
     }
  });
    
  
  
  /*               ---
  Progress bar operations (Regular Input)
                   ---                 */
  
  //Breakfast's input (form)
  $("#breakfastForm").change(function(){
    var x = $('#breakfastInput').val();
    var y = $("#MHb").val();

    if(y == 'Hour(s)')
    {
    $("#bar1").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar1").animate({width: x*mins});
      }
        });
  
  
  //Lunch's input (form)
  $("#lunchForm").change(function(){
    var x = $('#lunchInput').val();
    var y = $("#MHl").val();

    if(y == 'Hour(s)')
    {
    $("#bar2").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar2").animate({width: x*mins});
      }
        });

  
  //Dinner's input (form)
  $("#dinnerForm").change(function(){
    var x = $('#dinnerInput').val();
    var y = $("#MHd").val();

    if(y == 'Hour(s)')
    {
    $("#bar3").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar3").animate({width: x*mins});
      }
        });
    
    
    
  /*                  ---
  Progress bar operations (All 10 Other Tasks)
                      ---                   */
 
    
  //Snack1 Input 
  $('#s1Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs1').val();

    if(y == 'Hour(s)')
    {
    $('#sbar1').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar1').animate({width: x*mins});
      }
        });
  
  //Snack1 select menu 
  $('#MHs1').change(function(){
    var y = $(this).val();
    var x = $('#s1Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar1').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar1').animate({width: x*mins});
      }
        });
    
  //Snack2 Input 
  $('#s2Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs2').val();

    if(y == 'Hour(s)')
    {
    $('#sbar2').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar2').animate({width: x*mins});
      }
        });
  
  //Snack2 select menu 
  $('#MHs2').change(function(){
    var y = $(this).val();
    var x = $('#s2Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar2').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar2').animate({width: x*mins});
      }
        });
    
  //Snack3 Input 
  $('#s3Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs3').val();

    if(y == 'Hour(s)')
    {
    $('#sbar3').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar3').animate({width: x*mins});
      }
        });
  
  //Snack3 select menu 
  $('#MHs3').change(function(){
    var y = $(this).val();
    var x = $('#s3Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar3').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar3').animate({width: x*mins});
      }
        });
    
  //Snack4 Input 
  $('#s4Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs4').val();

    if(y == 'Hour(s)')
    {
    $('#sbar4').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar4').animate({width: x*mins});
      }
        });
  
  //Snack4 select menu 
  $('#MHs4').change(function(){
    var y = $(this).val();
    var x = $('#s4Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar4').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar4').animate({width: x*mins});
      }
        });
    
  //Snack5 Input 
  $('#s5Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs5').val();

    if(y == 'Hour(s)')
    {
    $('#sbar5').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar5').animate({width: x*mins});
      }
        });
  
  //Snack5 select menu 
  $('#MHs5').change(function(){
    var y = $(this).val();
    var x = $('#tsTime').val();

    if(y == 'Hour(s)')
    {
    $('#sbar5').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar5').animate({width: x*mins});
      }
        });
    
  //Snack6 Input 
  $('#s6Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs6').val();

    if(y == 'Hour(s)')
    {
    $('#sbar6').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar6').animate({width: x*mins});
      }
        });
  
  //Snack6 select menu 
  $('#MHs6').change(function(){
    var y = $(this).val();
    var x = $('#s6Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar6').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar6').animate({width: x*mins});
      }
        });
    
  //Snack7 Input 
  $('#s7Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs7').val();

    if(y == 'Hour(s)')
    {
    $('#sbar7').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar7').animate({width: x*mins});
      }
        });
  
  //Snack7 select menu 
  $('#MHs7').change(function(){
    var y = $(this).val();
    var x = $('#s7Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar7').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar7').animate({width: x*mins});
      }
        });
    
  //Snack8 Input 
  $('#s8Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs8').val();

    if(y == 'Hour(s)')
    {
    $('#sbar8').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar8').animate({width: x*mins});
      }
        });
  
  //Snack8 select menu 
  $('#MHs8').change(function(){
    var y = $(this).val();
    var x = $('#s8Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar8').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar8').animate({width: x*mins});
      }
        });
    
  //Snack9 Input 
  $('#s9Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs9').val();

    if(y == 'Hour(s)')
    {
    $('#sbar9').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar9').animate({width: x*mins});
      }
        });
  
  //Snack9 select menu 
  $('#MHs9').change(function(){
    var y = $(this).val();
    var x = $('#s9Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar9').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar9').animate({width: x*mins});
      }
        });
    
  //Snack10 Input 
  $('#s10Time').change(function(){
    var x = $(this).val();
    var y = $('#MHs10').val();

    if(y == 'Hour(s)')
    {
    $('#sbar10').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar10').animate({width: x*mins});
      }
        });
  
  //Snack10 select menu 
  $('#MHs10').change(function(){
    var y = $(this).val();
    var x = $('#s10Time').val();

    if(y == 'Hour(s)')
    {
    $('#sbar10').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#sbar10').animate({width: x*mins});
      }
        });
  
  
  
  
  //Other Tasks Operations (Choosing number)
  $("#Snacknums").change(function(){
    var num = $('#Snacknums').val(); 
    
    $('#snackInputs').fadeIn();
    
    for (var m = 1; m<=10; m++)
      {
        if (num == m)
        {
          for (var i = 10; i > num; i--)
          {
            $('.s'+i).fadeOut('fast');
            $("#sbar"+i).animate({width: 0});
            
            $('.s'+num).fadeIn();
          }
          for (var n = 0; n <= num; n++)
          {
            $('.s'+n).fadeIn();
            
            if($("#MHs"+n).val() == 'Hour(s)')
            {
          $("#sbar"+n).animate({width: $('input[id=s'+n+'Time]').val() * hours});
            }
        else if ($("#MHs"+n).val() == 'Minute(s)')
            {
            $("#sbar"+n).animate({width: $('input[id=s'+n+'Time]').val() * mins});
            }
          }
        }
      }
  });
    
  })(); //end of function
});