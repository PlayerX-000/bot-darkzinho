const Users = require("../models/users")


const updates = async(numero,nome,idade,comandos,mensagens,xp,nivel)=>{
    const tel = numero;
            let up = await Users.update({
            nome , tel , idade , nivel , xp , comandos , mensagens 
                },{
            where:{
              tel:numero
    }})}

    module.exports={updates}