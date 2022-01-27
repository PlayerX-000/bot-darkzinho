const { gerencia } = require("./router.js");
const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./db/comandos/comandos.json'))
const  antlink_v  = require("../lib/functions/IO_antlink")



const very = async (msg , id ,conn, message,numero_cll) => {
    const comando_c2 = msg.replace("!","").split(" ")
    const grupo = id.endsWith('@g.us');
    const privado = id.endsWith('@s.whatsapp.net');
 

    if(grupo===true){
const isLink = await antlink_v(message)
       if(isLink){
        const sentMsg  = await conn.sendMessage (id, 'sem link', MessageType.text)

        if(message.participant){
        gerencia("!ban "+(message.participant).replace("@s.whatsapp.net","") , id ,conn, message,"5512991130663@s.whatsapp.net")
        }else if(message.message.participant){
            gerencia("!ban "+(message.message.participant).replace("@s.whatsapp.net","") , id ,conn, message,"5512991130663@s.whatsapp.net")
        }
       }

    gerencia(msg , id ,conn, message,numero_cll)
    }else 
    if(privado===true){
        if(comandos.includes(`${comando_c2}`)===true){
           const sentMsg  = await conn.sendMessage (id, 'Não Respondo no PV, obg', MessageType.text)
}}


    }
    
    /*-----------------------------------------------------------------------*/
    
    module.exports = { very }