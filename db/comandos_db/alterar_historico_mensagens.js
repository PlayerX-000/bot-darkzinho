const Users = require("../models/users")
const { getRand_start1 } = require("../../util/utils")


const updateMessage = async(numero,msg,com)=>{

const busca =  await Users.findAll({
    where: {
      tel: numero
    }})
    if(busca[0]===undefined) return "Não cadastrado"
    
const atk = busca[0].dataValues.atk
const def = busca[0].dataValues.def
const vida = busca[0].dataValues.vida
const tel = numero
const nome = busca[0].dataValues.nome
const comandos = busca[0].dataValues.comandos + com
const mensagens = busca[0].dataValues.mensagens + msg
let nivel = busca[0].dataValues.nivel
let num = (((mensagens+1)/2)+10)/busca[0].dataValues.nivel
let add = getRand_start1(num)
const xp = busca[0].dataValues.xp + add





if(xp>=0 && xp<=100){
    nivel = 1
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=101 && xp<=200){
    nivel = 2
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=201 && xp<=600){
    nivel = 3
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=601 && xp<=1200){
    nivel = 5
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=1201 && xp<=3300){
    nivel = 6
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=3301 && xp<=6000){
    nivel = 7
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=6001 && xp<=9300){
    nivel = 8
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=9301 && xp<=10432){
    nivel = 9
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=10433 && xp<=20504){
    nivel = 10
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=20505 && xp<=25534){
    nivel = 11
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=25535 && xp<=30667){
    nivel = 12
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=30668 && xp<=43007){
  nivel = 13
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=43008 && xp<=48564){
  nivel = 14
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=48565 && xp<=53654){
  nivel = 15
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=53655 && xp<=61857){
  nivel = 16
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=61858 && xp<=69234){
  nivel = 17
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=69235 && xp<=76870){
  nivel = 18
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=76871 && xp<=85645){
  nivel = 19
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=85646 && xp<=95968){
  nivel = 20
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=95969 && xp<=100000){
    nivel = 21
      updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}else if(xp>=100001){
  nivel = 666999
    updates(tel,nome,comandos,mensagens,xp,nivel,atk,def,vida,Users)
}

}

async function updates(numero,nome,comandos,mensagens,xp,nivel,atk,def,vida){
  console.log("xp"+xp)
const tel = numero;
        let up = await Users.update({
        nome , tel ,  nivel , xp , comandos , mensagens , atk , def , vida
            },{
        where:{
          tel:numero
}}).catch(err=>{console.log(err)})
}


module.exports={updateMessage}