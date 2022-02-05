const { MessageType } = require('@adiwajshing/baileys')
const tb = require('terminal-banner').terminalBanner








let entrada_saida = []
let Antlink = []
let grp_bv = []
let grp_lk = []







const on_off_bemvindo = async(id,conn,state) =>{
if(state=="off"){
    entrada_saida.stats = false
    for( var i = 0; i < grp_bv.length; i++){ 
      if ( grp_bv[i] === id) { 
        grp_bv.splice(i, 1); 
      }
  }
      const sentMsg  = await conn.sendMessage (id, 'Boas Vindas: OFF', MessageType.text)
    }else if(state=="on"){
        entrada_saida.stats = true    
          if ((grp_bv.includes(`${id}`)===true)===false) { 
grp_bv.push(id)
          }
          const sentMsg  = await conn.sendMessage (id, 'Boas Vindas: ON', MessageType.text)
    }else{
    entrada_saida.stats = false
  tb('\u001b[34m Boas vindas: OFF')
  console.clear()
    }
}


const on_off_antlink = async(id,conn,state) =>{
  if(state=="off"){
    Antlink.stats = false
    for( var i = 0; i < grp_lk.length; i++){ 
      if ( grp_lk[i] === id) { 
        grp_lk.splice(i, 1); 
      }
  }
        const sentMsg  = await conn.sendMessage (id, 'Ant Link: OFF', MessageType.text)
      }else if(state=="on"){
        Antlink.stats = true
        const veryexist = grp_lk.includes(`${id}`)===true
        
        if(veryexist===false){ 
          grp_lk.push(id)
                    }
                
            const sentMsg  = await conn.sendMessage (id, 'Ant Link: ON', MessageType.text)
      }else{
        Antlink.stats = false
      tb('\u001b[34m Anti link: OFF')
      console.clear()
      }
  }








on_off_antlink()
on_off_bemvindo()
module.exports = { entrada_saida , on_off_bemvindo , Antlink , on_off_antlink , grp_bv , grp_lk }