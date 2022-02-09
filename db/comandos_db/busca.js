const Users = require("../models/users")
const {getRand_start1}=require("../../util/utils")
const showBanner = require('node-banner');
const arrayTema = ["amor","morte","vida","dor","bem","mau","alegria","tristeza","solidão","satisfação","isekai","prazer","luxuria","viver","mundo"]
const {frasesbot}=require("../../lib/functions/frases")
const sort = getRand_start1(15)



const select = async(tel)=>{

  const frase = await frasesbot(arrayTema[sort])

const busca =  await Users.findAll({
    where: {
      tel: tel
    }
  });

  if(busca[0]===undefined){
    limpaConsole()
   return [null,"se cadastre"]

  }else{
    const atk = busca[0].dataValues.atk
    const def = busca[0].dataValues.def
    const vida = busca[0].dataValues.vida
    const id = busca[0].dataValues.id
    const nome = busca[0].dataValues.nome
    const tel = busca[0].dataValues.tel
    const idade = busca[0].dataValues.idade
    const nivel = busca[0].dataValues.nivel
    const xp = busca[0].dataValues.xp
    const comandos = busca[0].dataValues.comandos
    const mensagens = busca[0].dataValues.mensagens
    const ficha = `
╔╦═════• •✠•❀•✠• •═════╦╗
❉⊱id: ${id}
━────────≪✷≫───────━
❉⊱nome: ${nome}
━────────≪✷≫───────━
❉⊱numero: ${tel}
━────────≪✷≫───────━
❉⊱idade: ${idade}
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
   
    return res
  }


}


function limpaConsole(){
  console.clear()
  showBanner(`BOT 
     Darkzinho`, 'O bot de WhatsApp mais foda.');

}
module.exports={select}