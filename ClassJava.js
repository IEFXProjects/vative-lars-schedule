$(document).ready(function() {
	
//Hide to fade in later
$('#DoYouKnowForm').hide();
$('#SelectForm').hide();
$('#InputForm').hide();
$('#IdkForm').hide();
	
  for (var q= 2; q<=20; q++)
  {
    $('#OccurForm'+q).hide();
  }
  
  //Creates 'Do you know your schedule option
  $('#DoYouKnowForm').append('<h4>Do you know your class schedule?</h4><input type="radio" name = "idkWork" value="yes">Yes  <input type="radio" name = "idkWork" value="no">No<br>');
  
  //Creates Classes option
    $('#SelectForm').append('<h3>Class</h3> How many classes will you list? <select name="chooseActnum" class="nums" id = "Actnums"></select> <br><br>               <!--Input for start and end time-->         <form class = timeForm1>Class 1: <input type = "text" name = "className1"></input><br> Does it occur at different times during the week?<input type="radio" name = "occurance1" value="yes">Yes <input type="radio" name = "occurance1" value="no">No <br> <div id = "OccurForm1"></div> <br> <div id = "xtraTime1"></div><br> Start Time: <input type = "text" name= "s1one" class = "halftime s1one"> : <input type = "text" name= "s1two" class = "halftime s1two"><select name="start1AP" id = "AP" class = start1AP> <option selected="selected">am</option><option>pm</option></select><br> End Time: <input type = "text" name= "e1one" class = "halftime e1one"> : <input type = "text" name= "e1two" class = "halftime e1two"><select name="end1AP" id = "AP" class = end1AP> <option selected="selected">am</option><option>pm</option></select><br> Mon<input type="checkbox" name="mon1" value="Mon">Tue<input type="checkbox" name="tue1" value="Tue">Wed<input type="checkbox" name="wed1" value="Wed">Thu<input type="checkbox" name="thu1" value="Thu">Fri<input type="checkbox" name="fri1" value="Fri">Sat<input type="checkbox" name="sat1" value="Sat">Sun<input type="checkbox" name="sun1" value="Sun">  <br>');
  
    //Creates option for more class times
    $('#OccurForm1').append('<form>How many different times?<select name="occur1" class = "numxT1"> <option selected="selected">1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></form>');
  
  
  for (var i= 2; i<=20; i++)
    {
      $('#InputForm').append('<br> <form class = timeForm'+i+'>Class '+i+': <input type = "text" name = "className'+i+'"></input><br> Does it occur at different times during the week?<input type="radio" name = "occurance'+i+'" value="yes">Yes <input type="radio" name = "occurance'+i+'" value="no">No <div id = "OccurForm'+i+'"></div> <br> <div id = "xtraTime'+i+'"></div><br>Start Time: <input type = "text" name= "s'+i+'one" class = "halftime s'+i+'one"> : <input type = "text" name= "s'+i+'two" class = "halftime s'+i+'two"><select name="start'+i+'AP" id = "AP" class = start'+i+'AP> <option selected="selected">am</option><option>pm</option></select><br> End Time: <input type = "text" name= "e'+i+'one" class = "halftime e'+i+'one"> : <input type = "text" name= "e'+i+'two" class = "halftime e'+i+'two"><select name="end'+i+'AP" id = "AP" class = end'+i+'AP> <option selected="selected">am</option><option>pm</option></select><br> Mon<input type="checkbox" name="mon'+i+'" value="Mon">Tue<input type="checkbox" name="tue'+i+'" value="Tue">Wed<input type="checkbox" name="wed'+i+'" value="Wed">Thu<input type="checkbox" name="thu'+i+'" value="Thu">Fri<input type="checkbox" name="fri'+i+'" value="Fri">Sat<input type="checkbox" name="sat'+i+'" value="Sat">Sun<input type="checkbox" name="sun'+i+'" value="Sun"></form>');
      $('#OccurForm'+i).append('<form>How many different times?<select name="occur'+i+'" class = "numxT'+i+'"> <option selected="selected">1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></form>');
    }
    
  
  //Creates form for more class times
  function moreTimes (x, y){
    var v = x;
    
    for (var d= y; d<=(y+9); d++)
    {
    $('#xtraTime'+v).append('<form id = "xT'+d+'"><br>Start Time: <input type = "text" name= "s'+d+'one" class = "halftime s'+d+'one"> : <input type = "text" name= "s'+d+'two" class = "halftime s'+d+'two"><select name="start'+d+'AP" id = "AP" class = start'+d+'AP> <option selected="selected">am</option><option>pm</option></select><br> End Time: <input type = "text" name= "e'+d+'one" class = "halftime e'+d+'one"> : <input type = "text" name= "e'+d+'two" class = "halftime e'+d+'two"><select name="end'+d+'AP" id = "AP" class = end'+d+'AP> <option selected="selected">am</option><option>pm</option></select><br> Mon<input type="checkbox" name="mon'+d+'" value="Mon">Tue<input type="checkbox" name="tue'+d+'" value="Tue">Wed<input type="checkbox" name="wed'+d+'" value="Wed">Thu<input type="checkbox" name="thu'+d+'" value="Thu">Fri<input type="checkbox" name="fri'+d+'" value="Fri">Sat<input type="checkbox" name="sat'+d+'" value="Sat">Sun<input type="checkbox" name="sun'+d+'" value="Sun">  <br></form>');
      $('#xtraTime'+v).hide();
    }
  }
  moreTimes(1, 111);

  //Creates form for more class times
  moreTimes(2, 121); moreTimes(3, 131); moreTimes(4, 141); 
  moreTimes(5, 151); moreTimes(6, 161); moreTimes(7, 171); 
  moreTimes(8, 181); moreTimes(9, 191); moreTimes(10, 201); 
  moreTimes(11, 211); moreTimes(12, 221); moreTimes(13, 231); 
  moreTimes(14, 2401); moreTimes(15, 2501); moreTimes(16, 261);
  moreTimes(17, 271); moreTimes(18, 281); moreTimes(19, 291);
  moreTimes(20, 301);
  
  //Creates form for user that doesn't know schedule
  $('#IdkForm').append('<h4>How much time should we leave open?</h4>          <form>Estimated number of classes: <select name="chooseClassnum" id = "Classnums"><option selected="selected">1</option></select> <br> <h6>Average class time~ 1 hour</h6>');
  
  for (var l= 2; l<=35; l++)
  {
    $('#Classnums').append('<option>'+l+'</option>');
  }
  $('#Classnums').append('</select></form>');
  
  for (var e= 1; e<=20; e++)
  {
    $('#Actnums').append('<option>'+e+'</option>');
  }
  
  //Creates progress bar bars
  for (var r= 0; r<=10; r++)
    {
      $('.progress').append('<div class="progress-bar progress-bar" id = "bar'+r+'" style="width: 0%"><span class="sr-only">20% Complete</span>');
    }
  for (var o= 111; o<=310; o++)
    {
      $('.progress').append('<div class="progress-bar progress-bar" id = "bar'+o+'" style="width: 0%"><span class="sr-only">20% Complete</span>');
    }
  
    
  (function(){
    // Conversions for progress bar (the bar = 1 week)
    var hours = (1/168)*($('.progress').width());
    var mins = (1/10080)*($('.progress').width());
    
    
  /*              ---
  Fading out specific options, changing bar
                  ---                    */
    
  //Asking if they want class
  $('input[name=Work]').on('change', function(){
    
    var yesOrNo = $('input[name=Work]:checked').val();
    if (yesOrNo == 'no')
    {
		$('#box').animate({width: 0});
      $('#DoYouKnowForm').fadeOut();
      $('#SelectForm').fadeOut();
      $('#InputForm').fadeOut();
      $('#IdkForm').fadeOut();
      for (var r= 0; r<=310; r++)
      {
       $('#bar'+r).fadeOut();
      }
    }
    else if (yesOrNo == 'yes')
     {
		 $('#box').animate({width: 700});
        $('#DoYouKnowForm').fadeIn();
        $('input[name=idkWork]').prop('checked',false);
     }
  });
    
    //Asking if class schedule is known
  $('input[name=idkWork]').on('change', function(){
    
    var yesOrNo = $('input[name=idkWork]:checked').val();
    if (yesOrNo == 'no')
    {
      $('#SelectForm').hide();
      $('#InputForm').hide();
      $('#IdkForm').fadeIn();
      $('#bar0').fadeIn();
      
      for (var p = 1; p<=310; p++)
        {
         $('#bar'+p).hide();
        }
    }
    else if (yesOrNo == 'yes')
     {
        $('#SelectForm').fadeIn();
        $('#IdkForm').hide();
        $('#bar0').hide();
        
      for(var k = 1; k<=310; k++)
      {
        $('#bar'+k).fadeIn();
        $('#OccurForm'+k).hide();
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
    
    function occurance(x){
      var v = x;
    $('input[name=occurance'+v+']').change(function(){
      if ($(this).val() == 'yes')
        {
          $('#OccurForm'+v).fadeIn('slow');
        }
      else if ($(this).val() == 'no')
        {
          $('#OccurForm'+v).fadeOut();
        }
    });
    }
    
    occurance(1); occurance(2); occurance(3); occurance(4);
    occurance(5); occurance(6); occurance(7); occurance(8);
    occurance(9); occurance(10); occurance(11); occurance(12);
    occurance(13); occurance(14); occurance(15); occurance(16);
    occurance(17); occurance(18); occurance(19); occurance(20);
    
    //autofocus function
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
    
    //autofocus
    for (var v = 1; v <=20; v++)
      {
        changeFocus(v);
      }
    for (var v1 = 111; v1 <=310; v1++)
      {
        changeFocus(v1);
      }
    
    function inputs(x){
      var w = x;
      $('.timeForm'+w).change(function(){
        start_end(w);
        for (var v1 = (101+(10*w)); v1 <=(110+(10*w)); v1++)
        {
         start_end(v1);
        }
      });  
    }
    
    //inputs for all 20 classes
    for (var t = 1; t<=20; t++)
      {
        inputs(t);
      }
    
    
    //-------------0 Input (IdkForm)-----------------
  $('#Classnums').change(function(){
    var classCount = $(this).val();
 
    $("#bar0").animate({width: (hours)*classCount});
  });
    
    
    $('.nums').change(function(){
     var num = $('.nums').val(); 
     $('#InputForm').fadeIn();
    
    for (var m = 1; m<=20; m++)
      {
        if (num == m)
        {
          for (var i = 20; i > num; i--)
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
    
    function fadeTimes(x, y, z){
      var v = x;
      var start = y;
      var end = z;
      
    $('#OccurForm'+v).change(function(){
     var num = $('.numxT'+v).val();
     var xnum = (num*1 + (start-1));
      
     $('#xtraTime'+v).fadeIn();
      for (var i = end; i >= xnum; i--)
          {
            $('#xT'+i).fadeOut('fast');
            $("#bar"+i).fadeOut('fast');
          }
      for (var n = start; n <= xnum-1; n++)
          {
            $('#xT'+n).fadeIn();
            $("#bar"+n).fadeIn();
          }
    });
   }
    for (var g = 1; g<= 20; g++)
      {
        fadeTimes(g, (g*10 + 101), (g*10 + 110));
      }
    
  })();
});