$(document).ready(function() {
	
	//Hide to fade in later
$('#activities2to20').hide();

  
  //Creates Activities option
    $('#ActivitySelect').append('<h3>Activities</h3> How many Activities will you list? <select name="chooseActnum" class="nums" id = "Actnums"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option></select> <br><br>');
  
  
  for (var i= 2; i<=20; i++)
    {
      $('#activities2to20').append('<br> <form class = a' +i+ '>Activity ' +i+ ': <input type = "text" name= "Act' +i+ '" class = "Acts"><br>    Time: <input type = "text" name= "time'+i+'" id = "a'+i+'Time"> <select name="chooseMH'+i+'" class="MH" id = "MHa'+i+'"> <option selected="selected">Minute(s)</option><option>Hour(s)</option></select></form>');
    }
  
  for (var r= 1; r<=20; r++)
    {
      $('.progress').append('<div class="progress-bar progress-bar-custom active" id = "abar'+r+'" style="width: 0%; background: rgba(235,'+(82+7*r)+','+(82+7*r)+', 1);"><span class="sr-only">10% Complete</span></div>');
    }
  
  (function(){
    // Conversions for progress bar
    var hours = (1/168)*($('.progress').width());
    var mins = (1/10080)*($('.progress').width());
    
    
  /*              ---
  Fading out specific options, changing bar
                  ---                    */
  
  //Activities
  $('input[name=FreeTime]').on('change', function(){
    
    var yesOrNo = $('input[name=FreeTime]:checked').val();
    if (yesOrNo == 'no')
    {
		$('#whitebox').animate({width: 0});
      $('#ActivitySelect').fadeOut('fast');
      $('#ActivityInputs').fadeOut('fast');
	  //$('#whitebox').fadeOut('fast');
	  //$('#whitebox').animate({width: 0});
      for (var p = 1; p<=20; p++)
        {
         $("#abar"+p).animate({width: 0});
        }
    }
    else if (yesOrNo == 'yes')
     {
		 $('#whitebox').animate({width: 1100});
        $('#ActivitySelect').fadeIn('fast');
        $('#ActivityInputs').fadeIn('fast');
		//$('#whitebox').fadeIn('fast');
		//$('#whitebox').animate({width: 1100});
       
       var num = $('#Actnums').val(); 
       for(var e = 20; e>num; e--)
         {
          $('.a'+e).hide();
         }
        
      for(var k = 1; k<=20; k++)
      {
        if($("#MHa"+k).val() == 'Hour(s)')
        {
          $("#abar"+k).animate({width: $('input[id=a'+k+'Time]').val() * hours});
        }
        else if ($("#MHa"+k).val() == 'Minute(s)')
          {
            $("#abar"+k).animate({width: $('input[id=a'+k+'Time]').val() * mins});
          }
      }
     }
  });
    
    
  /*                 ---
  Progress bar operations (All 20 Activities)
                     ---                   */
    
    function inputs(i){
      var v = i;
     
  $('#a'+v+'Time').change(function(){
    var x = $(this).val();
    var y = $('#MHa'+v).val();

    if(y == 'Hour(s)')
    {
    $('#abar'+v).animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#abar'+v).animate({width: x*mins});
      }
        });
  
  $('#MHa'+v).change(function(){
    var y = $(this).val();
    var x = $('#a'+v+'Time').val();

    if(y == 'Hour(s)')
    {
    $('#abar'+v).animate({width: x*hours});
    }
    else if (y == 'Minute(s)')
      {
        $('#abar'+v).animate({width: x*mins});
      }
        });
    }
    
    for (var l = 1; l<=20; l++)
      {
        inputs(l);
      }
    
  
  //Activity Operations (Choosing number)
  $("#Actnums").change(function(){
    var num = $('#Actnums').val(); 
    
    $('#activities2to20').fadeIn();
    
    for (var m = 1; m<=20; m++)
      {
        if (num == m)
        {
          for (var i = 20; i > num; i--)
          {
            $('.a'+i).fadeOut('fast');
            $("#abar"+i).animate({width: 0});
            
            $('.a'+num).fadeIn();
          }
          for (var n = 0; n <= num; n++)
          {
            $('.a'+n).fadeIn();
            
            if($("#MHa"+n).val() == 'Hour(s)')
            {
          $("#abar"+n).animate({width: $('input[id=a'+n+'Time]').val() * hours});
            }
        else if ($("#MHa"+n).val() == 'Minute(s)')
            {
            $("#abar"+n).animate({width: $('input[id=a'+n+'Time]').val() * mins});
            }
          }
        }
      }
  });
  
  })(); //end of function
});