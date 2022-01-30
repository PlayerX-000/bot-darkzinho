const { MessageType } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const { getUsers } = require("../../util/utils")



const marcar_grupo = async (id, conn) => {
const users1 = await getUsers(id,conn)
let numeros = '👿MΔRCΔΠDΩ GRUPΩ😈\n \n'
users1.forEach((ctt,ind)=>{
numeros += (`${ind+1}º - `+'@'+(ctt.jid).replace("@s.whatsapp.net","")+"\n \n"); 
})
      conn.sendMessage(id, numeros, extendedText,  { contextInfo: { "mentionedJid": users } })
}


    module.exports = { marcar_grupo }
    
    
    
    
    