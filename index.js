const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('fs')
const { very } = require("./administrar_comandos/verify.js");




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

    
    

conn.on ('open', () => {
    // save credentials whenever updated
    console.log (`credentials updated!`)
    const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
    fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})

conn.loadAuthInfo ('./auth_info.json') // will load JSON credentials from file
await conn.connect ()


    conn.on('chat-update', chatUpdate => {
        // `chatUpdate` is a partial object, containing the updated properties of the chat
        // received a new message
        if (chatUpdate.messages && chatUpdate.count) {

            const message = chatUpdate.messages.all()[0]
     //       console.log(message.message.extendedTextMessage)
            const id = message.key.remoteJid
            const numero_cll = message.participant
            console.log("---------------------------mensagem nova----------------------")       
console.log(message.messageTimestamp)

if(message.key.remoteJid){

    if(message.message.listResponseMessage){
        const list_comando = message.message.listResponseMessage.description;
        very(list_comando, id, conn, chatUpdate,numero_cll)
        }
        if(message.message.conversation){
        const txt_msg = message.message.conversation;
        very(txt_msg, id ,conn, chatUpdate,numero_cll)
        }

}

        } else console.log (chatUpdate) // see updates (can be archived, pinned etc.)
    })

}





// run in main file
connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors


//send message

