//  for time vary every second
// wrap var in a func
function showTime (){

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var session = "AM";

if (hour == 0){
    hour = 12;         /* 12 hr format */
}
if(hour > 12){
    hour = hour - 12;
    session = "PM";
}

//  +++++++++++++++++++++++++

// if(hour < 10){
//     hour = "0" + hour;       /* this is one way to add 0  */
// }                            /*but the code is take more line */
// if(min < 10){
//     min = "0" + min;
// }
// if(sec < 10){
//     sec ="0"+ sec;
// }

//++++++++++++++++++++++
 
//  here is we use ternary operator to reduce line of code

hour = (hour < 10) ? "0" + hour : hour;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;

document.getElementById("digital-clock").innerHTML = hour 
+ ":" + min + ":" + sec +"" + session; 

//  1000 is = 1ms = 1s
setTimeout(showTime, 1000);       /*to run the fun every sec */
}

showTime();  /* execute function */