const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const { executionAsyncResource } = require('async_hooks')
const {extendedText} = MessageType
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
const { readFile } = require('fs/promises')



const ban = async (id,conn,num,chatupdate, numero_cll) => {
       
    let arrayvar = []
    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
    const users = isGroup ? groupMetadata.participants : ''
    adms = [];
    users_grp = []
    
    users.forEach((ctt,ind)=>{
    users_grp.push(ctt)
    })
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid.replace("@s.whatsapp.net","")) : ''
        }
 const numero=[]
let ctt_ban = []
 const numero_adm = numero_cll.replace("@s.whatsapp.net","")
console.log(users_grp)
if(num=="@"){
 const sentMsg  = await conn.sendMessage (id, `
 Informe o usuario a ser banido.
 Ex: 
 !ban @5512991130663
 `, MessageType.text)
 return false
}
  try{
  for(let i = 0; i<users_grp.length;++i){
  console.log((users_grp[i].jid).replace("@s.whatsapp.net",""))
  console.log(`${num.replace("@","")}`)
  
     if(((users_grp[i].jid).replace("@s.whatsapp.net",""))===`${num.replace("@","")}`){
  numero.push(num)
  console.log("entrou na verufucaçao")
  }
 }
if(!numero[0]){
   const sentMsg  = await conn.sendMessage (id, `
 usuario nao encontrado.
 informe o contato corretamente
 `, MessageType.text)
 return false
  }
 }catch{
 const sentMsg  = await conn.sendMessage (id, `
 Informe o usuario a ser banido.
 Ex: 
 !ban @5512991130663
 `, MessageType.text)
 return false
 }
 
 
 console.log(numero[0])
 console.log("nummmmeroooo akiii")
 console.log("bannnnn")
 console.log(`${numero[0]}@s.whatsapp.net`)
 const num_ban = (`${(numero[0].replace("@",""))}@s.whatsapp.net`)



try{
 arrayvar.ppUrl = await conn.getProfilePicture(num_ban)
 }catch{console.log("erro");
arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
 }
 
 console.log(arrayvar.ppUrl)
 console.log("adms")
 console.log(adms)
 console.log("numero a banir")
 console.log(num)
 console.log("meu numero")
 console.log("ctt: "+ numero_adm)
 

   const txt_ban =          `
🚫⎨.⊷⊶⊷⊶BANIDO⊷⊶⊷⊶.⎬
🚫⎨.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶.⎬
🚫⎨Bye Bye ${numero[0].replace("@","")}.⎬
🚫⎨.⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷.⎬
`
   
    
    if((adms.includes(`${numero_adm}`))===true){
      executor(conn,id,num_ban,txt_ban,arrayvar)
    }else{

      await conn.sendMessage(id, "Você não é um Administrator",MessageType.text)   
    }
  
  }

async function executor(conn,id,num_ban,txt_ban,arrayvar){
   

 await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: txt_ban,contextInfo: { "mentionedJid": [num_ban] } })
 ctt_ban.push(num_ban)
  await conn.groupRemove(id, ctt_ban)      

 
}
    module.exports = { ban }