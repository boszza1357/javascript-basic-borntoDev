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
 alert(toCelsius(150))
 toFahrenheit()
 display("answer_section", toCelsius(150))
 alert(toFahrenheit(32))
 display("answer_setfahrenheit", toFahrenheit(150))
 
 