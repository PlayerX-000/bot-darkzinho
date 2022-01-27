const { MessageType } = require('@adiwajshing/baileys')


const txt_clear = `
🗑️























































































































































































































🗑️
❲❗❳ Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ ✅
`
const clear = async(id,conn,num,chatupdate, numero_cll)=>{
    const adms = [];
    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
    const users = isGroup ? groupMetadata.participants : ''


    const numero_adm = numero_cll.replace("@s.whatsapp.net","")

    for(let i of users) {
        i.isAdmin ? adms.push(i.jid.replace("@s.whatsapp.net","")) : ''
    }


    if((adms.includes(`${numero_adm}`))===true){
        executor(id,conn)
      }else{
  
        await conn.sendMessage(id, "Você não é um Administrator",MessageType.text)   
      }
  
}


function executor(id, conn){
     conn.sendMessage(id,txt_clear,MessageType.text) 
}
module.exports = { clear }