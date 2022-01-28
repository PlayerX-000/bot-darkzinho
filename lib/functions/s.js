const funcbai = require('@adiwajshing/baileys');



const ffmpeg = require("fluent-ffmpeg");
const streamifier = require("streamifier");
const Crypto = require("crypto");
const { tmpdir } = require("os");
const path = require("path");
const fs = require("fs")


const s = async ( id , conn , complemento , m) => {




    const messageType = Object.keys(m.message)[0];
    if (
      messageType == funcbai.MessageType.image &&
      m.message.imageMessage.url 
    ) {
   
    let buffer = Buffer.from([])
          
          
          
         const stream = await funcbai.decryptMediaMessageBuffer(m.message,'dawnloadmeu').then(async(res)=>{
         
      
        for await(const chunk of res) {
            buffer = Buffer.concat([buffer, chunk])
        }
         
         console.log(buffer)
         })
 
         const sendMsg = await conn.sendMessage(id, "⚜️⚇Calma... Ja estou enviando⚉⚜️", funcbai.MessageType.text)

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
try{
         

            await conn.sendMessage(id,buffer_s ,funcbai.MessageType.sticker, { mimetype: funcbai.Mimetype.webp})
          }catch{
            const sendMsg = await conn.sendMessage(id, "😭Erro ao criar figurinha... Sorry😭", funcbai.MessageType.text)
          }
        // or save to file
   
        
        // or get Baileys-MD Compatible Object
        

   

        
        // save to file
     

        
        
       
          }else if(
            messageType == funcbai.MessageType.video &&
            m.message.videoMessage.url 
          ){



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
        


            //buffer
            let videoBuffer = Buffer.from([])
          
          
          
            const stream = await funcbai.decryptMediaMessageBuffer(m.message,'dawnloadmeu').then(async(res)=>{
            
         
           for await(const chunk of res) {
            videoBuffer = Buffer.concat([videoBuffer, chunk])
           }
            
            console.log(videoBuffer)
            })
            const sendMsg = await conn.sendMessage(id, "⚜️⚇Calma... Ja estou enviando⚉⚜️", funcbai.MessageType.text)


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


              await conn.sendMessage(id, bufferwebp, funcbai.MessageType.sticker);

            console.log("Sticker Animated sent to: " + m.key.remoteJid);


          }



}


module.exports = { s }