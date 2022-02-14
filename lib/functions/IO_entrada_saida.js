const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { objinf } = require("../../db/vars/var.js")



const IO_entrada_saida = async (id,cod,num,conn) => {
 
    const metadata = await conn.groupMetadata (id) 

    let grp_bv = []

    for(let a=0;a<objinf.length;a++){
        if(objinf[a].id===id){
            grp_bv.push(objinf[a].id)
   

      
    const grpPerm_bv = grp_bv.includes(`${id}`)===true
    

let arrayvar = []

try{
    arrayvar.ppUrl = await conn.getProfilePicture(num)
    }catch{
   arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/images.jpg?raw=true"
    }

    
if(objinf[a].vars.boasvindas===true && grpPerm_bv===true){
   
 if(cod===31){
 


const ola = `
•❤•.¸✿¸.•❤•.❀•𝔹𝕖𝕞-𝕍𝕚𝕟𝕕𝕠•❀.•❤•.¸✿¸.•❤•
@${num.replace("@s.whatsapp.net","")}
▂▃▅▆▇█ •.❀•𝙎𝙞𝙣𝙩𝙖-𝙩𝙚 𝙀𝙢 𝘾𝙖𝙨𝙖•❀.•█▇▆▅▃▂
ᴅᴇ: ${metadata.subject}
`
 
         
            try{
             await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: ola,contextInfo: { "mentionedJid": [num] } })
            }catch(err){console.log(err)}
            }else if(cod===32){
    
    let bye = `
𝔸𝕕𝕖𝕦𝕤 @${num.replace("@s.whatsapp.net","")} ℕ𝕌ℕℂ𝔸 𝕞𝕒𝕚𝕤 𝕧𝕠𝕝𝕥𝕖 
¯\_(⌣̯̀⌣́)_/¯
`
    
    try{
    await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: bye,contextInfo: { "mentionedJid": [num] } })
}catch(err){console.log(err)}   
}
}
}
}
}

module.exports = { IO_entrada_saida }