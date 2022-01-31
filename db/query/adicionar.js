const Users = require("../models/users")



const insert = async (nome_c,tel_c,idade_c,nivel_c,xp_c,comandos_c,mensagens_c) => {



    const verificacao =  await Users.findAll({
        where: {
          tel: tel_c,
        }
      });
console.log(verificacao)



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
.then(function(){
        return [true,"cadastro feito com SUCESSO"]
    })
.catch(err=>{ 
        return [false,err]
    })

}else{
return ["null","Você ja esta cadastrado"]
}


}

module.exports = { insert }