function toCelsius(){
   let fahrenheit = prompt("Fahrenheit : ")
   let value =(fahrenheit -32) *5 /9
   document.getElementById("answer_section").innerHTML = value.toFixed(2) +"C"
}

toCelsius()

function toFahrenheit(){
    let celsuius = prompt("Celsius :")
    let value = (celsuius*1.8) + 32
    document.getElementById("answer_setfahrenheit").innerHTML = value.toFixed(2) + "F"
}

toFahrenheit()

