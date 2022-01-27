const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const fs = require('fs')

const { readFile } = require('fs/promises')

const adm_grupo = async (id, conn) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

     adms = [];
     lista = "👿MΔRCΔΠDΩ ΔDM'S😈\n \n"
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
    adms.forEach((ctt,ind)=>{
       lista += (`${ind+1}° - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
    })

conn.sendMessage(id, lista, extendedText,  { contextInfo: { "mentionedJid": adms } })
    }



    module.exports = { adm_grupo }