
   window.onload=function getinput() {
    var number1 = document.getElementById("air-temp");

    var val1 = number1.innerHTML;
    console.log('val1:',typeof val1);

    var T = parseInt(val1);
    console.log('T:', typeof T);

    var number2 = document.getElementById("wind-speed");

    var val2 = number2.innerHTML;
    console.log('val2:',typeof val2);

    var S = parseInt(val1);
    console.log('S:', typeof S);

    let windcilltemp = windChill(T, S);

    document.getElementById("windchill").innerHTML = windcilltemp.toFixed(2);
   }
  function windChill(tempF, speed){
    let windChill = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + (0.4275 * tempF * (speed ** 0.16));
    return windChill;
  }