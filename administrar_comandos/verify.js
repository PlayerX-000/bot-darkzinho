const { gerencia } = require("./router.js");
const { MessageType } = require('@adiwajshing/baileys');
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
let array_comados = []

const very = async (msg , id ,conn, chatUpdate,numero_cll) => {
    const grupo = id.endsWith('@g.us');
    const privado = id.endsWith('@s.whatsapp.net');

    if(grupo){
    gerencia(msg , id ,conn, chatUpdate,numero_cll)

    }else if(privado){

        if(comandos.includes(`${comando}`)===true){
           const sentMsg  = await conn.sendMessage (id, 'Não Respondo no PV obg', MessageType.text)
        }
    }
    }
    
    /*-----------------------------------------------------------------------*/
    
    module.exports = { very }