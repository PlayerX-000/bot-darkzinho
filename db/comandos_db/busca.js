const Users = require("../models/users")
const Donos = require("../models/dono")
const {getRand_start1}=require("../../util/utils")
const showBanner = require('node-banner');
const arrayTema = ["amor","morte","vida","dor","bem","mau","alegria","tristeza","solidão","satisfação","isekai","prazer","luxuria","viver","mundo"]
const {frasesbot}=require("../../lib/functions/frases")
const sort = getRand_start1(15)



const select = async(id,conn,tel)=>{
  const numdonobd =  await Donos.findAll()
const numerodonobot = numdonobd[0].dataValues.tel
const nome_esc = []
let referencia = []

  referencia.nome =  conn.contacts[tel+"@s.whatsapp.net"]
 nome_esc.nome =  referencia.nome.name
  if(typeof nome_esc.nome !== 'string' && tel===numerodonobot) nome_esc.nome = "Darkzinho_BOT"
if(nome_esc.nome==undefined) nome_esc.nome = (referencia.nome.jid).replace("@s.whatsapp.net","")



  const frase = await frasesbot(arrayTema[sort])

const busca =  await Users.findAll({
    where: {
      tel: tel
    }
  }).catch(err=>{
  console.log(err)})

  if(busca[0]===undefined){
    console.log(busca)
   return [null,`O ${tel}
⚜️⚇🔎𝙣ã𝙤 𝙚𝙨𝙩𝙖 𝙘𝙖𝙙𝙖𝙨𝙩𝙧𝙖𝙙𝙤 🔎.⚉⚜️
⚜️⚇ ⚠️*𝘾𝙖𝙙𝙖𝙨𝙩𝙧𝙚-𝙨𝙚*⚠️ ⚉⚜️
⚜️⚇   𝙀𝙭: !𝙘𝙖𝙙𝙖𝙨𝙩𝙧𝙤 ⚉⚜️`]

  }else{
    const atk = busca[0].dataValues.atk
    const def = busca[0].dataValues.def
    const vida = busca[0].dataValues.vida
    const id = busca[0].dataValues.id
    const nome = busca[0].dataValues.nome
    const tel = busca[0].dataValues.tel
    const nivel = busca[0].dataValues.nivel
    const xp = busca[0].dataValues.xp
    const comandos = busca[0].dataValues.comandos
    const mensagens = busca[0].dataValues.mensagens
    const ficha = `
╔╦═════• •✠•❀•✠• •═════╦╗
❉⊱id: ${id}
━────────≪✷≫───────━
❉⊱nome/contato: ${nome_esc.nome}
━────────≪✷≫───────━
❉⊱nivel: ${nivel}
━────────≪✷≫───────━
❉⊱xp: ${xp}
━────────≪✷≫───────━
❉⊱vida: ${vida}
━────────≪✷≫───────━
❉⊱ataque: ${atk}
━────────≪✷≫───────━
❉⊱defesa: ${def}
━────────≪✷≫───────━
❉⊱comandos: ${comandos}
━────────≪✷≫───────━
❉⊱mensagens: ${mensagens}
━────────≪✷≫───────━
❉⊱frase: ${frase}
◤━──━───━  ◆  ━───━──━◥`
    let res = [true,busca[0].dataValues,ficha]
 limpaConsole()
   
    return await res
  }


}


function limpaConsole(){
  
  showBanner(`BOT 
     Darkzinho`, 'O bot de WhatsApp mais foda.');

}
module.exports={select}