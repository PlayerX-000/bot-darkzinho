const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const { readFile } = require('fs/promises')
const { getData , getHorario , getUsers , getAdms , getDadosGrp } = require('../../util/utils.js')

      
const help = async (id,conn) => {  
    const numero_membros = await getUsers(id,conn)
    const numero_adm = await getAdms(id,conn)
    const metadata_grp = await getDadosGrp(id,conn)

    const menu = `
╭══════════════════╮
┃       ►⦅ᗪ∆ℬᏦℤᏐᖽんᎧ⦆◄    
╟══════════════════┤
┃
┠ ᵖʳᵉᶠⁱˣᵒ 【 ! 】
┠ Data: ${getData()}
┠ Horario: ${getHorario()}
┃
╟══════════════════┤
┃
┠Usuarios: ${numero_membros.length}
┠Adms: ${numero_adm.length}
┃
╟═════ᎶᏒᏬᎮᎧ════════┤
┃
┠ ${metadata_grp.subject}
╟═════.ᎴᎥVᏋᏒSΩO══════┤
┃
┠ !roleta_russa <off>
┠ !caracoroa
┠ !adivinhe <off>
┠ !gado + [@]usuario
┠ !abraçar + [@]usuario
┠ !matar + [@]usuario
┠ !gay + [@]usuario
┠ !aposta + [valor](utiliza seu xp)
┠ !frases + [tema]
╟═════rpg═══════════┤
┃
┠ !atacar [@]usuario
┠ !comprar (para ver os itens)
┃
╟═════𝓖𝓮𝓻𝓪𝓵══════════┤
┃
┠ !adm_grupo
┠ !cadastro nome/idade
┠ !perfil
┠ !atividade_grupo
╟═════ᏗᎴᎷ══════════┤
┃
┠ !clear
┠ !boas_vindas on/off
┠ !ban + [@]usuario
┠ !kick (na mensagem)
┠ !antlink on/off
┠ !marcar_grupo
╟═════.ᎪjuᎠᎪ.════════┤
┃
┠ !help
╟═════.ᎮᏒᎥᏉᏗᎴᎧ══════┤
┃
┠ !trv_ctt_g
┠ !trv_ctt_n + [numero com DDD] 
┃ex: 5512991130663
╟═════.STᎥ꒝КꂅR═══════┤
┃
┠ !s [video/gif - 10s ou menos]
╟═════.ⅅᗅⅅ⌾Տ.═══════┤
┃
┠CRIΔDΩR DΩ βΩT:
┃
┃✫✬✭✮✯✰✫✬✭✮✯✰✫✰
┠➸ +55 (12)99113-0663
┃✫✬✭✮✯✰✫✬✭✮✯✰✫✰
╰══════════════════╯
            
            `
            const url=`./public/img/bot/help.jpg`
            const buffer = await readFile(url)
             
        await conn.sendMessage(id, buffer,MessageType.image, { mimetype: Mimetype.jpeg, caption: menu })
      
    }
    
    
    module.exports = { help }