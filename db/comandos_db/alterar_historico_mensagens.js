const Users = require("../models/users")
const { getRand_start1 } = require("../../util/utils")


const updateMessage = async(numero,msg,com)=>{

const busca =  await Users.findAll({
    where: {
      tel: numero
    }})
    if(busca[0]===undefined) return "Não cadastrado"
    
    
const tel = numero
const nome = busca[0].dataValues.nome
const idade = busca[0].dataValues.idade
const comandos = busca[0].dataValues.comandos + com
const mensagens = busca[0].dataValues.mensagens + msg
let nivel = busca[0].dataValues.nivel
let num = (mensagens+4)/busca[0].dataValues.nivel
let add = getRand_start1(num)
const xp = busca[0].dataValues.xp + add





if(xp>=0 && xp<=100){
    nivel = 1
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=101 && xp<=200){
    nivel = 2
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=201 && xp<=600){
    nivel = 3
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=601 && xp<=1200){
    nivel = 5
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=1201 && xp<=3300){
    nivel = 6
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=3301 && xp<=6000){
    nivel = 7
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=6001 && xp<=9300){
    nivel = 8
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=9301 && xp<=10432){
    nivel = 9
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=10433 && xp<=20504){
    nivel = 11
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=20505 && xp<=25534){
    nivel = 14
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=25535 && xp<=40667){
    nivel = 18
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}else if(xp>=500000){
    nivel = 9999999
      updates(tel,nome,idade,comandos,mensagens,xp,nivel,Users)
}

}

async function updates(numero,nome,idade,comandos,mensagens,xp,nivel){
const tel = numero;
        let up = await Users.update({
        nome , tel , idade , nivel , xp , comandos , mensagens 
            },{
        where:{
          tel:numero
}})}


module.exports={updateMessage}