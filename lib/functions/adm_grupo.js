const { MessageType } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const { getAdms } = require("../../util/utils")

const adm_grupo = async (id, conn) => {
const adms = await getAdms(id,conn) 
let lista = "👿MΔRCΔΠDΩ ΔDM'S😈\n \n"
adms.forEach((ctt,ind)=>{
   lista += (`${ind+1}° - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
})
conn.sendMessage(id, lista, extendedText,  { contextInfo: { "mentionedJid": adms } })
    }



    module.exports = { adm_grupo }