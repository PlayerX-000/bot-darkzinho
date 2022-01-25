const funcbai = require('@adiwajshing/baileys');
const fs =require('fs')
const { very }  =require("./administrar_comandos/verify.js")
const { IO_entrada_saida } =require("./funcoes/funcoes.js")





function IO_veri (chtup,conn){
console.log("virificar #@#@#@##@#@#@##@#@")
    if(chtup.messages){

      
    
    
const cod = chtup.messages.array[0].messageStubType
console.log(cod)
const id = chtup.jid
if(cod==31 || cod==32){
const jid = chtup.messages.array[0].messageStubParameters
const num = jid[0]

IO_entrada_saida(id,cod,num,conn)
console.log("aki ta na func")
    }
}
}

async function connectToWhatsApp () {
    const conn = new funcbai.WAConnection() 
  

    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of chats!
    conn.on('chats-received', async ({ hasNewChats }) => {
        console.log(`you have ${conn.chats.length} chats, new chats available: ${hasNewChats}`)

        const unread = await conn.loadAllUnreadMessages ()
        console.log ("you have " + unread.length + " unread messages")
    })
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of contacts!
    conn.on('contacts-received', () => {
        console.log('you have ' + Object.keys(conn.contacts).length + ' contacts')
    })

    
    

try{
    conn.on ('open', () => {
        console.log (`credentials updated!`)
        const authInfo = conn.base64EncodedAuthInfo() 
        fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t')) 
        })
    conn.loadAuthInfo ('./auth_info.json') 
    await conn.connect ()
}catch{
    await conn.connect ()
}




    conn.on('chat-update', chatUpdate => {
    
    
    
        // `chatUpdate` is a partial object, containing the updated properties of the chat
        // received a new message
        if (chatUpdate.messages && chatUpdate.count) {

            const message = chatUpdate.messages.all()[0]
     //       console.log(message.message.extendedTextMessage)
            const id = message.key.remoteJid
            const numero_cll = message.participant
            console.log("---------------------------mensagem nova----------------------")       
console.log(message)



  const messageType = Object.keys(message.message)[0];


  if( messageType == funcbai.MessageType.image &&
    message.message.imageMessage.url &&
    message.message.imageMessage.caption=='!s'
    ){
console.log("entro 00a")
  const msg = message.message.imageMessage.caption
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

      }
  })





  
  
  
  
  
  conn.on("close", ({ reason, isReconnecting }) =>
    console.log(
      "oh no got disconnected: " + reason + ", reconnecting: " + isReconnecting
    )
  );
}

// run in main file
connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors


//send message