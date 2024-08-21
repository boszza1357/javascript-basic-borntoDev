const score = prompt("กรุณากรอกเกรดของคุณ")

if(score >= 80){
    document.getElementById("result").innerHTML = "กรดของคุณคือเกรด A"
}else if (score >= 70){
    document.getElementById("result").innerHTML = "กรดของคุณคือเกรด B"
}else if (score >= 60){
    document.getElementById("result").innerHTML = "กรดของคุณคือเกรด C"
}else if (score >= 50){
    document.getElementById("result").innerHTML = "กรดของคุณคือเกรด D"
}else{
    document.getElementById("result").innerHTML = "กรดของคุณคือเกรด F"
}