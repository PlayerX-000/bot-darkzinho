const { MessageType } = require('@adiwajshing/baileys')
const {extendedText} = MessageType
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./db/comandos/comandos.json'))
const { readFile } = require('fs/promises')







let entrada_saida = []
let Antlink = []









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


const on_off_antlink = async(id,conn,state) =>{
  if(state=="off"){
    Antlink.stats = false
        const sentMsg  = await conn.sendMessage (id, 'Ant Link: OFF', MessageType.text)
      }else if(state=="on"){
        Antlink.stats = true
            const sentMsg  = await conn.sendMessage (id, 'Ant Link: ON', MessageType.text)
      }else{
        Antlink.stats = false
      console.log("ant link off")
      }
  }








on_off_antlink()
on_off_bemvindo()
module.exports = { entrada_saida , on_off_bemvindo , Antlink , on_off_antlink }