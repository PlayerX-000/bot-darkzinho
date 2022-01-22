const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
const { readFile } = require('fs/promises')



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
    
    
    
    
    