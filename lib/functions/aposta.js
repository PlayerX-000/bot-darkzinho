const {getRand_start1} = require("../../util/utils")
const Users = require("../../db/models/users")
const { MessageType } = require('@adiwajshing/baileys')
const {updates} = require("../../db/comandos_db/auterar")
let participantes = []
let ids = []


const aposta = async(id,conn,valor,up,numero)=>{

const porcentagem = await getRand_start1(100)
const veryNum = (!isNaN(parseFloat(valor)) && isFinite(valor))


const busca =  await Users.findAll({
    where: {
      tel: numero
}});

if(busca[0]===undefined){
return  await conn.sendMessage(id, `Não cadastrado`,MessageType.text)
}

const xp = busca[0].dataValues.xp 
const nome = busca[0].dataValues.nome
const idade = busca[0].dataValues.idade
const comandos = busca[0].dataValues.comandos
const mensagens = busca[0].dataValues.mensagens
const nivel = busca[0].dataValues.nivel

let veriexist = ids.includes(numero)===false

console.log(veryNum)
console.log(valor)
/*-------------------------------------------------------------------------------------------------------*/

if(veryNum){
if(valor>xp) return await conn.sendMessage(id, `
XP insuficiente...
XP atual: ${xp}.
aposte ${xp} ou menos
`,MessageType.text)

if(valor<=0) return await conn.sendMessage(id, `
Valor incorreto.
Voce precisa apostar 
um numero maior que 0
`,MessageType.text)

if((ids.includes(numero)===true)===false){
  ids.push(numero)
  participantes.push({id:numero,xps:valor})
await conn.sendMessage(id, `
Você ira apostar ${valor}
para confirmar a aposta digite:
!aposta aceito`,MessageType.text)
}else if((ids.includes(numero)===true)===true){
await conn.sendMessage(id, `
Você tem Uma aposta em andamento...
por favor digite: !aposta aceito
para poder fechar a aposta
ou !aposta recuso para cancelar
`,MessageType.text)
}


console.log(ids)
console.log(participantes)
}else 
if(valor==="aceito"){

  for(let a = 0;a<ids.length;a++){
    if(ids[a]==numero){
    ids.splice(a, 1);
    }
}

for(let a =0;a<participantes.length;a++){
  if(participantes[a].id===numero){
    
      
      if(porcentagem>=50){
          const xpup = xp+Number(participantes[a].xps)+5
          await conn.sendMessage(id, `Voce ganhou ${Number(participantes[a].xps)} xp`,MessageType.text)
          updates(numero,nome,idade,comandos,mensagens,xpup,nivel)
          participantes.splice(a, 1); 
            }else{
          const xpup = xp-Number(participantes[a].xps)-5
          await conn.sendMessage(id, `Voce perdeu ${Number(participantes[a].xps)} xp`,MessageType.text)
          updates(numero,nome,idade,comandos,mensagens,xpup,nivel)
          participantes.splice(a, 1); 
          }
  }
  }
  console.log(ids)
  console.log(participantes)
}else 
if(valor==="cancelar"){

  for(let a = 0;a<ids.length;a++){
    if(ids[a]==numero){
    ids.splice(a, 1);
    }
}

for(let a =0;a<participantes.length;a++){
  if(participantes[a].id===numero){
    participantes.splice(a , 1)
  }
}

await conn.sendMessage(id, `
Aposta cancelada...
`,MessageType.text)
console.log(ids)
console.log(participantes)
}

}
/*-------------------------------------------------------------------------------------------------------*/
module.exports={aposta}