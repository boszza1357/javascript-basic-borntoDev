let round = prompt("จะเล่นทั้งหมดกี่รอบ ?")
let score = 0

for(var i = 1 ; i<= round ; i++){
    var answer = prompt("หัว หรือ ก้อย พิมมา")
    var random_answer = ""
    if(Math.floor(Math.random() * 10) <= 4){

        random_answer ="หัว"
       
    }else{

        random_answer = "ก้อย"
    
    }
    if(answer == random_answer){
        score = score +1
     document.getElementById("list").innerHTML += "รอบที่ : " + i + "คุณทายว่า " + answer + "ผลที่ออกคือ  =" + random_answer +"[ทายถูก]" +"<br>"
    }else{
    document.getElementById("list").innerHTML += "รอบที่ : " + i + "คุณทายว่า " + answer + "ผลที่ออกคือ  =" + random_answer + "[ทายผิด]"+"<br>"

    }
}
document.getElementById("round").innerHTML = "เล่นไปทั้งหมด" + round
document.getElementById("result").innerHTML ="สรปคุณทายถูก" + score

