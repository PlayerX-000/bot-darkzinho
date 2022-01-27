const { antlink , boas_vindas , s , abracar , matar , gay , gado , help , ban , adm_grupo , marcar_grupo } = require("../funcoes/funcoes.js");
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./funcoes/arrays/comandos.json'))
let array_comandos = [];

/*-----------------------------------------------------------------------*/


array_comandos.antlink = antlink;
array_comandos.s = s;
array_comandos.boas_vindas = boas_vindas;
array_comandos.abracar = abracar;
array_comandos.matar = matar;
array_comandos.gay = gay;
array_comandos.gado = gado;
array_comandos.help = help;
array_comandos.ban = ban;
array_comandos.marcar_grupo = marcar_grupo;
array_comandos.adm_grupo = adm_grupo;




/*-----------------------------------------------------------------------*/

  const gerencia = async (msg , id ,conn, message,numero_cll) => {

const array_msg = msg.split(" ")

  array_msg.forEach((palavras,ind) => {
    if(palavras.substr(0, 1) == "!"){

let comando = palavras.replace("!","")
    if(comandos.includes(`${comando}`)===true){

 logs_caht_update(comando , id)
 array_comandos[comando](id, conn, array_msg[ind+1], message,numero_cll);

}
 }
  });
}

/*-----------------------------------------------------------------------*/

//exibe logs, somente no pv do bot ou no grupo em que o bot esta
function logs_caht_update(msg , id){

  console.log("mensagem enviada: \n" + msg)
  console.log("-----------------------------------------")
  console.log("id do grupo: \n"+id)
  
      }
      
/*-----------------------------------------------------------------------*/

module.exports = { gerencia }