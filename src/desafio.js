let heroi = "Chapolin"
let levelXP = 10888
let nivelDoHorei 

if (levelXP < 1000){
    nivelDoHorei = "Ferro"
} else if (levelXP >= 1001 && levelXP <=2000){
    nivelDoHorei = "Bronze"
} else if (levelXP >= 2001 && levelXP <= 5000){
    nivelDoHorei = "Prata"
} else if (levelXP >= 5001 && levelXP <= 7000){
    nivelDoHorei = "Ouro"
} else if (levelXP >= 7001 && levelXP <= 8000){
    nivelDoHorei = "Platina"
} else if (levelXP >= 8001 && levelXP <= 9000){
    nivelDoHorei = "Ascendente"
} else if (levelXP >= 9001 && levelXP <= 10000){
    nivelDoHorei = "Imortal"
} else if (levelXP >= 10001){
    nivelDoHorei = "Radiante"
}

console.log("O Herói de nome " + heroi + "está no nivel " + nivelDoHorei)
