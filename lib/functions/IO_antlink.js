const { Antlink } = require("../../db/vars/var")



module.exports = antlink_v = async (message) => {
if(Antlink.stats===true){
if(message.message.extendedTextMessage){
  const res = resposta(message)
   console.log(res)
  return res 

}
if(message.message.conversation){
  const res = mensagem(message)
    console.log(res)
  return res

}}
}


function mensagem(message){
    const texto_v = message.message.conversation

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