const Users = require("../models/users")



const insert = async (nome_c,tel_c,idade_c,nivel_c,xp_c,comandos_c,mensagens_c) => {



    const verificacao =  await Users.findAll({
        where: {
          tel: tel_c,
        }
      });



if(verificacao<=0){
const criacad_user = await Users.create({
    nome: nome_c,
    tel: tel_c,
    idade: idade_c,
    nivel: nivel_c,
    xp: xp_c,
    comandos: comandos_c,
    mensagens: mensagens_c
})
.catch(err=>{
return[false,err]
})
        return [true,"cadastro feito com SUCESSO"]

    


}else{
let res = ["null","Você ja esta cadastrado"]
return res
}


}

module.exports = { insert }