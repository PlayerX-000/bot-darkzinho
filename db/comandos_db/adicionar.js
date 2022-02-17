const Users = require("../models/users")



const insert = async (nome_c,tel_c,nivel_c,xp_c,comandos_c,mensagens_c,atk_c,vida_c,def_c,vidaMax_c) => {



    const verificacao =  await Users.findAll({
        where: {
          tel: tel_c,
        }
      });



if(verificacao<=0){
const criacad_user = await Users.create({
    nome: nome_c,
    tel: tel_c,
    nivel: nivel_c,
    xp: xp_c,
    comandos: comandos_c,
    mensagens: mensagens_c,
    atk: atk_c,
    def: def_c,
    vida: vida_c,
    vidaMax: vidaMax_c
})
.catch(err=>{
return[false,err]
})
        return [true,"𝙘𝙖𝙙𝙖𝙨𝙩𝙧𝙤 𝙛𝙚𝙞𝙩𝙤 𝙘𝙤𝙢 𝙎𝙐𝘾𝙀𝙎𝙎𝙊"]

    


}else{
let res = ["null","𝙑𝙤𝙘ê 𝙟𝙖 𝙚𝙨𝙩𝙖 𝙘𝙖𝙙𝙖𝙨𝙩𝙧𝙖𝙙𝙤"]
return res
}


}

module.exports = { insert }