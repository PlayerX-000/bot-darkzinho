const Donos = require("../models/dono")
const Users = require("../models/users")
const tb = require('terminal-banner').terminalBanner

const insert_root = async (nome_c,tel_c,idade_c) => {
    const tel = tel_c;
    const nome = nome_c;
    const idade = idade_c;
    const nivel = 0;
    const xp = 0;
    const comandos = 0;
    const mensagens = 0;



    const verificacao1 = await busca_root()
console.log("results:" + verificacao1.length)

if(verificacao1.length<=0){
const criacad_dono = await Donos.create({
    nome: nome,
    tel: tel,
    idade: idade,
})
.then(function(){
        tb("cadastro root feito com SUCESSO")
    })
.catch(err=>{ 
        tb(err)
    })

}else{
tb("Você ja esta cadastrado como dono")
}


/* ********************************************************************* */


const verificacao =  await Users.findAll({
    where: {
      tel: tel,
    }
  });


if(verificacao<=0){
const criacad_user = await Users.create({
nome: nome,
tel: tel,
idade: idade,
nivel: nivel,
xp: xp,
comandos: comandos,
mensagens: mensagens
})
.then(function(){
    tb("cadastro feito com SUCESSO")
})
.catch(err=>{ 
 tb(err)
})

}else{
tb("Você ja esta cadastrado como usuario")
}

}





  

const busca_root = async () => {
    const verificacao = await Donos.findAll()
    .catch(err=>{
        console.log(err)
    })
return verificacao
}

module.exports = { insert_root , busca_root }