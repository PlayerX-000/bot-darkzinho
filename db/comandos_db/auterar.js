const Users = require("../models/users")


const updates = async(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)=>{
    const tel = numero;
            let up = await Users.update({
            nome , tel , idade , nivel , xp , comandos , mensagens , atk , def , vida , vidaMax
                },{
            where:{
              tel:numero
    }})}

    module.exports={updates}