const { MessageType , Mimetype } = require('@adiwajshing/baileys')
const { select } = require("../../db/comandos_db/busca")


const perfil = async(id,conn,mark,message)=>{
    let arrayvar = []
    


    
    const tel = (message.participant).replace("@s.whatsapp.net","");
    try{
        arrayvar.ppUrl = await conn.getProfilePicture(tel)
        }catch{
       arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
        }
setTimeout(async() => {
    

    const dados = select(tel)
    .then(async(res)=>{
        if(res[0]===null){
        await conn.sendMessage(id,res[1], MessageType.text)
        }else if (res[0]===true){
            await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: res[2] })
 
        }
    })
}, 1000);
}

module.exports={perfil}