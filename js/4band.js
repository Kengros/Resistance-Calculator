$(document).ready(function(){
    	
 var d1 = 5;//first digit
 var d2 = 6;//2nd digit
 var mult =100; //multiplier
 var tol = 5; //tolerance
 
 var black_hover = '#323232';
 var brown_hover = '#d38c5d';
 var red_hover = '#ff6565';
 var orange_hover = '#ffa365';
 var yellow_hover = '#ffe165';
 var green_hover = '#00ca00';
 var blue_hover = '#0000ae';
 var violet_hover = '#aa00aa';
 var grey_hover = '#8e8e8e';
 var white_hover = '#e2e2e2';
 var gold_hover = '#ebbe46';
 var silver_hover = '#cacaca';
 
 var black = '#000000';
 var brown = '#a05a2c';
 var red = '#da0000';
 var orange = '#ff6600';
 var yellow = '#ffcc00';
 var green = '#008000';
 var blue = '#000080';
 var violet = '#800080';
 var grey = '#666666';
 var white = '#ffffff';
 var gold = '#d4a017';
 var silver = '#b3b3b3';
 calc_outs(d1,d2,mult,tol);

 
var hover_color;
 $(".black_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , black_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".brown_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , brown_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".red_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , red_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".orange_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , orange_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".yellow_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , yellow_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".green_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , green_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".blue_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , blue_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".violet_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , violet_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".grey_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , grey_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".white_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , white_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".gold_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , gold_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $(".silver_hover").hover(
      function () {
    hover_color=$(this).css('background-color');
        $(this).css('background-color' , silver_hover);
      }, 
      function () {
        $(this).css('background-color' , hover_color);
      }
    );
 
 $("#band1").css('background-color' , green);
 $("#band2").css('background-color' , blue);
 $("#band3").css('background-color' , red);
 $("#band4").css('background-color' , gold);

   $("#r2_black_thumb").click(function () {
     $("#band2").css('background-color' , black);
     d2=0;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_black_thumb").click(function () {
     $("#band3").css('background-color' , black);
     mult=1;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_brown_thumb").click(function () {
     $("#band1").css('background-color' , brown);
     d1=1;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_brown_thumb").click(function () {
     $("#band2").css('background-color' , brown);
     d2=1;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_brown_thumb").click(function () {
     $("#band3").css('background-color' , brown);
     mult=10;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_brown_thumb").click(function () {
     $("#band4").css('background-color' , brown);
     tol=1;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_red_thumb").click(function () {
     $("#band1").css('background-color' , red);
     d1=2;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_red_thumb").click(function () {
     $("#band2").css('background-color' , red);
     d2=2;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_red_thumb").click(function () {
     $("#band3").css('background-color' , red);
     mult=100;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_red_thumb").click(function () {
     $("#band4").css('background-color' , red);
     tol=2;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_orange_thumb").click(function () {
     $("#band1").css('background-color' , orange);
     d1=3;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_orange_thumb").click(function () {
     $("#band2").css('background-color' , orange);
     d2=3;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_orange_thumb").click(function () {
     $("#band3").css('background-color' , orange);
     mult=1000;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_orange_thumb").click(function () {
     $("#band4").css('background-color' , orange);
     tol=3;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_yellow_thumb").click(function () {
     $("#band1").css('background-color' , yellow);
     d1=4;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_yellow_thumb").click(function () {
     $("#band2").css('background-color' , yellow);
     d2=4;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_yellow_thumb").click(function () {
     $("#band3").css('background-color' , yellow);
     mult=10000;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_yellow_thumb").click(function () {
     $("#band4").css('background-color' , yellow);
     tol=4;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_green_thumb").click(function () {
     $("#band1").css('background-color' , green);
     d1=5;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_green_thumb").click(function () {
     $("#band2").css('background-color' , green);
     d2=5;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_green_thumb").click(function () {
     $("#band3").css('background-color' , green);
     mult=100000;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_green_thumb").click(function () {
     $("#band4").css('background-color' , green);
     tol=.5;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_blue_thumb").click(function () {
     $("#band1").css('background-color' , blue);
     d1=6;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_blue_thumb").click(function () {
     $("#band2").css('background-color' , blue);
     d2=6;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_blue_thumb").click(function () {
     $("#band3").css('background-color' , blue);
     mult=1000000;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_blue_thumb").click(function () {
     $("#band4").css('background-color' , blue);
     tol=.25;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_violet_thumb").click(function () {
     $("#band1").css('background-color' , violet);
     d1=7;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_violet_thumb").click(function () {
     $("#band2").css('background-color' , violet);
     d2=7;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_violet_thumb").click(function () {
     $("#band3").css('background-color' , violet);
     mult=10e6;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_violet_thumb").click(function () {
     $("#band4").css('background-color' , violet);
     tol=.1;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_grey_thumb").click(function () {
     $("#band1").css('background-color' , grey);
     d1=8;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_grey_thumb").click(function () {
     $("#band2").css('background-color' , grey);
     d2=8;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_grey_thumb").click(function () {
     $("#band3").css('background-color' , grey);
     mult=100e6;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_grey_thumb").click(function () {
     $("#band4").css('background-color' , grey);
     tol=.05;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r1_white_thumb").click(function () {
     $("#band1").css('background-color' , white);
     d1=9;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r2_white_thumb").click(function () {
     $("#band2").css('background-color' , white);
     d2=9;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r3_white_thumb").click(function () {
     $("#band3").css('background-color' , white);
     mult=1000e6;
   calc_outs(d1,d2,mult,tol);    });
   
   
   $("#r3_gold_thumb").click(function () {
     $("#band3").css('background-color' , gold);
     mult=.1;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_gold_thumb").click(function () {
     $("#band4").css('background-color' , gold);
     tol=5;
   calc_outs(d1,d2,mult,tol);    });
	 
   $("#r3_silver_thumb").click(function () {
     $("#band3").css('background-color' , silver);
     mult=.01;
   calc_outs(d1,d2,mult,tol);    });
   
   $("#r4_silver_thumb").click(function () {
     $("#band4").css('background-color' , silver);
     tol=10;
	 calc_outs(d1,d2,mult,tol);    });
   


   

  
});

function calc_outs(d1,d2,mult,tol){

  var res=(d1*10+d2*1)*mult;
  //var temp2=parseFloat($("#input_2").val());
  //var temp3=parseFloat($("#length_unit").val());
 
  //var calVal=temp1+temp2+temp3;
  
  $("#outputVal_1").html(engFormat(res)+'&nbsp;ohms');
	$("#outputVal_2").html('&#177;&nbsp;'+tol+'%');
  
}

function engFormat(v){
  
  if(v>=1e12)
    v=(v/1e12).toFixed(2)+'T';
  else if(v>=1e9)
    v=(v/1e9).toFixed(2)+'G';
  else if(v>=1e6)
    v=(v/1e6).toFixed(2)+'M';
  else if(v>=1e3)
    v=(v/1e3).toFixed(2)+'k';
  else{
    v=parseFloat(v);
    v=v.toFixed(2);
  }
  return v
}


