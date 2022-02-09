const Users = require("../../../db/models/users")
const {getUsers} = require("../../../util/utils")

const cadall = async(id,conn)=>{

const users = await getUsers(id,conn)






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

}
module.exports={cadall}