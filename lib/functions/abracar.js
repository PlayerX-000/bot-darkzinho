const { MessageType , Mimetype } = require('@adiwajshing/baileys')
const path = require("path")
const { readFile } = require('fs/promises')
const { getUsers , getRand_start0 , getRand_start1 } = require("../../util/utils")



    
 

const abraçar = async (id , conn, marcacao) => {
    let nome_s = [];
    const users = await getUsers(id,conn)           
    const num_users_grp =users.length;
    const rand_user = getRand_start0(num_users_grp)
    const rand_image = getRand_start1(5)

    if(marcacao=="@"){
        const sentMsg  = await conn.sendMessage (id, `
        Informe o usuario a ser abraçado.
        Ex: 
        !abracar @5512991130663
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
           const txt_abraco = `
💖⎨.⊷⊶⊶ABRAÇOU⊷⊶⊷⊷
💖⎨.⊷⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶
💖⎨>Você abraçou o(a)⊷
💖⎨> ${nome_esc.nome}
💖⎨.⊶⊷⊷⊷⊷⊷⊶⊷⊷⊷⊷
    `
        
         const url=`./public/gif/abracar/${rand_image}.mp4`;
         const buffer = await readFile(url)
         
    await conn.sendMessage(id, buffer,MessageType.video, { mimetype: Mimetype.gif, caption: txt_abraco, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }



    module.exports = { abraçar }