﻿const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const {extendedText} = MessageType

const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
const { readFile } = require('fs/promises')
/*-----------------------------------------------------------------------*/


    const help = async (id,conn) => {
        const menu = `
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
 ███ ███ ███ ███ ███ ███
⁆⁅⫸βΩT - ❛❜ᎠᎪᏒᏦ ⁱᵗᵃᶜʰⁱ™🔥
 ███ ███ ███ ███ ███ ███
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸ !roleta_russa(off)
⁆⁅⫸ !cara_coroa(off)
⁆⁅⫸ !adivinhe(off)
⁆⁅⫸ !gado
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸ !boas_vindas(off)
⁆⁅⫸ !fechar_grupo(off)
⁆⁅⫸ !abrir_grupo(off)
⁆⁅⫸ !ban + contado(adm's)
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸ !help
⁆⁅⫸ !marcar_grupo
⁆⁅⫸ !adm_grupo
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅⫸
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
⁆⁅
 ⁆⁅⫸CRIΔDΩR DΩ βΩT:
⁆⁅
⁆⁅ ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌ ﹌
⁆⁅
 ⁆⁅➸ +55 (12)99113-0663
⁆⁅
⁆⁅࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿁࿀࿔
        `
           const sendMsg = await conn.sendMessage(id, menu, MessageType.text)
    }

/*-----------------------------------------------------------------------*/

  



       const ban = async (id,conn,num,chatupdate, numero_cll) => {
       
    let arrayvar = []
    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
    const users = isGroup ? groupMetadata.participants : ''
    adms = [];
    
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid.replace("@s.whatsapp.net","")) : ''
        }

let ctt_ban = []
 const numero_adm = numero_cll.replace("@s.whatsapp.net","")
 const numero = num.replace("@","")
 console.log("bannnnn")
 console.log(`${numero}@s.whatsapp.net`)
 const num_ban = (`${numero}@s.whatsapp.net`)

const txt_ban =          `
🚫⎨.⊷⊶⊷⊶BANIDO⊷⊶⊷⊶.⎬
🚫⎨.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶.⎬
🚫⎨Bye Bye ${numero}.⎬
🚫⎨.⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷.⎬
`

