const { gerencia } = require("./router.js");
const { MessageType } = require('@adiwajshing/baileys');
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
console.log(comandos)
let array_comados = []



const very = async (msg , id ,conn, message,numero_cll) => {
    const comando_c2 = msg.replace("!","").split(" ")
    const grupo = id.endsWith('@g.us');
    const privado = id.endsWith('@s.whatsapp.net');
 





    if(grupo===true){
    gerencia(msg , id ,conn, message,numero_cll)
    }else 
    if(privado===true){
        if(comandos.includes(`${comando_c2}`)===true){
           const sentMsg  = await conn.sendMessage (id, 'Não Respondo no PV obg', MessageType.text)
}}









    }
    
    /*-----------------------------------------------------------------------*/
    
    module.exports = { very }