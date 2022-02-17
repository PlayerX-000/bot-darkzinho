const { MessageType } = require("@adiwajshing/baileys")
const { ban } = require("./ban")

const kick = async(id,conn,complemento,m,numero_cll)=>{
    if(m.message.extendedTextMessage){
const idchat = m.message.extendedTextMessage.contextInfo.participant
const idnumero = idchat.replace("@s.whatsapp.net","")

ban(id,conn,idnumero,m, numero_cll,0)

    }else{
        await conn.sendMessage(id, "𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙘𝙤𝙢 !kick 𝙗𝙖𝙧𝙖 𝙗𝙖𝙣𝙞𝙧", MessageType.text)
    }
}

module.exports={
    kick
}