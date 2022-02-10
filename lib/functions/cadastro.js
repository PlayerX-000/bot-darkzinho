const { MessageType } = require('@adiwajshing/baileys')
const { insert } = require("../../db/comandos_db/adicionar")
var crypto = require("crypto");
var nomerandom = crypto.randomBytes(20).toString('hex');

const cadastro = async (id, conn, dados, message) => {
const nivel = 1;
const xp = 1;
const comandos = 1;
const mensagens = 1;
const atk = 1
const vida = 10
const vidaMax = 10
const def = 1


const tel = (message.participant).replace("@s.whatsapp.net","");

const nome = nomerandom

const res = await insert(nome,tel,nivel,xp,comandos,mensagens,atk,vida,def,vidaMax)

console.log(res)

    if(res[0]===true){
await conn.sendMessage(id,res[1], MessageType.text)
    }else if(res[0]===false){
console.log("erro ao inserir")
console.log(res)
    }else if(res[0]==="null"){
await conn.sendMessage(id,res[1], MessageType.text)
    }
}


module.exports = { cadastro }