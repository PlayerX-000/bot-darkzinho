const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const { readFile } = require('fs/promises')



    
    const menu = `
⁆⁅▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
⁆⁅
⁆⁅⫸𝓟𝓻𝓮𝓯𝓲𝔁𝓸 【 ! 】
⁆⁅
⁆⁅███████████████████████
⁆⁅⫸βΩT - ❛❜ᎠᎪᏒᏦ ⁱᵗᵃᶜʰⁱ™🔥
⁆⁅███████████████████████
⁆⁅
⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓓𝓘𝓥𝓔𝓡𝓢𝓐̃𝓞⥃▂▂▂▂▂▂▂▂
⁆⁅
⁆⁅⫸ !roleta_russa(off)
⁆⁅⫸ !cara_coroa(off)
⁆⁅⫸ !adivinhe(off)
⁆⁅⫸ !gado
⁆⁅⫸ !abracar
⁆⁅⫸ !matar
⁆⁅⫸ !gay
⁆⁅
⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓐𝓓𝓜𝓼⥃▂▂▂▂▂▂▂▂▂▂▂
⁆⁅
⁆⁅⫸ !clear
⁆⁅⫸ !boas_vindas on/off
⁆⁅⫸ !fechar_grupo(off)
⁆⁅⫸ !abrir_grupo(off)
⁆⁅⫸ !ban + @user
⁆⁅⫸ !antlink on/off
⁆⁅⫸ !marcar_grupo
⁆⁅
⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓐𝓙𝓤𝓓𝓐⥃▂▂▂▂▂▂▂▂▂▂
⁆⁅
⁆⁅⫸ !help
⁆⁅
⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓘𝓜𝓖𝓼⥃▂▂▂▂▂▂▂▂▂▂▂
⁆⁅
⁆⁅⫸ !s (na legenda da img/gif)
⁆⁅
⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓘𝓝𝓕⥃▂▂▂▂▂▂▂▂▂▂▂
⁆⁅
�⁆⁅⫸CRIΔDΩR DΩ βΩT:
⁆⁅
⁆⁅✫✬✭✮✯✰✫✬✭✮✯✰✫✬✭✮✯✬✭
⁆⁅
�⁆⁅➸ +55 (12)99113-0663
⁆⁅
⁆⁅▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `
        
        
        
const help = async (id,conn) => {
        
           const sendMsg = await conn.sendMessage(id, menu, MessageType.text)
    }
    
    
    module.exports = { help }
