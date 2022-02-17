const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { readFile } = require('fs/promises')
const { getUsers , getRand_start0 , getRand_start1 } = require("../../util/utils")

const matar = async (id , conn, marcacao) => {
    let nome_s = [];
    const users = await getUsers(id,conn)           
    const num_users_grp =users.length;
    const rand_user = getRand_start0(num_users_grp)
    const rand_image = getRand_start1(5)
  
    if(marcacao=="@"){
        const sentMsg  = await conn.sendMessage (id, `
        ❗️❕ ⚜️⚇𝙄𝙣𝙛𝙤𝙧𝙢𝙚 𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖 𝙨𝙚𝙧 𝙖𝙗𝙧𝙖ç𝙖𝙙𝙤⚉⚜️ ❗️❕
             𝙀𝙭:  !abraçar @5512991130663 
        `, MessageType.text)
        return false
       } 
  
  
       if(marcacao !== undefined){
        let msg_lv1 = marcacao.replace("@","");
        let mark = msg_lv1.replace("-","")
              users.forEach((numero, ind)=>{
      let numero_users_r = numero.jid.replace("@s.whatsapp.net","")
             if(mark == numero_users_r){
             nome_s.push(numero)
             }
      })
              }else{
              nome_s.push(users[rand_user])
              }
      
              if(nome_s[0] === undefined){
              nome_s.push(users[rand_user])
              }
                 const nome_esc = []
      
      if(nome_s[0].notify !==  undefined){
                  nome_esc.nome = nome_s[0].notify
      }else 
      if(nome_s[0].vname !== undefined){
                      nome_esc.nome = nome_s[0].vname
      }else{
      nome_s.push(users[rand_user])
                    nome_esc.nome =  "@"+(nome_s[0].jid).replace("@s.whatsapp.net","")
              
      }
   
const txt_matar = `
🔪⎨.⊷.𝙆𝙞𝙡𝙡⊷⊶⊷⊷⊶
🔪⎨⊷⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶
🔪⎨>𝙑𝙤𝙘ê 𝙈𝙖𝙩𝙤𝙪 𝙤(𝙖)⊷⊶
🔪⎨> ${nome_esc.nome}
🔪⎨.⊶⊷⊷⊷⊷⊷⊶⊷⊷⊷⊷
    `
         const url=`./public/gif/matar/${rand_image}.mp4`
         const buffer = await readFile(url) 
    await conn.sendMessage(id,buffer,MessageType.video, { mimetype: Mimetype.gif, caption: txt_matar, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }

    module.exports = { matar }