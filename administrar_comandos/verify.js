const { gerencia } = require("./router.js");
const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./db/comandos/comandos.json'))
const  antlink_v  = require("../lib/functions/IO_antlink")
const { grpusandobot ,objativos } = require("../db/vars/var")
const Donos = require("./../db/models/dono")
let IniciarBot = [];
const {veriAdm} = require("../util/utils")


const very = async (msg , id ,conn, message,numero_cll) => {
  





    const informacoes = await Donos.findAll()
const numerodono = informacoes[0].dataValues.tel


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
        console.log(comando_c2)
        console.log(IniciarBot)

const isAdm = await veriAdm(id,conn,numero_cll)
        if(comando_c2[0]==="iniciar" && isAdm===false){ 
         grpusandobot(id,conn)
        }else if(comando_c2[0]==="iniciar" && isAdm===false){
          await conn.sendMessage (id,"Você não tem permissão para usar esse comando", MessageType.text)
        }

        const grp_on = (objativos.includes(id)===true)
        if(!grp_on) return

const isLink = await antlink_v(id,message)

       if(isLink && isAdm===false){
        await conn.sendMessage (id, 'sem link', MessageType.text)

        if(message.participant){
        gerencia("!ban "+(message.participant).replace("@s.whatsapp.net","") , id ,conn, message,`${numerodono}@s.whatsapp.net`,"0000000_1")
        }else if(message.message.participant){
            gerencia("!ban "+(message.message.participant).replace("@s.whatsapp.net","") , id ,conn, message,`${numerodono}@s.whatsapp.net`,"0000000_1")
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