const { MessageType } = require('@adiwajshing/baileys')
const { veriAdm } = require("../../util/utils")

const txt_clear = `
🗑️























































































































































































































🗑️
❲❗❳ Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ ✅
`
const clear = async(id,conn,num,chatupdate, num_cll)=>{
  const isAdm = await veriAdm(id,conn,num_cll)

    if(isAdm){
        executor(id,conn)
      }else{
        await conn.sendMessage(id, "⛔️ ⚜️⚇𝙑𝙤𝙘ê 𝙣ã𝙤 𝙩𝙚𝙢 𝙖𝙘𝙚𝙨𝙨𝙤⚉⚜️ ⛔️",MessageType.text)   
      }
}


function executor(id, conn){
     conn.sendMessage(id,txt_clear,MessageType.text) 
}

module.exports = { clear }