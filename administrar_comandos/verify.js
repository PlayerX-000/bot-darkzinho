const { gerencia } = require("./router.js");
const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./db/comandos/comandos.json'))
const  antlink_v  = require("../lib/functions/IO_antlink")



const very = async (msg , id ,conn, message,numero_cll) => {
    const comando_c2 = msg.replace("!","").split(" ")
    const grupo = id.endsWith('@g.us');
    const privado = id.endsWith('@s.whatsapp.net');
 
 let adms = []
 
const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }

    if(grupo===true){
const isLink = await antlink_v(message)
       if(isLink && adms.includes(numero_cll)===false){
        const sentMsg  = await conn.sendMessage (id, 'sem link', MessageType.text)

        if(message.participant){
        gerencia("!ban "+(message.participant).replace("@s.whatsapp.net","") , id ,conn, message,"12502880483@s.whatsapp.net","0000000_1")
        }else if(message.message.participant){
            gerencia("!ban "+(message.message.participant).replace("@s.whatsapp.net","") , id ,conn, message,"12502880483@s.whatsapp.net","0000000_1")
        }
       }

    gerencia(msg , id ,conn, message,numero_cll)
    }else 
    if(privado===true){
        if(comandos.includes(`${comando_c2}`)===true){
           const sentMsg  = await conn.sendMessage (id, 'Não Respondo no PV, obg', MessageType.text)
}}


    }
    
    /-----------------------------------------------------------------------/
    
    module.exports = { very }