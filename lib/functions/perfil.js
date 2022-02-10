const { MessageType , Mimetype } = require('@adiwajshing/baileys')
const { select } = require("../../db/comandos_db/busca")
const { veriAdm , getUsers, getAdms } = require("../../util/utils")

const perfil = async(id,conn,mark,message,numero_cll)=>{
    let arrayvar = []
    const usersGrp = await getUsers(id,conn)
let numero = []

    if(mark!==undefined){


      if(mark=="@"){
        const sentMsg  = await conn.sendMessage (id, `
        marque o usuario com @.
        Ex: 
        !perfil @5512991130663
        `, MessageType.text)
        return false
       }
       const tel =  mark.replace("@","")


        for(let i = 0; i<usersGrp.length;++i){

           if(((usersGrp[i].jid).replace("@s.whatsapp.net",""))===`${tel}`){
        numero.push(tel)
        
        }
       }
      if(!numero[0]){
         const sentMsg  = await conn.sendMessage (id, `
       usuario nao encontrado.
       informe o contato corretamente
       `, MessageType.text)
       return false
        }
     
 
        const veryNum = (!isNaN(parseFloat(tel)) && isFinite(tel))
        if (!veryNum) return await conn.sendMessage (id, `
        marque o usuario com @.
        Ex: 
        !perfil @5512991130663
        `, MessageType.text)



      
   

    try{
        arrayvar.ppUrl = await conn.getProfilePicture(tel)
        }catch{
       arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
        }    
   console.log("akii:" +tel) 
    
        const dados = await select(id,conn,tel)
    .then(async(res)=>{
        if(res[0]===null){
        await conn.sendMessage(id,res[1], MessageType.text)
        }else if (res[0]===true){
            await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: res[2] })
 
        }
    })
  }else{
  

  try{
        arrayvar.ppUrl = await conn.getProfilePicture(numero_cll)
        }catch{
       arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
        }    
  const dados = await select(id,conn,numero_cll)
    .then(async(res)=>{
        if(res[0]===null){
        await conn.sendMessage(id,res[1], MessageType.text)
        }else if (res[0]===true){
            await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: res[2] })
 
        }
    })
  }
    



}

module.exports={perfil}