function toCelsius(fahrenheit){
   
    let value =(fahrenheit -32) *5 /9
    return value.toFixed(2) +"C"
 }
 
 function display(elementId,value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>" 
 }
 
 function toFahrenheit(celsuius){
     let value = (celsuius*1.8) + 32
    return  value.toFixed(2) + "F"
 }

 function toCelsiusProagram(value){

    alert(toCelsius(value))
 }
 function toFahrenheitProagram(value){

    alert(toFahrenheit(value))
 }
 
 