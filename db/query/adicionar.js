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
        let res = [true,"cadastro feito com SUCESSO"]
        return res
    })
.catch(err=>{ 
        let res = [false,err]
        return res
    })

}else{
let res = ["null","Você ja esta cadastrado"]
return res
}


}

module.exports = { insert }