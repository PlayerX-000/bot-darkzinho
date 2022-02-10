const { MessageType } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const { getUsers } = require("../../util/utils")



const marcar_grupo = async (id, conn) => {
let users = []
const users1 = await getUsers(id,conn)
console.log(users1)
let numeros = '👿MΔRCΔΠDΩ GRUPΩ😈\n \n'
users1.forEach((ctt,ind)=>{
users.push(ctt.jid)
numeros += (`${ind+1}º - `+'@'+(ctt.jid).replace("@s.whatsapp.net","")+"\n \n"); 
})
    await conn.sendMessage(id, numeros, extendedText,  { contextInfo: { "mentionedJid": users } })
}


    module.exports = { marcar_grupo }
    
    
    
    
    