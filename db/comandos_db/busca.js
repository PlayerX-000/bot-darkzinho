const Users = require("../models/users")
const {getRand_start1}=require("../../util/utils")
const sort = getRand_start1(15)
const arrayTema = ["amor","morte","vida","dor","bem","mau","alegria","tristeza","solidão","satisfação","isekai","prazer","luxuria","viver","mundo"]
const {frases}=require("../../lib/functions/frases")
const select = async(tel)=>{
const busca =  await Users.findAll({
    where: {
      tel: tel,
    }
  });

  if(busca[0]===undefined){

   return [null,"se cadastre"]
  }else{
    console.log(busca)
    console.log(arrayTema[sort])
    const frase = await frases(arrayTema[sort])
    const id = busca[0].dataValues.id
    const nome = busca[0].dataValues.nome
    const tel = busca[0].dataValues.tel
    const idade = busca[0].dataValues.idade
    const nivel = busca[0].dataValues.nivel
    const xp = busca[0].dataValues.xp
    const comandos = busca[0].dataValues.comandos
    const mensagens = busca[0].dataValues.mensagens
    const ficha = `
╔╦═════••✠•❀•✠••═════╦╗
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
❉⊱comandos: ${comandos}
━────────≪✷≫───────━
❉⊱mensagens: ${mensagens}
━────────≪✷≫───────━
❉⊱frase: ${frase}
◤━──━───━  ◆  ━───━──━◥`
    let res = [true,busca[0].dataValues,ficha]
    return res
  }
}

module.exports={select}