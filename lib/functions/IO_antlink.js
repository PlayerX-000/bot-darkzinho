const { Antlink , grp_lk } = require("../../db/vars/var")



module.exports = antlink_v = async (id,message) => {

  const grpPerm_lk = grp_lk.includes(`${id}`)===true
if(Antlink.stats===true && grpPerm_lk===true){
if(message.message.extendedTextMessage){
  const res = resposta(message)

  return res 

}
if(message.message.conversation){
  const res = mensagem(message)
   
  return res

}}
}


function mensagem(message){
    const texto_v = message.message.conversation


    
    const isUrl = new RegExp(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/img)
    let links_gerais = texto_v.match(isUrl) ? texto_v.match(isUrl).length : 0
    
    if(links_gerais == 0){
      return false
    }else{
      return true
    }
}



function resposta(message){
    const texto_v = message.message.extendedTextMessage.text

    console.log("texto da pessoa")
    console.log(texto_v)
    
    const isUrl = new RegExp(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/img)
    let links_gerais = texto_v.match(isUrl) ? texto_v.match(isUrl).length : 0
    
    if(links_gerais == 0){
      return false
    }else{
      return true
    }
    
}