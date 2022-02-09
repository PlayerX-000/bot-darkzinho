const Users = require("../../db/models/users")

const {MessageType} = require("@adiwajshing/baileys")
const {updates} = require("../../db/comandos_db/auterar")

const itens = `
poção de atk(aumenta ataque em 1) = 2000xp
(para comprar digite: !comprar 1)

poção de vida(recupera a vida) = 4000xp
(para comprar digite: !comprar 2)

totem aumento de vida(aumenta a vida em 2) = 6000xp
(para comprar digite: !comprar 3)

melhorar armadura(aumenta defesa em 1) = 2500xp
(para comprar digite: !comprar 4)
`
const P_atk = 1;
const P_vida = 2;
const A_vida = 3
const M_armadura = 4;



const comprar = async(id,conn,complemento,cht,num_cll)=>{


    const busca =  await Users.findAll({
        where: {
          tel: num_cll
    }});

    const xp = busca[0].dataValues.xp 
    const nome = busca[0].dataValues.nome
    const idade = busca[0].dataValues.idade
    const comandos = busca[0].dataValues.comandos
    const mensagens = busca[0].dataValues.mensagens
    const nivel = busca[0].dataValues.nivel
    const atk = busca[0].dataValues.atk
    const def = busca[0].dataValues.def
    const vida = busca[0].dataValues.vida
    const vidaMax = busca[0].dataValues.vidaMax


if(complemento==undefined){
await conn.sendMessage(id, itens ,MessageType.text)

}else if(complemento==P_atk){
    verificaXp(id,conn,P_atk,2000,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)

}else if(complemento==P_vida){
    verificaXp(id,conn,P_vida,4000,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)

}else if(complemento==A_vida){
    verificaXp(id,conn,A_vida,6000,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)

}else if(complemento==M_armadura){
    verificaXp(id,conn,M_armadura,2500,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)

}
}
const verificaXp = (id, conn, cod, valor, numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax) =>{
   if(xp<valor) return await conn.sendMessage(id, `
você não tem experiencia o suficiente
XP atual: ${xp}
XP necessario: ${valor}
`,MessageType.text)

if(cod==1){
    realizarCompra(numero,nome,idade,comandos,mensagens,xp,nivel,atk+1,def,vida,vidaMax)
}else if(cod==2){
    realizarCompra(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vidaMax,vidaMax)
}else if(cod==3){
    realizarCompra(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida+2,vidaMax+2)
}else if(cod==4){
    realizarCompra(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def+1,vida,vidaMax)
}
}

const realizarCompra = async(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax) =>{

    updates(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)

}

module.exports={
    comprar
}