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
    const atk = 1;
    const def = 1;
    const vida = 10;
    const vidaMax = 10;


 



    const criacad_dono = await Donos.create({
        nome: nome,
        tel: tel,
        idade: idade,
        })
        .then(function(){
            tb("cadastro feito com SUCESSO")
            console.clear()
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
mensagens: mensagens,
atk: atk,
def: def,
vida: vida,
vidaMax: vidaMax

})
.then(function(){
    tb("cadastro feito com SUCESSO")
    console.clear()
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
    console.clear()
return verificacao
}

module.exports = { insert_root , busca_root }