const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
const { readFile } = require('fs/promises')



    
    const menu = `
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
 ███ ███ ███ ███ ███ ███
⁆⁅⫸βΩT - ❛❜ᎠᎪᏒᏦ ⁱᵗᵃᶜʰⁱ™🔥
 ███ ███ ███ ███ ███ ███
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸ !roleta_russa(off)
⁆⁅⫸ !cara_coroa(off)
⁆⁅⫸ !adivinhe(off)
⁆⁅⫸ !gado
⁆⁅⫸ !abracar
⁆⁅⫸ !matar
⁆⁅⫸ !gay
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸ !boas_vindas on/off(adm's)
⁆⁅⫸ !fechar_grupo(off)
⁆⁅⫸ !abrir_grupo(off)
⁆⁅⫸ !ban + contado(adm's)
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸ !help
⁆⁅⫸ !marcar_grupo
⁆⁅⫸ !adm_grupo
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
 ⁆⁅⫸CRIΔDΩR DΩ βΩT:
⁆⁅
⁆⁅ ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌ ﹌
⁆⁅
 ⁆⁅➸ +55 (12)99113-0663
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
        `
        
        
        
const help = async (id,conn) => {
        
           const sendMsg = await conn.sendMessage(id, menu, MessageType.text)
    }
    
    
    module.exports = { help }