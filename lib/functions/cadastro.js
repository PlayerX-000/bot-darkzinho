const { MessageType } = require('@adiwajshing/baileys')
const { insert } = require("../../db/comandos_db/adicionar")



const cadastro = async (id, conn, dados, message) => {
const nivel = 1;
const xp = 1;
const comandos = 1;
const mensagens = 1;
const tel = (message.participant).replace("@s.whatsapp.net","");
if(dados !==undefined && (dados.indexOf("/"))!== -1){
console.log()
 const inf = dados.split("/") 
const veryNum = (!isNaN(parseFloat(inf[1])) && isFinite(inf[1]))
if (!veryNum) return await conn.sendMessage(id,"A Idade deve ter apenas numeros", MessageType.text)
if (Number(inf[1])<5) return await conn.sendMessage(id,"Muito novo, erro ao cadastrar", MessageType.text)
const nome = inf[0];
const idade = inf[1];

const res = await insert(nome,tel,idade,nivel,xp,comandos,mensagens)

console.log(res)

    if(res[0]===true){
await conn.sendMessage(id,res[1], MessageType.text)
    }else if(res[0]===false){
console.log("erro ao inserir")
console.log(res)
    }else if(res[0]==="null"){
await conn.sendMessage(id,res[1], MessageType.text)
    }

}else{
  await conn.sendMessage(id,`envie novamente:
!cadastro nome/idade`, MessageType.text)
        }
}

module.exports = { cadastro }