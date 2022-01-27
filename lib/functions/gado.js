const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { readFile } = require('fs/promises')




const gado = async (id , conn, marcacao) => {
 

    let nome_s = [];


  

    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : '';
    const users = isGroup ? groupMetadata.participants : '';     
           
    let tamanho_a =users.length;
         
    const escolhido = Math.floor(Math.random() * tamanho_a);     
    const escolhido_i = Math.floor(Math.random() * 8) + 1;
    const porc = Math.floor(Math.random() * 100) + 1;

    console.log(`Numero de Usuarios: ${tamanho_a}`)
         
        
if(marcacao !== undefined){

  let msg_lv1 = marcacao.replace("@","");
  let mark = msg_lv1.replace("-","")



        console.log(mark)

        users.forEach((numero, ind)=>{
        console.log(numero)
let numero_users = numero.jid
let numero_users_r = numero_users.replace("@s.whatsapp.net","")

       if(mark == numero_users_r){
       console.log("array sendo tratado: ")
       nome_s.push(numero)
       console.log(nome_s)

       }
})
        }else{
        nome_s.push(users[escolhido])
        }

        if(nome_s[0] === undefined){

        console.log("indefinido entaooo")
        console.log(users)
        console.log("numero: "+escolhido)
        nome_s.push(users[escolhido])

        }
        
     console.log("array pronto: ")
     console.log(nome_s[0])

           const nome_esc = []



if(nome_s[0].notify !==  undefined){
            nome_esc.nome = nome_s[0].notify
}else 
if(nome_s[0].vname !== undefined){
                nome_esc.nome = nome_s[0].vname
}else{
nome_s.push(users[escolhido])
                    nome_esc.nome = "@"+(nome_s[0].jid).replace("@s.whatsapp.net","")
}
           
 
 const txt_gado = `
   🐂⎨⊷⊷⊶⊶GADISSE⊷⊶⊷⊷⊶
   🐂⎨⊷.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷.⊶
   🐂⎨>O nivel de gadisse do(a)
   🐂⎨>${nome_esc.nome} é de: 
   🐂⎨⊶.⊷⊷⊷⊷(${porc}%)⊶⊷⊷⊷⊷
    `
    
         const url=`./public/img/gado/${escolhido_i}.jpeg`
        const buffer = await readFile(url)
         
    await conn.sendMessage(id, { url: url},MessageType.image, { mimetype: Mimetype.jpeg, caption: txt_gado, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }
   
   
   
   
    module.exports = { gado }