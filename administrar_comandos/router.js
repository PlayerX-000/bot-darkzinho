const { criador , help , ban , adm_grupo , marcar_grupo } = require("../funcoes/funcoes.js");
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
let array_comandos = [];

/*-----------------------------------------------------------------------*/






array_comandos.help = help;
array_comandos.criador = criador;
array_comandos.ban = ban;
array_comandos.marcar_grupo = marcar_grupo;
array_comandos.adm_grupo = adm_grupo;




/*-----------------------------------------------------------------------*/

  const gerencia = async (msg , id ,conn, chatUpdate) => {

const array_msg = msg.split(" ")

  array_msg.forEach((palavras) => {
    if(palavras.substr(0, 1) == "!"){

let comando = palavras.replace("!","")
    if(comandos.includes(`${comando}`)===true){

 logs_caht_update(comando , id)
 array_comandos[comando](id, conn, chatUpdate);

}
 }
  });
}

/*-----------------------------------------------------------------------*/

//exibe logs, somente no pv do bot ou no grupo em que o bot esta
function logs_caht_update(msg , id){

  console.log("mensagem enviada: \n" + msg)
  console.log("-----------------------------------------")
  console.log("id do user: \n"+id)
  
      }
      
/*-----------------------------------------------------------------------*/

module.exports = { gerencia }