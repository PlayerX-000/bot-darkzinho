const { MessageType } = require('@adiwajshing/baileys')
const {extendedText} = MessageType

/*-----------------------------------------------------------------------*/

    const help = async (id,conn) => {
        const menu = `
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
 ███ ███ ███ ███ ███ ███
⁆⁅⫸βΩT - ❛❜ᎠᎪᏒᏦ ⁱᵗᵃᶜʰⁱ™🔥
 ███ ███ ███ ███ ███ ███
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅⫸ !roleta_russa
⁆⁅⫸ !cara_coroa
⁆⁅⫸ !adivinhe_o_personagem
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅⫸ !boas_vindas
⁆⁅⫸ !fechar_grupo
⁆⁅⫸ !abrir_grupo
⁆⁅⫸ !ban
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
 ⁆⁅⫸CRIΔDΩR DΩ βΩT:
⁆⁅ ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌ ﹌
 ⁆⁅➸ +55 (12)99113-0663
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔

        `
           const sendMsg = await conn.sendMessage(id, menu, MessageType.text)
    }

/*-----------------------------------------------------------------------*/

  

    const ban = async (id,conn,num,chatupdate) => {
    
    const ctt_ban = []
    const ctt = num.replace("@s.whatsapp.net","")
    const ctt2 = num.replace("@","")
    ctt_ban.push(ctt2)
    console.log("bannnnn")
    console.log(ctt_ban)
        await conn.groupRemove(id, [ctt2])
        const sentMsg  = await conn.sendMessage (id, 'Em desenvolvimento...', MessageType.text)
    }

    
    const marcar_grupo = async (id, conn, chatUpdate) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users1 = isGroup ? groupMetadata.participants : ''

        users = [];
        numeros = '馃懣M螖RC螖螤D惟 USU螖RI惟S馃槇 \n \n'
        contato = ''
           for(let i of users1) {
               users.push(i.jid)
           }
       users.forEach((ctt,ind)=>{
          numeros += (`${ind+1}掳 - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
          contato += (ctt.replace("@s.whatsapp.net","")+"\n"); 
       })

      conn.sendMessage(id, numeros, extendedText,  { contextInfo: { "mentionedJid": users } })
  

}
    const adm_grupo = async (id, conn) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

     adms = [];
     lista = '馃懣惟S 螖DMS 螤惟 GRUP惟 S螖惟馃槇 \n \n'
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
    adms.forEach((ctt,ind)=>{
       lista += (`${ind+1}掳 - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
    })

conn.sendMessage(id, lista, extendedText,  { contextInfo: { "mentionedJid": adms } })
    }


/*-----------------------------------------------------------------------*/

    module.exports = { help , ban , adm_grupo , marcar_grupo}