
const pensador =require("pensador-promise");

const frases = async(termo)=>{
    const phrase = await pensador.default(
      {
        term: termo,
        max: 1
      });
    
return phrase.phrases[0].text
 }

module.exports={frases}