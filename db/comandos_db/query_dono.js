const Donos = require("../models/dono")
const Users = require("../models/users")
const tb = require('terminal-banner').terminalBanner

const insert_root = async (nome_c,tel_c,idade_c) => {
    const tel = tel_c;
    const nome = nome_c;
    const idade = idade_c;
    const nivel = 1;
    const xp = 1;
    const comandos = 1;
    const mensagens = 1;



 



    const criacad_dono = await Donos.create({
        nome: nome,
        tel: tel,
        idade: idade,
        })
        .then(function(){
            tb("cadastro feito com SUCESSO")
        })
        .catch(err=>{ 
         tb(err)
        })
        
        
        



/* ********************************************************************* */


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


}





  

const busca_root = async () => {
    const verificacao = await Donos.findAll()
    .catch(err=>{
        console.log(err)
    })
return verificacao
}

module.exports = { insert_root , busca_root }