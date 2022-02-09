const Users = require("../../db/models/users")

const {MessageType} = require("@adiwajshing/baileys")
const {updates} = require("../../db/comandos_db/auterar")

const itens = `
╭══════════════════════╮
┠poção de atk                     ⧽ ID: 1 ⧼
┠aumenta ataque em 1
┠valor: 2000xp
┠para comprar digite↷
╟══════════════════════╮
┠ !comprar 1-quantidade
╰══════════════════════╯
◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇
╭══════════════════════╮
┠poção de vida                    ⧽ ID: 2 ⧼
┠recupera a vida
┠valor: 4000xp
┠para comprar digite↷
╟══════════════════════╮
┠ !comprar 2-quantidade
╰══════════════════════╯
◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◈◇◈
╭══════════════════════╮
┠aumento de vida max              ⧽ ID: 3 ⧼
┠aumenta a vida em 2
┠valor: 6000xp
┠para comprar digite↷
╟══════════════════════╮
┠ !comprar 3-quantidade
╰══════════════════════╯
◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇◈◇
╭══════════════════════╮
┠melhorar armadura                ⧽ ID: 4 ⧼
┠aumenta defesa em 1
┠valor: 2500xp
┠para comprar digite↷
╟══════════════════════╮
┠ !comprar 4-quantidade
╰══════════════════════╯
Exemplo:
☞ !comprar 1-5
`
const P_atk = '1';
const P_vida = '2';
const A_vida = '3';
const M_armadura = '4';



const comprar = async(id,conn,dads,cht,num_cll)=>{
    

    
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


if(dads==undefined){
await conn.sendMessage(id, itens ,MessageType.text)
}else{
let complemento = dads.split("-")
if(complemento[0]==P_atk){
    verificaXp(id,conn,P_atk,2000,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax,complemento)

}else if(complemento[0]==P_vida){
    verificaXp(id,conn,P_vida,4000,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax,complemento)

}else if(complemento[0]==A_vida){
    verificaXp(id,conn,A_vida,6000,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax,complemento)

}else if(complemento[0]==M_armadura){
    verificaXp(id,conn,M_armadura,2500,num_cll,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax,complemento)

}
}
}
const verificaXp = async(id, conn, cod, valor, numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax,complemento) =>{
    
let codprod = {}
if(cod=="1"){



codprod.valor = 0
codprod.produto = 0
codprod.qnt = 0
codprod.produtoOriginal = 1
codprod.valorOriginal = 2000

for(var a=1;a<=Number(complemento[1]);a++){
codprod.valor = codprod.valor + codprod.valorOriginal
codprod.produto = codprod.produto+codprod.valorOriginal
codprod.qnt = codprod.qnt+1
console.log(a)
if(a==Number(complemento[1])){
console.log(codprod.valor)
if(xp<codprod.valor){
    if(xp<valor) return await conn.sendMessage(id, `
você não tem experiencia o suficiente
XP atual: ${xp}
XP necessario: ${codprod.valor}
`,MessageType.text)
}else{
    await conn.sendMessage(id, `
Você comprou ${codprod.qnt} poções de ataque`,MessageType.text)
    realizarCompra(numero,nome,idade,comandos,mensagens,xp-codprod.valor,nivel,atk+codprod.produto,def,vida,vidaMax)
}}}
}else if(cod=="2"){

    

    codprod.valor = 0
    codprod.produto = 0
    codprod.qnt = 0
    codprod.produtoOriginal = 1
    codprod.valorOriginal = 4000
    
    for(var a=1;a<=Number(complemento[1]);a++){
    codprod.valor =  codprod.valor + codprod.valorOriginal
    codprod.produto =  codprod.produto + codprod.produtoOriginal
    codprod.qnt =  codprod.qnt + 1
    if(a==Number(complemento[1])){
    if(xp<codprod.valor){
        if(xp<valor) return await conn.sendMessage(id, `
    você não tem experiencia o suficiente
    XP atual: ${xp}
    XP necessario: ${codprod.valor}
    `,MessageType.text)
    }else{
        await conn.sendMessage(id, `
        Você comprou ${codprod.qnt} poções de vida`,MessageType.text)
    realizarCompra(numero,nome,idade,comandos,mensagens,xp-codprod.valor,nivel,atk,def,vidaMax,vidaMax)
    }}}
}else if(cod=="3"){

  

    codprod.valor = 0
    codprod.produto = 0
    codprod.qnt = 0
    codprod.produtoOriginal = 2
    codprod.valorOriginal = 4000
    
    for(var a=1;a<=Number(complemento[1]);a++){
    codprod.valor = codprod.valor + codprod.valorOriginal
    codprod.produto =  codprod.produto + codprod.produtoOriginal
    codprod.qnt =  codprod.qnt + 1
    if(a==Number(complemento[1])){
    if(xp<codprod.valor){
        if(xp<valor) return await conn.sendMessage(id, `
    você não tem experiencia o suficiente
    XP atual: ${xp}
    XP necessario: ${codprod.valor}
    `,MessageType.text)
    }else{
        await conn.sendMessage(id, `
        Você comprou ${codprod.qnt} aumentos de vida maxima`,MessageType.text)
    realizarCompra(numero,nome,idade,comandos,mensagens,xp-codprod.valor,nivel,atk,def,vida+codprod.produto,vidaMax+codprod.produto)
    }}}
}else if(cod=="4"){

   

    codprod.valor = 0
    codprod.produto = 0
    codprod.qnt = 0
    codprod.produtoOriginal = 1
    codprod.valorOriginal = 4000
    
    for(var a=1;a<=Number(complemento[1]);a++){
    codprod.valor = codprod.valor + codprod.valorOriginal
    codprod.produto = codprod.produto + codprod.produtoOriginal
    codprod.qnt =  codprod.qnt + 1
    if(a==Number(complemento[1])){
    if(xp<codprod.valor){
        if(xp<valor) return await conn.sendMessage(id, `
    você não tem experiencia o suficiente
    XP atual: ${xp}
    XP necessario: ${codprod.valor}
    `,MessageType.text)
    }else{
        await conn.sendMessage(id, `
        Você comprou ${codprod.qnt} melhorias de armadura`,MessageType.text)

    realizarCompra(numero,nome,idade,comandos,mensagens,xp-codprod.valor,nivel,atk,def+codprod.produto,vida,vidaMax)
    }
}}}
}

const realizarCompra = async(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax) =>{

    updates(numero,nome,idade,comandos,mensagens,xp,nivel,atk,def,vida,vidaMax)

}

module.exports={
    comprar
}