
$(document).ready(function() {

//Hide to fade in later
$('#taskFormSelect').hide();
$('#taskFormInputs').hide();

  
  //Creates Other Tasks option
    $('#taskFormSelect').append('<h3>Other Tasks</h3> How many other tasks will you list? <select name="chooseOTnum" class="nums" id = "OTnums"><option selected="selected">1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select> <br><br> <form>Task 1: <input type = "text" name= "task1" class = "tasks"><br>       Time: <input type = "text" name= "time" id = "t1Time"> <select name="chooseMH" class="MH" id = "MHt1"> <option selected="selected">Minute(s)</option><option>Hour(s)</option></select></form>');
  
  for (var i= 2; i<=10; i++)
    {
      $('#taskFormInputs').append('<br> <form class = t' +i+ '>Task ' +i+ ': <input type = "text" name= "task' +i+ '" class = "tasks"><br>  Time: <input type = "text" name= "time" id = "t'+i+'Time"> <select name="chooseMH" class="MH" id = "MHt'+i+'"> <option selected="selected">Minute(s)</option><option>Hour(s)</option></select></form>');
    }
  
  for (var r= 0; r<=10; r++)
    {
      $('.progress').append('<div class="progress-bar progress-bar" id = "tbar'+r+'" style="width: 0%"><span class="sr-only">10% Complete</span></div>');
    }
  
  (function(){
    // Conversions for progress bar
    var hours = (1/24)*($('.progress').width());
    var mins = (1/1440)*($('.progress').width());
    
    
  /*              ---
  Fading out specific options, changing bar
                  ---                    */

 //Hygiene
 $('input[name=Hygiene]').on('change', function(){
    var input = $('input[id=hygieneInput]').val();
    var yesOrNo = $('input[name=Hygiene]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#hygieneForm').fadeOut();
      $("#bar1").animate({width: 0});
    }
    else if (yesOrNo == 'yes')
      {
        $('#hygieneForm').fadeIn();
        if($("#MHh").val() == 'Hour(s)')
        {
          $("#bar1").animate({width: input * hours});
        }
        else if ($("#MHh").val() == 'Minute(s)')
          {
            $("#bar1").animate({width: input * mins});
          }
      }
  });
  
  
 //Chores
  $('input[name=Chores]').on('change', function(){
    var input = $('input[id=choreInput]').val();
    var yesOrNo = $('input[name=Chores]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#choreForm').fadeOut();
      $("#bar2").animate({width: 0});
    }
    else if (yesOrNo == 'yes')
      {
        $('#choreForm').fadeIn();
        if($("#MHc").val() == 'Hour(s)')
        {
          $("#bar2").animate({width: input * hours});
        }
        else if ($("#MHc").val() == 'Minute(s)')
          {
            $("#bar2").animate({width: input * mins});
          }
      }
  });
  
 //Sleep
  $('input[name=Sleep]').on('change', function(){
    var flexinput = $('input[id=flexInput]').val();
    var fixinput = $('input[id=fixedInput]').val();
    var yesOrNo = $('input[name=Sleep]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#sleepForm').fadeOut();
      $("#bar3").animate({width: 0});
      $("#bar4").animate({width: 0});
    }
    else if (yesOrNo == 'yes')
      {
        $('#sleepForm').fadeIn();
        
        //flex
        if($("#MHflex").val() == 'Hour(s)')
        {
          $("#bar3").animate({width: flexinput * hours});
        }
        else if ($("#MHflex").val() == 'Minute(s)')
          {
            $("#bar3").animate({width: flexinput * mins});
          }
        
        //fix
        if($("#MHfix").val() == 'Hour(s)')
        {
          $("#bar4").animate({width: fixinput * hours});
        }
        else if ($("#MHfix").val() == 'Minute(s)')
          {
            $("#bar4").animate({width: fixinput * mins});
          }
      }
  });
    
  //Other Tasks
  $('input[name=OT]').on('change', function(){
    
    var yesOrNo = $('input[name=OT]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#taskFormSelect').fadeOut();
      $('#taskFormInputs').fadeOut();
      for (var p = 1; p<=10; p++)
        {
         $("#tbar"+p).animate({width: 0});
        }
    }
    else if (yesOrNo == 'yes')
     {
        $('#taskFormSelect').fadeIn();
        $('#taskFormInputs').fadeIn();
       
       var num = $('#OTnums').val(); 
       for(var e = 10; e>num; e--)
         {
          $('.t'+e).fadeOut();
         }
        
      for(var k = 1; k<=10; k++)
      {
        if($("#MHt"+k).val() == 'Hour(s)')
        {
          $("#tbar"+k).animate({width: $('input[id=t'+k+'Time]').val() * hours});
        }
        else if ($("#MHt"+k).val() == 'Minute(s)')
          {
            $("#tbar"+k).animate({width: $('input[id=t'+k+'Time]').val() * mins});
          }
      }
     }
  });
    
  
  
  /*          ---
  Progress bar operations (Input)
              ---              */
  
    //hygiene's input (form)
  $("#hygieneForm").change(function(){
    var x = $('#hygieneInput').val();
    var y = $("#MHh").val();

    if(y == 'Hour(s)')
    {
    $("#bar1").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar1").animate({width: x*mins});
      }
        });
  
  
  //chores's input (form)
  $("#choreForm").change(function(){
    var x = $('#choreInput').val();
    var y = $("#MHc").val();

    if(y == 'Hour(s)')
    {
    $("#bar2").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar2").animate({width: x*mins});
      }
        });

  
  //flexible sleep's input (form)
  $("#sleepForm").change(function(){
    var x = $('#flexInput').val();
    var y = $("#MHflex").val();

    if(y == 'Hour(s)')
    {
    $("#bar3").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar3").animate({width: x*mins});
      }
        });
  
  
  //fixed sleep's input (form)
  $("#sleepForm").change(function(){
    var x = $('#fixedInput').val();
    var y = $("#MHfix").val();

    if(y == 'Hour(s)')
    {
    $("#bar4").animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $("#bar4").animate({width: x*mins});
      }
        });
    
    
    
  /*              ---
  Progress bar operations (10 Other Tasks)
                  ---                   */
 
    
  //OT1 Input 
  $('#t1Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt1').val();

    if(y == 'Hour(s)')
    {
    $('#tbar1').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar1').animate({width: x*mins});
      }
        });
  
  //OT1 select menu 
  $('#MHt1').change(function(){
    var y = $(this).val();
    var x = $('#t1Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar1').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar1').animate({width: x*mins});
      }
        });
    
  //OT2 Input 
  $('#t2Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt2').val();

    if(y == 'Hour(s)')
    {
    $('#tbar2').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar2').animate({width: x*mins});
      }
        });
  
  //OT2 select menu 
  $('#MHt2').change(function(){
    var y = $(this).val();
    var x = $('#t2Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar2').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar2').animate({width: x*mins});
      }
        });
    
  //OT3 Input 
  $('#t3Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt3').val();

    if(y == 'Hour(s)')
    {
    $('#tbar3').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar3').animate({width: x*mins});
      }
        });
  
  //OT3 select menu 
  $('#MHt3').change(function(){
    var y = $(this).val();
    var x = $('#t3Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar3').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar3').animate({width: x*mins});
      }
        });
    
  //OT4 Input 
  $('#t4Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt4').val();

    if(y == 'Hour(s)')
    {
    $('#tbar4').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar4').animate({width: x*mins});
      }
        });
  
  //OT4 select menu 
  $('#MHt4').change(function(){
    var y = $(this).val();
    var x = $('#t4Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar4').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar4').animate({width: x*mins});
      }
        });
    
  //OT5 Input 
  $('#t5Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt5').val();

    if(y == 'Hour(s)')
    {
    $('#tbar5').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar5').animate({width: x*mins});
      }
        });
  
  //OT5 select menu 
  $('#MHt5').change(function(){
    var y = $(this).val();
    var x = $('#t5Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar5').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar5').animate({width: x*mins});
      }
        });
    
  //OT6 Input 
  $('#t6Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt6').val();

    if(y == 'Hour(s)')
    {
    $('#tbar6').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar6').animate({width: x*mins});
      }
        });
  
  //OT6 select menu 
  $('#MHt6').change(function(){
    var y = $(this).val();
    var x = $('#t6Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar6').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar6').animate({width: x*mins});
      }
        });
    
  //OT7 Input 
  $('#t7Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt7').val();

    if(y == 'Hour(s)')
    {
    $('#tbar7').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar7').animate({width: x*mins});
      }
        });
  
  //OT7 select menu 
  $('#MHt7').change(function(){
    var y = $(this).val();
    var x = $('#t7Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar7').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar7').animate({width: x*mins});
      }
        });
    
  //OT8 Input 
  $('#t8Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt8').val();

    if(y == 'Hour(s)')
    {
    $('#tbar8').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar8').animate({width: x*mins});
      }
        });
  
  //OT8 select menu 
  $('#MHt8').change(function(){
    var y = $(this).val();
    var x = $('#t8Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar8').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar8').animate({width: x*mins});
      }
        });
    
  //OT9 Input 
  $('#t9Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt9').val();

    if(y == 'Hour(s)')
    {
    $('#tbar9').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar9').animate({width: x*mins});
      }
        });
  
  //OT9 select menu 
  $('#MHt9').change(function(){
    var y = $(this).val();
    var x = $('#t9Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar9').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar9').animate({width: x*mins});
      }
        });
    
    //OT10 Input 
  $('#t10Time').change(function(){
    var x = $(this).val();
    var y = $('#MHt10').val();

    if(y == 'Hour(s)')
    {
    $('#tbar10').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar10').animate({width: x*mins});
      }
        });
  
  //OT10 select menu 
  $('#MHt10').change(function(){
    var y = $(this).val();
    var x = $('#t10Time').val();

    if(y == 'Hour(s)')
    {
    $('#tbar10').animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#tbar10').animate({width: x*mins});
      }
        });
  
})(); //end of function

  
  //Other Tasks Operations (Choosing number)
  $("#OTnums").change(function(){
    var num = $('#OTnums').val(); 
    
    $('#taskFormInputs').fadeIn();
    
    for (var m = 1; m<=10; m++)
      {
        if (num == m)
        {
          for (var i = 10; i > num; i--)
          {
            $('.t'+i).fadeOut();
            $('.t'+num).fadeIn();
          }
          for (var n = 0; n <= num; n++)
          {
            $('.t'+n).fadeIn();
          }
        }
      }
  });
    
});