$(document).ready(function() {
	
//Hide to fade in later
$('#DoYouKnowForm').hide();
$('#SelectForm').hide();
$('#InputForm').hide();
$('#IdkForm').hide();
$('#box').hide();
  
  $('#DoYouKnowForm').append('<h4>Do you know your work schedule?</h4><input type="radio" name = "idkWork" value="yes">Yes  <input type="radio" name = "idkWork" value="no">No<br>');
  
  //Creates Jobs option
    $('#SelectForm').append('<h3>Jobs</h3> How many Jobs will you list? <select name="chooseActnum" class="nums" id = "Actnums"><option selected="selected">1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select> <br><br>               <!--Input for start and end time-->         <form class = timeForm1>Job 1: <input type = "text" name = "className1"></input><br> Start Time: <input type = "text" name= "s1one" class = "halftime s1one"> : <input type = "text" name= "s1two" class = "halftime s1two"><select name="start1AP" id = "AP" class = start1AP> <option selected="selected">am</option><option>pm</option></select><br> End Time: <input type = "text" name= "e1one" class = "halftime e1one"> : <input type = "text" name= "e1two" class = "halftime e1two"><select name="end1AP" id = "AP" class = end1AP> <option selected="selected">am</option><option>pm</option></select><br> Mon<input type="checkbox" name="mon1" value="Mon">Tue<input type="checkbox" name="tue1" value="Tue">Wed<input type="checkbox" name="wed1" value="Wed">Thu<input type="checkbox" name="thu1" value="Thu">Fri<input type="checkbox" name="fri1" value="Fri">Sat<input type="checkbox" name="sat1" value="Sat">Sun<input type="checkbox" name="sun1" value="Sun"></form>');
  
  for (var i= 2; i<=10; i++)
    {
      $('#InputForm').append('<br> <form class = timeForm'+i+'>Job '+i+': <input type = "text" name = "className'+i+'"></input><br> Start Time: <input type = "text" name= "s'+i+'one" class = "halftime s'+i+'one"> : <input type = "text" name= "s'+i+'two" class = "halftime s'+i+'two"><select name="start'+i+'AP" id = "AP" class = start'+i+'AP> <option selected="selected">am</option><option>pm</option></select><br> End Time: <input type = "text" name= "e'+i+'one" class = "halftime e'+i+'one"> : <input type = "text" name= "e'+i+'two" class = "halftime e'+i+'two"><select name="end'+i+'AP" id = "AP" class = end'+i+'AP> <option selected="selected">am</option><option>pm</option></select><br> Mon<input type="checkbox" name="mon'+i+'" value="Mon">Tue<input type="checkbox" name="tue'+i+'" value="Tue">Wed<input type="checkbox" name="wed'+i+'" value="Wed">Thu<input type="checkbox" name="thu'+i+'" value="Thu">Fri<input type="checkbox" name="fri'+i+'" value="Fri">Sat<input type="checkbox" name="sat'+i+'" value="Sat">Sun<input type="checkbox" name="sun'+i+'" value="Sun"></form>');
    }
  
  
  $('#IdkForm').append('<h4>When should we leave time open for work?</h4>          <form>Estimated start time: <select name="chooseMMN" class="MMN" id = "MMNs"> <option selected="selected">Morning (12-8)</option><option>Mid-day (8-4)</option><option>Night (4-12)</option></select><br>  Estimated Daily Length: <input type = "text" name= "length" id = "s1Time" class = "time"> <select name="chooseMH" class="MH" id = "MH0"><option selected="selected" value = 1>Minute(s)</option><option value = 2>Hour(s)</option></select></form>');
  $('#IdkForm').append('<h4>Days of the week</h4><form>Mon<input type="checkbox" name="mon0" value="Mon">Tue<input type="checkbox" name="tue0" value="Tue">Wed<input type="checkbox" name="wed0" value="Wed">Thu<input type="checkbox" name="thu0" value="Thu">Fri<input type="checkbox" name="fri0" value="Fri">Sat<input type="checkbox" name="sat0" value="Sat">Sun<input type="checkbox" name="sun0" value="Sun"></form>');
  
  
  for (var r= 0; r<=10; r++)
    {
      $('.progress').append('<div class="progress-bar progress-bar" id = "bar'+r+'" style="width: 0%"><span class="sr-only">20% Complete</span>');
    }
    
  (function(){
    // Conversions for progress bar (the bar = 1 week)
    var hours = (1/168)*($('.progress').width());
    var mins = (1/10080)*($('.progress').width());
    
    
  /*              ---
  Fading out specific options, changing bar
                  ---                    */
    
  //Asking if they want work
  $('input[name=Work]').on('change', function(){
    
    var yesOrNo = $('input[name=Work]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#DoYouKnowForm').fadeOut();
      $('#SelectForm').fadeOut();
      $('#InputForm').fadeOut('fast');
      $('#IdkForm').fadeOut('fast');
	  $('#box').animate({width: 0});
      for (var r= 0; r<=10; r++)
      {
       $('#bar'+r).fadeOut();
      }
    }
    else if (yesOrNo == 'yes')
	{
		$('#box').show();
		 $('#box').animate({width: 700});
        $('#DoYouKnowForm').fadeIn('fast');
        $('input[name=idkWork]').prop('checked',false);
     }
  });
    
    //Asking if work schedule is known
  $('input[name=idkWork]').on('change', function(){
    
    var yesOrNo = $('input[name=idkWork]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#SelectForm').hide();
      $('#InputForm').hide();
      $('#IdkForm').fadeIn();
      $('#bar0').fadeIn();
      
      for (var p = 1; p<=10; p++)
        {
         $('#bar'+p).hide();
        }
    }
    else if (yesOrNo == 'yes')
     {
        $('#SelectForm').fadeIn();
        $('#IdkForm').hide();
        $('#bar0').hide();
        
      for(var k = 1; k<=10; k++)
      {
        $('#bar'+k).fadeIn();
      }
      if ($('#Actnums').val() > 1)
      {
           $('#InputForm').fadeIn();
      }
     }
  });
    
    
  /*                 ---
          Progress bar operations (For all Jobs)
                     ---                   */
    
    //Base Function ---DO NOT TOUCH/DELETE. EVER.---
    function start_end(x){
    var v = x;
    var startTime;
    var endTime;
    var fullTime;

      //Converts start time into 'miltary' time
      if ($('.start'+v+'AP').val() == 'pm' && $('.s'+v+'one').val() != 12)
        {
          startTime = (parseInt($('.s'+v+'one').val())+12+$('.s'+v+'two').val());
        }
      else if ($('.start'+v+'AP').val() == 'am' && $('.s'+v+'one').val() != 12)
        {
          startTime = (parseInt($('.s'+v+'one').val())+$('.s'+v+'two').val());
        }
      else if ($('.start'+v+'AP').val() == 'pm' && $('.s'+v+'one').val() == 12)
        {
          startTime = (parseInt($('.s'+v+'one').val())+$('.s'+v+'two').val());
        }
      else if ($('.start'+v+'AP').val() == 'am' && $('.s'+v+'one').val() == 12)
        {
          startTime = (parseInt($('.s'+v+'one').val())-12)+$('.s'+v+'two').val();
        }
      
      //Converts end time into 'military' time
      if ($('.end'+v+'AP').val() == 'pm' && $('.e'+v+'one').val() != 12)
        {
          endTime = (parseInt($('.e'+v+'one').val())+12+$('.e'+v+'two').val());
        }
      else if ($('.end'+v+'AP').val() == 'am' && $('.e'+v+'one').val() != 12)
        {
          endTime = (parseInt($('.e'+v+'one').val())+$('.e'+v+'two').val());
        }
      else if ($('.end'+v+'AP').val() == 'pm' && $('.e'+v+'one').val() == 12)
        {
          endTime = (parseInt($('.e'+v+'one').val())+$('.e'+v+'two').val());
        }
      else if ($('.end'+v+'AP').val() == 'am' && $('.e'+v+'one').val() == 12)
        {
          endTime = (parseInt($('.e'+v+'one').val())-12)+$('.e'+v+'two').val();
        }
     
      fullTime = endTime - startTime;
      if (fullTime < 0)
        {
          fullTime += 2400;
        }
      
      var boxCount = 0;
      if ($('input[name=mon'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      if ($('input[name=tue'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }

      if ($('input[name=wed'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      if ($('input[name=thu'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }

      if ($('input[name=fri'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      if ($('input[name=sat'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }

      if ($('input[name=sun'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      //animates progress bar
    if (fullTime.toString().length == 4)
      {
        $('#bar'+v).animate({width: ((parseInt(fullTime.toString().substring(0,2))*hours)+ parseInt(fullTime.toString().substring(2))*mins)* boxCount});
      }
    else if (fullTime.toString().length == 3)
      {
        $('#bar'+v).animate({width: ((parseInt(fullTime.toString().substring(0,1))*hours)+ parseInt(fullTime.toString().substring(1))*mins)* boxCount});
      }
    else if (fullTime.toString().length == 2)
      {
        $('#bar'+v).animate({width: (parseInt(fullTime.toString().substring(1))*mins)* boxCount});
      }
    else if (fullTime.toString().length == 1)
      {
        $('#bar'+v).animate({width: (parseInt(fullTime.toString().substring(0))*mins)* boxCount});
      }
    }
    //END OF BASE FUNCTION
    
    function changeFocus(x){
      var v = x;
      
      //start (hours) to end (mins)
    $('input[name=s'+v+'one]').keyup(function(){
      var tlength = $(this).val().length;
      if (tlength==2 && $(this).focus())
      {
        $('input[name=s'+v+'two]').focus();
      }
    });
    $('input[name=e'+v+'one]').keyup(function(){
      var tlength = $(this).val().length;
      if (tlength==2 && $(this).focus())
      {
        $('input[name=e'+v+'two]').focus();
      }
    });
      
      //end (mins) to am/pm toggle
    $('input[name=s'+v+'two]').keyup(function(){
      var tlength = $(this).val().length;
      if (tlength==2 && $(this).focus())
      {
        $('.start'+v+'AP').focus();
      }
    });
    $('input[name=e'+v+'two]').keyup(function(){
      var tlength = $(this).val().length;
      if (tlength==2 && $(this).focus())
      {
        $('.end'+v+'AP').focus();
      }
    });
    } //end function
    
    //-----------------1 Input---------------------- 
  $('.timeForm1').change(function(){
    var v = 1;
    start_end(v);
  });
    changeFocus(1);
    
    //-----------------2 Input---------------------- 
  $('.timeForm2').change(function(){
    var v = 2;
    start_end(v);
  });
    changeFocus(2);
    
    //-----------------3 Input---------------------- 
    $('.timeForm3').change(function(){
    var v = 3;
    start_end(v);
  });
    changeFocus(3);
    
    //-----------------4 Input---------------------- 
  $('.timeForm4').change(function(){
    var v = 4;
    start_end(v);
  });
    changeFocus(4);
    
    //-----------------5 Input---------------------- 
  $('.timeForm5').change(function(){
    var v = 5;
    start_end(v);
  });
    changeFocus(5);
    
    //-----------------6 Input---------------------- 
  $('.timeForm6').change(function(){
    var v = 6;
    start_end(v);
  });
    changeFocus(7);
    
    //-----------------7 Input---------------------- 
  $('.timeForm7').change(function(){
    var v = 7;
    start_end(v);
  });
    changeFocus(8);
    
    //-----------------8 Input---------------------- 
  $('.timeForm8').change(function(){
    var v = 8;
    start_end(v);
  });
    changeFocus(9);
    
    //-----------------9 Input---------------------- 
  $('.timeForm9').change(function(){
    var v = 9;
    start_end(v);
  });
    changeFocus(10);
    
    //-----------------10 Input---------------------- 
  $('.timeForm10').change(function(){
    var v = 10;
    start_end(v);
  });
    
    
    
    //-------------0 Input (IdkForm)-----------------
  $('#IdkForm').change(function(){
    var v = 0;
    var boxCount = 0;
      if ($('input[name=mon'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      if ($('input[name=tue'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }

      if ($('input[name=wed'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      if ($('input[name=thu'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }

      if ($('input[name=fri'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
      
      if ($('input[name=sat'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }

      if ($('input[name=sun'+v+']').is(':checked'))
        {
          boxCount = boxCount+1;
        }
    
    var x = $("input[name=length]").val();
    var y = $("#MH0").val();
    if(y == '1')
    {
    $("#bar0").animate({width: (x*mins)*boxCount});
    }
    else if (y == '2')
      {
        $("#bar0").animate({width: (x*hours)*boxCount});
      }
  });
    
    
    $('.nums').change(function(){
    var num = $('.nums').val(); 
      
    $('#InputForm').fadeIn();
    
    for (var m = 1; m<=10; m++)
      {
        if (num == m)
        {
          for (var i = 10; i > num; i--)
          {
            $('.timeForm'+i).fadeOut('fast');
            $("#bar"+i).fadeOut('fast');
            
            $('.timeForm'+num).fadeIn();
          }
          for (var n = 1; n <= num; n++)
          {
            $('.timeForm'+n).fadeIn();
            $("#bar"+n).fadeIn();
          }
        }
      }
  });
  })();
});