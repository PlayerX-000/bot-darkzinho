const {getRand_start1} = require("../../util/utils") 
const { MessageType , Mimetype } = require('@adiwajshing/baileys')
const fs = require("fs")
const caracoroa = async(id,conn) => {
    const res = getRand_start1(100)
    if (res<50){
        const url=`./public/fig/coroa.webp`
        await conn.sendMessage(id,"⚜️⚇𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨: 𝐂𝐎𝐑𝐎𝐀⚉⚜️", MessageType.text)
        await conn.sendMessage(id, fs.readFileSync(url), MessageType.sticker, { mimetype: Mimetype.webp })
    }else{
        const url=`./public/fig/cara.webp`
        await conn.sendMessage(id,"⚜️⚇𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨: 𝐂𝐀𝐑𝐀⚉⚜️", MessageType.text)
        await conn.sendMessage(id, fs.readFileSync(url), MessageType.sticker, { mimetype: Mimetype.webp })
    }
}
module.exports={caracoroa}