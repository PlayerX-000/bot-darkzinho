const Users = require("../../db/models/users")
const Donos = require("../../db/models/dono")
const { MessageType , Mimetype } = require("@adiwajshing/baileys")
const { readFile } = require('fs/promises')
const { veriAdm , getUsers, getAdms } = require("../../util/utils")

const atividade_grupo = async(id,conn,param,up,numero)=>{
  const usersGrp = await getUsers(id,conn)
let usersGrp2 =[]
for(let a=0;a<usersGrp.length;a++){
usersGrp2.push(usersGrp[a].jid)
}
console.log(usersGrp2)


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
const nome_esc = []
let referencia = []

  

let cont = 0
for(let i=0;i<busca.length;i++){
    const telefone = busca[i].dataValues.tel
    if((usersGrp2.includes(telefone+"@s.whatsapp.net")===true)===true){
    cont = cont + 1
referencia.nome = await conn.contacts[telefone+"@s.whatsapp.net"]
 nome_esc.nome =  referencia.nome.notify
 console.log(referencia.nome)
  if(typeof nome_esc.nome !== 'string' && telefone===numerodonobot) nome_esc.nome = "Darkzinho_BOT"
if(nome_esc.nome==undefined) nome_esc.nome = (referencia.nome.jid).replace("@s.whatsapp.net","")


    const nome =  nome_esc.nome
    const comandos = busca[i].dataValues.comandos
    const mensagens = busca[i].dataValues.mensagens
    mark.push(telefone+"@s.whatsapp.net")
    Usuarios+= `
╭══════════════════╮
┃ ${cont}º
┃            Nome/Contato
┃${nome}
╠══════════════════╡◯
┃${comandos} - Comandos
┃${mensagens} - Mensagens
╠══════════════════╡◯
┃ wa.me/${telefone}
╰══════════════════╯\n
`
}

}
const url=`./public/img/bot/atividade_grp.jpg`
const buffer = await readFile(url)


await conn.sendMessage(id, buffer,MessageType.image, { mimetype: Mimetype.jpeg, caption: Usuarios , contextInfo: { "mentionedJid": mark } })

}

module.exports={
    atividade_grupo
}