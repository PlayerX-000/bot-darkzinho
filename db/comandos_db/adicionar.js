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
        return [true,"πππππ¨π©π§π€ ππππ©π€ ππ€π’ πππΎππππ"]

    


}else{
let res = ["null","ππ€πΓͺ ππ ππ¨π©π πππππ¨π©π§πππ€"]
return res
}


}

module.exports = { insert }