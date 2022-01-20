const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('fs')
const { very , IO_entrada_saida } = require("./administrar_comandos/verify.js");


function IO_veri (chtup,conn){
    if(chtup.messages){
const cod = chtup.messages.array[0].messageStubType
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
    const conn = new WAConnection() 
  

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
            very(txt_msg, id ,conn, message,numero_cll,buff)
        }

}

        } else console.log("---------------------------chatupdate----------------------"); console.log (chatUpdate); IO_veri(chatUpdate,conn) // see updates (can be archived, pinned etc.)
    })

}





// run in main file
connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors


//send message

