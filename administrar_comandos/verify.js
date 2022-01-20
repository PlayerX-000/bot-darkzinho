const { gerencia } = require("./router.js");
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
console.log(comandos)
let entrada_saida = true




const IO_entrada_saida = async (id,cod,num,conn) => {
    const metadata = await conn.groupMetadata (id) 
    console.log("1--------------")
let arrayvar = []


const ola = `
ola ${num.replace("@s.whatsapp.net","")}
Bem Vindo ao
${metadata.subject}
`

let bye = `
adeus ${num.replace("@s.whatsapp.net","")}
ja vai tarde
`

try{
    arrayvar.ppUrl = await conn.getProfilePicture(num)
    }catch{console.log("erro");
   arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
    }

    console.log("2--------------")
if(entrada_saida){
    console.log("3--------------")
 if(cod===31){
            console.log("5--------------");
            try{
             await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: ola,contextInfo: { "mentionedJid": [num] } })
            }catch(err){console.log(err)}
            }else if(cod===32){
    console.log("6--------------");
    try{
    await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: bye,contextInfo: { "mentionedJid": [num] } })
}catch(err){console.log(err)}   
}
   

}
}

const very = async (msg , id ,conn, message,numero_cll,buff) => {
    const comando_c2 = msg.replace("!","").split(" ")
    const grupo = id.endsWith('@g.us');
    const privado = id.endsWith('@s.whatsapp.net');
 





    if(grupo===true){
    gerencia(msg , id ,conn, message,numero_cll,buff)
    }else 
    if(privado===true){
        if(comandos.includes(`${comando_c2}`)===true){
           const sentMsg  = await conn.sendMessage (id, 'Não Respondo no PV obg', MessageType.text)
}}









    }
    
    /*-----------------------------------------------------------------------*/
    
    module.exports = { very , IO_entrada_saida }