const { kick , atividade_grupo , aposta,trv_ctt_n,trv_ctt_g, frases , caracoroa, perfil , cadastro,  clear , antlink , boas_vindas , s , abraçar , matar , gay , gado , help , ban , adm_grupo , marcar_grupo } = require("../lib/routes/caminhos.js");
const fs = require('fs')
const comandos = JSON.parse(fs.readFileSync('./db/comandos/comandos.json'))
let array_comandos = [];
const { updateMessage } = require("../db/comandos_db/alterar_historico_mensagens")
/*-----------------------------------------------------------------------*/


array_comandos.kick = kick;
array_comandos.atividade_grupo = atividade_grupo;
array_comandos.aposta = aposta;
array_comandos.trv_ctt_n = trv_ctt_n;
array_comandos.trv_ctt_g = trv_ctt_g;
array_comandos.frases = frases;
array_comandos.caracoroa = caracoroa;
array_comandos.perfil = perfil;
array_comandos.cadastro = cadastro;
array_comandos.clear = clear;
array_comandos.antlink = antlink;
array_comandos.s = s;
array_comandos.boas_vindas = boas_vindas;
array_comandos.abraçar = abraçar;
array_comandos.matar = matar;
array_comandos.gay = gay;
array_comandos.gado = gado;
array_comandos.help = help;
array_comandos.ban = ban;
array_comandos.marcar_grupo = marcar_grupo;
array_comandos.adm_grupo = adm_grupo;




/*-----------------------------------------------------------------------*/

  const gerencia = async (msg , id ,conn, message,numero_cll,cod) => {
    const tel = (message.participant).replace("@s.whatsapp.net","");
  
 await updateMessage(tel,1,0)

const array_msg = msg.split(" ")

  array_msg.forEach(async(palavras,ind) => {
    if(palavras.substr(0, 1) == "!"){

let comando = palavras.replace("!","")
const isComando = comandos.includes(`${comando}`)
    if(isComando){
 
 /*logs_caht_update(comando , id)*/

 await updateMessage(tel,1,1)
 array_comandos[comando](id, conn, array_msg[ind+1], message,numero_cll,cod);

}
 }
  });
}

/*-----------------------------------------------------------------------*/

//exibe logs, somente no pv do bot ou no grupo em que o bot esta
function logs_caht_update(msg , id,m){

  console.log("mensagem enviada: \n" + msg)
  console.log("-----------------------------------------")
  console.log("id do grupo: \n"+id)
      }
      
/*-----------------------------------------------------------------------*/

module.exports = { gerencia }