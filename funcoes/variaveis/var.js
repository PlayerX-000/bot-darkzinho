const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
const { readFile } = require('fs/promises')







let entrada_saida = []










const on_off_bemvindo = async(id,conn,state) =>{
if(state=="off"){
    entrada_saida.stats = false
      const sentMsg  = await conn.sendMessage (id, 'Boas Vindas: OFF', MessageType.text)
    }else if(state=="on"){
        entrada_saida.stats = true
          const sentMsg  = await conn.sendMessage (id, 'Boas Vindas: ON', MessageType.text)
    }else{
    entrada_saida.stats = false
    console.log("boa vinda off")
    }
}










on_off_bemvindo()
module.exports = { entrada_saida , on_off_bemvindo }