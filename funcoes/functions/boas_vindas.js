const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
const { readFile } = require('fs/promises')
const { on_off_bemvindo } = require("../variaveis/var.js")




const boas_vindas = async (id,conn,state, chatUpdate,num_cll) => {

const numero_user_a = num_cll
const numero_user = numero_user_a.replace("@s.whatsapp.net","")
let adms = []

   const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
adms.forEach(async(num,ind)=>{

console.log("amds_______________")
console.log(num)
if((num.replace("@s.whatsapp.net","")) == numero_user){

on_off_bemvindo(id,conn,state)

}
})
}


module.exports = { boas_vindas }