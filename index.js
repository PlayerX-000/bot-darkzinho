const sharp = require('sharp');
const funcbai = require('@adiwajshing/baileys');
const { writeFile } =require('fs/promises')
const fs =require('fs')
const { very }  =require("./administrar_comandos/verify.js")
const { IO_entrada_saida } =require("./funcoes/funcoes.js")


const { Sticker, createSticker, StickerTypes } =require( 'wa-sticker-formatter' )// ES6



function IO_veri (chtup,conn){
console.log("virificar #@#@#@##@#@#@##@#@")
    if(chtup.messages){
    
    let m = chtup.messages.all()[0];
    
      
    
    
const cod = chtup.messages.array[0].messageStubType
console.log(cod)
const id = chtup.jid
if(cod==31 || cod==32){
const jid = chtup.messages.array[0].messageStubParameters
const num = jid[0]

IO_entrada_saida(id,cod,num,conn)
console.log("aki ta na func")
    }else if (!m.message){
    return;
    }else{ 
     let h = chtup.messages.all()[0];
    handleCommand(h,conn);
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





  
  
  
  
  
  conn.on("close", ({ reason, isReconnecting }) =>
    console.log(
      "oh no got disconnected: " + reason + ", reconnecting: " + isReconnecting
    )
  );
}

async function handleCommand(m,conn) {






    const messageType = Object.keys(m.message)[0];
    if (
      messageType == funcbai.MessageType.image &&
      m.message.imageMessage.url &&
      m.message.imageMessage.caption == ".s"
    ) {
   
    let buffer = Buffer.from([])
          
            console.log("aki esta o Mmmmmmm______1")
          
         const stream = await funcbai.decryptMediaMessageBuffer(m.message,'dawnloadmeu').then(async(res)=>{
         
      
        for await(const chunk of res) {
            buffer = Buffer.concat([buffer, chunk])
        }
         
         console.log(buffer)
         })
      console.log("aki esta o Mmmmmmm______2")
      console.log(stream)
          console.log("aki esta o Mmmmmmm______3")
       
          const buffer_s = await createSticker(buffer, {
            pack: 'My Pack', 
            author: 'Me', 
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            id: '12345', 
            quality: 50, 
            background: '#000000' })
        
        // or save to file
   
        
        // or get Baileys-MD Compatible Object
        

     await conn.sendMessage(m.key.remoteJid,buffer_s ,funcbai.MessageType.sticker, { mimetype: funcbai.Mimetype.webp})

        
        // save to file
     

        
        
       
    
    
    
    

	console.log('Images optimized');


      
      console.log("Sticker Image sent to: " + m.key.remoteJid);
    } else if (
      messageType == funcbai.MessageType.video &&
      m.message.videoMessage.url &&
      m.message.videoMessage.caption == ".s"
    ) {
      let processOptions = {
        fps: 15,
        startTime: `00:00:00.0`,
        endTime: `00:00:09.0`,
        loop: 0,
      };
      const tempFile = path.join(
        tmpdir(),
        `processing.${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`
      );
      let videoBuffer = await conn.downloadMediaMessage(m);
      const videoStream = await streamifier.createReadStream(videoBuffer);
      let success = await new Promise((resolve, reject) => {
        var command = ffmpeg(videoStream)
          .inputFormat("mp4")
          .on("error", function (err) {
            console.log("An error occurred: " + err.message);
            reject(err);
          })
          .on("start", function (cmd) {
            console.log("Started " + cmd);
          })
           .addOutputOptions([
            `-vcodec`,
            `libwebp`,
            `-vf`,
            `scale=512:512,setsar=1,fps=${processOptions.fps}`,
            `-loop`,
            `${processOptions.loop}`,
            `-ss`,
            processOptions.startTime,
            `-t`,
            processOptions.endTime,
            `-preset`,
            `default`,
            `-an`,
            `-vsync`,
            `1`,
            `-s`,
            `512:512`,
          ])
          .toFormat("webp")
          .on("end", () => {
            resolve(true);
          })
          .saveToFile(tempFile);
      });
      if (!success) {
        console.log("Erro ao processar o video");
        return;
      }
      var bufferwebp = await fs.readFileSync(tempFile);
      await fs.unlinkSync(tempFile);
      await conn.sendMessage(m.key.remoteJid, bufferwebp, MessageType.sticker);
      console.log("Sticker Animated sent to: " + m.key.remoteJid);
    } else if (
      m.message.conversation &&
      m.message.conversation.startsWith("/imagem")
    ) {
      let message = m.message.conversation.replace("/imagem", "").trim();
      let isSticker = false;
      if (message.includes("sticker")) {
        isSticker = true;
        message = message.replace("sticker", "").trim();
      }
      let search = message;
      let { data } = await Axios.get(
        encodeURI(`https://api.fdci.se/rep.php?gambar=${search}`)
      );
      if (!data) {
        console.log("No data from: " + search);
        return;
      }
      let response = await Axios.get(
        data[Math.floor(Math.random() * data.length)],
        {
          responseType: "arraybuffer",
        }
      );
      if (!response.data) return;
      if (isSticker) {
        let sticker = await imageminWebp({ preset: "icon" })(response.data);
        await conn.sendMessage(m.key.remoteJid, sticker, MessageType.sticker);
        console.log("Sticker Image Random sent to: " + m.key.remoteJid);
        return;
      }
      await conn.sendMessage(m.key.remoteJid, response.data, MessageType.image);
      console.log("Random Image sent to: " + m.key.remoteJid);
    }
  }
  

// run in main file
connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors


//send message