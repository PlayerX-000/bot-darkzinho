const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { veriAdm , getUsers, getAdms } = require("../../util/utils")
const Donos = require("../../db/models/dono")

let ctt_ban = []

const ban = async (id,conn,num,chatupdate, numero_cll,cod) => {


  const informacoes = await Donos.findAll()
  const numerodono = informacoes[0].dataValues.tel
  const isAdmBot = await veriAdm(id,conn,numerodono)
  const isAdmUser = await veriAdm(id,conn,numero_cll)
let arrayvar = []
const usersGrp = await getUsers(id,conn)
const usersAdm = await getAdms(id,conn)
const numero=[]
const numero_adm = numero_cll
  
 
if(num=="@"){
 const sentMsg  = await conn.sendMessage (id, `
 Informe o usuario a ser banido.
 Ex: 
 !ban @5512991130663
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
 

 const num_ban = (`${(numero[0].replace("@",""))}@s.whatsapp.net`)



try{
 arrayvar.ppUrl = await conn.getProfilePicture(num_ban)
 }catch{console.log("Imagem do User indisponivel, buscando outra...");
arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
 }
 


   const txt_ban =          `
🚫⎨.⊷⊶⊷⊶BANIDO⊷⊶⊷⊶.⎬
🚫⎨.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶.⎬
🚫⎨Bye Bye ${numero[0].replace("@","")}.⎬
🚫⎨.⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷.⎬
`
  
    if(isAdmBot===false) return await conn.sendMessage(id, `O bot não é administrador...\n Impossivel banir`,MessageType.text)
    
    if(isAdmUser===false){
      executor(conn,id,num_ban,txt_ban,arrayvar)
    }else{
      if(cod==="0000000_1"){
   
        await conn.sendMessage(id, `O bot não é administrador...
impossivel banir`,MessageType.text)
      }else if(cod===undefined){
      await conn.sendMessage(id, "Você não é um Administrator",MessageType.text)   
    
  }}
  
  }

async function executor(conn,id,num_ban,txt_ban,arrayvar){
 await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: txt_ban,contextInfo: { "mentionedJid": [num_ban] } })
 ctt_ban.push(num_ban)
  await conn.groupRemove(id, ctt_ban)       
}





    module.exports = { ban }