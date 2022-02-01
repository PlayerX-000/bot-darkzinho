const { MessageType } = require('@adiwajshing/baileys')
const { select } = require("../../db/query/busca")


const perfil = async(id,conn,mark,message)=>{
    console.log(message)
    const tel = (message.participant).replace("@s.whatsapp.net","");

    const dados = await select(tel).then(async(res)=>{
        if(res[0]===null){
        await conn.sendMessage(id,res[1], MessageType.text)
        }else if (res[0]===true){
        await conn.sendMessage(id,res[2], MessageType.text)
        console.log(res[1])
        }
    })

}

module.exports={perfil}