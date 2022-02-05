
const pensador =require("pensador-promise");
const { MessageType } = require('@adiwajshing/baileys')


const frasesbot = async(termo)=>{
    const phrase = await pensador.default(
      {
        term: termo,
        max: 1
      });
    
return phrase.phrases[0].text
 }


 const frases = async(id,conn,termo)=>{
  const phrase = await pensador.default(
    {
      term: termo,
      max: 1
    });
  
    await conn.sendMessage(id,phrase.phrases[0].text, MessageType.text)
}
module.exports={frasesbot , frases}