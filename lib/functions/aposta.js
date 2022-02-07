const {getRand_start1} = require("../../util/utils")
const Users = require("../../db/models/users")
const { MessageType } = require('@adiwajshing/baileys')
const {updates} = require("../../db/comandos_db/auterar")
let panticipantes = []

const aposta = async(id,conn,valor,up,numero)=>{
const porcentagem = await getRand_start1(100)
const veryNum = (!isNaN(parseFloat(valor)) && isFinite(valor))


const busca =  await Users.findAll({
    where: {
      tel: numero
    }});
    if(busca[0]===undefined) return  await conn.sendMessage(id, `Não cadastrado`,MessageType.text)
    
    
    
const xp = busca[0].dataValues.xp 
const nome = busca[0].dataValues.nome
const idade = busca[0].dataValues.idade
const comandos = busca[0].dataValues.comandos
const mensagens = busca[0].dataValues.mensagens
const nivel = busca[0].dataValues.nivel



console.log(veryNum)
console.log(valor)
if(veryNum){
    if(xp>=valor){
    await conn.sendMessage(id, `Vocẽ ira apostar ${valor}
    para confirmar a aposta digite:
     !aposta aceito`,MessageType.text)
    panticipantes.push({id:numero,xps:valor})

    }else{
        await conn.sendMessage(id, `XP insuficiente...
XP atual: ${xp}.
aposte ${xp} ou menos`,MessageType.text)
    }



}else
    if(valor==="aceito" ){
        for(let a =0;a<panticipantes.length;a++){
        if(panticipantes[a].id===numero){
           
            if(porcentagem>=50){
                const xpup = xp+Number(panticipantes[a].xps)+5
                await conn.sendMessage(id, `Voce ganhou ${Number(panticipantes[a].xps)} xp`,MessageType.text)
                updates(numero,nome,idade,comandos,mensagens,xpup,nivel)
                panticipantes.splice(a, 1); 
                }else{
                    const xpup = xp-Number(panticipantes[a].xps)-5
                await conn.sendMessage(id, `Voce perdeu ${Number(panticipantes[a].xps)} xp`,MessageType.text)
                updates(numero,nome,idade,comandos,mensagens,xpup,nivel)
                panticipantes.splice(a, 1); 
                }
        }
        }
}
}
module.exports={aposta}