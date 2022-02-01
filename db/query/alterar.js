const Users = require("../models/users")
const { select } = require("./busca")
const { getRand_start1 } = require("../../util/utils")


const updateMessage = async(numero)=>{

const dados = await select(numero)

const tel = numero
const nome = dados.nome
const idade = dados.idade
const comandos = dados.comandos
const mensagens = dados.mensagens + 1
let nivel = dados.nivel
const xp = dados.xp + getRand_start1((mensagens/dados.nivel))

if(xp>=0 && xp<=100){
    nivel = 1
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=101 && xp<=200){
    nivel = 2
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=201 && xp<=300){
    nivel = 3
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=301 && xp<=400){
    nivel = 4
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=401 && xp<=500){
    nivel = 5
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=501 && xp<=600){
    nivel = 6
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=601 && xp<=700){
    nivel = 7
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=701 && xp<=800){
    nivel = 8
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=801 && xp<=900){
    nivel = 9
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=901 && xp<=1000){
    nivel = 10
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1001 && xp<=1100){
    nivel = 11
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1101 && xp<=1200){
    nivel = 12
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1201 && xp<=1300){
    nivel = 13
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1301 && xp<=1400){
    nivel = 14
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1401 && xp<=1500){
    nivel = 15
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1501 && xp<=1600){
    nivel = 16
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1601 && xp<=1700){
    nivel = 17
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1701 && xp<=1800){
    nivel = 18
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1801 && xp<=1900){
    nivel = 19
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=1901 && xp<=2000){
    nivel = 20
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2001 && xp<=2100){
    nivel = 21
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2101 && xp<=2200){
    nivel = 22
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2201 && xp<=2300){
    nivel = 23
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2301 && xp<=2400){
    nivel = 24
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2401 && xp<=2500){
    nivel = 25
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2501 && xp<=2600){
    nivel = 26
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2601 && xp<=2700){
    nivel = 27
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2701 && xp<=2800){
    nivel = 28
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2801 && xp<=2900){
    nivel = 29
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}else if(xp>=2901 && xp<=3000){
    nivel = 30
      updates(tel,nome,idade,comandos,mensagens,xp,nivel)
}




}

async function updates(numero,nome,idade,comandos,mensagens,xp,nivel){
 
   const tel = numero

    let up = await Users.update({
 
        nome , tel , idade , nivel , xp , comandos , mensagens 
        
            },{
        
        where:{
        
          tel:numero
         
          }
        
            })
}

module.exports={updateMessage}