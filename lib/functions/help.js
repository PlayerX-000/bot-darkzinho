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
╟═════.∂α∂σѕ═════════┤
┃
┠ !cadastro nome/idade
┠ !perfil
╟═════.ᎴᎥVᏋᏒSΩO══════┤
┃
┠ !roleta_russa <off>
┠ !cara_coroa <off>
┠ !adivinhe <off>
┠ !gado + [@]usuario
┠ !abraçar + [@]usuario
┠ !matar + [@]usuario
┠ !gay + [@]usuario
╟═════ᏗᎴᎷ══════════┤
┃
┠ !clear
┠ !boas_vindas on/off
┠ !fechar_grupo <off>
┠ !abrir_grupo <off>
┠ !ban + [@]usuario
┠ !kick (na mensagem)
┠ !antlink on/off
┠ !marcar_grupo
╟═════.ᎪjuᎠᎪ.════════┤
┃
┠ !help
╟═════.ᎮᏒᎥᏉᏗᎴᎧ══════┤
┃
┠ !trv_ctt-grupo + [quantidade] 
┠ !trv_ctt-numero + [@] usuario
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


           const sendMsg = await conn.sendMessage(id, menu, MessageType.text)
    }
    
    
    module.exports = { help }