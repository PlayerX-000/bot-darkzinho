const Users = require("../models/users")


const select = async(tel)=>{
const busca =  await Users.findAll({
    where: {
      tel: tel,
    }
  });

  if(busca===undefined){
      let res = [null,"se cadastre"]
  return res
  }else{
    const id = busca[0].dataValues.id
    const nome = busca[0].dataValues.nome
    const tel = busca[0].dataValues.tel
    const idade = busca[0].dataValues.idade
    const nivel = busca[0].dataValues.nivel
    const xp = busca[0].dataValues.xp
    const comandos = busca[0].dataValues.comandos
    const mensagens = busca[0].dataValues.mensagens
    const ficha = `
╔╦═════════• •✠•❀•✠ • •═════════╦╗
❉⊱id: ${id}
━─────────────≪✷≫─────────────━
❉⊱nome: ${nome}
━─────────────≪✷≫─────────────━
❉⊱numero: ${tel}
━─────────────≪✷≫─────────────━
❉⊱idade: ${idade}
━─────────────≪✷≫─────────────━
❉⊱nivel: ${nivel}
━─────────────≪✷≫─────────────━
❉⊱xp: ${xp}
━─────────────≪✷≫─────────────━
❉⊱comandos: ${comandos}
━─────────────≪✷≫─────────────━
❉⊱mensagens: ${mensagens}
◤━───━━───━───━ ◆ ━───━───━━───━◥
`
    let res = [true,busca[0].dataValues,ficha]
    return res
  }
}

module.exports={select}