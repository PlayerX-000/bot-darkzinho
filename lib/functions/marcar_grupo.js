const { MessageType } = require('@adiwajshing/baileys')
const {extendedText} = MessageType




const marcar_grupo = async (id, conn) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users1 = isGroup ? groupMetadata.participants : ''

        users = [];
        numeros = '👿MΔRCΔΠDΩ GRUPΩ😈\n \n'
        contato = ''
           for(let i of users1) {
               users.push(i.jid)
           }
       users.forEach((ctt,ind)=>{
          numeros += (`${ind+1}掳 - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
          contato += (ctt.replace("@s.whatsapp.net","")+"\n"); 
       })

      conn.sendMessage(id, numeros, extendedText,  { contextInfo: { "mentionedJid": users } })
  

}


    module.exports = { marcar_grupo }
    
    
    
    
    