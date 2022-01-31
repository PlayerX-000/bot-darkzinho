const { MessageType } = require('@adiwajshing/baileys')
const { insert } = require("../../db/query/adicionar")



const cadastro = async (id, conn, dados, message) => {
const nivel = 0;
const xp = 0;
const comandos = 1;
const mensagens = 1;
const tel = (message.participant).replace("@s.whatsapp.net","");
const inf = dados.split("/");
const nome = inf[0];
const idade = inf[1];

insert(nome,tel,idade,nivel,xp,comandos,mensagens).then(async(res)=>{

console.log(res)

    if(res[0]===true){
await conn.sendMessage(id,res[1], MessageType.text)
    }else if(res[0]===false){
console.log("erro ao inserir")
console.log(res)
    }else if(res[0]==="null"){
await conn.sendMessage(id,res[1], MessageType.text)
    }
})

}

module.exports = { cadastro }