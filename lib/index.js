const funcbai = require('@adiwajshing/baileys');
const fs =require('fs')
const { very , very2 }  =require("../administrar_comandos/verify.js")
const { IO_entrada_saida } =require("./routes/caminhos.js")
const tb = require('terminal-banner').terminalBanner
const sequelize = require("../config/conexao");
const { apresentacao } = require("./cadastro_dono");
const Donos = require('../db/models/dono.js');




async function connectbd(){
    Donos.sync()
await sequelize.sync().then((req , res)=> {
  tb("Banco de Dados Iniciado");
}).catch(error=>{
tb(`Erro Ao Iniciar Banco de Dados:
${error}
`)
})
}
connectbd()


tb('\u001b[31m INICIANDO...')
console.clear()




function IO_veri (chtup,conn){

    if(chtup.messages){

        console.log (chtup.messages.array[0]);
    
    
const cod = chtup.messages.array[0].messageStubType
/*console.log(cod)*/
const id = chtup.jid
if(cod===31){


    const objMessage = chtup.messages.dict
    const obj1 = objMessage[Object.keys(objMessage)[0]]
    const idGrup = obj1.key.remoteJid
  const contato = obj1.messageStubParameters[0]

console.log("OBJ MESSAGE")
console.log(objMessage)
console.log("OBJ 1")
console.log(obj1)
console.log("ID GRUPO")
console.log(idGrup)
console.log("CONTATO")
console.log(contato)


    very2('' , idGrup , conn , objMessage , contato)



}
if(cod===31 || cod==32 || cod===27){
    console.log("ENTROU OU SAIU UM DOS  DOISSS")
const jid = chtup.messages.array[0].messageStubParameters
const num = jid[0]

IO_entrada_saida(id,cod,num,conn)
    }
}
}



async function connectToWhatsApp () {
    const conn = new funcbai.WAConnection() 
  
    conn.connectOptions.maxRetries = Infinity
    conn.connectOptions.alwaysUseTakeover = true;
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of chats!
    conn.on('chats-received', async ({ hasNewChats }) => {
        console.log(`you have ${conn.chats.length} chats, new chats available: ${hasNewChats}`)

        const unread = await conn.loadAllUnreadMessages ()
        tb("\u001b[34m Você tem " + unread.length + " mensagens não lidas")
    })
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of contacts!
    conn.on('contacts-received', () => {
        tb('\u001b[34m Você tem ' + Object.keys(conn.contacts).length + ' contatos')
        
apresentacao()
    })


    

try{
    conn.on ('open', () => {
        tb(`\u001b[34m credentials updated!`)
        const authInfo = conn.base64EncodedAuthInfo() 
        fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t')) 
        })
        tb('\u001b[34m Carregando credenciais')
    conn.loadAuthInfo ('./auth_info.json') 
    console.clear()
    await conn.connect ()
    console.clear()
}catch{
tb('\u001b[31m Conectar')
    await conn.connect ()
    console.clear()
}


    conn.on('chat-update', async(chatUpdate) => {
    
    
    
        // `chatUpdate` is a partial object, containing the updated properties of the chat
        // received a new message
        if (chatUpdate.messages && chatUpdate.count) {

            const message = chatUpdate.messages.all()[0]
     //       console.log(message.message.extendedTextMessage)
            const id = message.key.remoteJid
            const numero_cll = message.participant.replace("@s.whatsapp.net","")
       console.log("---------------------------mensagem nova----------------------")       


console.log(message)



  const messageType = Object.keys(message.message)[0];


  if(
    messageType == funcbai.MessageType.image &&
    message.message.imageMessage.url &&
    message.message.imageMessage.caption=='!s'
    ){
  const msg = message.message.imageMessage.caption
  very( msg, id ,conn, message, 0 )// see updates (can be archived, pinned etc.)
}else if(
    messageType == funcbai.MessageType.video && 
    message.message.videoMessage.url &&
    message.message.videoMessage.caption=='!s'
){
    const msg = message.message.videoMessage.caption
    very( msg, id ,conn, message, 0 )// see updates (can be archived, pinned etc.)   
}


if(message.key.remoteJid){

    if(message.message.listResponseMessage){
        const list_comando = message.message.listResponseMessage.description;
        very(list_comando, id, conn, message,numero_cll)
        }
        if(message.message.conversation){
        const txt_msg = message.message.conversation;
        very(txt_msg, id ,conn, message,numero_cll)
        }
        if(message.message.extendedTextMessage){
            const buff = message.message.extendedTextMessage
            const txt_msg = message.message.extendedTextMessage.text
            very(txt_msg, id ,conn, message,numero_cll)
        }

}

} else {
         console.log("---------------------------chatupdate----------------------"); 
         console.log (chatUpdate);
         IO_veri(chatUpdate,conn)
     }    
  })





  
  
  
  
  conn.get
  conn.on("close", ({ reason, isReconnecting }) =>{
    tb(
      "\u001b[34m você foi desconectado: " + reason + ", reconectando: " + isReconnecting
    )
    });
}

// run in main file
connectToWhatsApp()
.catch (err => tb("\u001b[34m erro inesperado: " + err) ) // catch any errors


//send message