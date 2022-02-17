const funcbai = require('@adiwajshing/baileys');
const ffmpeg = require("fluent-ffmpeg");
const streamifier = require("streamifier");
const Crypto = require("crypto");
const { tmpdir } = require("os");
const path = require("path");
const fs = require("fs")


/* CRIA DIRETORIO
var dir = './node_modules/webp-converter/temp/'

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
*/



const pack = `
༒ғ⃪ι⃯gυr⃡ιn⃮н⃡aѕ࿘
☽ ☾☽ ☾☽ ☾☽ ☾
вy࿘
☽ ☾☽ ☾☽ ☾☽ ☾
в⃮oт⃮-d⃡arĸ⃮zι⃡nн⃯o༒⃠
          ⬤
ctt:+55 (12)99113-0663
          ⬤
︻╦̵̵͇̿̿̿̿╤─ІтасЂі_ↁаѓкzіиЂоℚ᭄꧂
`
const auth = `
࿇❛͢ ⃮⃖⃟⟵⃪⃪ ⃯⃮⃖⃗❄⃯⃮⃖⃗⟶⃡͢⃟❜
ᴅ
 ͥ͢ᴀ
 ͭ͢ʀ
 ͣ͢ᴋ
 ͨ͢ᴢ
 ͪ͢ɪ
 ͥ͢ɴ 
 ͢ʜ
 ͢ᴏ☀™⟳
࿇❛͢ ⃮⃖⃟⟵⃪⃪ ⃯⃮⃖⃗❄⃯⃮⃖⃗⟶⃡͢⃟❜
😈
😈
😈
😈
😈
`
const s = async ( id , conn , complemento , m) => {

 if(m.message.extendedTextMessage){
 if(
 !m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage &&
 !m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
 ){
           await conn.sendMessage(id, "𝙈𝙖𝙧𝙦𝙪𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢 𝙤𝙪 𝙪𝙢 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙖𝙩é 11 𝙨𝙚𝙜𝙪𝙣𝙙𝙤️𝙨", funcbai.MessageType.text)
       return
 }
 }else{
 if(
 !m.message.videoMessage &&
 !m.message.imageMessage
 ){
 await conn.sendMessage(id, "𝙈𝙖𝙧𝙦𝙪𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢 𝙤𝙪 𝙪𝙢 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙖𝙩é 11 𝙨𝙚𝙜𝙪𝙣𝙙𝙤️𝙨", funcbai.MessageType.text)
       return
 }
 }

    const messageType = Object.keys(m.message)[0];
    if (
      messageType == funcbai.MessageType.image &&
      m.message.imageMessage ||
      m.message.extendedTextMessage
    ) {
  
    let buffer = Buffer.from([])
          

          if(m.message.extendedTextMessage){
            console.log("mensagem extendida")
            console.log(m.message.extendedTextMessage.contextInfo.quotedMessage)
         const stream1 = await funcbai.decryptMediaMessageBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage,'dawnloadmeuext').then(async(res)=>{
         
      
        for await(const chunk of res) {
            buffer = Buffer.concat([buffer, chunk])
        }
         
         console.log(buffer)
         })
        }else{
          console.log("mensagem normla")
          console.log(m.message)
          const stream = await funcbai.decryptMediaMessageBuffer(m.message,'dawnloadmeunor').then(async(res)=>{
         
      
            for await(const chunk of res) {
                buffer = Buffer.concat([buffer, chunk])
            }
             
             console.log(buffer)
             })

        }
        const imageStream = await streamifier.createReadStream(buffer);
        
         const sendMsg = await conn.sendMessage(id, "⚜️⚇𝐂𝐚𝐥𝐦𝐚... 𝐉𝐚 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨⚉⚜️", funcbai.MessageType.text)       
    
        let namearchive =  `processing.${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`

        let tempFile = path.join(
                      tmpdir(),
                     namearchive
                    );

try{

   let success = await new Promise(async(resolve, reject) => {
   
let ffm = await ffmpeg(imageStream)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.toFormat("webp")
                .on("end", () => {
                  resolve(true);
                })
.saveToFile(tempFile)  


})




 var bufferwebp = await fs.readFileSync(tempFile);
            await fs.unlinkSync(tempFile);

      let envgfig = await  conn.sendMessage(id, bufferwebp, funcbai.MessageType.sticker,  { mimetype: funcbai.Mimetype.webp})
           
          }catch(err){
            console.log(err)
            const sendMsg = await conn.sendMessage(id, "😭𝐄𝐫𝐫𝐨 𝐚𝐨 𝐜𝐫𝐢𝐚𝐫 𝐟𝐢𝐠𝐮𝐫𝐢𝐧𝐡𝐚... 𝐒𝐨𝐫𝐫𝐲😭", funcbai.MessageType.text)
          }
       
          }else if(
            messageType == funcbai.MessageType.video &&
            m.message.extendedTextMessage ||
            m.message.videoMessage
          ){

            let processOptions = {
              fps: 8,
              startTime: `00:00:00.0`,
              endTime: `00:00:08.0`,
              loop: 0,
            };
            const tempFile = path.join(
              tmpdir(),
              `processing.${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`
            );
        
            let videoBuffer = Buffer.from([])

if(m.message.extendedTextMessage){

if( Math.floor(m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds) <= 10){
            console.log("mensagem extendida")
         const stream1 = await funcbai.decryptMediaMessageBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage,'dawnloadmeuext').then(async(res)=>{
         
      
        for await(const chunk of res) {
            videoBuffer = Buffer.concat([videoBuffer, chunk])
        }
     
         console.log(buffer)
        const sendMsg = await conn.sendMessage(id, "⚜️⚇𝐂𝐚𝐥𝐦𝐚... 𝐉𝐚 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨⚉⚜️", funcbai.MessageType.text)


         })
        
        } else{
         await conn.sendMessage(id, "𝙢𝙥4 𝙢𝙩 𝙡𝙤𝙣𝙜𝙤. 𝙚𝙨𝙘𝙤𝙡𝙝𝙖 𝙪𝙢 𝙫𝙞𝙙𝙚𝙤/𝙜𝙞𝙛 𝙙𝙚 11𝙨 𝙤𝙪 𝙢𝙚𝙣𝙤𝙨", funcbai.MessageType.text)
return
}
        
        
        
        }else{
        if( Math.floor(m.message.videoMessage.seconds) <= 10){
        
          console.log("mensagem normla")
          const stream = await funcbai.decryptMediaMessageBuffer(m.message,'dawnloadmeunor').then(async(res)=>{
         
      
            for await(const chunk of res) {
                videoBuffer = Buffer.concat([videoBuffer, chunk])
            }
             
             console.log(videoBuffer)
           const sendMsg = await conn.sendMessage(id, "⚜️⚇𝐂𝐚𝐥𝐦𝐚... 𝐉𝐚 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨⚉⚜️", funcbai.MessageType.text)


})

} else{
      await conn.sendMessage(id, "𝙢𝙥4 𝙢𝙩 𝙡𝙤𝙣𝙜𝙤. 𝙚𝙨𝙘𝙤𝙡𝙝𝙖 𝙪𝙢 𝙫𝙞𝙙𝙚𝙤/𝙜𝙞𝙛 𝙙𝙚 11𝙨 𝙤𝙪 𝙢𝙚𝙣𝙤𝙨", funcbai.MessageType.text)
      return
}
        }

            
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

            
          try{
              await conn.sendMessage(id, bufferwebp, funcbai.MessageType.sticker)
              }catch{
              console.log("deu merda")
              }

            console.log("Sticker Animated sent to: " + m.key.remoteJid);


          }else{
          await conn.sendMessage(id, "𝙈𝙖𝙧𝙦𝙪𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢 𝙤𝙪 𝙪𝙢 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙖𝙩é 9 𝙨𝙚𝙜𝙪𝙣𝙙𝙤️𝙨", funcbai.MessageType.text)
          }



}


module.exports = { s }