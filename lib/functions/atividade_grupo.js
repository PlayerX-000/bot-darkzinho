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
        ๐ธ๐ฅ๐๐ง๐๐๐๐๐ ๐๐  ๐๐ฃ๐ฆ๐ก๐  
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
โญโโโโโโโโโโโโโโโโโโโฎ
โ ${cont}ยบ
โ            Nome/Contato
โ${nome}
โ โโโโโโโโโโโโโโโโโโโกโฏ
โ${comandos} - Comandos
โ${mensagens} - Mensagens
โ โโโโโโโโโโโโโโโโโโโกโฏ
โ wa.me/${telefone}
โฐโโโโโโโโโโโโโโโโโโโฏ\n
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