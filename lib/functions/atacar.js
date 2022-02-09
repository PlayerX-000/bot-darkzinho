const Users = require("../../db/models/users")
const {getRand_start1} = require("../../util/utils")
const {MessageType} = require("@adiwajshing/baileys")
const {updates} = require("../../db/comandos_db/auterar")

const atacar = async(id,conn,complemento,cht,num_cll) => {


if(complemento==undefined) return await conn.sendMessage(id, `
Marque alguem com seu @
Ex: !atacar @5512991130663
Só pode atacar um por vez
`,MessageType.text)
const numeroDefensor = complemento.replace("@","")

const atk_user =  await Users.findAll({
    where: {
      tel: num_cll
}});

const def_user =  await Users.findAll({
    where: {
      tel: numeroDefensor
}});


// DADOS USUARIO QUE ATACA
const xp1 = atk_user[0].dataValues.xp 
const nome1 = atk_user[0].dataValues.nome
const idade1 = atk_user[0].dataValues.idade
const comandos1 = atk_user[0].dataValues.comandos
const mensagens1 = atk_user[0].dataValues.mensagens
const nivel1 = atk_user[0].dataValues.nivel
const atk1 = atk_user[0].dataValues.atk
const def1 = atk_user[0].dataValues.def
const vida1 = atk_user[0].dataValues.vida
const vidaMax1 = atk_user[0].dataValues.vidaMax
// DADOS USUARIO QUE DEFENDE
const xp2 = def_user[0].dataValues.xp 
const nome2 = def_user[0].dataValues.nome
const idade2 = def_user[0].dataValues.idade
const comandos2 = def_user[0].dataValues.comandos
const mensagens2 = def_user[0].dataValues.mensagens
const nivel2 = def_user[0].dataValues.nivel
const atk2 = def_user[0].dataValues.atk
const def2 = def_user[0].dataValues.def
const vida2 = def_user[0].dataValues.vida
const vidaMax2 = def_user[0].dataValues.vidaMax

const vantagem = def2-atk1
const atkAcerto = getRand_start1(100)






if(atkAcerto>=50){
const acerto = atk1+vantagem
const calc = def2-acerto
if(calc<0){

    await conn.sendMessage(id, `
Você deu um ataque critico
Atacante ganha 30xp
Defensor perde ${acerto} de defesa
Sofre um ataque direto na vida de:
${calc} 
`,MessageType.text)


    atualizaStatus(id,conn,atk2,0,(vida2+calc),numeroDefensor,nome2,vidaMax2,nivel2,xp2,mensagens2,comandos2,idade2)
    atualizaStatus(id,conn,atk,def,vida,num_cll,nome1,vidaMax1,nivel1,xp1+30,mensagens1,comandos1,idade1)
}else if(calc>=0){


    await conn.sendMessage(id, `
Você acertou o ataque
Atacante ganha 5xp
Defensor perde ${acerto} de defesa
`,MessageType.text)


    atualizaStatus(id,conn,atk2,calc,vida2,numeroDefensor,nome2,vidaMax2,nivel2,xp2,mensagens2,comandos2,idade2)
    atualizaStatus(id,conn,atk,def,vida,num_cll,nome1,vidaMax1,nivel1,xp1+5,mensagens1,comandos1,idade1)
}

}else{

    await conn.sendMessage(id, `
Você errou o ataque 
Defensor ganha 45xp
Atacante perde 10xp
    `,MessageType.text)
    atualizaStatus(id,conn,atk2,def2,vida2,numeroDefensor,nome2,vidaMax2,nivel2,xp2+45,mensagens2,comandos2,idade2)
    atualizaStatus(id,conn,atk,def,vida,num_cll,nome1,vidaMax1,nivel1,xp1-10,mensagens1,comandos1,idade1)

}

}



const atualizaStatus = (id, conn, atk, def, vida , numero,nome,vidaMax,nivel,xp,mensagens,comandos,idade) =>{
    if(vida<=0){
        await conn.sendMessage(id, `
${nome} esta com vida zerada
Você tera seu status reiniciado
            `,MessageType.text)
    updates(numero,nome,idade,comandos,mensagens,xp,nivel,1,1,1,10)
    }else{
    updates(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)
}
}
module.exports={
    atacar
}