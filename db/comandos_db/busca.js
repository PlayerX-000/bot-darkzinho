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
console.log(tel)

  nome_esc.nome =  conn.contacts[tel+"@s.whatsapp.net"]
  nome_esc.nome =  nome_esc.nome.name

  if(typeof nome_esc.nome !== 'string' && tel===numerodonobot) nome_esc.nome = "Darkzinho_BOT"




  const frase = await frasesbot(arrayTema[sort])

const busca =  await Users.findAll({
    where: {
      tel: tel
    }
  }).catch(err=>{
  console.log("aki erro select")
  console.log(err)})

  if(busca[0]===undefined){
    console.log(busca)
   return [null,`se cadastre.
Comando: !cadastro nome
Ex: !cadastro`]

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
❉⊱nome: ${nome_esc.nome}
━────────≪✷≫───────━
❉⊱numero: ${tel}
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