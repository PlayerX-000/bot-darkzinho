const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { veriAdm , getUsers, getAdms } = require("../../util/utils")


let ctt_ban = []

const ban = async (id,conn,num,chatupdate, numero_cll,cod) => {

console.log("numero passado pelo ban: "+numero_cll)
  const isAdmUser = await veriAdm(id,conn,numero_cll)
let arrayvar = []
const usersGrp = await getUsers(id,conn)
const usersAdm = await getAdms(id,conn)
const numero=[]
const numero_adm = numero_cll
  
if(num=="@"){
 const sentMsg  = await conn.sendMessage (id, `
 ❗️❕ ⚜️⚇𝙄𝙣𝙛𝙤𝙧𝙢𝙚 𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖 𝙨𝙚𝙧 𝙗𝙖𝙣𝙞𝙙𝙤⚉⚜️
      𝙀𝙭: !ban @5512991130663 ❗️❕
 `, MessageType.text)
 return false
}
  try{
  for(let i = 0; i<usersGrp.length;++i){

  
     if(((usersGrp[i].jid).replace("@s.whatsapp.net",""))===`${num.replace("@","")}`){
  numero.push(num)
  
  }
 }
if(!numero[0]){
   const sentMsg  = await conn.sendMessage (id, `
 ⚜️⚇🔎𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙖𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤🔎.  
    ⚠️𝙞𝙣𝙛𝙤𝙧𝙢𝙚 𝙤 𝙘𝙤𝙣𝙩𝙖𝙩𝙤 𝙘𝙤𝙧𝙧𝙚𝙩𝙖𝙢𝙚𝙣𝙩𝙚⚠️⚉⚜️
 `, MessageType.text)
 return false
  }
 }catch{
 const sentMsg  = await conn.sendMessage (id, `
 ❗️❕ ⚜️⚇𝙄𝙣𝙛𝙤𝙧𝙢𝙚 𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖 𝙨𝙚𝙧 𝙗𝙖𝙣𝙞𝙙𝙤⚉⚜️ ❗️❕ 
      𝙀𝙭: !ban @5512991130663
 `, MessageType.text)
 return false
 }
 

 const num_ban = (`${(numero[0].replace("@",""))}@s.whatsapp.net`)



try{
 arrayvar.ppUrl = await conn.getProfilePicture(num_ban)
 }catch{console.log("Imagem do User indisponivel, buscando outra...");
arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
 }
 


   const txt_ban =          `
🚫⎨.⊷⊶⊷⊶𝘽𝙖𝙣𝙞𝙙𝙤⊷⊶⊷⊶.⎬
🚫⎨.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶.⎬
🚫⎨Bye Bye ${numero[0].replace("@","")}.⎬
🚫⎨.⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷.⎬
`
  
    if(isAdmUser===false) return await conn.sendMessage(id, `‼️ 𝙊 𝙗𝙤𝙩 𝙣ã𝙤 é 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧...\n 𝙄𝙢𝙥𝙤𝙨𝙨𝙞𝙫𝙚𝙡 𝙗𝙖𝙣𝙞𝙧 ‼️`,MessageType.text)
    
    if(isAdmUser===true){
      executor(conn,id,num_ban,txt_ban,arrayvar)
    }else{
      if(cod==="0000000_1"){
        await conn.sendMessage(id, `‼️ 𝙊 𝙗𝙤𝙩 𝙣ã𝙤 é 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧...\n 𝙄𝙢𝙥𝙤𝙨𝙨𝙞𝙫𝙚𝙡 𝙗𝙖𝙣𝙞𝙧 ‼️`,MessageType.text)
      }else if(cod===undefined){
      await conn.sendMessage(id, "⛔️ ⚜️⚇𝙑𝙤𝙘ê 𝙣ã𝙤 𝙩𝙚𝙢 𝙖𝙘𝙚𝙨𝙨𝙤⚉⚜️ ⛔️",MessageType.text)   
    
  }}
  
  }

async function executor(conn,id,num_ban,txt_ban,arrayvar){
 await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: txt_ban,contextInfo: { "mentionedJid": [num_ban] } })
 ctt_ban.push(num_ban)
  await conn.groupRemove(id, ctt_ban)       
}





    module.exports = { ban }