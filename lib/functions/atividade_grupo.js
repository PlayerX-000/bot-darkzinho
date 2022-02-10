const Users = require("../../db/models/users")
const Donos = require("../../db/models/dono")
const { MessageType , Mimetype } = require("@adiwajshing/baileys")
const { readFile } = require('fs/promises')


const atividade_grupo = async(id,conn,param,up,numero)=>{


    const numdonobd =  await Donos.findAll()
    const numerodonobot = numdonobd[0].dataValues.tel

    const busca =  await Users.findAll({
        order: [
            ['mensagens', 'DESC']
        ]
    })
    let Usuarios = `
        𝔸𝕥𝕚𝕧𝕚𝕕𝕒𝕕𝕖 𝕕𝕠 𝕘𝕣𝕦𝕡𝕠 
` 
let mark = []


for(let i=0;i<busca.length;i++){
    const telefone = busca[i].dataValues.tel
let nome_esc = []

  nome_esc.nome =  conn.contacts[telefone+"@s.whatsapp.net"]
  nome_esc.nome =  nome_esc.nome.name

  if(typeof nome_esc.nome !== 'string' && telefone===numerodonobot) nome_esc.nome = "Darkzinho_BOT"


    const nome =  nome_esc.nome
    const comandos = busca[i].dataValues.comandos
    const mensagens = busca[i].dataValues.mensagens
    mark.push(telefone+"@s.whatsapp.net")
    Usuarios+= `
╭══════════════════╮
┃ ${i+1}º - ${nome} 
┃Contato: @${telefone}
╠══════════════════╡◯
┃${comandos} - Comandos
┃${mensagens} - Mensagens
╠══════════════════╡◯
┃ wa.me/${telefone}
╰══════════════════╯\n
`
}


const url=`./public/img/bot/atividade_grp.jpg`
const buffer = await readFile(url)


await conn.sendMessage(id, buffer,MessageType.image, { mimetype: Mimetype.jpeg, caption: Usuarios , contextInfo: { "mentionedJid": mark } })

}

module.exports={
    atividade_grupo
}