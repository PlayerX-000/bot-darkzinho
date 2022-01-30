const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const { readFile } = require('fs/promises')
const { getData , getHorario , getUsers , getAdms , getDadosGrp } = require('../../util/utils.js')

      
const help = async (id,conn) => {  
    const numero_membros = await getUsers(id,conn)
    const numero_adm = await getAdms(id,conn)
    const metadata_grp = await getDadosGrp(id,conn)


    const menu = `
    ⁆⁅▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸𝓟𝓻𝓮𝓯𝓲𝔁𝓸 【 ! 】
    ⁆⁅
    ⁆⁅⫸ ${getData()}
    ⁆⁅⫸ ${getHorario()}
    ⁆⁅
    ⁆⁅⫸ Usuarios: ${numero_membros.length}
    ⁆⁅⫸ Adms: ${numero_adm.length}
    ⁆⁅▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
    ⁆⁅███████████████████████
    ⁆⁅⫸█ βΩT - ❛❜ᎠᎪᏒᏦ ⁱᵗᵃᶜʰⁱ™🔥██████
    ⁆⁅███████████████████████
    ⁆⁅
    ⁆⁅ Grupo:  ${metadata_grp.subject}
    ⁆⁅
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓓𝓘𝓥𝓔𝓡𝓢𝓐̃𝓞⥃▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸ !roleta_russa(off)
    ⁆⁅⫸ !cara_coroa(off)
    ⁆⁅⫸ !adivinhe(off)
    ⁆⁅⫸ !gado + [@]usuario
    ⁆⁅⫸ !abraçar + [@]usuario
    ⁆⁅⫸ !matar + [@]usuario
    ⁆⁅⫸ !gay + [@]usuario
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓐𝓓𝓜𝓼⥃▂▂▂▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸ !clear
    ⁆⁅⫸ !boas_vindas on/off
    ⁆⁅⫸ !fechar_grupo(off)
    ⁆⁅⫸ !abrir_grupo(off)
    ⁆⁅⫸ !ban + [@]usuario
    ⁆⁅⫸ !kick (na mensagem de alguem)
    ⁆⁅⫸ !antlink on/off
    ⁆⁅⫸ !marcar_grupo
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓐𝓙𝓤𝓓𝓐⥃▂▂▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸ !help
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓒𝓻𝓲𝓪𝓭𝓸𝓻⥃▂▂▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸ !trv_ctt-g + [quantidade] (manda trava no
    ⁆⁅ grupo em que o comando foi dado)
    ⁆⁅⫸ !trv_ctt-n [@](marque a pessoa)
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓘𝓜𝓖𝓼⥃▂▂▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸ !s (na legenda da img/gif)
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂⥂𝓘𝓝𝓕⥃▂▂▂▂▂▂▂▂▂▂▂
    ⁆⁅
    ⁆⁅⫸CRIΔDΩR DΩ βΩT:
    ⁆⁅
    ⁆⁅✫✬✭✮✯✰✫✬✭✮✯✰✫✬✭✮✯✬✭
    ⁆⁅
    ⁆⁅➸ +55 (12)99113-0663
    ⁆⁅
    ⁆⁅▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
            `


           const sendMsg = await conn.sendMessage(id, menu, MessageType.text)
    }
    
    
    module.exports = { help }
