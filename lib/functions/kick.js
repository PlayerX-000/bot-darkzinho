const { MessageType } = require("@adiwajshing/baileys")
const { ban } = require("./ban")

const kick = async(id,conn,complemento,m,numero_cll)=>{
    if(m.message.extendedTextMessage){
const idchat = m.message.extendedTextMessage.contextInfo.participant
const idnumero = idchat.replace("@s.whatsapp.net","")

ban(id,conn,idnumero,m, numero_cll,0)

    }else{
        await conn.sendMessage(id, "Responda uma Mensagem com !kick bara banir", MessageType.text)
    }
}

module.exports={
    kick
}