try{
 arrayvar.ppUrl = await conn.getProfilePicture(num_ban)
 }catch{console.log("erro");
arrayvar.ppUrl = "https://github.com/PlayerX-000/bot-darkzinho/blob/sec/download.png?raw=true"
 }
 
 console.log(arrayvar.ppUrl)
 console.log("amds")
 console.log(adms)
 console.log("ctt: "+ numero_adm)
    adms.forEach(async(ctt,ind)=>{
    
    if(ctt== numero_adm ){
    
 await conn.sendMessage(id, { url: arrayvar.ppUrl },MessageType.image, { mimetype: Mimetype.jpeg, caption: txt_ban,contextInfo: { "mentionedJid": [num_ban] } })
ctt_ban.push(num_ban)
 await conn.groupRemove(id, ctt_ban)      

}
})}


    
    const marcar_grupo = async (id, conn, chatUpdate) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users1 = isGroup ? groupMetadata.participants : ''

        users = [];
        numeros = '👿MΔRCΔΠDΩ GRUPΩ😈\n \n'
        contato = ''
           for(let i of users1) {
               users.push(i.jid)
           }
       users.forEach((ctt,ind)=>{
          numeros += (`${ind+1}° - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
          contato += (ctt.replace("@s.whatsapp.net","")+"\n"); 
       })

      conn.sendMessage(id, numeros, extendedText,  { contextInfo: { "mentionedJid": users } })
  

}
    const adm_grupo = async (id, conn) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

     adms = [];
     lista = "👿MΔRCΔΠDΩ ΔDM'S😈\n \n"
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
    adms.forEach((ctt,ind)=>{
       lista += (`${ind+1}° - `+'@'+ctt.replace("@s.whatsapp.net","")+"\n \n"); 
    })

conn.sendMessage(id, lista, extendedText,  { contextInfo: { "mentionedJid": adms } })
    }



 const gado = async (id , conn, marcacao) => {
 

    let nome_s = [];


  

    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : '';
    const users = isGroup ? groupMetadata.participants : '';     
           
    let tamanho_a =users.length;
         
    const escolhido = Math.floor(Math.random() * tamanho_a);     
    const escolhido_i = Math.floor(Math.random() * 8) + 1;
    const porc = Math.floor(Math.random() * 100) + 1;

    console.log(`Numero de Usuarios: ${tamanho_a}`)
         
        
if(marcacao !== undefined){

  let msg_lv1 = marcacao.replace("@","");
  let mark = msg_lv1.replace("-","")



        console.log(mark)

        users.forEach((numero, ind)=>{
        console.log(numero)
let numero_users = numero.jid
let numero_users_r = numero_users.replace("@s.whatsapp.net","")

       if(mark == numero_users_r){
       console.log("array sendo tratado: ")
       nome_s.push(numero)
       console.log(nome_s)

       }
})
        }else{
        nome_s.push(users[escolhido])
        }

        if(nome_s[0] === undefined){

        console.log("indefinido entaooo")
        console.log(users)
        console.log("numero: "+escolhido)
        nome_s.push(users[escolhido])

        }
        
     console.log("array pronto: ")
     console.log(nome_s[0])

           const nome_esc = []



if(nome_s[0].notify !==  undefined){
            nome_esc.nome = nome_s[0].notify
}else 
if(nome_s[0].vname !== undefined){
                nome_esc.nome = nome_s[0].vname
}else{
nome_s.push(users[escolhido])
                    nome_esc.nome = "@"+(nome_s[0].jid).replace("@s.whatsapp.net","")
}
           
        const txt = `
   🐂⎨⊷⊷⊶⊶GADISSE⊷⊶⊷⊷⊶
   🐂⎨⊷.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶⊷.⊶
   🐂⎨>O nivel de gadisse do(a)
   🐂⎨>${nome_esc.nome} é de: 
   🐂⎨⊶.⊷⊷⊷⊷(${porc}%)⊶⊷⊷⊷⊷
    `
         const url=`./funcoes/img/gado/${escolhido_i}.jpeg`
        const buffer = await readFile(url)
         
    await conn.sendMessage(id, { url: url},MessageType.image, { mimetype: Mimetype.jpeg, caption: txt, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }
   
   



const gay = async (id , conn, marcacao) => {
 

    let nome_s = [];


    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : '';
    const users = isGroup ? groupMetadata.participants : '';     
           
    let tamanho_a =users.length;
         
    const escolhido = Math.floor(Math.random() * tamanho_a);     
    const escolhido_i = Math.floor(Math.random() * 5) + 1;
    const porc = Math.floor(Math.random() * 100) + 1;

    console.log(`Numero de Usuarios: ${tamanho_a}`)
         
        
if(marcacao !== undefined){

  let msg_lv1 = marcacao.replace("@","");
  let mark = msg_lv1.replace("-","")



        console.log(mark)

        users.forEach((numero, ind)=>{
        console.log(numero)
let numero_users = numero.jid
let numero_users_r = numero_users.replace("@s.whatsapp.net","")

       if(mark == numero_users_r){
       console.log("array sendo tratado: ")
       nome_s.push(numero)
       console.log(nome_s)

       }
})
        }else{
        nome_s.push(users[escolhido])
        }

        if(nome_s[0] === undefined){

        console.log("indefinido entaooo")
        console.log(users)
        console.log("numero: "+escolhido)
        nome_s.push(users[escolhido])

        }
        
     console.log("array pronto: ")
     console.log(nome_s[0])

           const nome_esc = []



if(nome_s[0].notify !==  undefined){
            nome_esc.nome = nome_s[0].notify
}else 
if(nome_s[0].vname !== undefined){
                nome_esc.nome = nome_s[0].vname
}else{
nome_s.push(users[escolhido])
                    nome_esc.nome = "@"+(nome_s[0].jid).replace("@s.whatsapp.net","")
}
           
        const txt = `
   🌈⎨⊷⊷⊶⊶GAY⊷⊶⊷⊷⊶
   🌈⎨⊷.⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶
   🌈⎨>Veja o quão gay o/a
   🌈⎨>${nome_esc.nome} é:
   🌈⎨⊶.⊷⊷⊷⊷(${porc}%)⊶⊷⊷⊷
    `
         const url=`./funcoes/img/gay/${escolhido_i}.jpeg`
        const buffer = await readFile(url)
         
    await conn.sendMessage(id, { url: url},MessageType.image, { mimetype: Mimetype.jpeg, caption: txt, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }
   
     


const matar = async (id , conn, marcacao) => {
 

    let nome_s = [];


    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : '';
    const users = isGroup ? groupMetadata.participants : '';     
           
    let tamanho_a =users.length;
         
    const escolhido = Math.floor(Math.random() * tamanho_a);     
    const escolhido_i = Math.floor(Math.random() * 5) + 1;
    const porc = Math.floor(Math.random() * 100) + 1;

    console.log(`Numero de Usuarios: ${tamanho_a}`)
         
        
if(marcacao !== undefined){

  let msg_lv1 = marcacao.replace("@","");
  let mark = msg_lv1.replace("-","")



        console.log(mark)

        users.forEach((numero, ind)=>{
        console.log(numero)
let numero_users = numero.jid
let numero_users_r = numero_users.replace("@s.whatsapp.net","")

       if(mark == numero_users_r){
       console.log("array sendo tratado: ")
       nome_s.push(numero)
       console.log(nome_s)

       }
})
        }else{
        nome_s.push(users[escolhido])
        }

        if(nome_s[0] === undefined){

        console.log("indefinido entaooo")
        console.log(users)
        console.log("numero: "+escolhido)
        nome_s.push(users[escolhido])

        }
        
     console.log("array pronto: ")
     console.log(nome_s[0])

           const nome_esc = []



if(nome_s[0].notify !==  undefined){
            nome_esc.nome = nome_s[0].notify
}else 
if(nome_s[0].vname !== undefined){
                nome_esc.nome = nome_s[0].vname
}else{
nome_s.push(users[escolhido])
                    nome_esc.nome = "@"+(nome_s[0].jid).replace("@s.whatsapp.net","")
}
           
        const txt = `
🔪⎨.⊷.⊶⊶KILL⊷⊶⊷⊷⊶
🔪⎨⊷⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶
🔪⎨>Você Matou o(a)⊷⊶
🔪⎨>${nome_esc.nome}
🔪⎨.⊶⊷⊷⊷⊷⊷⊶⊷⊷⊷⊷
    `
         const url=`./funcoes/img/matar/${escolhido_i}.mp4`
         const buffer = await readFile(url)
         
    await conn.sendMessage(id, { url: url},MessageType.video, { mimetype: Mimetype.gif, caption: txt, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }




    const abracar = async (id , conn, marcacao) => {
 

    let nome_s = [];


    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : '';
    const users = isGroup ? groupMetadata.participants : '';     
           
    let tamanho_a =users.length;
         
    const escolhido = Math.floor(Math.random() * tamanho_a);     
    const escolhido_i = Math.floor(Math.random() * 5) + 1;
    const porc = Math.floor(Math.random() * 100) + 1;

    console.log(`Numero de Usuarios: ${tamanho_a}`)
         
        
if(marcacao !== undefined){

  let msg_lv1 = marcacao.replace("@","");
  let mark = msg_lv1.replace("-","")



        console.log(mark)

        users.forEach((numero, ind)=>{
        console.log(numero)
let numero_users = numero.jid
let numero_users_r = numero_users.replace("@s.whatsapp.net","")

       if(mark == numero_users_r){
       console.log("array sendo tratado: ")
       nome_s.push(numero)
       console.log(nome_s)

       }
})
        }else{
        nome_s.push(users[escolhido])
        }

        if(nome_s[0] === undefined){

        console.log("indefinido entaooo")
        console.log(users)
        console.log("numero: "+escolhido)
        nome_s.push(users[escolhido])

        }
        
     console.log("array pronto: ")
     console.log(nome_s[0])

           const nome_esc = []



if(nome_s[0].notify !==  undefined){
            nome_esc.nome = nome_s[0].notify
}else 
if(nome_s[0].vname !== undefined){
                nome_esc.nome = nome_s[0].vname
}else{
nome_s.push(users[escolhido])
                    nome_esc.nome = "@"+(nome_s[0].jid).replace("@s.whatsapp.net","")
}
           
        const txt = `
💖⎨.⊷⊶⊶ABRAÇOU⊷⊶⊷⊷
💖⎨.⊷⊷⊶⊷⊶⊷⊶⊷⊶⊷⊶
💖⎨>Você abraçou o(a)⊷
💖⎨>${nome_esc.nome}
💖⎨.⊶⊷⊷⊷⊷⊷⊶⊷⊷⊷⊷
    `
         const url=`./funcoes/img/abracar/${escolhido_i}.mp4`
         const buffer = await readFile(url)
         
    await conn.sendMessage(id, { url: url},MessageType.video, { mimetype: Mimetype.gif, caption: txt, contextInfo: { "mentionedJid": [nome_s[0].jid] } })
    }


/*-----------------------------------------------------------------------*/

    module.exports = { abracar , matar , gay , gado , help , ban , adm_grupo , marcar_grupo}